/* Cargar esto al principio */
function getRandomIncluirValores(min, max) {
    min = Math.floor(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}






/* Carrera automatica */
function startRace() { //no lo uso 

    const result = document.getElementById('result');

    horse1.style.left = '0';
    horse2.style.left = '0';

    const raceInterval = setInterval(() => {

        const horse2Position = parseInt(horse2.style.left);

        const horse1Speed = Math.random() * 10;
        const horse2Speed = Math.random() * 10;

        horse1.style.left = horse1Position + horse1Speed + 'px';
        horse2.style.left = horse2Position + horse2Speed + 'px';

        if (horse1Position >= window.innerWidth - 100 || horse2Position >= window.innerWidth - 100) {
            clearInterval(raceInterval);
            if (horse1Position > horse2Position) {
                result.innerText = '¡Caballo Rojo gana!';
            } else if (horse2Position > horse1Position) {
                result.innerText = '¡Caballo Azul gana!';
            } else {
                result.innerText = '¡Es un empate!';
            }
        }
    }, 100);
}