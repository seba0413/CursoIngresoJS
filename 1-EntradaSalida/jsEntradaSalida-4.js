/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var nombre = prompt("Igrese su nombre: ");
	document.getElementById('elNombre').value = nombre;
}

//Para que muestre el valor de la variable en el cuadro de texto
//primero tomo el elemento del documento y después se lo asigno al valor
//de la variable que escribi por prompt

