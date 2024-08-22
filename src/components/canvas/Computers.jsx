import { useRef, Suspense, useEffect, useState } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, Html } from "@react-three/drei";
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import CanvasLoader from '../Loader';

const FixedIcon = ({ position, Icon, url }) => {
  return (
    <Html position={position} distanceFactor={6} >
      <div 
        onClick={() => window.open(url, '_blank')}
        style={{
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'conic-gradient(from 100deg at 50% 50%, #ff7f50, #1e90ff)',
          padding: '2px',
        }}
      >
        <Icon size={40} style={{ color: '#fff', backgroundColor: '#000', borderRadius: '50%', padding: '5px' }} />
      </div>
    </Html>
  );
};

const Computers = ({ isMobile }) => { 
  const computer = useGLTF('./planet/scene.gltf');

  const iconPositions = {
    github: isMobile ? [1, -1, 0.5] : [1.5, 0.5, 0.7],
    linkedin: isMobile ? [0.6, 0.2, 0.5] : [1, -0.9, -1.9],
    instagram: isMobile ? [0.2, -0.4, 0.9] : [0.3, -0.9, 2.2]
  };

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="black" />
      <pointLight intensity={1} position={[0, -0.3, 0]} />
      <spotLight position={[-20, 50, 10]} angle={0.12} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 1.2 : 2.2}
        position={isMobile ? [0, -0.7, -0.2] : [0, -1.5, -0.2]}
        rotation={[-0.01, -0.2, -0.1]}
      />
      {/* Fixed Icons */}
      <FixedIcon position={iconPositions.github} Icon={FaGithub} url="https://github.com/siihasann" />
      <FixedIcon position={iconPositions.linkedin} Icon={FaLinkedin} url="https://linkedin.com/in/yourusername" />
      <FixedIcon position={iconPositions.instagram} Icon={FaInstagram} url="https://instagram.com/siihasann" />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
    
  }, []);

  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      shadows
      camera={{ position: [10, 3, 5], fov: 45, near: 0.1, far: 200 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
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
