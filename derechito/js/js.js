
	pregunta_actual = 0;

	function iniciar_test_smart(){

		var nav = document.getElementById("nav");
		var descripcion = document.getElementById("descripcion");

		// Cargar elementos de smartphone

		var smart   = document.getElementById("smart");
		var iniciar = document.getElementById("iniciar-smart");
		var cuento  = document.getElementById("cuento-smart");
		var ayuda   = document.getElementById("ayuda-smart");

		//var preg1   = document.getElementById("cont-preg1");
		var opc_smart = document.getElementById("smart");
		//var test      = document.getElementById("test");

		var preg1 = document.getElementById("preg1");
		var preg2 = document.getElementById("preg2");
		var preg3 = document.getElementById("preg3");
		var preg4 = document.getElementById("preg4");
		var preg5 = document.getElementById("preg5");
		var preg6 = document.getElementById("preg6");
		var preg7 = document.getElementById("preg7");
		var preg8 = document.getElementById("preg8");

		//var consultar = document.getElementById("consultar");
		var atras     = document.getElementById("atras");

		var adelante = document.getElementById("adelante");	

		pregunta_actual++;
		smart.style.display="none";	
		preg1.style.display="inline-block";
		descripcion.innerHTML="Pregunta "+ pregunta_actual;
		nav.style.display="block";
		
	}

	function iniciar_test_tablet(){

		// Cargar elementos de tablet

		var opc_tablet     = document.getElementById("opc_tablet");
		var iniciar_tablet = document.getElementById("iniciar-tablet");
		var cuento_tablet  = document.getElementById("cuento-tablet");
		var ayuda_tablet   = document.getElementById("ayuda-tablet");

		opc_tablet.style.display="none";
		preg1.style.display="block";
		nav.style.display="block";
		adelante.style.display="block";
		descripcion.style.display="inline";
		pregunta_actual++;
		descripcion.innerHTML="Pregunta "+ pregunta_actual;		
	}

	function iniciar_mini(){
		var opciones     = document.getElementById("opciones");

		var iniciar_mini = document.getElementById("iniciar_mini");
		var cuento_mini  = document.getElementById("cuento_mini");
		var ayuda_mini   = document.getElementById("ayuda_mini");

		opciones.style.display="none";

		preg1.style.display="block";
		

	}




	function avanzar(){
		if(pregunta_actual==1){
			ocultar1();
			mostrar2();
			pregunta_actual++;
			descripcion.innerHTML="Pregunta "+ pregunta_actual;
		}else
		if(pregunta_actual==2){
			ocultar2();
			mostrar3();
			pregunta_actual++;
			descripcion.innerHTML="Pregunta "+ pregunta_actual;
		}else
		if(pregunta_actual==3){
			ocultar3();
			mostrar4();
			pregunta_actual++;
			descripcion.innerHTML="Pregunta "+ pregunta_actual;
		}else
		if(pregunta_actual==4){
			ocultar4();
			mostrar5();
			pregunta_actual++;
			descripcion.innerHTML="Pregunta "+ pregunta_actual;
		}else
		if(pregunta_actual==5){
			ocultar5();
			mostrar6();
			pregunta_actual++;
			descripcion.innerHTML="Pregunta "+ pregunta_actual;
		}else
		if(pregunta_actual==6){
			ocultar6();
			mostrar7();
			pregunta_actual++;
			descripcion.innerHTML="Pregunta "+ pregunta_actual;
		}else
		if(pregunta_actual==7){
			ocultar7();
			mostrar8();
			pregunta_actual++;
			descripcion.innerHTML="Pregunta "+ pregunta_actual;
			adelante.innerHTML="Consultar";
		}else	
		if(pregunta_actual==8){
			respuesta();
		}
	}
	function res(){
		alert("siiiiiii");

	}

	function retroceder(){
		if(pregunta_actual==1){
			mostrar1();
			descripcion.innerHTML="Pregunta "+ pregunta_actual;
			alert("¿Desea salir del test?");
			adelante.innerHTML="Siguiente";
			atras.href="index.html";
		}else
		if(pregunta_actual==2){
			ocultar2();
			mostrar1();
			pregunta_actual--;
			descripcion.innerHTML="Pregunta "+ pregunta_actual;
			adelante.innerHTML="Siguiente";
		}else
		if(pregunta_actual==3){
			ocultar3();
			mostrar2();
			pregunta_actual--;
			descripcion.innerHTML="Pregunta "+ pregunta_actual;
			adelante.innerHTML="Siguiente";
		}else
		if(pregunta_actual==4){
			ocultar4();
			mostrar3();
			pregunta_actual--;
			descripcion.innerHTML="Pregunta "+ pregunta_actual;
			adelante.innerHTML="Siguiente";
		}else
		if(pregunta_actual==5){
			ocultar5();
			mostrar4();
			pregunta_actual--;
			descripcion.innerHTML="Pregunta "+ pregunta_actual;
			adelante.innerHTML="Siguiente";
		}else
		if(pregunta_actual==6){
			ocultar6();
			mostrar5();
			pregunta_actual--;
			descripcion.innerHTML="Pregunta "+ pregunta_actual;
			adelante.innerHTML="Siguiente";
		}else
		if(pregunta_actual==7){
			ocultar7();
			mostrar6();
			pregunta_actual--;
			descripcion.innerHTML="Pregunta "+ pregunta_actual;
			adelante.innerHTML="Siguiente";
		}
		else
		if(pregunta_actual==8){
			ocultar8();
			mostrar7();
			pregunta_actual--;
			descripcion.innerHTML="Pregunta "+ pregunta_actual;
			adelante.innerHTML="Siguiente";
		}	
	}


	 function respuesta(){

        var igualdad = document.getElementById("response1").value;
        var proteccion = document.getElementById("response2").value;
        var nacionalidad = document.getElementById("response3").value;
        var alimentacion = document.getElementById("response4").value;
        var educacion = document.getElementById("response5").value;
        var recreacion = document.getElementById("response6").value;
        var atencion = document.getElementById("response7").value;
        var trabajo = document.getElementById("response8").value;

        var recom = document.getElementById("recomendacion");

        // Posibles derechos violados

        var IGU  = "la igualdad";
        var PROT = "la protección";
        var NACI = "la nacionalidad";
        var ALIM = "la alimentación";
        var EDU  = "la educación";
        var RECR = "la recreación";
        var ATEN = "la atención";
        var TRAB = "el trabajo";

        // Posibles entidades a recurrir

        var ICBF="el Instituto Colombiano de Bienestar Familiar - ICBF";
        var P_I_A="la Policía de Infancia y Adolescencia";
        var UNI="la Unicef";
        var FGN="la Fiscalía General de la Nación";
        var DC="la Defensa Civil";
        //var entidad_recomendada="Felicidades tus derechos no han sido violados";
        
        //recom.innerHTML="Felicidades NO se te ha vulnerado ningún derecho.";

       

        if (igualdad==0 && proteccion==1 && nacionalidad==1 && alimentacion==1 && educacion==1 && recreacion==1 && atencion==1 && trabajo==1) {
        	derecho_violado = IGU;
            entidad_recomendada=UNI;   
        }
        if (igualdad==1 && proteccion==0 && nacionalidad==1 && alimentacion==1 && educacion==1 && recreacion==1 && atencion==1 && trabajo==1){
            derecho_violado = PROT;
            entidad_recomendada=ICBF;        
        }
        if (igualdad==1 && proteccion==1 && nacionalidad==0 && alimentacion==1 && educacion==1 && recreacion==1 && atencion==1 && trabajo==1){
            derecho_violado = NACI;
            entidad_recomendada=P_I_A;        
        }
        if (igualdad==1 && proteccion==1 && nacionalidad==1 && alimentacion==0 && educacion==1 && recreacion==1 && atencion==1 && trabajo==1){
            derecho_violado = ALIM;
            entidad_recomendada=ICBF;        
        }
        if (igualdad==1 && proteccion==1 && nacionalidad==1 && alimentacion==1 && educacion==0 && recreacion==1 && atencion==1 && trabajo==1){
            derecho_violado = EDU;
            entidad_recomendada=ICBF;        
        }
        if (igualdad==1 && proteccion==1 && nacionalidad==1 && alimentacion==1 && educacion==1 && recreacion==0 && atencion==1 && trabajo==1){
            derecho_violado = RECR;
            entidad_recomendada=P_I_A;        
        }
        if (igualdad==1 && proteccion==1 && nacionalidad==1 && alimentacion==1 && educacion==1 && recreacion==1 && atencion==0 && trabajo==1){
            derecho_violado = ATEN;
            entidad_recomendada=DC;        
        }
        if (igualdad==1 && proteccion==1 && nacionalidad==1 && alimentacion==1 && educacion==1 && recreacion==1 && atencion==1 && trabajo==0){
            derecho_violado = TRAB;
            entidad_recomendada=ICBF;        
        }

        recom.style.display="block";
        recom.innerHTML= "Se te ha vulnerado el derecho a " + derecho_violado + " debes dirigirte a " + entidad_recomendada;

        //alert("Se está ejecutando la función respuesta");
    }




	









	// Mostrar preguntas

	function mostrar1(){
		preg1.style.display="block";
	}
	function mostrar2(){
		preg2.style.display="block";
	}
	function mostrar3(){
		preg3.style.display="block";
	}
	function mostrar4(){
		preg4.style.display="block";
	}
	function mostrar5(){
		preg5.style.display="block";
	}
	function mostrar6(){
		preg6.style.display="block";
	}
	function mostrar7(){
		preg7.style.display="block";
	}
	function mostrar8(){
		preg8.style.display="block";
	}

	// Ocultar preguntas


	function ocultar1(){
		preg1.style.display="none";
	}
	function ocultar2(){
		preg2.style.display="none";
	}
	function ocultar3(){
		preg3.style.display="none";
	}
	function ocultar4(){
		preg4.style.display="none";
	}
	function ocultar5(){
		preg5.style.display="none";
	}
	function ocultar6(){
		preg6.style.display="none";
	}
	function ocultar7(){
		preg7.style.display="none";
	}
	function ocultar8(){
		preg8.style.display="none";
	}
