

	
	function showQuestion1(){
        var div = document.getElementById("preg1");
        div.style.display = "block";
        current_question=1;
    }
    function hideQuestion1(){
        var div = document.getElementById("preg1");
        div.style.display = "none";
    }
    function hideQuestion2(){
        var div = document.getElementById("preg2");
        div.style.display = "none";
    }
    function showQuestion2(){
        var div = document.getElementById("preg2");
        div.style.display = "block";
        current_question=2;
    }

    function hideQuestion3(){
        var div = document.getElementById("preg3");
        div.style.display = "none";
    }

    function showQuestion3(){
        var div = document.getElementById("preg3");
        div.style.display = "block";
        current_question=3;        
    }

    function hideQuestion4(){
        var div = document.getElementById("preg4");
        div.style.display = "none";
    }

    function showQuestion4(){
        var div = document.getElementById("preg4");
        div.style.display = "block";
        current_question=4;
    }

    function hideQuestion5(){
        var div = document.getElementById("preg5");
        div.style.display = "none";
    }

    function showQuestion5(){
        var div = document.getElementById("preg5");
        div.style.display = "block";
        current_question=5;
        
    }
    function hideQuestion6(){
        var div = document.getElementById("preg6");
        div.style.display = "none";
    }

    function showQuestion6(){
        var div = document.getElementById("preg6");
        div.style.display = "block";
        current_question=6;
        
    }
    function hideQuestion7(){
        var div = document.getElementById("preg7");
        div.style.display = "none";
    }

    function showQuestion7(){
        var div = document.getElementById("preg7");
        div.style.display = "block";
        current_question=7;
        
    }
      function hideQuestion8(){
        var div = document.getElementById("preg8");
        div.style.display = "none";
    }

    function showQuestion8(){
        var div = document.getElementById("preg8");
        div.style.display = "block";
        current_question=8;
        
    }
    
  
    var pregunta_actual = 2;
        function detectarClic(){  
       // var izq = document.getElementById("izq");
        var der = document.getElementById("der");
           
            if (der.onclick) {

                if (pregunta_actual==1) {
                    displayQuestion1();
                    pregunta_actual++;                
                }else
                if (pregunta_actual==2) {
                    displayQuestion2();
                    pregunta_actual++; 
                }else
                if (pregunta_actual==3) {
                    displayQuestion3();
                    pregunta_actual++; 
                }else
                if (pregunta_actual==4) {
                    displayQuestion4();
                    pregunta_actual++; 
                }else
                if (pregunta_actual==5) {
                    displayQuestion5();
                    pregunta_actual++; 
                }else
                if (pregunta_actual==6) {
                    displayQuestion6();
                    pregunta_actual++; 
                }else
                if (pregunta_actual==7) {
                    displayQuestion7();
                    pregunta_actual++; 
                }else
                if (pregunta_actual==8) {
                    displayQuestion8();
                    pregunta_actual++; 
                }            
            }
        }
        
       
    function displayQuestion(){
        var izq = document.getElementById("izq");

        pregunta_actual--;

        if (izq.onclick) {

            if (pregunta_actual==9) {
                displayQuestion8();
            }else
            if (pregunta_actual==8) {             
                displayQuestion7();
            }else
            if (pregunta_actual==7) {             
                displayQuestion6();
            }else
            if (pregunta_actual==6) {             
                displayQuestion5();
            }else
            if (pregunta_actual==5) {             
                displayQuestion4();
            }else
            if (pregunta_actual==4) {             
                displayQuestion3();
            }else
            if (pregunta_actual==3) {
                displayQuestion2();
            }else
            if (pregunta_actual==2) {
                displayQuestion1();
            }
        }
    }


    function mostrarPrueba(){
        var prueba = document.getElementById("prueba");
        prueba.style.display = "none";
    }

    function displayQuestion1(){
	    showQuestion1();
	    hideQuestion2();
	    hideQuestion3();
	    hideQuestion4();
	    hideQuestion5();
	    hideQuestion6();
	    hideQuestion7();
	    hideQuestion8();
    }
    function displayQuestion2(){
        showQuestion2();
        hideQuestion1();
	    hideQuestion3();
	    hideQuestion4();
	    hideQuestion5();
	    hideQuestion6();
	    hideQuestion7();
	    hideQuestion8();
    }
    function displayQuestion3(){
        showQuestion3();
        hideQuestion1();
	    hideQuestion2();
	    hideQuestion4();
	    hideQuestion5();
	    hideQuestion6();
	    hideQuestion7();
	    hideQuestion8();
    }

    function displayQuestion4(){
        showQuestion4();
        hideQuestion1();
	    hideQuestion2();
	    hideQuestion3();
	    hideQuestion5();
	    hideQuestion6();
	    hideQuestion7();
	    hideQuestion8();
    }
    function displayQuestion5(){
        showQuestion5();
        hideQuestion1();
	    hideQuestion2();
	    hideQuestion3();
	    hideQuestion4();
	    hideQuestion6();
	    hideQuestion7();
	    hideQuestion8();
    }
    function displayQuestion6(){
        showQuestion6();
        hideQuestion1();
	    hideQuestion2();
	    hideQuestion3();
	    hideQuestion4();
	    hideQuestion5();
	    hideQuestion7();
	    hideQuestion8();
    }
     function displayQuestion7(){
        showQuestion7();
        hideQuestion1();
	    hideQuestion2();
	    hideQuestion3();
	    hideQuestion4();
	    hideQuestion5();
	    hideQuestion6();
	    hideQuestion8();
    }
     function displayQuestion8(){
        showQuestion8();
        hideQuestion1();
	    hideQuestion2();
	    hideQuestion3();
	    hideQuestion4();
	    hideQuestion5();
	    hideQuestion6();
	    hideQuestion7();
    }




    /*                   DERECHOS Y SOLUCIONES                    */



    
     document.getElementById("recomendacion").innerHTML = derechos.derecho;


    function respuesta(){



        var igualdad = document.getElementById("response1").value;
        var proteccion = document.getElementById("response2").value;
        var nacionalidad = document.getElementById("response3").value;
        var alimentacion = document.getElementById("response4").value;
        var educacion = document.getElementById("response5").value;
        var recreacion = document.getElementById("response6").value;
        var atencion = document.getElementById("response7").value;
        var trabajo = document.getElementById("response8").value;

        var respuesta = document.getElementById("respuesta");
        var recomendacion = document.getElementById("recomendacion");        
        recomendacion.style.display = "block";
        recomendacion.style.color = "white";   
        recomendacion.style.display = "inline-block";   
        respuesta.style.display = "block";
        respuesta.style.color = "white";  
        var entidad_recomendada="Felicidades tus derechos no han sido violados";

        var IGU  = "la igualdad";
        var PROT = "la protección";
        var NACI = "la nacionalidad";
        var ALIM = "la alimentación";
        var EDU  = "la educación";
        var RECR = "la recreación";
        var ATEN = "la atención";
        var TRAB = "el trabajo";

        
        recomendacion.innerHTML="Felicidades NO se te ha vulnerado ningún derecho.";
        var ICBF="el Instituto Colombiano de Bienestar Familiar - ICBF";
        var P_I_A="la Policía de Infancia y Adolescencia";
        var UNI="la Unicef";
        var FGN="la Fiscalía General de la Nación";
        var DC="la Defensa Civil";


       
       /*
           RESPUESTA SI = 0
           RESPUESTA NO = 1

            DERECHOS VIOLADOS            PREGUNTA 1    PREGUNTA 2    PREGUNTA 3    PREGUNTA 4    PREGUNTA 5    PREGUNTA 6    PREGUNTA 7    PREGUNTA 8

            IGUALDAD                        0              1             1             1              1            1             1              1    
            PROTECCIÓN                      1              0             1             1              1            1             1              1   
            NACIONALIDAD                    1              1             0             1              1            1             1              1   
            ALIMENTACIÓN                    1              1             1             0              1            1             1              1   
            EDUCACIÓN                       1              1             1             1              0            1             1              1   
            RECREACIÓN                      1              1             1             1              1            0             1              1   
            ATENCIÓN                        1              1             1             1              1            1             0              1   
            TRABAJO                         1              1             1             1              1            1             1              0   
        
        Nota: Sólo funciona para consultar la violación de un derecho a la vez.
       */

        
        if (igualdad==0 && proteccion==1 && nacionalidad==1 && alimentacion==1 && educacion==1 && recreacion==1 && atencion==1 && trabajo==1){
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
       
       
        var current_question=1;
        var response_header="Recomendación <br>";

       

         respuesta.innerHTML=  response_header;
         recomendacion.innerHTML=  "Te han vulnerado el derecho a " + derecho_violado + ", puedes dirigirte a " + entidad_recomendada;


    }


