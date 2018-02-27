/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/

//var respuesta = "si";
var num;
var numero;

function ComenzarIngreso () 
{
	num = document.getElementById('numero').value;
	numero = parseInt(num);
}


function NumerosPares()
{
	var contadorDePares = 0;

	ComenzarIngreso();
	while(num > 0)
	{
		if (num % 2 == 0) 
		{
			contadorDePares++;
		}

		num--;
	}

	alert("La cantidad de numeros pares es: " + contadorDePares);
}

function NumerosImpares() 
{
	var contadorDeImpares = 0;

	ComenzarIngreso();
	while(num > 0)
	{
		if (num % 2 != 0) 
		{
			contadorDeImpares++;
		}

		num--;
	}

	alert("La cantidad de numeros impares es: " + contadorDeImpares);	
}

function NumerosDivisibles()
{
	ComenzarIngreso();
	var cantidadDeDivisibles = 0;	
	var divisibles = num / 2;

	while (divisibles > 0 )
	{
		if (numero % divisibles == 0)  
		{
			if (divisibles > 1 && divisibles < 101) 
			{
				cantidadDeDivisibles++;
				console.log(divisibles);
			}
		}

		divisibles--;
	}

	alert("La cantidad de divisibles es: " + cantidadDeDivisibles);
}

function VerificarPrimo()
{
	ComenzarIngreso();
	var cantidadDeDivisibles = 0;
	var divisibles = 2;

	while(divisibles <= num / 2)
	{
		if (num % divisibles == 0) 
		{
			cantidadDeDivisibles++;
		}

		divisibles++;
	}

	if (cantidadDeDivisibles != 0) 
	{
		alert("El numero no es primo");
	}

	else
	{
		alert("Es un numero primo");
	}
}

function NumerosPrimos()
{
	ComenzarIngreso();
	var contadorDeDivisibles = 0;
	var contadorDePrimos = 0;
	var divisibles;

	while(num > 0)
	{
		divisibles = 2;
		contadorDeDivisibles = 0;

		while(divisibles <= num / 2)
		{
			if (num % divisibles == 0) 
			{
				contadorDeDivisibles++;
			}

			divisibles++;
		}

		if (contadorDeDivisibles == 0) 
		{
			contadorDePrimos++;
			console.log(num);
		}

		num--;
	}

	alert("La cantidad de numeros primos es: " + contadorDePrimos);
}
