import React, { useState, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Spaceship = () => {
  const [model, setModel] = useState();

  useEffect(() => {
    new GLTFLoader().load('/scene.gltf', setModel);
  });
  return model ? <primitive object={model.scene} /> : null;
};

export default Spaceship;
