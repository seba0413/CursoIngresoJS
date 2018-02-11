function Mostrar()
{

	var positivo=0;
	var negativo=1;
	var num;
	var numero;

	var respuesta='si';

	while (respuesta == "si")
	{
		num = prompt("Ingrese un numero");
		numero = parseInt(num);
		if (numero >= 0) 		
			positivo+=numero;
		
		else		
			negativo = numero * negativo;
		

		respuesta = prompt("¿Quiere ingresar otro numero?");
	}	

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN