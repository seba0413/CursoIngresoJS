function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random = Math.floor(Math.random()*10);
	if (random == 9 || random == 10) {
		alert(random + ". EXCELENTE");
	}

	else if (random >= 4) {
		alert(random + ". APROBÓ");
	}

	else if (random < 4) {
		alert(random + ". Vamos, la proxima se puede");
	}



}//FIN DE LA FUNCIÓN