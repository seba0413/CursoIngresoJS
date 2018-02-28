function Mostrar()
{
	var edad;
	var sexo;
	var contador;
	var acumuladorEdad = 0;
	var edadMasBaja = 0;
	var contadorDeVaronesMayoresA20 = 0;

	for(contador = 0; contador < 100; contador++)
	{
		edad = prompt("Ingrese edad entre 0 y 100: ");
		
		while(edad < 0 || edad > 100 || isNaN(edad))
		{
			edad = prompt("Ingrese edad entre 0 y 100: ");		
		}

		acumuladorEdad = acumuladorEdad + edad;

		if (contador == 0) 
		{
			edadMasBaja = edad;
		}

		else
		{
			if (edad < edadMasBaja) 
			{
				edadMasBaja = edad;
			}
		}

		sexo = prompt("Ingrese sexo (m para masculino y f para femenino)");

		while(sexo != "m" && sexo != "f")
		{
			sexo = prompt("Ingrese sexo (m para masculino y f para femenino)");			
		}

		if (sexo = "m") 
		{
			if (edad >= 20) 
			{
				contadorDeVaronesMayoresA20++;
			}
		}

	}

	alert("El promedio de edad es: " + acumuladorEdad / 100);
	alert("La edad mas baja es: " + edadMasBaja);
	alert("La cantidad de varones cuya edad es mayor a 20 es: " + contadorDeVaronesMayoresA20);

}
