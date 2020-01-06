import React, { useRef } from 'react';
import { extend, useThree, useRender } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useRender(() => {
    orbitRef.current.update();
  });
  return (
    <orbitControls
      ref={orbitRef}
      args={[camera, gl.domElement]}
      maxPolarAngle={Math.PI / 2.5}
      minDistance={2}
      maxDistance={100}
      autoRotate
      enableDamping
    />
  );
};

export default Controls;
