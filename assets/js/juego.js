/* 2C = Two of Clubs
2C = Two of Diamonds
2C = Two of Hearts
2C = Two of Spades */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K']


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
    console.log(deck);
    return deck;
}

crearDeck();

//Esta funcion sirve para pedir una carta

const pedirCarta = () => {
    if (deck.length === 0) {
        throw 'No hay cartas en el deck'
    }
    const carta = deck.pop(); //Quita el ultimo elemento del array
    // console.log(deck);
    return carta;
}


//valor de una carta

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    // let puntos = 0;
    // if (isNaN(valor)) {
    //     puntos = (valor === 'A') ? 11 : 10;
    //     console.log(puntos);
    // } else {
    //     puntos = valor * 1;
    //     console.log("es un numero", puntos);
    // }

    return (isNaN(valor) ? puntos = (valor === "A") ? 11 : 10 : puntos = valor * 1  )
}
// valorCarta(pedirCarta());

console.log(valorCarta(pedirCarta()));