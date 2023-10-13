const sectionSeleccionarAtaque = document.getElementById("Seleccionar-ataque")
const botonMascotaJugador = document.getElementById("boton-mascota")
const sectionReiniciar = document.getElementById("reiniciar")
const botonReiniciar = document.getElementById("boton-reiniciar")
sectionReiniciar.style.display = "none" 

const sectionSeleccionarMascota = document.getElementById("Seleccionar-mascota")
const spanMascotaJugador = document.getElementById("mascota-jugador")

const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById("contenedorAtaques")

let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let inputJagger 
let inputLilo 
let inputCharlie
let mascotaJugador
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego 
let botonAgua 
let botonTierra 
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0 
let victoriasEnemigo = 0 
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let Jagger = new Mokepon("Jagger", './assets/jagger.png', 5)

let Lilo = new Mokepon("Lilo", './assets/lilo.png', 5)

let Charlie = new Mokepon("Charlie", './assets/charlie.png', 5)

Jagger.ataques.push(
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🌱', id: 'boton-tierra'},
    { nombre: '🔥', id: 'boton-fuego'},
)

Lilo.ataques.push(
    { nombre: '🌱', id: 'boton-tierra'},
    { nombre: '🌱', id: 'boton-tierra'},
    { nombre: '🌱', id: 'boton-tierra'},
    { nombre: '💧', id: 'boton-agua'},    
    { nombre: '🔥', id: 'boton-fuego'},
)

Charlie.ataques.push(
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🌱', id: 'boton-tierra'},
    { nombre: '💧', id: 'boton-agua'},  
    
)

mokepones.push(Jagger,Lilo, Charlie)

function iniciarjuego() {
        
        sectionSeleccionarAtaque.style.display = "none"

        mokepones.forEach((mokepon) => {
            opcionDeMokepones = `
            <input type="radio" id=${mokepon.nombre} name="mascota"/>
            <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
                <p>${mokepon.nombre}</p>
                <img src=${mokepon.foto} alt=${mokepon.nombre}>                                      
            </label> 
            `
        contenedorTarjetas.innerHTML += opcionDeMokepones

         inputJagger = document.getElementById("Jagger")
         inputLilo = document.getElementById("Lilo")
         inputCharlie = document.getElementById("Charlie")

        })

        botonMascotaJugador.addEventListener("click",  seleccionarMascotaJugador)                 

        botonReiniciar.addEventListener("click", reiniciarJuego)
}

    function seleccionarMascotaJugador() {
        
        sectionSeleccionarMascota.style.display = "none"
        
        sectionSeleccionarAtaque.style.display = "flex"        
       
        if (inputJagger.checked) {
            spanMascotaJugador.innerHTML = inputJagger.id
            mascotaJugador = inputJagger.id
        } else if(inputLilo.checked) {
            spanMascotaJugador.innerHTML = inputLilo.id
            mascotaJugador = inputLilo.id
        } else if(inputCharlie.checked) {
            spanMascotaJugador.innerHTML = inputCharlie.id
            mascotaJugador = inputCharlie.id
        } else {
            alert("No seleccionaste a tu mascota 🥺")
        }
        
        extraerAtaques(mascotaJugador)
        seleccionarMascotaEnemigo()
    }

    function extraerAtaques(mascotaJugador) {
        let ataques
        for (let i = 0; i < mokepones.length; i++) {
            if (mascotaJugador == mokepones [i].nombre) {
                ataques = mokepones [i].ataques
            }
        
        } 
        mostrarAtaques(ataques)
    }

    function mostrarAtaques(ataques) {
        ataques.forEach((ataque) =>  {
            ataquesMokepon = `
            <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
            `
            contenedorAtaques.innerHTML += ataquesMokepon
        })
        
        botonFuego = document.getElementById("boton-fuego")
        botonAgua = document.getElementById("boton-agua")
        botonTierra = document.getElementById("boton-tierra")
        botones = document.querySelectorAll('.BAtaque')
               
    }   

    function secuenciaAtaque() {
        botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            if (e.target.textContent === "🔥") {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#eaa4c7'
                boton.disabled = true
            } else if (e.target.textContent === '💧') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#eaa4c7'
                boton.disabled = true
            } else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#eaa4c7'
                boton.disabled = true
             }
             ataqueAleatorioEnemigo()
        })
    })   

}
    
    function seleccionarMascotaEnemigo() { 
            let MascotaAleatorio = aleatorio(0,mokepones.length -1)          

            spanMascotaEnemigo.innerHTML = mokepones [MascotaAleatorio].nombre
            ataquesMokeponEnemigo = mokepones [MascotaAleatorio].ataques
            secuenciaAtaque()
            

    function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)  }

    } 
    
    function ataqueAleatorioEnemigo() {
        let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length -1)

        if (ataqueAleatorio === 0 || ataqueAleatorio ===1) {
            ataqueEnemigo.push("FUEGO🔥")
        } else if (ataqueAleatorio === 3 || ataqueAleatorio === 4) {
            ataqueEnemigo.push("AGUA💧")
        } else {
            ataqueEnemigo.push("TIERRA🌱")
        }   
        console.log(ataqueEnemigo)
        iniciarPelea()        
    }

    function iniciarPelea() {
        if (ataqueJugador.length === 5) {
            combate()
        }
    }

    function indexAmbosOponentes(jugador, enemigo) {
        indexAtaqueJugador = ataqueJugador[jugador]
        indexAtaqueEnemigo = ataqueEnemigo[enemigo]
    }

    function combate() {
        
        for (let index = 0; index < ataqueJugador.length; index++) {
            if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            crearMensaje("EMPATE")                
                      
        } else if (ataqueJugador[index] === "FUEGO🔥" && ataqueEnemigo[index] === "TIERRA🌱" ) {
            indexAmbosOponentes(index, index)
            crearMensaje ("GANASTE🏆")
            victoriasJugador++            
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === "AGUA💧" && ataqueEnemigo[index] === "FUEGO🔥") {
            indexAmbosOponentes(index, index) 
            crearMensaje ("GANASTE🏆")
            victoriasJugador++            
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === "TIERRA🌱" && ataqueEnemigo[index] === "AGUA💧"){
            indexAmbosOponentes(index, index)
            crearMensaje ("GANASTE🏆")
            victoriasJugador++            
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponentes(index, index)
            crearMensaje("PERDISTE 🥺")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
        
    }
        revisarVidas()
}

    function revisarVidas() {
        if (victoriasJugador === victoriasEnemigo) {
            crearMensajeFinal("EMPATE")
        } else if (victoriasJugador > victoriasEnemigo) {
            crearMensajeFinal("¡FELICITACIONES! Ganaste 🏆")           
        } else {
            crearMensajeFinal("Lo siento, perdiste 🥺")
        }
    }

    function crearMensaje(resultado) {        

        let nuevoataqueDelJugador = document.createElement("p")
        let nuevoataqueDeEnemigo = document.createElement("p")

        sectionMensajes.innerHTML = resultado
        nuevoataqueDelJugador.innerHTML = indexAtaqueJugador
        nuevoataqueDeEnemigo.innerHTML = indexAtaqueEnemigo

        ataquesDelJugador.appendChild(nuevoataqueDelJugador)
        ataquesDelEnemigo.appendChild(nuevoataqueDeEnemigo)
    }

    function crearMensajeFinal(resultadoFinal) {       
    
    sectionMensajes.innerHTML = resultadoFinal

    sectionReiniciar.style.display = "block"
       
    }

    function reiniciarJuego() {
        location.reload()
    }

    function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min) } 




window.addEventListener("load", iniciarjuego)