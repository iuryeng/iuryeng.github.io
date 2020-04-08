//Autor: Iury Coelho
//Feito em :07/03/2020
//Propósito: converter números binarios em decimal e números decimais em binário 

//global variables 
var campo_decimal = document.querySelector("input[name='decimal']");
var campo_binario = document.querySelector("input[name='binario']");
var resultado_decimal = document.getElementById("binario_decimal");
var resultado_binario = document.getElementById("decimal_binario");
const botao_converter_decimal = document.querySelector("#converter_decimal");
const botao_converter_binario = document.querySelector("#converter_binario");


//functions
function bin_dec(event){
	event.preventDefault();	
	var numero_binario = campo_binario.value;
	var numero_decimal = parseInt(numero_binario,2);
	resultado_decimal.innerHTML = `Dec Number:  ${numero_decimal}`;

};

function dec_bin(event){
	event.preventDefault();
	var numero_decimal = campo_decimal.value;
	var numero_binario = parseInt(numero_decimal, 10).toString(2);
	resultado_binario.innerHTML = `Bin Number:  ${numero_binario}`;
}

// routines
botao_converter_decimal.addEventListener('click',bin_dec);
botao_converter_binario.addEventListener('click',dec_bin);