

edad = 18;
if (edad >= 18) {
	
	// Block scope (si hay una llave)
	let mas10 = edad + 10;
console.log(En 10 años tendras $(mas10)años.);
}


// Esto tira error porque mas10 no existe fuera del "if"
// console.log("Total es", mas10);


// -------- CONST --------

// Constante -> 3.14


// Block scope, al igual q let, pero no permite q se re-escriba el contenido
const nombre = "Eva";

nombre = "Jose";

console.log(nombre);

