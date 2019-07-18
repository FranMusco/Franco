// 01_observer.js

 console.log("Esto esta ok");

 let titulo = document.querySelector("h1");

 // Crear un nuevo observador
 observarTitulo = new IntersectionObserver((entry) => {
	 console.log(entry);
 });

 observarTitulo.observe(titulo);



// Observar el elemento .hola
// Si isIntersecting es true entonces
// elemento.style.background = green;

let div = document.querySelector(".hola");
observarDiv = new IntersectionObserver((e) => {
	// console.log("Observo esto:", e[0].isIntersecting);
	if (e[0].isIntersecting === true) {
		// console.log("Esta en viewport");
		div.style.backgroundColor = "cyan";
	} else {
		// console.log("Esta afuera");
		div.style.backgroundColor = "yellow";
	}
});

observarDiv.observe(div);

let elementos = document.querySelectorAll(".random");

observarElementos = new IntersectionObserver((e) => {
// console.log(e);
for (var i = 0; i < e.lenght; i++) {
	// console.log("Es el", i);
	// console.log("Status", e[i].isIntersecting);
	if (e[i].isIntersecting === true) {
		e[i].target.classList.toggle("especial");
		}
	}
});

elementos.forEach(elemento => {
observarElementos.observe(elemento);
});