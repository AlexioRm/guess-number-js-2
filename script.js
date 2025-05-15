let nombre = prompt("¿Cómo te llamas?");
let edad = prompt("¿Cuántos años tienes?");
edad = Number(edad);
let ciudad = prompt("¿Dónde vives?");

if (edad < 13) {
  alert("Eres un niño 👶");
} else if (edad <= 17) {
  alert("Eres un adolescente 👦");
} else {
  alert("Eres un adulto 🧑");
}

let temperatura = Number(prompt("¿Qué temperatura hace hoy?"));

if (temperatura < 15) {
  alert("Hace frío, ponte abrigo 🧥");
} else if (temperatura <= 25) {
  alert("Clima templado, usa casaca ligera 🧥");
} else {
  alert("Hace calor, usa polo y gorra 👕");
}
let clave = prompt("Crea una contraseña:");
if (clave.length >= 6) {
  alert("Contraseña válida ✅");
} else {
  alert("Contraseña muy corta ❌");
}

alert("Hola " + nombre + ", tienes " + edad + " años y vives en " + ciudad + ".");
console.log("Nombre ingresado:", nombre);
console.log("Edad ingresada:", edad);
console.log("Ciudad ingresada:", ciudad);
console.log("Temperatura ingresada:", temperatura);
console.log("Contraseña ingresada:", clave);
