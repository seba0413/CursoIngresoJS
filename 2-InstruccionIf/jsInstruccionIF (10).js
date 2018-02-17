function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random = Math.floor(Math.random()*10 + 1);
	
	if (random > 8) 
	{
		alert(random + ". EXCELENTE");
	}

	else
	{
		if (random > 3) 
		{
			alert(random + ". APROBÓ");

		}

		else
		{
			alert(random + ". Vamos, la proxima se puede");
		}

	}

}//FIN DE LA FUNCIÓN