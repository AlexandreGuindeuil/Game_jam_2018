var test = true;
var test = true;
var etatVirus = 0;
var compteur;
var compteuri = 0;
// var chemin = window.location.pathname; //chemin reçoit le chemin de l'url, c'est-à-dire /article/1.
// var url = window.location.href; //la variable url reçoit l'URL courante, c'est-à-dire http://www.example.com/article/1.
// var ancienScore1 = url.split("=")[1];
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
    // $("#score2").text("Niveau 2: "+score2+" Points")
    // $("#score1").text("Niveau 1: "+ancienScore1+" Points")
    ciel();
    // rocket();
    // rocket2();
    // rocket3();
    // rocket4();
    setInterval(collision, 16);
    setInterval(collisioncarre,16);
    decompte();
    setInterval(togoal,16);
    carre();
    setInterval(collisioncarre,16);
    setInterval(collisioncarre2,16);

}




$(document).ready(function () {
});

function btnTest(){

    lastsecondes();

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
i == 11

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

      lastsecondes();
      carre2();
    } else if (compteuri == 61) {
      $(".alert").css("display","none")
    } else if (compteuri == 11) {
      carre3();
      cellule1();
    } else if (compteuri == 20) {
      carre5();
      cellule2();
    } else if (compteuri == 25) {
      carre6();
      cellule3();
    } else if (compteuri == 27) {
      carre8();
      cellule4();
    } else if (compteuri == 30) {
      carre8();
      cellule5();
    } else if (compteuri == 32) {
      carre8();
      cellule6();
    }
      };



//cellule
function cellule1(){

var yc  = Math.floor((Math.random() * 390) + 10);
var xc = Math.floor((Math.random() * 390) + 10);

  $(".cellule").css({
    top : yc+"px",
    left : xc+"px"
  })
}
function cellule1(){

var yc  = Math.floor((Math.random() * 390) + 10);
var xc = Math.floor((Math.random() * 390) + 10);

  $(".cellule").css({
    top : yc+"px",
    left : xc+"px"
  })
}
function cellule1(){

var yc  = Math.floor((Math.random() * 390) + 10);
var xc = Math.floor((Math.random() * 390) + 10);

  $(".cellule").css({
    top : yc+"px",
    left : xc+"px"
  })
}
function cellule1(){

var yc  = Math.floor((Math.random() * 390) + 10);
var xc = Math.floor((Math.random() * 390) + 10);

  $(".cellule").css({
    top : yc+"px",
    left : xc+"px"
  })
}
function cellule1(){

var yc  = Math.floor((Math.random() * 390) + 10);
var xc = Math.floor((Math.random() * 390) + 10);

  $(".cellule").css({
    top : yc+"px",
    left : xc+"px"
  })
}

//


//déclanchement de tout les carrés
function carre8(){
  $(".vague8").animate({
    left : "1500px"
  },3000).animate({
    left : "-200px"
  },3000)
}
function carre6(){
  $(".vague6").animate({
    left : "1500px"
  },2500).animate({
    left : "-200px"
  },2500)
  $(".vague7").animate({
    left : "-200px"
  },2500).animate({
    left : "1500px"
  },2500)
}
function carre5(){
  $(".vague5").animate({
    left : "1500px"
  },1000)
}
function carre3(){


  $(".vague3").animate({
      left: "1200px",
      top : "900px"
  }, 3000).animate({
    left: "1200px",
    top : "-200px"
  },3000)
  $(".vague4").delay(600).animate({
      left: "200px",
      top : "900px"
  }, 3000).animate({
    left: "200px",
    top : "-200px"
  },3000)
  console.log("test")
}

//Dernières secondes : affichage carré
function lastsecondes(){
    $(".alert").css("display","block");
    $("#zonedefin").fadeIn(1000);


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



/////////
//CARRE//
/////////
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
                width: 120,
                height: 120
            }
    // console.log(rectmissile.x);
    // console.log(rectmissile.y);

            if (rectavion.x < rectmissile.x + rectmissile.width &&
                rectavion.x + rectavion.width > rectmissile.x &&
                rectavion.y < rectmissile.y + rectmissile.height &&
                rectavion.height + rectavion.y > rectmissile.y && test === true) {
                console.log("collision");
                fctmort();
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
                width: 120,
                height: 120
            }
    // console.log(rectmissile.x);
    // console.log(rectmissile.y);

            if (rectavion.x < rectmissile.x + rectmissile.width &&
                rectavion.x + rectavion.width > rectmissile.x &&
                rectavion.y < rectmissile.y + rectmissile.height &&
                rectavion.height + rectavion.y > rectmissile.y && test === true) {
                console.log("collision");
                fctmort();
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
    $("#wrapper").hide();


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
