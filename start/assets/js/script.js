/* Esercizio 1 */

var anno = 2022;

let scrivi = function(num1, num2) {
    return `Succo con ${num1} mele e ${num2} arance`;
}

document.getElementById('corretta').innerHTML = scrivi(4, 5);
document.getElementById('sbagliata').innerHTML = scrivi(6);


/* Esercizio 2 */

calcolaEta();

function calcolaEta() {
    let dataNascita = 1998;
    document.getElementById('eta').innerHTML += `${anno - dataNascita} anni`;
}


/* Esercizio 3 */

let annoNascita = (eta, nome) => {
    let anno = 2022 - eta;
    return `L'anno di nascita di ${nome} è il ${anno}`;
}

document.getElementById('persona1').innerHTML = annoNascita(30, 'Anna');
document.getElementById('persona2').innerHTML = annoNascita(24, 'Maria');


/* Esercizio 4 */

function tagliaFetta(torta) {
    return torta * 3;
}

function scegliTorta(mela, arancia) {
    const fetteMela = tagliaFetta(mela);
    const fetteArancia = tagliaFetta(arancia);

    const torta = `Torta con ${fetteMela} fette di mela e ${fetteArancia} fette di arancia`;
    return torta;
}

document.getElementById('torta').innerHTML = scegliTorta(3, 5);


/* Esercizio 5 */

var btn = document.getElementById('calcola');

btn.addEventListener('click', function() {

    cibo = document.getElementById('cibo').value;
    detersivi = document.getElementById('detersivi').value;
    abiti = document.getElementById('abiti').value;

    inserisciTotale();
    cancella();
})

function inserisciTotale() {
    document.getElementById('totale').innerHTML += Number(cibo) + Number(detersivi) + Number(abiti);
}

function cancella() {
    document.getElementById('cibo').value = '';
    document.getElementById('detersivi').value = '';
    document.getElementById('abiti').value = '';
}