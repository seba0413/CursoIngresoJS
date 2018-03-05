function Mostrar()
{
	var contador;
	var acumulador = 0;
	var notaMasBaja = 0;
	var contadorVarones = 0;
	var promedio = 0;


	for(contador = 0; contador < 100; contador++)
	{
		var nota = prompt("Ingrese nota");

		while(nota < 0 || nota > 10)
		{
			nota = prompt("La nota no puede ser ni menor que cero ni superior que 10. Ingrese nota");
		}

		nota = parseInt(nota);

		var sexo = prompt("Ingrese sexo. m para masculino, f para femenino");

		while(sexo != "m" && sexo != "f")
		{
			sexo = prompt("Ingrese sexo. m para masculino, f para femenino"); 
		}

		acumulador += nota;

		if (contador == 0) 
		{
			notaMasBaja = nota;
		}

		else
		{
			if (nota < notaMasBaja) 
			{
				notaMasBaja = nota;
			}
		}

		if (sexo == "m") 
		{
			if (nota >= 6) 
			{
				contadorVarones++;
			}
		}
	}//for

	promedio = acumulador / 100;

	alert("El promedio de las notas es: " + promedio +". La nota mas baja es: " + notaMasBaja + ". La cantidad de varones aprobados es: " + contadorVarones);

}
