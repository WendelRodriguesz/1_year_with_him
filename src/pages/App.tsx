import { useEffect, useState } from 'react';
import { calcularDiferencaDeTempo, DiferencaDeTempo } from '../common/utills/time';
import Button from '../components/button';
import Photos from '../components/photos';
import Polaroid from '../components/polaroid';
import './App.css';

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
    const resposta = prompt("Complete a frase: 'A lua está linda hoje...'");
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
        <Button onClick={iniciarInteracao}>☾ Clique em mim ✯</Button>
      </div>
    );
  }

  // Renderiza o prompt de resposta se a resposta ainda não estiver correta
  if (!respostaCorreta) {
    return (
      <div className="prompt-container">
        <div className="prompt">
          {/* <p>Complete a frase: 'A lua está linda hoje...'</p> */}
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
          <source src="../assets/videos/fundo.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="photos_container">
        <Photos />
      </div>
  
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
      <div className="music-info">
        <iframe
          title="Spotify Playlist"
          style={{ borderRadius: '12px', opacity: '75%' }}
          src="https://open.spotify.com/embed/playlist/1YwoZqx1CAbMabPxmOXJfz?utm_source=generator&theme=0&autoplay=1"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <div className='Polaroids'>
        <section className='foto1'>
          <Polaroid type='foto1'/>
          <img src='../../assets/photos/wolv.png' className='wolv' alt={`wolverine`}/>
          </section>
        <section className='foto2'>
          <Polaroid type='foto2'/>
          <img src='../../assets/photos/aran.png' className='aran' alt={`aranha`}/>
        </section>
        <a className='link' href="https://www.netflix.com/br/title/70208599" target="_blank" rel="noopener noreferrer"><img src={`../../assets/photos/post.jpg`} alt={`Post-it`} className="postit"/></a>
        <video className='filme' controls>
        <source src="../assets/videos/homem aranha.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="message">E assim a lua ficou linda com o brilho da sua estrela para sempre... ☪️</div>
    </div>
  );
}

export default App;