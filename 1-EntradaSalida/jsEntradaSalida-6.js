/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno = document.getElementById('numeroUno').value;
	var numeroDos = document.getElementById('numeroDos').value;

	var enteroUno = parseInt(numeroUno);
	var enteroDos = parseInt(numeroDos);

	var suma = enteroUno + enteroDos;

	alert("La suma es: " + suma);
}

