function Mostrar()
{
	var contador;
	var importeMayor = 0;
	var importeMenor = 0;

	for(contador = 0; contador < 24; contador++)
	{
		var importe = prompt("Ingrese el importe de la venta");

		while(importe <= 0)
		{
			importe = prompt("El importe no puede ser menor a cero. Ingrese importe de la venta");
		}

		importe = parseInt(importe);

		if (contador == 0) 
		{
			importeMenor = importe;
			importeMayor = importe;
		}

		else
		{
			if (importe < importeMenor) 
			{
				importeMenor = importe;
			}

			if (importe > importeMayor) 
			{
				importeMayor = importe;
			}
		}
	}//for

	document.write("El importe mas grande es: " + importeMayor);
	document.write("<br>"+"El importe mas chico es: " + importeMenor);

}
