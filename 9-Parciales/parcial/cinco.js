function Mostrar()
{
	var diaSemana = prompt("Ingrese un dia de la semana");

	switch(diaSemana)
	{
		case "sabado":
		case "domingo":
			alert("Es fin de semana");
			break;
		
		default:
			alert("A trabajar!");
			break;
	}

}
