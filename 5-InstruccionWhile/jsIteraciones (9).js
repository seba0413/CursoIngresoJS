function Mostrar()
{
	var maximo = 0;
	var minimo = 1000000;
	var num;
	var numero;
	var respuesta = "si";

	while (respuesta == "si")
	{
		num = prompt("Ingrese un numero");
		numero = parseInt(num);

		if (numero > maximo) 
			maximo = numero;

		if (numero < minimo)
			minimo = numero;

		respuesta = prompt("¿Desea ingresar otro numero?");
	}

	

	document.getElementById('maximo').value = maximo;	
	document.getElementById('minimo').value = minimo;
	
}//FIN DE LA FUNCIÓN