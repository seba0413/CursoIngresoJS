function Mostrar()
{
	var importe = prompt("Ingrese el importe: ");

	importe = parseInt(importe);

	var importeFinal = importe - ((25 * importe) / 100);

	document.getElementById('importeFinal').value = importeFinal;  
  
}
