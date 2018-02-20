/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/



function ComenzarIngreso () 
{
	var respuesta = "si";
	var num;
	var numero;
	var cantidadDeImpares;

	while (respuesta != "no")
	{
		num = prompt("Ingrese un numero positivo: ");
		numero = parseInt(num);
 	
	}
}


function NumerosPares()
{
	var respuesta = "si";
	var num;
	var numero;
	var cantidadDePares;

	/*while(respuesta != "no")
	{
		num = prompt("Ingrese un numero positivo");
		numero = parseInt (num);

		if (numero % 2 == 0) 
		{
			cantidadDePares = numero / 2;
		}

		else
		{
			cantidadDePares = (numero - 1) / 2;
		}

		document.getElementById('numero').value = "Cantidad de pares: " + cantidadDePares;
		//alert("Cantidad de numeros pares: " + cantidadDePares);
		respuesta = prompt("¿Desea ingresar otro numero?");
	}*/

	num = document.getElementById('numero').value;
	numero = parseInt(num);

	if (numero % 2 == 0) 
	{
		cantidadDePares = numero / 2;
	}

	else
	{
		cantidadDePares = (numero - 1) / 2;
	}

	alert("Cantidad de numeros pares: " + cantidadDePares);
}

function NumerosImpares() 
{
	var respuesta = "si";
	var num;
	var numero;
	var cantidadDeImpares;

	while (respuesta != "no")
	{
		num = prompt("Ingrese un numero positivo: ");
		numero = parseInt(num);

		if (numero % 2 == 0) 
		{
			cantidadDeImpares = numero / 2;
		}

		else 
		{
			cantidadDeImpares = (numero + 1) / 2;
		}

		document.getElementById('numero').value = "Cantidad de Impares: " + cantidadDeImpares;

		respuesta = prompt("¿Desea ingresar otro numero?");
	}
}

function NumerosDivisibles()
{
	


}
