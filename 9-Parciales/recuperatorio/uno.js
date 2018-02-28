
function Mostrar()
{
	var base = document.getElementById('laBase').value;

	base = parseInt(base);

	var superficie = base * base;

	alert("La superficie del cuadrado es: " + superficie);
}
