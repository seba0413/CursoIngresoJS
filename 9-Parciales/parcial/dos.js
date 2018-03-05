function Mostrar()
{
	var importe = prompt("Ingrese el importe:");
	importe = parseInt(importe);

	var importeFinal = importe * 1.21;

	document.getElementById('importeFinal').value = importeFinal;
  
}
