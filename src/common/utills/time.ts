// Definindo a interface para a diferença de tempo
export interface DiferencaDeTempo {
    anos: number;
    meses: number;
    dias: number;
    horas: number;
    minutos: number;
    segundos: number;
  }
  
  // Função para calcular a diferença de tempo entre a data atual e uma data alvo
  export function calcularDiferencaDeTempo(dataAlvo: string): DiferencaDeTempo {
    const dataAtual = new Date(); // Obtendo a data atual
    const dataEspecificada = new Date(dataAlvo); // Convertendo a data alvo para um objeto Date
  
    let anos = dataAtual.getFullYear() - dataEspecificada.getFullYear();
    let meses = dataAtual.getMonth() - dataEspecificada.getMonth();
    let dias = dataAtual.getDate() - dataEspecificada.getDate();
    let horas = dataAtual.getHours() - dataEspecificada.getHours();
    let minutos = dataAtual.getMinutes() - dataEspecificada.getMinutes();
    let segundos = dataAtual.getSeconds() - dataEspecificada.getSeconds();
  
    // Ajustando os valores se houverem diferenças negativas
    if (segundos < 0) {
      segundos += 60;
      minutos--;
    }
    if (minutos < 0) {
      minutos += 60;
      horas--;
    }
    if (horas < 0) {
      horas += 24;
      dias--;
    }
    if (dias < 0) {
      const mesAnterior = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 0);
      dias += mesAnterior.getDate();
      meses--;
    }
    if (meses < 0) {
      meses += 12;
      anos--;
    }
  
    // Retornando a diferença de tempo calculada
    return {
      anos,
      meses,
      dias,
      horas,
      minutos,
      segundos,
    };
  }
  