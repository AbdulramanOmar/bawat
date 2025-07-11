"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import ElegantNumber from "../components/ElegantNumber";
import Title from "../components/Title";

const FuelStaicte = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 100, 250);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 200, 100);
    scene.add(light);

    const loader = new FBXLoader();
    loader.load("/truck.fbx", (object) => {
      object.scale.set(0.1, 0.1, 0.1);
      object.rotation.y = Math.PI; // تعديل اتجاهه إذا لزم
      scene.add(object);
    });

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* الخلفية ثلاثية الأبعاد */}
      <div
        ref={mountRef}
        className="absolute inset-0 bg- z-20 w-full h-full pointer-events-none"
      />

      {/* محتوى الواجهة فوق المجسم */}
      <div className="relative z-10 containe">
        <Title title="Fuel Statistics" color="red" />
     
        <ElegantNumber num={68000020} />

        <div className="flex mt-30 items-center justify-between">
          <div>
            <h4 className="text-[#394854] w-[400px] pb-3 border-b border-[#ddd]">
              Annual drilling volume (m)
            </h4>
            <h4 className="text-[#394854] text-5xl p-5">1 000 000</h4>
          </div>
          <div>
            <h4 className="text-[#394854] w-[400px] pb-3 border-b border-[#ddd]">
              Total investments (₽)
            </h4>
            <h4 className="text-[#394854] text-5xl p-5">13 billion</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuelStaicte;
