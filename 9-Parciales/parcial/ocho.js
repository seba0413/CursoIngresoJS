function Mostrar()
{
	var respuesta = "si";
	var contadorPares = 0;
	var acumulador = 0;
	var contador = 0;
	var numeroMaximo = 0;
	var numeroMinimo = 0;

	while (respuesta != "no")
	{
		var numero = prompt("Ingrese un numero positivo");

		while(numero <= 0)
		{
			numero = prompt("El numero tiene que ser mayor que cero. Ingrese un numero positivo");			
		}

		numero = parseInt(numero);

		if (numero % 2 == 0) 
		{
			contadorPares++;
		}

		acumulador += numero;

		if (contador == 0) 
		{
			numeroMinimo = numero;
			numeroMaximo = numero;
		}

		else
		{
			if (numero < numeroMinimo) 
			{
				numeroMinimo = numero;
			}

			if (numero > numeroMaximo) 
			{
				numeroMaximo = numero;
			}
		}

		contador++;

		respuesta = prompt("Desea ingresar otro numero?");
	
	}//while(respuesta)

	document.write("La cantidad de numeros pares es: " + contadorPares);
	document.write("<br>" + "El promedio de los numeros ingresados es: " + acumulador / contador);
	document.write("<br>" + "La suma de los numeros ingresados es: " + acumulador);
	document.write("<br>" + "El numero maximo es: " + numeroMaximo + ". El minimo es: " + numeroMinimo);
}
