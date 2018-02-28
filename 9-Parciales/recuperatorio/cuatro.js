function Mostrar()
{
	var numero1 = prompt("Ingrese un numero: ");
	numero1 = parseInt(numero1);

	var numero2 = prompt("Ingrese otro numero: ");
	numero2 = parseInt(numero2);

	var suma = numero1 + numero2;

	if (suma == 0) 
	{
		document.write("El resultado de la suma es 0");
	}
	else
	{
		if (suma > 0) 
		{
			document.write("El resultado de la suma es positivo");
		}
		else
		{
			document.write("El resultado de la suma es negativo");
		}
	}
}
