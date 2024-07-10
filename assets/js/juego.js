/* 2C = Two of Clubs
2C = Two of Diamonds
2C = Two of Hearts
2C = Two of Spades */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K']
let puntosJugador = 0, puntosComputadora = 0;


//Elementos del HTML
const btnNuevo = document.querySelector('#btnNuevo');
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const puntosSmall = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-carta');



//Esta funcion crea el deck
const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (const tipo of tipos) {
            deck.push(i + tipo)
        }
    }
    for (const tipo of tipos) {
        for (const esp of especiales) {
            deck.push(esp + tipo);
        }
    }
    deck = _.shuffle(deck);
    // console.log(deck);
    return deck;
}

crearDeck();

//Esta funcion sirve para pedir una carta

const pedirCarta = () => {
    if (deck.length === 0) {
        alert("no hay cartas en el deck")
    }
    const carta = deck.pop(); //Quita el ultimo elemento del array

    return carta;
}


//valor de una carta
const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    // let puntos = 0;
    // if (isNaN(valor)) {
    //     puntos = (valor === 'A') ? 11 : 10;
    //     
    // } else {
    //     puntos = valor * 1;
    //     console.log("es un numero", puntos);
    // }

    return (isNaN(valor) ? puntos = (valor === "A") ? 11 : 10 : puntos = valor * 1)
}

const turnoComputadora = (puntosMinimos) => {
    do {
        const carta = pedirCarta();
        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosSmall[1].innerText = puntosComputadora;

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add("carta")
        divCartasComputadora.append(imgCarta);
        if (puntosComputadora > 21) {
            break;
        }
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

    setTimeout(() => {
        
        if (puntosMinimos === puntosComputadora) {
            alert("Nadie gana :( Empate");
        } else if (puntosComputadora === 21) {
            alert("Ha ganado la computadora")
        } else if (puntosMinimos > 21) {
            alert("Ha ganado la computadora")
        }
        else if (puntosComputadora > 21) {
            alert("Has ganado")
        } else {alert("Gana la computadora")}
    }, 100);


}

//Eventos 

btnNuevo.addEventListener('click', function () {
    deck = [];
    puntosComputadora = 0
    puntosJugador = 0
    puntosSmall[0].innerText = 0
    puntosSmall[1].innerText = 0
    crearDeck();
    btnPedir.disabled = false;
    btnDetener.disabled = false;
    divCartasComputadora.innerHTML = "";
    divCartasJugador.innerHTML = "";


})

btnDetener.addEventListener("click", function () {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);

})

btnPedir.addEventListener('click', function () {
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    puntosSmall[0].innerText = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add("carta")
    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21) {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);

    } else if (puntosJugador === 21) {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);

    }

})





