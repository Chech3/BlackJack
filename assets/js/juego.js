/* 2C = Two of Clubs
2C = Two of Diamonds
2C = Two of Hearts
2C = Two of Spades */


const miModulo = (() => {
    // 'use strict'

    //Variables'
    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'], especiales = ['A', 'J', 'Q', 'K'];
    // let puntosJugador = 0, puntosComputadora = 0;
    let puntosJugadores = [];


    //Elementos del HTML
    const btnNuevo = document.querySelector('#btnNuevo'),
        btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener');

    const puntosSmall = document.querySelectorAll('small'),
        divCartasJugadores = document.querySelectorAll('.divCartas')


    //Esta funcion crea el deck


    const inicializadorJuego = (numJugadores = 2) => {
        deck = crearDeck();
        puntosJugadores = []
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }

        puntosSmall.forEach(x => {
            x.innerText = 0
        });
        divCartasJugadores.forEach(x => {
            x.innerHTML = ""
        });
        btnPedir.disabled = false;
        btnDetener.disabled = false;


        
    }


    const crearDeck = () => {
        deck = [];
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
        return deck = _.shuffle(deck);
    }



    //Esta funcion sirve para pedir una carta

    const pedirCarta = () => {
        if (deck.length === 0) {
            alert("no hay cartas en el deck")
        }
        return deck.pop(); //Quita el ultimo elemento del array
    }


    //valor de una carta
    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1);
        return (isNaN(valor) ? puntos = (valor === "A") ? 11 : 10 : puntos = valor * 1)
    }
    //turno 0 = primer jugador y el ultimo la computadora
    const acumularPuntos = (turno, carta) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosSmall[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno]
    }

    const crearCarta = (carta, turno) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add("carta")
        divCartasJugadores[turno].append(imgCarta);
    }

    const determinarGanador = () => {
        const [puntosMinimos, puntosComputadora] = puntosJugadores;
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
            } else { alert("Gana la computadora") }
        }, 100);
    }

    //Computadora

    const turnoComputadora = (puntosMinimos) => {
        let puntosComputadora = 0;
        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(puntosJugadores.length - 1, carta);
            crearCarta(carta, puntosJugadores.length - 1);
        } while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );


        determinarGanador();

    }

    //Eventos 
    btnNuevo.addEventListener('click', function () {
        inicializadorJuego();
    })

    btnDetener.addEventListener("click", function () {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    })

    btnPedir.addEventListener('click', function () {
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(0, carta);
        crearCarta(carta, 0);
        if (puntosJugador > 21) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);

        } else if (puntosJugador === 21) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);

        }

    });

    return {
        nuevoJuego: inicializadorJuego
    }

})()

