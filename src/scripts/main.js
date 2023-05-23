AOS.init();

const dataDoEvento = new Date("May 31, 2023 19:00:00");
const timeStampDataDoEvento = dataDoEvento.getTime();

const contadorDeTempo = setInterval(function() {
    const dataAgora = new Date();
    const timeStampAgora = dataAgora.getTime();

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;
    const segundosEmMs = 1000;

    const tempoRestante = timeStampDataDoEvento - timeStampAgora;
    
    if (tempoRestante > 0) {
        const diasEmMs = 1000 * 60 * 60 * 24;
        const horasEmMs = 1000 * 60 * 60;
        const minutosEmMs = 1000 * 60;
        const segundosEmMs = 1000;

        const diasRestantes = Math.floor(tempoRestante / diasEmMs);
        const horasRestantes = Math.floor((tempoRestante % diasEmMs) / horasEmMs);
        const minutosRestantes = Math.floor((tempoRestante % horasEmMs) / minutosEmMs);
        const segundosRestantes = Math.floor((tempoRestante % minutosEmMs) / segundosEmMs);

        document.getElementById('texto-evento').innerHTML = String(`O maior evento de tecnologia do Brasil começa em: ${diasRestantes}d ${horasRestantes}h ${minutosRestantes}m ${segundosRestantes}s`);
    }
    else {
        clearInterval(contadorDeTempo);
        document.getElementById('texto-evento').innerHTML = String(`O maior evento de tecnologia do Brasil foi realizado!`);
    }
}, 1000);
