// 🔑 Clave que usaremos en sessionStorage
const KEY = "contador"

// 📌 Obtenemos el elemento donde se mostrará el contador
const counterElement = document.getElementById("counter")

// 📌 Botón para reiniciar
const resetBtn = document.getElementById("resetBtn")

// ----------------------------------------
// 🧠 PASO 1: OBTENER EL VALOR GUARDADO
// ----------------------------------------

// Intentamos leer el valor del contador en sessionStorage
let counter = sessionStorage.getItem(KEY)

// ⚠️ IMPORTANTE:
// sessionStorage guarda texto, no números

// Si NO existe valor (primera vez que se abre la página)
if (counter === null) {
  counter = 0
} else {
  // Convertimos el texto a número
  counter = parseInt(counter)
}

// ----------------------------------------
// 🧠 PASO 2: MOSTRAR EL VALOR INICIAL
// ----------------------------------------

// Mostramos el contador en pantalla
counterElement.textContent = counter

// ----------------------------------------
// 🧠 PASO 3: CREAR EL CONTADOR AUTOMÁTICO
// ----------------------------------------

// setInterval ejecuta una función cada 1000 ms (1 segundo)
setInterval(() => {

  // Aumentamos el contador
  counter++

  // Guardamos el nuevo valor en sessionStorage
  sessionStorage.setItem(KEY, counter)

  // Actualizamos lo que ve el usuario
  counterElement.textContent = counter

}, 1000)

// ----------------------------------------
// 🧠 PASO 4: BOTÓN PARA REINICIAR (OPCIONAL)
// ----------------------------------------

resetBtn.addEventListener("click", () => {

  // Reiniciamos el contador
  counter = 0

  // Guardamos el nuevo valor
  sessionStorage.setItem(KEY, counter)

  // Actualizamos la pantalla
  counterElement.textContent = counter
})