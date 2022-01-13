const icons=[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: generaColore()
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

let iconBox = document.querySelector('.ms_row');

let scelta = document.getElementById("carte");


function inserisciBox(icons){
	iconBox.innerHTML += `
	<div class="col ms_box position-relative text-center">
		<div class="position-absolute top-50 start-50 translate-middle">
			<i class="fas fa-${icons.name}" style="color:${icons.color}"></i>
			<div class="mt-3">${icons.name}</div>
		</div>
	</div>
	`
}



function stampaIcone(arrayIcone){
	for(i = 0; i < arrayIcone.length; i++) {
	inserisciBox(arrayIcone[i]);
	}
}


stampaIcone(icons);

scelta.addEventListener("change",  (event) => {
	console.log(event.target.value);
	let valore = event.target.value;
	if(valore == "all"){
		iconBox.innerHTML = "";
		stampaIcone(icons);
	}else if(valore == "vegetable"){
		iconBox.innerHTML = "";
		const vegetaliRisultato = icons.filter(function(vegetali){
			return (vegetali.type === "vegetable")
		})
		console.log(vegetaliRisultato);
		stampaIcone(vegetaliRisultato)
	}else if(valore == "user"){
		iconBox.innerHTML = "";
		const utenti = icons.filter(function(utenti){
			return (utenti.type === "user")
		})
		stampaIcone(utenti)
	}else if(valore == "animal"){
		iconBox.innerHTML = "";
		const animali = icons.filter(function(animali){
			return (animali.type === "animal")
		})
		stampaIcone(animali)
	}
});

//genera colore "solo su gatto" in maniera randomica

function generaColore(){
	const simboli = '0123456789ABCDEF';
	let colore = "#";
	for(let i = 0; i <6; i++){
		const posizione = generaRandomNumber(0, simboli.length - 1);
		colore += simboli.charAt(posizione);
	}
	return colore;
}

function generaRandomNumber(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}