function Mostrar()
{
	var contador;
	var peso;
	var pesoMaximo = 0;
	var pesoMinimo = 0;

	for(contador = 0; contador < 50; contador++)
	{
		peso = prompt("Ingrese el peso de cada contenedor");

		while(peso < 0 || isNaN(peso))
		{
			peso = prompt("Ingrese el peso de cada contenedor");
		}

		peso = parseInt(peso);

		if (contador == 0) 
		{
			pesoMinimo = peso;
			pesoMaximo = peso;
		}

		else
		{
			if (peso > pesoMaximo) 
			{
				pesoMaximo = peso;
			}

			if (peso < pesoMinimo) 
			{
				pesoMinimo = peso;
			}
		}
	}

	document.write("<br>" + "El mas pesado es: " + pesoMaximo);
	document.write("<br>" + "El menos pesado es: " + pesoMinimo);

}
