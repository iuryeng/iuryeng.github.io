/*  
Autor: Iury Coelho
Proposito: Colher informações de tipos de cannabis
Data: 09/04/2020
Licence: MIT
*/



var botao = document.getElementById("button-buildInfor"); //botão pra gerar o conteúdo das tabelas
const API_KEY = "Tk69ojF"; //chave da api
const URL_STRAINS ="http://strainapi.evanbusse.com/"+API_KEY+"/strains/search/all"; // URL de acesso aos dados da API
let strains;// quarda as informações colhidas no json da API
let array_nome = []; // quarda os nomes de todas as ervas

//variáveis contendo informações de cada erva captada pelo campo option/select
let infor; // armazena todas as informações de uma erva selecionada
let name ;
let id; // armazena o id da erva selecionada de uma erva selecionada
let race; // armazena a raça da erva selecionada de uma erva selecionada
let flavors =[]; //armazena as flores da erva de uma erva selecionada
let effectsMedical =[] // armazena efeitos medicinais de uma erva selecionada
let effectsNegative =[] // armazena efeitos negativos de uma erva selecionada
let effectsPositive =[] // armazena efertos positivos de uma erva selecionada




function listarTodasAsPropriedades(o){  // lista todas as propriedades do objeto captado   
	var objectoASerInspecionado; // variável que guarda o valor do objeto a ser inspecionado
	let resultado = []; // array que guarda a resposta das propriedades do objeto
	
	for(objectoASerInspecionado = o; objectoASerInspecionado !== null; objectoASerInspecionado = Object.getPrototypeOf(objectoASerInspecionado)){  //laço que capta as propriedades do objeto inspecionado
		resultado = resultado.concat(Object.getOwnPropertyNames(objectoASerInspecionado)); 	
	}	
	return resultado;
}

function getDateStrains(){ // pega os dados a partir do json adquirido pela URL_STRAINS
	fetch(URL_STRAINS).then(response => response.json().then(data => { 
		strains = data;      
	    array_nome =  listarTodasAsPropriedades(strains); 
	    getOptions();	               	 	      	    
	}))
	.catch(err => {
	    console.log(err);
	});
}



function getOptions(){ //preencher os elementos input com as opcoes dos estados

    var estado_select = document.getElementById("dropdown");  
    for (var i=0; i< array_nome.length-12; i++) { // cria os elementos options para ser populados com os nomes das ervas
        var option_select = document.createElement("option");
        estado_select.appendChild(option_select);                
    };      

    var opt = estado_select.querySelectorAll("option"); 

   for (var j=0; j< array_nome.length-12; j++) {            
        opt[j+1].textContent = array_nome[j]; 
        opt[j+1].value = array_nome[j];
    };

}


function buildInfor(){ //constroi as informações a partir do dados captados pelo jason e armazena nas respectivas variáveis
	var weed_select = document.getElementById("dropdown");
	var result = weed_select.options[weed_select.selectedIndex].value;
	name = result;
	infor = strains[result];
	id = strains[result]['id'];
	race = strains[result]['race'];
	flavors = strains[result]['flavors'];
	effectsMedical = strains[result]['effects']['medical'];
	effectsNegative = strains[result]['effects']['negative'];
	effectsPositive = strains[result]['effects']['positive'];    
    buildTable();
	
}


function buildTable(){ //controi as tabelas a partir dos dados captados 
	document.getElementById("id-weed").innerHTML = id;	
	document.getElementById("name-weed").innerHTML = name;	
	document.getElementById("race-weed").innerHTML = race;	
	document.getElementById("flavors-weed").innerHTML = flavors;	
    document.getElementById("medical-weed").innerHTML = effectsMedical;	
	document.getElementById("negative-weed").innerHTML = effectsNegative;	
	document.getElementById("positive-weed").innerHTML = effectsPositive;	
}



//Rotinhas
getDateStrains();
 







