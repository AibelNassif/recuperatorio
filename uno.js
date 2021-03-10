/**Una software factory registra la siguiente informacion de sus empleados:
Nombre,
edad (validar),
sexo (masculino - femenino - no binario),
puesto (programador - analista - Qa),
sueldo (entre 15000 y 70000).
La empresa desea saber: se debe informar de existir, o informar que no 
existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000 */
function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var puesto;
	var sueldo;
	var acumuladorSueldoProg;
	var acumuladorSueldoAna;
	var acumuladorSueldoQa;
	var contadorProg;
	var contadorAna;
	var contadorQa;
	var contadorFemenino;
	var promedioSueldoProg;
	var promedioSueldoAna;
	var promedioSueldoQa;
	var sueldoMax;
	var sexoSueldoMax;
	var flagSueldoMax=false;
	var nombreMujerSueldoMax;
	var flagSueldoMaxMujer=false;
	var sueldoMaxMujer;
	var contadorProgramadoresNoBinariosSueldo;
	var respuesta;
	
	acumuladorSueldoProg=0;
	acumuladorSueldoAna=0;
	acumuladorSueldoQa=0;
	contadorProg=0;
	contadorAna=0;
	contadorQa=0;
	contadorFemenino=0;
	contadorProgramadoresNoBinariosSueldo=0;

	while (respuesta!="si") 
	{
		nombre=prompt("ingrese un nombre");
		while(isNaN(nombre)==false || nombre=="")
		{
			nombre=prompt("ERROR. ingrese un nombre correcto");
		}

		edad=prompt("ingrese una edad");
		edad=parseInt(edad);
		while(isNaN(edad) || edad<18 || edad>115)
		{
			edad=prompt("ERROR. ingrese una edad entre 18 y 115");
			edad=parseInt(edad);
		}

		sexo=prompt("ingrese un sexo (masculino - femenino - no binario)");
		while(sexo!="masculino" && sexo!="femenino" && sexo!="no binario")
		{
			sexo=prompt("ERROR. ingrese un sexo correcto (masculino - femenino - no binario)");
		}

		puesto=prompt("ingrese un puesto (programador - analista - qa)");
		while(puesto!="programador" && puesto!="analista" && puesto!="qa")
		{
			puesto=prompt("ERROR. ingrese un puesto correcto (programador - analista - qa)");
		}

		sueldo=prompt("ingrese un sueldo");
		sueldo=parseInt(sueldo);
		while(isNaN(sueldo) || sueldo<15000 || sueldo>70000)
		{
			sueldo=prompt("ERROR. ingrese un sueldo entre 15000 y 70000");
			sueldo=parseInt(sueldo);
		}

		switch (puesto) {
			case "programador":
				acumuladorSueldoProg=sueldo+acumuladorSueldoProg;
				contadorProg++
				break;
			case "analista":
				acumuladorSueldoAna=sueldo+acumuladorSueldoAna;
				contadorAna++
				break;
			case "qa":
				acumuladorSueldoQa=sueldo+acumuladorSueldoQa;
				contadorQa++
				break;
		
		}

		if(flagSueldoMax==false || sueldoMax<sueldo) 
		{
			sueldoMax=sueldo;
			sexoSueldoMax=sexo;
			flagSueldoMax=true;
		}

		switch (sexo) {
			case "femenino":
				if(flagSueldoMaxMujer==false || sueldoMaxMujer<sueldo) 
				{
					contadorFemenino++;
					sueldoMaxMujer=sueldo;
					nombreMujerSueldoMax=nombre;
					flagSueldoMaxMujer=true;
				}
				break;
			case "no binario":
				if(sueldo<55001 && sueldo>19999)
				{
					contadorProgramadoresNoBinariosSueldo++
				}
				break;
		
		}

		respuesta=prompt("¿Desea finalizar la carga? si / no") /**FIN DEL SWITCH */
	}
	
	if(contadorProg==0) /* A */
	{
		alert("No se ingresaron programadores");
	}
		else if(contadorProg>0)
		{
			promedioSueldoProg=acumuladorSueldoProg/contadorProg;
			alert("El sueldo promedio de los programadores es de "+promedioSueldoProg);
		}
	if(contadorAna==0)
	{
		alert("No se ingresaron analistas")
	}
		else if(contadorAna>0)
		{
			promedioSueldoAna=acumuladorSueldoAna/contadorAna;
			alert("El sueldo promedio de los analistas es de "+promedioSueldoAna);
		}
	if(contadorQa==0)
	{
		alert("No se ingresaron quality assurance");
	}
		else if(contadorQa>0)
		{
			promedioSueldoQa=acumuladorSueldoQa/contadorQa;
			alert("El sueldo promedio de los quality assurance es de "+promedioSueldoQa);
		}

	alert("El sexo con el sueldo más alto es "+sexoSueldoMax); /* B */

	if(contadorFemenino==0)
	{
		alert("No se han ingresado mujeres")
	}
	else if(contadorFemenino>0)
	{
		alert("El nombre de la mujer con mayor sueldo es "+nombreMujerSueldoMax); /* C */
	}
	
	if(contadorProgramadoresNoBinariosSueldo==0)
	{
		alert("No se han ingresado programadores no binarios que ganen entre 20000 y 55000");
	}
	else if(contadorProgramadoresNoBinariosSueldo>0)
	{
		alert("La cantidad de programadores no binarios que cobran entre 20000 y 55000 es de "+contadorProgramadoresNoBinariosSueldo); /* D */
	}
		
}
