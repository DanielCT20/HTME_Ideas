const a = document.querySelector(".nam1");
a.style.backgroundColor = "red";

console.log("Initializing");

// ********************************************
// 1:CREACION DE FIRSTCUSTOM
//     > Requisitos haber creado la etiqueta sino no funcion
// *******************************************
class FirstCustom extends HTMLElement{
	constructor(){
		super()
		console.log("myFirstCustom -log");
	}
}
window.customElements.define('first-custom',FirstCustom)


// ********************************************
// 2:Create a extra DIV When the page was creadet
// https://www.youtube.com/watch?v=umHdBuTw98c 
// https://www.it-swarm-es.com/es/javascript/como-cambiar-la-clase-de-un-elemento-con-javascript/958467007/ 
// *******************************************

function addNew(){
	const newDiv=document.createElement('div');
	document.body.appendChild(newDiv);

	/*Nombrando la clase*/
	newDiv.classList.add('MyClass');
	newDiv.classList.toggle('MyClass1');

	/*Propiedades*/
	newDiv.textContent="New Content"
	

	/*Giving Colores and css styles*/
	const style=document.querySelector(".MyClass");
	style.style.backgroundColor="blue";

	console.log("add");
}

addNew()

// ********************************************
// 3:Create a extra DIV en specific location
// https://www.youtube.com/watch?v=umHdBuTw98c 
// https://www.it-swarm-es.com/es/javascript/como-cambiar-la-clase-de-un-elemento-con-javascript/958467007/ 
// *******************************************


function addNewSpecific(){
	const newDiv=document.createElement('div');
	const divContainer=document.querySelector('.nam1')	

	divContainer.appendChild(newDiv);

	newDiv.classList.add('div_name');
	newDiv.classList.toggle('div_name1');

	newDiv.textContent="New Content"

	const style=document.querySelector(".MyClass");
	style.style.backgroundColor="blue";

	console.log("addSpecificPlace");
}

addNewSpecific()


// ********************************************
// 4:Create a div solo con variables
// *******************************************
const newDiv=document.createElement('shadow-root');
const host=document.querySelector('.nam2');
host.appendChild(newDiv);

var img = document.createElement("img");
/*img.src = "https://www.clipartmax.com/png/middle/17-173074_a-data-hummingbird-icon-by-bmateka-adata-so-dimm-200-pin.png";
img.src = "https://static.vecteezy.com/system/resources/thumbnails/000/605/194/small_2x/13-10.jpg";*/
img.src = "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/128x128/plain/user.png";

var div = document.getElementById("x");
newDiv.appendChild(img);


// ********************************************
// 4:Create a div solo con variables
// *******************************************



















