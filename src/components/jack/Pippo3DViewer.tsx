"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

interface Pippo3DViewerProps {
  className?: string;
  enableOrbit?: boolean;
  enableFloating?: boolean;
  isWalking?: boolean;
  isLookingAround?: boolean;
  walkDirection?: number; // 1 = right, -1 = left, 0 = forward
  animateFall?: boolean;
  onLoaded?: () => void;
  scaleMultiplier?: number;
}

export function Pippo3DViewer({
  className = "w-full h-full",
  enableOrbit = false,
  enableFloating = true,
  isWalking = false,
  isLookingAround = false,
  walkDirection = 0,
  animateFall = false,
  onLoaded,
  scaleMultiplier = 0.88,
}: Pippo3DViewerProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  const isWalkingRef = useRef(isWalking);
  const isLookingAroundRef = useRef(isLookingAround);
  const walkDirectionRef = useRef(walkDirection);
  const enableFloatingRef = useRef(enableFloating);

  useEffect(() => {
    isWalkingRef.current = isWalking;
    isLookingAroundRef.current = isLookingAround;
    walkDirectionRef.current = walkDirection;
    enableFloatingRef.current = enableFloating;
  }, [isWalking, isLookingAround, walkDirection, enableFloating]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer | null = null;
    let animId: number;
    let modelRef: THREE.Group | null = null;

    try {
      const scene = new THREE.Scene();

      const width = container.clientWidth || 280;
      const height = container.clientHeight || 300;
      const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
      camera.position.set(0, 0.28, 2.85);

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.3;
      renderer.shadowMap.enabled = true;
      container.appendChild(renderer.domElement);

      let controls: OrbitControls | null = null;
      if (enableOrbit) {
        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.autoRotate = false;
      }

      // Studio lighting for metallic robot
      const ambientLight = new THREE.AmbientLight(0xffffff, 2.2);
      scene.add(ambientLight);

      const dirLightFront = new THREE.DirectionalLight(0xffffff, 3.0);
      dirLightFront.position.set(0, 3, 3);
      scene.add(dirLightFront);

      const dirLightCyan = new THREE.DirectionalLight(0x38bdf8, 2.6);
      dirLightCyan.position.set(-3, 2, 1);
      scene.add(dirLightCyan);

      const dirLightBack = new THREE.DirectionalLight(0x0284c7, 2.0);
      dirLightBack.position.set(0, -2, -3);
      scene.add(dirLightBack);

      // Load Tripo3D GLB model
      const loader = new GLTFLoader();
      loader.setMeshoptDecoder(MeshoptDecoder);

      let initialY = 0;
      let fallProgress = animateFall ? 0 : 1;

      // Base rotation to face FRONT directly toward camera
      const FRONT_ROTATION_Y = -Math.PI / 2;

      loader.load(
        "/models/pippo-3d.glb",
        (gltf) => {
          const model = gltf.scene;
          modelRef = model;

          // Compute bounding box & auto center
          const box = new THREE.Box3().setFromObject(model);
          const size = box.getSize(new THREE.Vector3());
          const center = box.getCenter(new THREE.Vector3());

          const maxDim = Math.max(size.x, size.y, size.z);
          const targetHeight = 1.75 * scaleMultiplier;
          const scale = targetHeight / maxDim;
          model.scale.setScalar(scale);

          model.position.x = -center.x * scale;
          initialY = -center.y * scale - 0.1;
          model.position.y = animateFall ? initialY + 4.0 : initialY;
          model.position.z = -center.z * scale;

          // Align front facing!
          model.rotation.y = FRONT_ROTATION_Y;

          scene.add(model);
          setLoading(false);
          if (onLoaded) onLoaded();
        },
        undefined,
        (err) => {
          console.error("Failed loading Pippo 3D model:", err);
          setLoading(false);
        }
      );

      // Resize
      const handleResize = () => {
        if (!container || !renderer) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener("resize", handleResize);

      // Mouse tracking tilt effect
      let mouseX = 0;
      let mouseY = 0;
      const handleMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      };
      window.addEventListener("mousemove", handleMouseMove);

      const clock = new THREE.Clock();
      // Render Loop
      const animate = () => {
        animId = requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        if (modelRef) {
          const walking = isWalkingRef.current;
          const lookingAround = isLookingAroundRef.current;
          const direction = walkDirectionRef.current;
          const floating = enableFloatingRef.current;

          // Falling entrance animation
          if (animateFall && fallProgress < 1) {
            fallProgress = Math.min(1, fallProgress + 0.035);
            const easeY = 1 - Math.pow(1 - fallProgress, 3);
            modelRef.position.y = initialY + (1 - easeY) * 3.5;
          } else if (walking) {
            // Procedural walking animation:
            // 1. Vertical bounce per step
            modelRef.position.y = initialY + Math.abs(Math.sin(elapsedTime * 9)) * 0.055;
            // 2. Lateral waddle tilt
            modelRef.rotation.z = Math.sin(elapsedTime * 9) * 0.05;

            // 3. Turn slightly into direction of motion (right or left)
            const targetY = FRONT_ROTATION_Y + direction * 0.38;
            modelRef.rotation.y = THREE.MathUtils.lerp(modelRef.rotation.y, targetY, 0.08);
            modelRef.rotation.x = 0;
          } else if (lookingAround) {
            // Standing at corner and looking around at the portfolio!
            if (floating) {
              modelRef.position.y = initialY + Math.sin(elapsedTime * 2.2) * 0.035;
            }
            modelRef.rotation.z = THREE.MathUtils.lerp(modelRef.rotation.z, 0, 0.1);

            // Smooth looking around motion: scans left, front, right
            const scanAngle = Math.sin(elapsedTime * 1.8) * 0.45;
            const targetY = FRONT_ROTATION_Y + scanAngle;
            modelRef.rotation.y = THREE.MathUtils.lerp(modelRef.rotation.y, targetY, 0.06);
            modelRef.rotation.x = Math.sin(elapsedTime * 2.5) * 0.06;
          } else {
            // Stationary / thinking / talking:
            if (floating) {
              modelRef.position.y = initialY + Math.sin(elapsedTime * 2.2) * 0.035;
            }
            modelRef.rotation.z = THREE.MathUtils.lerp(modelRef.rotation.z, 0, 0.1);

            // Look directly at user and gently track cursor
            if (!enableOrbit) {
              const targetY = FRONT_ROTATION_Y + mouseX * 0.32;
              modelRef.rotation.y = THREE.MathUtils.lerp(modelRef.rotation.y, targetY, 0.05);
              modelRef.rotation.x = THREE.MathUtils.lerp(
                modelRef.rotation.x,
                -mouseY * 0.12,
                0.05
              );
            }
          }
        }

        if (controls) controls.update();
        if (renderer) renderer.render(scene, camera);
      };
      animate();

      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("mousemove", handleMouseMove);
        cancelAnimationFrame(animId);
        if (controls) controls.dispose();
        if (renderer && renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
          renderer.dispose();
        }
      };
    } catch (e) {
      console.error("Pippo 3D WebGL error:", e);
      setLoading(false);
    }
  }, [animateFall, enableOrbit, onLoaded, scaleMultiplier]);

  return (
    <div className={`relative ${className} select-none`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-6 h-6 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
        </div>
      )}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
    </div>
  );
}
