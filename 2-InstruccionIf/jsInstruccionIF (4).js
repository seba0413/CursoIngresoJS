function Mostrar()
{
//tomo la edad 
	var edad = document.getElementById('edad').value; 
	var edadEntero = parseInt(edad);

	if (edadEntero >= 13 && edadEntero <= 17) {
		alert("Sos adolescente");
	}


}//FIN DE LA FUNCIÓN