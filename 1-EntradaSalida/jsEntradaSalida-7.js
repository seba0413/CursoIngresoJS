/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
	var numeroUno = document.getElementById('numeroUno').value;
	var numeroDos = document.getElementById('numeroDos').value;

	var enteroUno = parseInt(numeroUno);
	var enteroDos = parseInt(numeroDos);

	var suma = enteroUno + enteroDos;

	alert("La suma es: " + suma);	
	
}

function restar()
{
	var numeroUno = document.getElementById('numeroUno').value;
	var numeroDos = document.getElementById('numeroDos').value;

	var enteroUno = parseInt(numeroUno);
	var enteroDos = parseInt(numeroDos);

	var resta = enteroUno - enteroDos;

	alert("La resta es: " + resta);	
	
}

function multiplicar()
{

	var numeroUno = document.getElementById('numeroUno').value;
	var numeroDos = document.getElementById('numeroDos').value;

	var enteroUno = parseInt(numeroUno);
	var enteroDos = parseInt(numeroDos);

	var multiplicacion = enteroUno * enteroDos;

	alert("La multiplicacion es: " + multiplicacion);	 
	
}

function dividir()
{
	var numeroUno = document.getElementById('numeroUno').value;
	var numeroDos = document.getElementById('numeroDos').value;

	var enteroUno = parseInt(numeroUno);
	var enteroDos = parseInt(numeroDos);

	var division = enteroUno / enteroDos;

	alert("La division es: " + division);	
	
}

