function Mostrar()
{
	var precio1 = document.getElementById('precioUno').value;
	var precio2 = document.getElementById('precioDos').value;
	var precio3 = document.getElementById('precioTres').value;

	precio1 = parseInt(precio1);
	precio2 = parseInt(precio2);
	precio3 = parseInt(precio3);

	var suma = precio1 + precio2 + precio3;
	var promedio = suma / 3;

	alert("La suma de los numeros es: " + suma + ". El promedio es: " + promedio);


}
