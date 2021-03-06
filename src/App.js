import React, { useState } from 'react';
import './App.css';
import * as THREE from 'three';
import { Canvas } from 'react-three-fiber';
import Box from './components/Box/Box';
import Controls from './components/Controls/Controls';
import Plane from './components/Plane/Plane';
import Spaceship from './components/Spaceship/Spaceship';

function App() {
  const [useBox, setUseBox] = useState(true);
  const onToggleObject = () => setUseBox(prev => !prev);
  const object = useBox ? (
    <>
      <Box />
      <Plane />
    </>
  ) : (
    <Spaceship />
  );

  const instructions = (
    <section className='instructions'>
      <h1>Left click, drag, & spin me!</h1>
      <h2>Right click and drag me too!</h2>
      <button type='button' onClick={onToggleObject}>
        Toggle something awesome
      </button>
    </section>
  );

  return (
    <>
      {instructions}
      <Canvas
        camera={{ position: [0, 0, 5] }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
        }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[15, 20, 5]} penumbra={1} castShadow />
        <fog attach='fog' args={['black', 10, 25]} />
        <Controls />
        {object}
      </Canvas>
    </>
  );
}

export default App;
