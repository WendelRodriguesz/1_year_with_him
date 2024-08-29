import React, { useState, useEffect } from 'react';
import './App.css';
import { calcularDiferencaDeTempo, DiferencaDeTempo } from '../common/utills/time';
import Photos from '../components/photos';
import Button from '../components/button';

// Respostas corretas para a frase
const respostasCorretas = [
  'as estrelas tambem',
  'as estrelas também',
  'e as estrelas tambem',
  'e as estrelas também'
];

function App() {
  const [diferencaDeTempo, setDiferencaDeTempo] = useState<DiferencaDeTempo | null>(null);
  const [respostaCorreta, setRespostaCorreta] = useState(false);
  const [mensagemErro, setMensagemErro] = useState('');
  const [interacaoUsuario, setInteracaoUsuario] = useState(false);

  // Calcula a diferença de tempo desde a data de namoro
  useEffect(() => {
    const dataDeNamoro = '2023-09-01T18:40:00';
    const intervalo = setInterval(() => {
      const tempoJuntos = calcularDiferencaDeTempo(dataDeNamoro);
      setDiferencaDeTempo(tempoJuntos);
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  // Verifica a resposta do usuário
  const verificarResposta = () => {
    const resposta = prompt("Complete a frase: 'a lua ta linda hoje...'");
    if (respostasCorretas.includes(resposta?.toLowerCase().trim() || '')) {
      setRespostaCorreta(true);
    } else {
      setMensagemErro('Resposta errada. Tente novamente.');
      setTimeout(verificarResposta, 1000);
    }
  };

  // Inicia a interação com o usuário
  const iniciarInteracao = () => {
    setInteracaoUsuario(true);
    verificarResposta();
  };

  // Renderiza o botão de interação inicial
  if (!interacaoUsuario) {
    return (
      <div className="prompt-container">
        <Button onClick={iniciarInteracao}>Clique aqui</Button>
      </div>
    );
  }

  // Renderiza o prompt de resposta se a resposta ainda não estiver correta
  if (!respostaCorreta) {
    return (
      <div className="prompt-container">
        <div className="prompt">
          <p>Complete a frase: 'a lua ta linda hoje...'</p>
          {mensagemErro && <p className="erro">{mensagemErro}</p>}
        </div>
      </div>
    );
  }

  // Renderiza a página principal após a resposta correta
  return (
    <div className="container">
      <div className="video-background">
        <video autoPlay loop muted playsInline className="video">
          <source src= "../assets/videos/fundo1.mp4" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>
      <Photos />
      <p>Juntos</p>
      {diferencaDeTempo && (
        <div id="tempoJuntos">
          {diferencaDeTempo.anos} anos, {diferencaDeTempo.meses} meses, {diferencaDeTempo.dias} dias, 
          <section>
            {diferencaDeTempo.horas} horas, {diferencaDeTempo.minutos} minutos e {diferencaDeTempo.segundos} segundos.
          </section>
        </div>
      )}
      <hr className="barra-horizontal" />
      <div className="heart">❤️</div>
      <div className="message">E assim a lua ficou linda com o brilho da sua estrela para sempre... ☪️</div>
      
      <div className="music-info">
        <img src="/path/to/moonlight-logo.png" alt="Moonlight - Kali Uchis" />
        <p><a href="https://open.spotify.com/track/5Z9KJZvQzH6PFmb8SNkxuk" target="_blank" rel="noopener noreferrer">Ouça "Moonlight" de Kali Uchis no Spotify</a></p>
        <img src="/path/to/spotify-qr-code.png" alt="QR Code Spotify" />
      </div>
    </div>
  );
}

export default App;
