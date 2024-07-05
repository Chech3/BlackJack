/* 2C = Two of Clubs
2C = Two of Diamonds
2C = Two of Hearts
2C = Two of Spades */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K']
let puntosJugador = 0, puntosComputadora = 0;


//Elementos del HTML
const btnPedir = document.querySelector('#btnPedir');
const puntosSmall = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');


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

    return deck;
}

crearDeck();

//Esta funcion sirve para pedir una carta

const pedirCarta = () => {
    if (deck.length === 0) {
        throw 'No hay cartas en el deck'
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
// valorCarta(pedirCarta());

//Eventos 
btnPedir.addEventListener('click', function () {
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    puntosSmall[0].innerText = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add("carta")
    divCartasJugador.append(imgCarta);
    
    if (puntosJugador > 21) {
        console.warn('Perdiste');
        btnPedir.disabled = true;
    } else if (puntosJugador === 21) {
        console.warn('Ganaste');
        btnPedir.disabled = true;
    }

})
