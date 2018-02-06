/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var importe = document.getElementById('importe').value;
	var enteroImporte = parseInt(importe);

	var resultado = enteroImporte - (enteroImporte / 4);
	
	document.getElementById('resultado').value = resultado;
		
	
}
