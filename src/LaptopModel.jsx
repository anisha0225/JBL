

import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './LaptopModel.css'; 

const lerp = (start, end, t) => start + (end - start) * t;

export function Model(props) {
  const { nodes, materials } = useGLTF('/jbl_t450.glb'); 

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.03, 0.04]} rotation={[1.776, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials['Plastic_black.001']}
          material-color={props.color} 
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials['Plastic_black_button.001']}
          position={[0.071, -0.147, 0.053]}
          rotation={[-1.622, -0.975, -1.192]}
           material-color={props.color} 
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.Rubber_black}
          position={[0, -0.215, 0.073]}
          rotation={[-0.276, 0, 0]}
           material-color={props.color} 
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials['Plastic_black.003']}
          position={[0.082, -0.04, 0]}
          rotation={[0.399, 0, -Math.PI / 2]}
           material-color={props.color} 
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.Jack}
          position={[0.014, -0.14, 0.057]}
          rotation={[3.081, -0.582, 0.325]}
          scale={1.276}
           material-color={props.color} 
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.Rubber_black}
          position={[0.014, -0.14, 0.057]}
          rotation={[3.081, -0.582, 0.325]}
          scale={1.276}
           material-color={props.color} 
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials['Plastic_black.002']}
           material-color={props.color} 
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials['Leather_black.001']}
          position={[0.082, -0.04, 0]}
          rotation={[0.399, 0, -Math.PI / 2]}
           material-color={props.color} 
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials['Textile.001']}
          position={[0.069, -0.04, 0]}
          rotation={[0, 0, -Math.PI / 2]}
           material-color={props.color} 
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
          material={materials.Rubber_black}
          position={[-0.079, -0.085, 0]}
          scale={[-1, 1, 1]}
           material-color={props.color} 
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={materials['Plastic_black_with_decals.001']}
          scale={[-1, 1, 1]}
           material-color={props.color} 
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_26.geometry}
          material={materials.Rubber_black}
          position={[0.079, -0.08, 0]}
           material-color={props.color} 
        />
      </group>
    </group>
  );
}

useGLTF.preload('/jbl_t450.glb');

const LaptopModel = () => {
  const meshRef = useRef();
  const [showText, setShowText] = useState(false);
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);
  const [text, setText] = useState('');
  const [textPosition, setTextPosition] = useState({ top: '0%', left: '0%' });
  

  const [selectedImage, setSelectedImage] = useState(null);
  const colors = {
    black: '#000000',
    pink: 'rgb(206, 162, 169)',
    blue: 'rgb(32, 32, 85)',
    white: 'rgb(216, 221, 226)',
  };

  const modelScale = window.innerWidth < 768 ? [10, 10, 10] : [25, 25, 25];

  
  const handleImageSelect = (color, image) => {
    setSelectedImage(image);
    setShowAdditionalContent(true); 
  };

  return (
    <>
      <Canvas
        style={{ backgroundColor: ' white', width: '100vw', height: '100vh' ,overflow:'hidden'}}
        shadows
        camera={{ position: [0, -15, 1], fov: 30 }}
    
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={5} />
       <directionalLight position={[4, 1, 10]} intensity={2} />
        <directionalLight position={[-50, -80, 2]} intensity={4} />

            
        <Model scale={modelScale} objectRef={meshRef} color={selectedImage ? colors[selectedImage] : colors.black} />
        <OrbitControls />
        <CameraAnimation
          setShowText={setShowText}
          setText={setText}
          setTextPosition={setTextPosition}
          setShowAdditionalContent={setShowAdditionalContent}
        />
      </Canvas>

      {showText && (
        <div
          style={{
            position: 'absolute',
            top: textPosition.top,
            left: textPosition.left,
            transform: 'translate(-60%, -60%)',
            fontSize: '4.8vw',
            padding: '2vw',
            zIndex: 1,
            transition: 'opacity 0.5s ease-in-out',
            fontFamily: 'Kanit, sans-serif',
            color: 'black',
          }}
        >   
        
          {text}
        </div>
      )}

      {showAdditionalContent && (
      
<>
        <div className="additional-content">

          <div className="content-left">
            <img 
              src="/black.png" 
              alt="Feature 1" 
              onClick={() => handleImageSelect('black', 'black')} 
              className={selectedImage === 'black' ? 'selected' : ''}
            />
            <img 
              src="/pink.png" 
              alt="Feature 2" 
              onClick={() => handleImageSelect('pink', 'pink')} 
              className={selectedImage === 'pink' ? 'selected' : ''}
            />
            <img 
              src="/blue.png" 
              alt="Feature 3" 
              onClick={() => handleImageSelect('blue', 'blue')} 
              className={selectedImage === 'blue' ? 'selected' : ''}
            />
            <img 
              src="/white.png" 
              alt="Feature 4" 
              onClick={() => handleImageSelect('white', 'white')} 
              className={selectedImage === 'white' ? 'selected' : ''}
            />
          </div>
         
        </div>
        </>
      
      )}
    </>
  );
};

const CameraAnimation = ({ setShowText, setText, setTextPosition, setShowAdditionalContent }) => {
  const { camera } = useThree();
  const animationDuration = 24000; 
  const startTimeRef = useRef(null);
  const [animationStage, setAnimationStage] = useState(0);
  const stages = [
    { 
      position: { x: -30, y: -5, z: 1 },
      message: { text: '32 mm JBL drivers', position: { top: '40vw', left: '45%' } },
    }, 
    { 
      position: { x: -10, y: -6, z: 5 },
      message: { text: 'Foldable Design', position: { top: '30%', left: '28%' } },
    },
    { 
      position: { x: 10, y: -6, z: 5 },    
      message: { text: 'Noise Cancellation', position: { top: '70%', left: '80%' } },
      move: true,
    },
    { 
      position: { x: 0, y: -15, z: 1 },
      message: { text: 'Lightweight', position: { top: '80%', left: '60%' } },
    },
  ];

  useFrame(() => {
    if (startTimeRef.current === null) {
      startTimeRef.current = performance.now();
    }

    const elapsedTime = performance.now() - startTimeRef.current;
    const stageDuration = animationDuration / stages.length; 
    const totalProgress = Math.min(elapsedTime / stageDuration, 1);

    if (animationStage < stages.length) {
      const currentStage = stages[animationStage];
      const nextStage = stages[Math.min(animationStage + 1, stages.length - 1)];
      const t = totalProgress;
      camera.position.x = lerp(currentStage.position.x, nextStage.position.x, t);
      camera.position.y = lerp(currentStage.position.y, nextStage.position.y, t);
      camera.position.z = lerp(currentStage.position.z, nextStage.position.z, t);

      
      if (totalProgress === 1) {
        setShowText(true);
        setText(currentStage.message.text);
        setTextPosition(currentStage.message.position);
        setAnimationStage(animationStage + 1);
        startTimeRef.current = null;
      }
    } else {
    
      setShowText(false);
      setShowAdditionalContent(true);
    }
  });

  return null;
};

export default LaptopModel;
