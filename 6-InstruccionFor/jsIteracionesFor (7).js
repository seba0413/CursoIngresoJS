function Mostrar()
{

	var numero = prompt("Ingrese un numero");
	numero = parseInt(numero);
	var contadorDivisores = 0;

	for (anterior = 2; anterior < numero; anterior++) 
	{
		if (numero % anterior == 0) 
		{
			document.write("<br>" + anterior);
			contadorDivisores++;

		}
		if (anterior > numero / 2) 
		{
			break;
		}
	}

	if (contadorDivisores == 0) 
	{
		document.write("Es primo");
	}


}//FIN DE LA FUNCIÓN