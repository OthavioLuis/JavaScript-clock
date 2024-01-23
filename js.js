function carregar() {
    let msg = document.getElementById('msg')
    let img = document.querySelector('section')
    let data = new Date()
    let hora = data.getHours()
    let minuto = data.getUTCMinutes()

    msg.innerHTML = `${hora}:${minuto}`
    
    if (hora <= 5) {
        img.style.backgroundImage = 'url("img/madrugada.svg")';
    } else if (hora > 6 && hora <= 12) {
        img.style.backgroundImage = 'url("img/manha.svg")';
    } else if (hora <= 18) {
        img.style.backgroundImage = 'url("img/tarde.svg")';
    } else if (hora <= 23 && minuto <= 59) {
        img.style.backgroundImage = 'url("img/noite.svg")';
    }
}