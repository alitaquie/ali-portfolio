import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../layout/Loader";

type ComputersProps = {
  scale: number;
  position: [x: number, y: number, z: number];
};

const Computers: React.FC<ComputersProps> = ({ scale, position }) => {
  const computer = useGLTF("./computer_man/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={1.5} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={5}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight position={[10, 10, 10]} intensity={3} />
      <ambientLight intensity={2} />
      <group rotation={[0, Math.PI / 2.37, 0]}>
        <primitive object={computer.scene} scale={scale} position={position} />
      </group>
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // reduced scales (~20% smaller)
  const getScale = (w: number) => {
    if (w < 400) return 0.4;
    if (w < 600) return 0.5;
    if (w < 800) return 0.6;
    return 0.65;
  };
  // adjusted positions for the new sizes
  const getPosition = (w: number) => {
    if (w < 400) return [0, -2.0, -1.6];
    if (w < 600) return [0, -2.5, -1.8];
    if (w < 800) return [0, -3.0, -1.6];
    return [0, -3.5, -1.3];
  };

  const scale = getScale(width);
  const position = getPosition(width);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers scale={scale} position={position} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;