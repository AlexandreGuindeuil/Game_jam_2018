var test = true;
var test = true;
var etatVirus = 0;
var compteur;
var compteuri = 0;
var chemin = window.location.pathname; //chemin reçoit le chemin de l'url, c'est-à-dire /article/1.
var url = window.location.href; //la variable url reçoit l'URL courante, c'est-à-dire http://www.example.com/article/1.
var ancienScore1 = url.split("=")[1];
var i = 0;
// Mouvement des joueurs
$(document).keydown(function (e) {
    var touche = e.which;
    var avionY = parseInt($("#avion").css("top"));
    var avionX = parseInt($("#avion").css("left"));
    switch (touche) {
        case 38:
            if (avionY >= 20) {
                $("#avion").css('top', "-=25px");
            }
            break;
        case 40:
            if (avionY < 550) {
                $("#avion").css('top', "+=25px");
            }
            break;
        case 37:
            if (avionX > 20) {
                $("#avion").css('left', "-=25px");
            }
            break;
        case 39:
            if (avionX < 1350) {
                $("#avion").css('left', "+=25px");
            }
            break;
        case 32:
            $("#avion").attr("src","images/virusInvincible.png");
    }

});
var score2 = 1000;
function lancerIntro2(){
    $("#intro2").hide();
    $("#wrapper").fadeIn(1000);
    $("#score2").text("Niveau 2: "+score2+" Points")
    $("#score1").text("Niveau 1: "+ancienScore1+" Points")
    ciel();
    rocket();
    rocket2();
    rocket3();
    rocket4();
    setInterval(collision, 16);
    setInterval(collisioncarre,16);
    decompte();
    setInterval(togoal,16);
    carre();
<<<<<<< Updated upstream
    setInterval(collisioncarre,16);
    setInterval(collisioncarre2,16);
=======


>>>>>>> Stashed changes
}




$(document).ready(function () {
});

function btnTest(){
<<<<<<< Updated upstream
    window.location.replace("index3.html?score1="+ancienScore1+"&score2="+score2);
=======
    lastsecondes();
>>>>>>> Stashed changes
}

function togoal(){
    var avionX = parseInt($("#avion").css("left"));
    if (avionX > 1200
        && test === true) {
        console.log("togoal");
        reussite();

        test = false;
    }

}


function compteur() {
    i++;
    $("#info").text(i);
    console.log(i);
}

//Pour le timer et la victoire
function decompte() {
    compteuri++;
    console.log(compteuri);
    // $("#timer").text = 61 - compteuri;
    $("#timer").text(61 - compteuri);

    compteur2 = setTimeout(decompte, 1000);
    $("#progressbar").val(compteuri);
    if (compteuri == 50) {
<<<<<<< Updated upstream
      $(".alert").css("display","block")
      carre2()
    } else if (compteuri == 61) {
      $(".alert").css("display","none")
    } else {
      return false
=======
        lastsecondes();
>>>>>>> Stashed changes
    }
}

//Dernières secondes : affichage carré
function lastsecondes(){
    $(".alert").css("display","block");


}

// Pour le défilement du ciel
function ciel() {
    $("#principale").animate({
            backgroundPosition: "-=2000px"
        },
        40000,
        "linear", ciel);
}
//////////////
//TEXT ALERT//
//////////////

window.setInterval(function(){
  $(".alert").toggleClass("red")
},500);

/////////////////
// LES MOUVEMENTS DES PROJECTILES
/////////////////

//CARRE
function carre(){
    console.log("carre");

    var y = Math.floor((Math.random() * 390) + 10);
    $(".vague").css({
        left: "1400px",
        top:"0px"
    })
    $(".vague").animate({
        left: "-400px",
        top : "600px"
    }, 6000).animate({
      left: "-200px",
      top : "200px"
    },3000).animate({
      left: "1400px",
      top : "200px"
    },6000).animate({
      left: "1400px",
      top : "600px"
    },3000).animate({
      left: "-200px",
      top : "-200px"
    },6000)

};


<<<<<<< Updated upstream
///
//CARRE
function carre2(){
    console.log("carre2");

    var y = Math.floor((Math.random() * 390) + 10);
    $(".vague2").css({
        left: "100px",
        top:"-200px"
    })
    $(".vague2").animate({
        left: "100px",
        top : "700px"
    }, 2000).animate({
      left: "400px",
      top : "700px"
    },2000).animate({
      left: "400px",
      top : "-200px"
    },2000).animate({
      left: "600px",
      top : "-200px"
    },2000).animate({
      left: "600px",
      top : "700px"
    },2000).animate({
      left: "800px",
      top : "700px"
    },2000).animate({
      left: "800px",
      top : "-200px"
    },2000).animate({
      left: "1200px",
      top : "-200px"
    },2000).animate({
      left: "1200px",
      top : "7000px"
    },2000)

};


///
function callback_carre() {
    var y2 = Math.floor((Math.random() * 390) + 10);
    $(".carre").css({
        left: "700px",
        top: y2
    });
    test = true;
    setTimeout(carre);
}

=======
>>>>>>> Stashed changes
//DROITE GAUCHE//
function rocket(){
    $(".rocket").each(function(i) {
        var y = Math.floor((Math.random() * 1000) + 10);
        $(this).css({
            left: "1500px"
        })
        $(this).delay(800).animate({
            left: "-200px",
            top: y
        },5800,callback_rocket)
    });
}
function callback_rocket() {
    $(".rocket").each(function(i){
        var y2 = Math.floor((Math.random() * 390) + 10);
        $(this).css({
            left: "1200px",
            top: y2
        });
        test = true;
        setTimeout(rocket);

    })
}

// GAUCHE DROITE //
function rocket2(){
    $(".rocket2").each(function(i){

        $(this).css({
            left:"-200px",
            top :"120px"
        })

        var y = Math.floor((Math.random() * 700) + 10);

        $(this).delay(800).animate({
            left: "1600px",
            top: y
        },10000,callback_rocket2)
    });
};
function callback_rocket2() {
    console.log("test")
    $(".rocket2").each(function(i){
        var y2 = Math.floor((Math.random() * 700) + 10);
        $(this).css({
            left: "-100px",
            top: y2
        });
        test = true;
        setTimeout(rocket2);

    })
}

// HAUT BAS //
function rocket3(){
    //console.log("bonjour")
    $(".rocket3").each(function(i){
        var y3 = Math.floor((Math.random() * 390) + 10);
        $(this).css({
            top :"-100px",
            left: y3
        })

        var y3 = Math.floor((Math.random() * 390) + 10);

        $(this).delay(300).animate({
            left: y3,
            top: "1200px"
        },5000,callback_rocket3)
    });
};

function callback_rocket3() {
    console.log("bonjour2")
    $(".rocket3").each(function(i){
        var y3 = Math.floor((Math.random() * 390) + 10);
        $(this).css({
            left: y3,
            top: "-100px"
        });
        test = true;
        setTimeout(rocket3);

    })
}

// HAUT BAS 2 //
function rocket4(){
    console.log("rocket4");
    $(".rocket4").each(function(i){
        var y3 = Math.floor((Math.random() * 390) +600);
        $(this).css({
            top :"-150px",
            left: y3
        })

        var y3 = Math.floor((Math.random() * 900) + 10);

        $(this).delay(300).animate({
            left: y3,
            top: "1200px"
        },4000,callback_rocket4)
    });
}

function callback_rocket4() {
    $(".rocket4").each(function(i){
        var y3 = Math.floor((Math.random() * 390) + 600);
        $(this).css({
            left: y3,
            top: "-200px"
        });
        test = true;
        setTimeout(rocket4);

    })
}




function bruitage() {
    $(".bruitage").trigger('play');
}

function boom() {

    $(".boom").children("img").attr('src', 'img/200w.gif');
    setTimeout(function () {
        $(".boom").children("img").attr('src', '')
    }, 800);


}


var antiCorps = $(".tailleP");

function collision() {
    for (var i = 0; i < $(".tailleP").length; i++) {
        $(".tailleP").each(function(){
            var avionY = parseInt($("#avion").css("top"));
            var avionX = parseInt($("#avion").css("left"));
            var rocketY = parseInt($(this).css("top"));
            var rocketX = parseInt($(this).css("left"));

            rocketX = rocketX - 20;
            // console.log("avionY" + avionY);
            //    console.log("avionX" + avionX);
            //    console.log("rocketY" + rocketY);
            //    console.log("rocketX" + rocketX);

            var rectavion = {
                x: avionX,
                y: avionY,
                width: 50,
                height: 50
            }
            var rectmissile = {
                x: rocketX,
                y: rocketY,
                width: 30,
                height: 10
            }
            if (rectavion.x < rectmissile.x + rectmissile.width &&
                rectavion.x + rectavion.width > rectmissile.x &&
                rectavion.y < rectmissile.y + rectmissile.height &&
                rectavion.height + rectavion.y > rectmissile.y && test === true) {
                compteur();
                changeetat();
                bruitage();
                boom();
                test = false;
            }
        })
    }
};



function collisioncarre() {
    //console.log("carre");
            var avionY = parseInt($("#avion").css("top"));
            var avionX = parseInt($("#avion").css("left"));
            var rocketY = parseInt($("#vague").css("top"));
            var rocketX = parseInt($("#vague").css("left"));

            rocketX = rocketX - 20;
             // console.log("avionY" + avionY);
             //    console.log("avionX" + avionX);
             //    console.log("rocketY" + rocketY);
             //    console.log("rocketX" + rocketX);

            var rectavion = {
                x: avionX,
                y: avionY,
                width: 50,
                height: 50
            }
            var rectmissile = {
                x: rocketX,
                y: rocketY,
                width: 100,
                height: 100
            }
    // console.log(rectmissile.x);
    // console.log(rectmissile.y);

            if (rectavion.x < rectmissile.x + rectmissile.width &&
                rectavion.x + rectavion.width > rectmissile.x &&
                rectavion.y < rectmissile.y + rectmissile.height &&
                rectavion.height + rectavion.y > rectmissile.y && test === true) {
                console.log("collision");
                fctmort();
                test = false;
                compteur();
                changeetat();
                bruitage();
                boom();
                test = false;
            }


};
////colision carré 2
function collisioncarre2() {
    //console.log("carre");
            var avionY = parseInt($("#avion").css("top"));
            var avionX = parseInt($("#avion").css("left"));
            var rocketY = parseInt($("#vague2").css("top"));
            var rocketX = parseInt($("#vague2").css("left"));

            rocketX = rocketX - 20;
             // console.log("avionY" + avionY);
             //    console.log("avionX" + avionX);
             //    console.log("rocketY" + rocketY);
             //    console.log("rocketX" + rocketX);

            var rectavion = {
                x: avionX,
                y: avionY,
                width: 50,
                height: 50
            }
            var rectmissile = {
                x: rocketX,
                y: rocketY,
                width: 100,
                height: 100
            }
    // console.log(rectmissile.x);
    // console.log(rectmissile.y);

            if (rectavion.x < rectmissile.x + rectmissile.width &&
                rectavion.x + rectavion.width > rectmissile.x &&
                rectavion.y < rectmissile.y + rectmissile.height &&
                rectavion.height + rectavion.y > rectmissile.y && test === true) {
                console.log("collision");
                fctmort();
                test = false;
                compteur();
                changeetat();
                bruitage();
                boom();
                test = false;
            }


};



///
function changeetat(){

    console.log("testchange");
    console.log(etatVirus);
    etatVirus++;
    switch (etatVirus) {
        case 1:
            $("#avion").attr("src","images/degat1.png").css({
                width: "85px"
            });
            score2 -= 200
            $("#score2").text("Niveau 2: "+ score2 +" Points");
            break;
        case 2:
            $("#avion").attr("src","images/degat2.png").css({
                width: "80px"            });
                score1 -= 200
                $("#score2").text("Niveau 2: "+ score2 +" Points");
            break;
        case 3:
            $("#avion").attr("src","images/degat3.png").css({
                width: "80px"            });
                score2 -= 200
                $("#score2").text("Niveau 2: "+ score2 +" Points");
            break;
        case 4:
            $("#avion").attr("src","images/degat4.png").css({
                width: "75px"            });
                score2 -= 200
                $("#score2").text("Niveau 2: "+ score2 +" Points");
            break;
        case 5:
            $("#avion").attr("src","images/degat5.png").css({
                width: "70px"            });
                score2 -= 200
                $("#score2").text("Niveau 2: "+ score2 +" Points");
            break;
        case 6:
            fctmort();
            break;
        default :
            break;
    }


}
function fctmort(){
    console.log("mort");
    $(".alert").css("display","none")
    $(".bruitage2").trigger('play');
    $("#avion").attr("src","images/virusMort.png").css({
        width: "70px"            });
    $("#wrapper").fadeOut(1000);


    $("#conclusion").fadeIn(1000);
}

function reussite(){
    $(".alert").css("display","none")
    etatVirus =10;
    compteuri=-500;
    $("#wrapper").fadeOut(1000);
    $("#reussite").fadeIn(1000);


}
function relocal(){
    location.reload();
}
function niveaudeux(){
    window.location.replace("index3.html?score1="+ancienScore1+"&score2="+score2);
}
