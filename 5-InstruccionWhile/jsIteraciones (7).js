function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta = "si";
	var num;
	var numero;

	while (respuesta == "si")
	{
		num = prompt("Ingrese un numero");
		numero = parseInt(num);
		acumulador+=numero;
		contador++;
		respuesta = prompt("¿Desea ingresar otro numero?")
	}	

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN