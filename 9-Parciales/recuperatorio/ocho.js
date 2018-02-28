function Mostrar()
{
	var respuesta = "si";
	var numero;
	var contadorDePares = 0;
	var contador = 0;
	var acumulador = 0;	
	var maximo;
	var minimo;

	while(respuesta != "no")
	{
		numero = prompt("Ingrese un numero positivo");
		numero = parseInt(numero);

		while(numero < 0 || isNaN(numero))
		{
			numero = prompt("Ingrese un numero positivo");	
		}

		if (numero % 2 == 0) 
		{
			contadorDePares++;
		}

		acumulador+= numero;

		if (contador == 0) 
		{
			maximo = numero;
			minimo = numero;
		}

		else
		{
			if (numero < minimo) 
			{
				minimo = numero; 
			}

			if (numero > maximo) 
			{
				maximo = numero;
			}
		}

		contador++;

		respuesta = prompt("Desea ingresar otro numero?");		
	}

	document.write("<br>" + "La cantidad de numeros pares es: " + contadorDePares);
	document.write("<br>" + "El promedio de todos los numeros ingresados es: " + acumulador / contador);
	document.write("<br>" + "La suma de todos los numeros es: " + acumulador);
	document.write("<br>" + "El numero minimo es: " + minimo);
	document.write("<br>" + "El numero maximo es: " + maximo);
	


}
