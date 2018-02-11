function Mostrar()
{
//tomo la edad  
	var edad = document.getElementById('edad').value;
	var edadEntero = parseInt(edad);

	if (edadEntero >= 18) {
		alert("Sos mayor de edad");
	}
	else if (edadEntero >=13 && edadEntero <= 17) {
		alert("Sos adolescente");
	}
	else if (edadEntero < 13) {
		alert("Sos un niño");
	}



}//FIN DE LA FUNCIÓN