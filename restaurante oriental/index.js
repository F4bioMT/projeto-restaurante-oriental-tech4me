function caucularTempo() {
    const agora = new Date();
    const meiaNoite = new Date(agora);

    meiaNoite.setHours(24, 0, 0, 0);

    const diferenca = meiaNoite - agora;

    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    return { horas, minutos, segundos };
}

function atualizarContador() {
    const {horas, minutos, segundos} = caucularTempo();

    document.getElementById('tempo-restante').textContent = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

    if (horas === 0 && minutos === 0 && segundos === 0) {
        clearInterval(intervalo);
        document.getElementById('tempo-restante').textContent = "A oferta terminou!";
    }
}

const intervalo = setInterval(atualizarContador, 1000);
