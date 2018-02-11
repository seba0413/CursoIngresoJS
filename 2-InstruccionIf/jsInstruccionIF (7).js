function Mostrar()
{
//tomo la edad  
	var edad = document.getElementById('edad').value;
	var edadEntero = parseInt(edad);

	var estadoCivil = document.getElementById('estadoCivil').value;
	
	if (edadEntero < 18 && estadoCivil != "Soltero") {
		alert("Es muy pequeño para NO ser soltero");
	}


}//FIN DE LA FUNCIÓN