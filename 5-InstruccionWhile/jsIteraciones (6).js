function Mostrar()
{
	var contador=0;
	var acumulador=0;
	
	while(contador < 5)
	{
		var pedirNumeros = prompt("Ingrese un numero: ");
		var numero = parseInt(pedirNumeros);
		acumulador = acumulador + numero;
		contador++;
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN