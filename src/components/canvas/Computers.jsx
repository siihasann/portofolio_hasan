import { Suspense, useEffect, useState } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => { 
  const computer = useGLTF('./planet/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={2}
        groundColor="black" />
      <pointLight intensity={1}
      position={[0, -0.3, 0]}/>
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
      />
      <primitive
        object={computer.scene}
        // scale={ isMobile ? 0.6 : 0.55}
        scale={ isMobile ? 1.5: 2}
        // position={isMobile ? [0, -2.9, -2.2] : [0, -2.7, -1.5]}
        position={isMobile ? [0, -1.5, -0.2] : [0, -1.5, -0.2]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuary = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuary.matches);

    const handleMediaQuaryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuary.addEventListener('change', handleMediaQuaryChange);

    return () => {
      mediaQuary.removeEventListener('change', handleMediaQuaryChange);
    };
    
  }, []);

  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 1.5]}
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
export default ComputersCanvas;
