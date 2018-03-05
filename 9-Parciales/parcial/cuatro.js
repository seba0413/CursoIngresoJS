function Mostrar()
{
	var numeroUno = prompt("Ingrese el primer numero");
	numeroUno = parseInt(numeroUno);

	var numeroDos = prompt("Ingrese el segundo numero");
	numeroDos = parseInt(numeroDos);

	var resultado = 0;

	if (numeroUno == numeroDos) 
	{
		resultado = numeroUno * numeroDos;
	}

	else
	{
		if (numeroUno > numeroDos) 
		{
			resultado = numeroUno - numeroDos;
		}

		else
		{
			resultado = numeroUno + numeroDos;
		}
	}

	document.write("El resultado es: " + resultado);

}
