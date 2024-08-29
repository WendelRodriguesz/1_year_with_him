import React, { useState, useEffect } from 'react';
import './App.css';
import { calcularDiferencaDeTempo, DiferencaDeTempo } from '../common/utills/time';
import Photos from '../components/photos';
import "../assets/music/music.mp3"

function App() {
  const [diferencaDeTempo, setDiferencaDeTempo] = useState<DiferencaDeTempo | null>(null);

  useEffect(() => {
    const dataDeNamoro = '2023-09-01T18:40:00';
    const intervalo = setInterval(() => {
      const tempoJuntos = calcularDiferencaDeTempo(dataDeNamoro);
      setDiferencaDeTempo(tempoJuntos);
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="container">
      <section>
        {/* <audio id=""src="../assets/music/music.mp3" autoPlay loop muted /> */}
        <Photos />  
      </section>
        
      {diferencaDeTempo && (
        <section id="tempoJuntos">
          Juntos à..
          <section>
          {diferencaDeTempo.anos} anos, {diferencaDeTempo.meses} meses, {diferencaDeTempo.dias} dias
          </section>
          <section>
          {diferencaDeTempo.horas} horas, {diferencaDeTempo.minutos} minutos e {diferencaDeTempo.segundos} segundos.
          </section>
        </section>
      )}
      <section className="heart">❤️</section>
      <hr className="barra-horizontal" />
      <section className="message">E assim a lua ficou linda com o brilho da sua estrela para sempre... ☪️</section>
    </div>
  );
}

export default App;
