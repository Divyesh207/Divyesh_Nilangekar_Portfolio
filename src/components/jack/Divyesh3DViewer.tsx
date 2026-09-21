"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RotateCw } from "lucide-react";

export function Divyesh3DViewer() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer | null = null;
    let animId: number;

    try {
      // Scene
      const scene = new THREE.Scene();

      // Camera
      const width = container.clientWidth || 440;
      const height = container.clientHeight || 520;
      const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
      camera.position.set(0, 0.35, 3.2);

      // Renderer
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.15;
      renderer.shadowMap.enabled = true;
      container.appendChild(renderer.domElement);

      // Controls: User specified NO auto rotation, but keep manual drag OrbitControls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.enableZoom = false; // keep layout stable
      controls.enablePan = false;
      controls.minPolarAngle = Math.PI / 3;
      controls.maxPolarAngle = Math.PI / 1.8;
      controls.autoRotate = false; // Don't auto rotate model as requested!

      controls.addEventListener("start", () => setIsInteracting(true));
      controls.addEventListener("end", () => setIsInteracting(false));

      // Studio Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
      scene.add(ambientLight);

      const dirLightFront = new THREE.DirectionalLight(0xffffff, 2.2);
      dirLightFront.position.set(0, 4, 3);
      scene.add(dirLightFront);

      const dirLightBlue = new THREE.DirectionalLight(0x38bdf8, 1.8);
      dirLightBlue.position.set(-3, 2, -2);
      scene.add(dirLightBlue);

      const dirLightEmerald = new THREE.DirectionalLight(0x10b981, 1.2);
      dirLightEmerald.position.set(3, -2, -2);
      scene.add(dirLightEmerald);

      // Load GLB Model with Meshopt
      const loader = new GLTFLoader();
      loader.setMeshoptDecoder(MeshoptDecoder);

      loader.load(
        "/models/divyesh-3d.glb",
        (gltf) => {
          const model = gltf.scene;

          // Compute bounding box to center & auto-scale
          const box = new THREE.Box3().setFromObject(model);
          const size = box.getSize(new THREE.Vector3());
          const center = box.getCenter(new THREE.Vector3());

          // Scale model to standard height (~2.2 units)
          const maxDim = Math.max(size.x, size.y, size.z);
          const scale = 2.1 / maxDim;
          model.scale.setScalar(scale);

          // Center model on origin
          model.position.x = -center.x * scale;
          model.position.y = -center.y * scale - 0.15;
          model.position.z = -center.z * scale;

          // Face toward FRONT (camera is at Z=3.2, model was facing right at rotation 0)
          // Rotating -Math.PI / 2 (or 3*PI/2) turns it to face front directly at the user!
          model.rotation.y = -Math.PI / 2;

          scene.add(model);
          setLoading(false);
        },
        undefined,
        (err) => {
          console.warn("Could not load 3D GLB directly, falling back to 3D WebP render:", err);
          setLoadError(true);
          setLoading(false);
        }
      );

      // Resize handler
      const handleResize = () => {
        if (!container || !renderer) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      window.addEventListener("resize", handleResize);

      // Animation Loop
      const animate = () => {
        animId = requestAnimationFrame(animate);
        controls.update();
        if (renderer) {
          renderer.render(scene, camera);
        }
      };
      animate();

      return () => {
        window.removeEventListener("resize", handleResize);
        cancelAnimationFrame(animId);
        controls.dispose();
        if (renderer && renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
          renderer.dispose();
        }
      };
    } catch (e) {
      console.error("WebGL error:", e);
      setLoadError(true);
      setLoading(false);
    }
  }, []);

  return (
    <div className="relative w-[280px] sm:w-[350px] md:w-[430px] lg:w-[490px] h-[360px] sm:h-[440px] md:h-[510px] lg:h-[560px] flex items-center justify-center select-none">
      {/* Three.js Canvas Container */}
      <div
        ref={mountRef}
        className={`w-full h-full cursor-grab active:cursor-grabbing transition-opacity duration-500 ${
          loadError ? "hidden" : loading ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Fallback & Preload WebP 3D Render */}
      {(loading || loadError) && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/models/divyesh-3d.webp"
            alt="Divyesh Nilangekar - 3D Avatar"
            className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
          />
        </div>
      )}

      {/* Interactive Hint / Badge */}
      <div className="absolute -bottom-3 sm:bottom-2 left-1/2 -translate-x-1/2 pointer-events-none z-20 flex flex-col items-center gap-1.5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C0C0C]/85 border border-white/10 backdrop-blur-md shadow-xl text-[11px] font-mono uppercase tracking-widest text-[#D7E2EA]">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Interactive 3D Avatar · Drag to inspect</span>
          <RotateCw className={`w-3 h-3 text-cyan-400 ${isInteracting ? "animate-spin" : ""}`} />
        </div>
      </div>
    </div>
  );
}
