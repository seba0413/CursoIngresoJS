function Mostrar()
{
	var largo = document.getElementById('alrgo').value;
	largo = parseInt(largo);

	var ancho = document.getElementById('ancho').value;
	ancho = parseInt(ancho);

	var perimetro = (largo * 2) + (ancho * 2);
	var alambre = perimetro * 3;

	alert("Se necesitan " + alambre + " metros de alambre");

}
