import React, { useState, useRef } from 'react';
import { useSpring, a } from 'react-spring/three';
import { useRender } from 'react-three-fiber';

const Box = () => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const animatedProps = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hovered ? 'hotpink' : 'grey'
  });
  //   useRender(() => {
  //     meshRef.current.rotation.y += 0.01;
  //   });

  return (
    <a.mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(prev => !prev)}
      scale={animatedProps.scale}
      castShadow
    >
      <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
      {/* <a.meshBasicMaterial attach='material' color={animatedProps.color} /> */}
      {/* Requires light */}
      <a.meshPhysicalMaterial attach='material' color={animatedProps.color} />
    </a.mesh>
  );
};

export default Box;
