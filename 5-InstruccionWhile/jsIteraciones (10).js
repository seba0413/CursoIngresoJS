function Mostrar()
{

	var respuesta="si";
	var num;
	var numero;
	var negativos = 0;
	var positivos = 0;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var promedioPositivos = 0;
	var promedioNegativos = 0;
	var diferencia = 0;

	while(respuesta!="no")
	{
		num = prompt("Ingrese un numero");
		numero = parseInt(num);

		if (numero < 0)
		{
			negativos += numero;
			contadorNegativos++
		}			

		if (numero > 0) 
		{
			positivos += numero;
			contadorPositivos++;
		}

		if (numero == 0) {
			contadorCeros++;
		}	

		if (numero % 2 == 0) {
			contadorPares++;
		}

		respuesta = prompt("¿Desea ingresar otro numero?");	
	}

	promedioPositivos = positivos / contadorPositivos;
	promedioNegativos = negativos / contadorNegativos;
	diferencia = positivos - negativos;

	document.writeln("Suma de los negativos: " + negativos);
	document.writeln("Suma de los positivos: " + positivos);
	document.writeln("Cantidad de positivos: " + contadorPositivos);
	document.writeln("Cantidad de negativos: " + contadorNegativos);
	document.writeln("Cantidad de ceros: " + contadorCeros);
	document.writeln("Cantidad de numeros pares: " + contadorPares);
	document.writeln("Promedio de los positivos: " + promedioPositivos);
	document.writeln("Promedio de los negativos: " + promedioNegativos);
	document.writeln("Diferencia entre positivos y negativos: " + diferencia);
}