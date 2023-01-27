const $hora = document.querySelector('.hora');
let $fecha = document.querySelector('.fecha');

setInterval (() => {
    relojDigital()
}, 1000);
function relojDigital () {
    let f = new Date(),
    dia = f.getDate(),
    mes = f.getMonth() + 1,
    anio = f.getFullYear(),
    diaSem = f.getDay();

    dia = ('0' + dia).slice(-2);
    mes = ('0' + mes).slice(-2);
    let timeString = f.toLocaleTimeString();
    let sem = ['DOM', 'LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB'];
    let showDia = sem[diaSem];
    $hora.innerHTML = timeString;
    $fecha.innerHTML = `${dia}/${mes}/${anio} ${showDia}`;
}