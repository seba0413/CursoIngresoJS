function Mostrar()
{
//tomo la edad  
	var edad = document.getElementById('edad').value;

	var edadEntero = parseInt(edad);

	if (edadEntero >= 18) {
		alert("Es mayor de edad");
	}
	else{
		alert("Es menor de edad");
	}


}//FIN DE LA FUNCIÓN