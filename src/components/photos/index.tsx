import React, { useEffect, useState } from 'react';
import './photos.css';

const imagens = [
  require('../../assets/photos/img1.jpeg'),
  require('../../assets/photos/img2.jpeg'),
  require('../../assets/photos/img3.jpeg'),
  require('../../assets/photos/img4.jpeg'),
  require('../../assets/photos/img5.jpeg'),
  require('../../assets/photos/img6.jpeg'),
  require('../../assets/photos/img7.jpeg'),
];

const Photos: React.FC = () => {
  const [indiceAtual, setIndiceAtual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceAtual((indiceAtual) => (indiceAtual + 1) % imagens.length);
    }, 3000); // Muda a imagem a cada 3 segundos

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="photos">
      <img src={imagens[indiceAtual]} alt={`Slide ${indiceAtual}`} className="imagem" />
    </div>
  );
};

export default Photos;
