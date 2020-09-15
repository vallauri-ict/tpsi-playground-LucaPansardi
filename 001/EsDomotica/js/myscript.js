/* Pansardi Luca */
var ill = 0;
var statoTenda = 0;
//var furto = false;
var statoIrroigat = 0;
var emerg = 0;

$(document).ready(function () {


    //Div allarme**********************************
    let allarme = $("<div class='bordo'></div>") ;
    allarme.appendTo("#map");
    //**********************************************


    //Lampadine*****************************************************************
    let div;
    for (let i=1; i<=4; i++){
        div = $("<div id = 'lamp"+i+"' class='lamp' class = 'lampOff'></div>");
        div.appendTo($('#map'));
    }
    //*************************************************************************


    //Vialetto*********************************************************************
    let divVialetto = $("<div id = 'vialetto'></div>");
    $(divVialetto).css("backgroundImage", "url('img/vialetto.png')");
    divVialetto.appendTo($("#map"));
    //*****************************************************************************


    //Appendo a firstRow******************************************************************************************************
    for (let i=0; i<3; i++){
        $("#firstRow").append("<div class='pulsante' id='" + COMANDI[i].toString() + "'>"+ COMANDI[i].toString() + "</div>");
    }

    //Appendo a secondRow
    for (let i=3; i<6; i++){
        $("#secondRow").append("<div class='pulsante' id='" + COMANDI[i].toString() + "'>"+ COMANDI[i].toString() + "</div>");
    }
    //*************************************************************************************************************************


    //Funzione vialetto****************
    $("#Vialetto").click(function () {
       Vialetto();
    });
    //**********************************


    //Funzione illuminazione****************
    $("#Illuminazione").click(function () {
       Illuminazione();
    });
    //**************************************

    //Funzione tenda****************
    $("#Tenda").click(function () {
       Tenda();
    });
    //*******************************


    //****************************************************************
    /*let divIrrA = $("<div id = 'irr1'></div>");
    let divIrrB = $("<div id = 'irr2'></div>");
    $(divIrrA).css("backgroundImage", "url('img/irrigatore.png')");
    $(divIrrB).css("backgroundImage", "url('img/irrigatore.png')");
    divIrrA.appendTo($("#map"));
    divIrrB.appendTo($("#map"));*/
    //****************************************************************


    //Funzione irrigatore*******************
    $("#Irrigazione").click(function () {
       Irrigatori();
    });
    //**************************************


    //Funzione antifurto*********************************
    $("#Antifurto").click(function () {
        //if (furto == false){
            //for (let i = 0; i < 20; i++){
                setTimeout(function () {
                    $(".bordo").animate({right: '0px'});
                    $(".bordo").animate({bottom: '0px'});
                    $(".bordo").animate({right: '680px'});
                    $(".bordo").animate({top: '0px'});
                },100);
            //}
            //true
        //}
    })

    $("#Emergenza").click(function () {
        Emergenza();
    })
});
//****************************************************

//Emergenza*************************************************
function Emergenza() {
    //Creo puntatori
    let extra = $("#extra");
    let hider = $("#hider");
    //**********************

    //Creo bottoni
    let studio1 = $("<button id='stA' class='rights'>Studio 1</button>");
    let studio2 = $("<button id='stB' class='rights'>Studio 2</button>");
    let salaPrel = $("<button id='stC' class='rights'>Sala Prelievi</button>");
    //********************************************************************

    if (emerg == 0){
        extra.css("visibility", "visible");

        //appendo bottoni
        studio1.appendTo("#extra");
        studio2.appendTo("#extra");
        salaPrel.appendTo("#extra");
        //**************************

        //Creazione 1° percorso e div verde******************************
        let containerA = $("<div id='cont' class='container'></div>");
        containerA.appendTo("#map");
        let pedinaA = $("<div id='pedA' class='perc'></div>");
        pedinaA.appendTo("#cont");

        $("#stA").click(function () {
            setTimeout(function () {
                $("#pedA").animate({bottom: '0px'});
            }, 100)
        });
        //**************************************************************

        //Creo 2°percorso e div verde
        let containerB = $("<div id='contB' class='containerB'></div>");
        containerB.appendTo("#map");
        let pedinaB = $("<div id='pedB' class='perc'></div>");
        pedinaB.appendTo("#contB");

        $("#stB").click(function () {
            setTimeout(function () {
                $("#pedB").animate({bottom: '0px'});
            }, 100)
        });
        //***************************************************************

        //Creo 3°percorso e div verde
        let containerC = $("<div id='contC' class='containerC'></div>");
        containerC.appendTo("#map");
        let pedinaC = $("<div id='pedC' class='perc'></div>");
        pedinaC.appendTo("#contC");

        $("#stC").click(function () {
            setTimeout(function () {
                $("#pedC").animate({right: '450px'});
                $("#pedC").animate({top: '106px'});
            }, 100);
            setTimeout(function () {
                $("#pedA").animate({right: '100px'});
                $("#pedB").animate({right: '200px'});
                $("#pedC").animate({left: '-370px'});
            },100);
            setTimeout(function () {
                $("#pedA").animate({top: '-25px'});
                $("#pedB").animate({top: '-25px'});
                $("#pedC").animate({top: '-200px'});
            },100)
        });
        //***************************************************************
        emerg = 1;
    }
    else
    {
        extra.css("visibility", "hidden");
        hider.on("click", function () {
            extra.css("visibility", "hidden");
        });
        emerg = 0;
    }
}

/*function muoviA() {
    $("#stA").click(function () {
        setTimeout(function () {
            $("#pedA").animate({right: '400px'});
        }, 100)
    })
}*/
//***************************************************************


//Vialetto**********************************************************************
function Vialetto() {
    if (($("#vialetto").css("background-color")) == "rgb(255, 255, 255)")
    {
        $("#vialetto").css("background-color", "rgb(255, 0, 0)");
    }
    else
    {
        $("#vialetto").css("background-color", "rgb(255, 255, 255)");
    }
}
//*********************************************************************************


//*************************Vecchia function illuminazione***************************************************************
//function Illuminazione() {
    /*let extra = $("#extra");
    let divs = $("#extra").children();
    if(ill == 0)
    {
        for(let i = 0; i<LIGHTS.length;i++){
            let button = creaElemento("button","rights",LIGHTS[i],LIGHTS[i]);
            //button.on("click",accendi(i));
            extra.append(button);
        }
        $("#hider").on("click", function () {
            $("#extra").css("visibility","hidden");
        })
    }

    else{
    }
    extra.css("visibility","visible");

    function creaElemento(tipo,classe, id, text){
        let ele = $("<"+tipo+">"+text+"</"+tipo+">");
        ele.attr("id",id);
        ele.attr("class",classe);
        return ele;
    }

    function accendi(num){
        let luce = $("#lamp"+(num+1));
        switch(num){
            case 0:
                if(luce.css('background-color') == "rgb(255, 255, 255)")
                    alert("ciao");
                    //luce.removeClass("lampOf");
                    //luce.css("background-color","rgb(254, 255, 120)");
                    //luce.style()
                else
                    luce.css("background-color","rgb(255, 255, 255)");
                break;
            case 1:
                if(luce.css('background-color') == "rgb(255, 255, 255)")
                    luce.css("background-color","rgb(254, 255, 120)");
                else
                    luce.css("background-color","rgb(255, 255, 255)");
                break;
            case 2:
                if(luce.css('background-color') == "rgb(255, 255, 255)")
                    luce.css("background-color","rgb(254, 255, 120)");
                else
                    luce.css("background-color","rgb(255, 255, 255)");
                break;
            case 3:
                if(luce.css('background-color') == "rgb(255, 255, 255)")
                    luce.css("background-color","rgb(254, 255, 120)");
                else
                    luce.css("background-color","rgb(255, 255, 255)");
                break;
            case 4:
                luce = $(".lamp");
                luce.removeClass("lampOff");
                luce.addClass("lampOn");
                break;
            case 5:
                luce = $(".lamp");
                luce.removeClass("lampOn");
                luce.addClass("lampOff");
                break;
        }
    }*/
    /*let divs = $("#extra").children();
    if (ill == 0){
        for (let i = 0; i < LIGHTS.length; i++){
            let button = creaElem("button", "rights", LIGHTS[i], LIGHTS[i]);

        }
    }
}*/
//**********************************************************************************************************************


//Illuminazione*********************************************************************************************************
function Illuminazione(){
    let extra = $("#extra");

    //let divs = $("#extra").children();
    if(ill == 0)
    {
        for(let i = 0; i<LIGHTS.length;i++){
            let button = creaElemento("button","rights",LIGHTS[i],LIGHTS[i]);
            extra.append(button);
            button.on("click", function () {
                let luce = $("#lamp"+(i+1));
                switch(i){
                    case 0:
                        if(luce.css('background-color') == "rgb(255, 255, 255)") {
                            luce.removeClass("lampOff");
                            luce.addClass("lampOn");
                        }else{
                            luce.removeClass("lampOn");
                            luce.addClass("lampOff");
                        }
                        break;
                    case 1:
                        if(luce.css('background-color') == "rgb(255, 255, 255)") {
                            luce.removeClass("lampOff");
                            luce.addClass("lampOn");
                        }else{
                            luce.removeClass("lampOn");
                            luce.addClass("lampOff");
                        }
                        break;
                    case 2:
                        if(luce.css('background-color') == "rgb(255, 255, 255)") {
                            luce.removeClass("lampOff");
                            luce.addClass("lampOn");
                        }else{
                            luce.removeClass("lampOn");
                            luce.addClass("lampOff");
                        }
                        break;
                    case 3:
                        if(luce.css('background-color') == "rgb(255, 255, 255)") {
                            luce.removeClass("lampOff");
                            luce.addClass("lampOn");
                        }else{
                            luce.removeClass("lampOn");
                            luce.addClass("lampOff");
                        }
                    case 4:
                        luce = $(".lamp");
                        luce.removeClass("lampOff");
                        luce.addClass("lampOn");
                        break;
                    case 5:
                        luce = $(".lamp");
                        luce.removeClass("lampOn");
                        luce.addClass("lampOff");
                        break;
                }
            });
        }
        $("#hider").on("click", function () {
            $("#extra").css("visibility","hidden");
        });
        ill = 1;
    }
    extra.css("visibility","visible");
}

function creaElemento(tipo,classe, id, text){
    let ele = $("<"+tipo+">"+text+"</"+tipo+">");
    ele.attr("id",id);
    ele.attr("class",classe);
    return ele;
}
//**********************************************************************************************************************


//Irrigatori************************************************
function Irrigatori() {
    let degree = 20;
    let degrees = -20;
    let irr = $(".irrigatore");
    if (statoIrroigat == 0){
        if (irr.css("visibility") == "hidden"){
            irr.css("visibility", "visible");
                setTimeout(function () {
                    irr.css({WebkitTransform: 'rotate(' + degree + 'deg)'});
                    setTimeout(function () {
                        irr.css({WebkitTransform: 'rotate(' + degrees + 'deg)'});
                    }, 1000);
                },1000);
            statoIrroigat = 1;
        }
    }
    else
    {
        if (irr.css("visibility") == "visible"){
            irr.css("visibility", "hidden");
            statoIrroigat = 0;
        }
    }
}
//**************************************************************


//Tenda***************************************************
function Tenda() {
    let tenda = $("#tenda");
    let roll = $("#roll");
    if(statoTenda == 0)
    {
        if (roll.css("visibility") == "visible"){
            tenda.css("visibility","visible");
            roll.css("visibility","hidden");
            statoTenda = 1;
        }
    }else
    {
        if (tenda.css("visibility") == "visible"){
            tenda.css("visibility","hidden");
            roll.css("visibility","visible");
            statoTenda = 0;
        }
    }

}
//***********************************************************