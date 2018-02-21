function Mostrar()
{
	var numeroRandom;
	var contador0 = 0; 
	var contador1 = 0;
	var contador2 = 0;
	var contador3 = 0;
	var contador4 = 0;
	var contador5 = 0;
	var contador6 = 0;
	var contador7 = 0;
	var contador8 = 0;
	var contador9 = 0;
	var porcentaje0;
	var porcentaje1;
	var porcentaje2;
	var porcentaje3;
	var porcentaje4;
	var porcentaje5;
	var porcentaje6;
	var porcentaje7;
	var porcentaje8;
	var porcentaje9;
	var iteraciones = 100000;


	for(contador = 0; contador < iteraciones; contador++)
	{
		numeroRandom = Math.floor(Math.random() * 10);
		//document.write(numeroRandom + " ");

		switch(numeroRandom)
		{
			case 0:
				contador0++;
				break;
			case 1:
				contador1++;
				break;
			case 2:
				contador2++;
				break;
			case 3:
			if (contador % 2 == 0 && contador < (interaciones / 2)) 
			{
				contador3++;
				contador++;
			}
				contador3++;
				break;
		    case 4:
				contador4++;
				break;
			case 5:
				contador5++;
				break;
			case 6:
				porcentaje6 = (contador6 / iteraciones) * 100;
				if (porcentaje6 > 7) 
				{
					contador--;
					continue;
				}
				else
				{
					contador6++;
				}	
				break;
			case 7:
				contador7++;
				break;
			case 8:
				contador8++;
				break;
			case 9:
				contador9++;
				break;
		}// switch(numeroRandom)
	}//for(contador = 0; contador < 100; contador++)

	porcentaje0 = (contador0 / (contador + 1) * 100);
	porcentaje0 = Math.round(porcentaje0);
	document.write("<br> 0: " + contador0 + " -- " + porcentaje0 + "%");

	porcentaje1 = (contador1 / (contador + 1) * 100);
	porcentaje1 = Math.round(porcentaje1);
	document.write("<br> 1: " + contador1 + " -- " + porcentaje1 + "%");

	porcentaje2 = (contador2 / (contador + 1) * 100);
	porcentaje2 = Math.round(porcentaje2);
	document.write("<br> 2: " + contador2 + " -- " + porcentaje2 + "%");

	porcentaje3 = (contador3 / (contador + 1) * 100);
	porcentaje3 = Math.round(porcentaje3);
	document.write("<br> 3: " + contador3 + " -- " + porcentaje3 + "%");

	porcentaje4 = (contador4 / (contador + 1) * 100);
	porcentaje4 = Math.round(porcentaje4);
	document.write("<br> 4: " + contador4 + " -- " + porcentaje4 + "%");

	porcentaje5 = (contador5 / (contador + 1) * 100);
	porcentaje5 = Math.round(porcentaje5);
	document.write("<br> 5: " + contador5 + " -- " + porcentaje5 + "%");

	porcentaje6 = (contador6 / (contador + 1) * 100);
	porcentaje6 = Math.round(porcentaje6);
	document.write("<br> 6: " + contador6 + " -- " + porcentaje6 + "%");

	porcentaje7 = (contador7 / (contador + 1) * 100);
	porcentaje7 = Math.round(porcentaje7);
	document.write("<br> 7: " + contador7 + " -- " + porcentaje7 + "%");

	porcentaje8 = (contador8 / (contador + 1) * 100);
	porcentaje8 = Math.round(porcentaje8);
	document.write("<br> 8: " + contador8 + " -- " + porcentaje8 + "%");

	porcentaje9 = (contador9 / (contador + 1) * 100);
	porcentaje9 = Math.round(porcentaje9);
	document.write("<br> 9: " + contador9 + " -- " + porcentaje9 + "%");	
	

}// Fin de la funcion