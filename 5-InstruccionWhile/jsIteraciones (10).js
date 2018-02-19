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

	document.write("Suma de los negativos: " + negativos);
	document.write("<br>" +"Suma de los positivos: " + positivos);
	document.write("<br>" +"Cantidad de positivos: " + contadorPositivos);
	document.write("<br>" +"Cantidad de negativos: " + contadorNegativos);
	document.write("<br>" +"Cantidad de ceros: " + contadorCeros);
	document.write("<br>" +"Cantidad de numeros pares: " + contadorPares);
	document.write("<br>" +"Promedio de los positivos: " + promedioPositivos);
	document.write("<br>" +"Promedio de los negativos: " + promedioNegativos);
	document.write("<br>" +"Diferencia entre positivos y negativos: " + diferencia);
}