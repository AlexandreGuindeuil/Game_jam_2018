
var test = true;
var mortun =false;
var mortdeux =false;
var etatVirus = 0;
var etatVirus2 = 0;
var compteur;
var compteuri = 0;
var chemin = window.location.pathname; //chemin reçoit le chemin de l'url, c'est-à-dire /article/1.
var url = window.location.href; //la variable url reçoit l'URL courante, c'est-à-dire http://www.example.com/article/1.
var machin = url.split("=")[1];
var ancienScore1 = machin.split("&")[0];
var ancienScore2 = url.split("=")[2];
var nbmort = 0;
var quelvirus;
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

function lancerIntro2() {
    $("#intro2").hide();
    $("#wrapper").fadeIn(1000);
    $("#score2").text("Niveau 2: " + ancienScore2 + " Points")
    $("#score1").text("Niveau 1: " + ancienScore1 + " Points")
    ciel();
    rocket();
    rocket2();
    rocket3();
    rocket4();
    setInterval(collision, 16);
    decompte();
    carre();
    setInterval(collisioncarre, 16);
}


$(document).ready(function () {
});

function btnTest() {
    window.location.replace("index2.html");
}

var i = 0;

function compteur() {
    i++;
    $("#info").text(i);
}

//Pour le timer et la victoire
function decompte() {
    compteuri++;
    $("#timer").text(61 - compteuri);
    compteur2 = setTimeout(decompte, 1000);
    $( "#progressbar" ).val(compteuri);

    if (compteuri == 61) {
        reussite();
    }

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

window.setInterval(function () {
    $(".alert").toggleClass("red")
}, 500);

/////////////////
// LES MOUVEMENTS DES PROJECTILES
/////////////////

//CARRE
function carre() {
    var y = Math.floor((Math.random() * 390) + 10);
    $(".vague").css({
        left: "1400px",
        top: "0px"
    })
    $(".vague").animate({
        left: "-400px",
        top: "600px"
    }, 6000).animate({
        left: "-200px",
        top: "200px"
    }, 3000).animate({
        left: "1400px",
        top: "200px"
    }, 6000).animate({
        left: "1400px",
        top: "600px"
    }, 3000).animate({
        left: "-200px",
        top: "-200px"
    }, 6000)

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

//DROITE GAUCHE//
function rocket() {
    $(".rocket").each(function (i) {
        var y = Math.floor((Math.random() * 1000) + 10);
        $(this).css({
            left: "1500px"
        })
        $(this).delay(800).animate({
            left: "-200px",
            top: y
        }, 5800, callback_rocket)
    });
}

function callback_rocket() {
    $(".rocket").each(function (i) {
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
function rocket2() {
    $(".rocket2").each(function (i) {

        $(this).css({
            left: "-200px",
            top: "120px"
        })

        var y = Math.floor((Math.random() * 700) + 10);

        $(this).delay(800).animate({
            left: "1600px",
            top: y
        }, 10000, callback_rocket2)
    });
};

function callback_rocket2() {
    $(".rocket2").each(function (i) {
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
function rocket3() {
    $(".rocket3").each(function (i) {
        var y3 = Math.floor((Math.random() * 390) + 10);
        $(this).css({
            top: "-100px",
            left: y3
        })

        var y3 = Math.floor((Math.random() * 390) + 10);

        $(this).delay(300).animate({
            left: y3,
            top: "1200px"
        }, 5000, callback_rocket3)
    });
};

function callback_rocket3() {
    $(".rocket3").each(function (i) {
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
function rocket4() {
    $(".rocket4").each(function (i) {
        var y3 = Math.floor((Math.random() * 390) + 600);
        $(this).css({
            top: "-150px",
            left: y3
        })

        var y3 = Math.floor((Math.random() * 900) + 10);

        $(this).delay(300).animate({
            left: y3,
            top: "1200px"
        }, 4000, callback_rocket4)
    });
};

function callback_rocket4() {
    $(".rocket4").each(function (i) {
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
        $(".tailleP").each(function () {
            var avionY = parseInt($("#avion").css("top"));
            var avionX = parseInt($("#avion").css("left"));
            var avion2Y = parseInt($("#avion2").css("top"));
            var avion2X = parseInt($("#avion2").css("left"));
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
            var rectavion2 = {
                x: avion2X,
                y: avion2Y,
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
                changeetat(1);
                bruitage();
                boom();
                test = false;
            }
            if (rectavion2.x < rectmissile.x + rectmissile.width &&
                rectavion2.x + rectavion2.width > rectmissile.x &&
                rectavion2.y < rectmissile.y + rectmissile.height &&
                rectavion2.height + rectavion2.y > rectmissile.y && test === true) {
                console.log("collision avion2");
                compteur();
                changeetat(2);
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
    var avion2Y = parseInt($("#avion2").css("top"));
    var avion2X = parseInt($("#avion2").css("left"));
    var rocketY = parseInt($("#vague").css("top"));
    var rocketX = parseInt($("#vague").css("left"));

    rocketX = rocketX - 20;
    // console.log("avionY" + avionY);

    var rectavion = {
        x: avionX,
        y: avionY,
        width: 50,
        height: 50
    }
    var rectavion2 = {
        x: avion2X,
        y: avion2Y,
        width: 50,
        height: 50
    }

    var rectmissile = {
        x: rocketX,
        y: rocketY,
        width: 120,
        height: 120
    }

    if (rectavion.x < rectmissile.x + rectmissile.width &&
        rectavion.x + rectavion.width > rectmissile.x &&
        rectavion.y < rectmissile.y + rectmissile.height &&
        rectavion.height + rectavion.y > rectmissile.y && test === true) {
        console.log("collision virus1 et carré2");
        fctmort(1);
        test = false;
    }

    if (rectavion2.x < rectmissile.x + rectmissile.width &&
        rectavion2.x + rectavion2.width > rectmissile.x &&
        rectavion2.y < rectmissile.y + rectmissile.height &&
        rectavion2.height + rectavion2.y > rectmissile.y && test === true) {
        console.log("collision virus2 et carré2");
        fctmort(2);
        test = false;
    }
};


///
function changeetat(quelvirus) {
    console.log("degat virus  " + quelvirus);
    if (quelvirus == 1) {
        etatVirus++;
        console.log("etat virus 1 : " + etatVirus);
        switch (etatVirus) {
            case 1:
                $("#avion").attr("src", "images/degat1.png").css({
                    width: "85px"
                });
                score2 -= 100
                $("#score2").text("Niveau 2: " + score2 + " Points");
                break;
            case 2:
                $("#avion").attr("src", "images/degat2.png").css({
                    width: "80px"
                });
                score1 -= 100
                $("#score2").text("Niveau 2: " + score2 + " Points");
                break;
            case 3:
                $("#avion").attr("src", "images/degat3.png").css({
                    width: "80px"
                });
                score2 -= 100
                $("#score2").text("Niveau 2: " + score2 + " Points");
                break;
            case 4:
                $("#avion").attr("src", "images/degat4.png").css({
                    width: "75px"
                });
                score2 -= 100
                $("#score2").text("Niveau 2: " + score2 + " Points");
                break;
            case 5:
                $("#avion").attr("src", "images/degat5.png").css({
                    width: "70px"
                });
                score2 -= 100
                $("#score2").text("Niveau 2: " + score2 + " Points");
                break;
            case 6:
                fctmort(1);
                break;
            default :
                break;
        }
    }
    else if(quelvirus == 2){
        etatVirus2++;
        console.log("etat virus 2 : " + etatVirus2);
        switch (etatVirus2) {
            case 1:
                $("#avion2").attr("src", "images/degat1.png").css({
                    width: "85px"
                });
                score2 -= 100
                $("#score2").text("Niveau 2: " + score2 + " Points");
                break;
            case 2:
                $("#avion2").attr("src", "images/degat2.png").css({
                    width: "80px"
                });
                score1 -= 100
                $("#score2").text("Niveau 2: " + score2 + " Points");
                break;
            case 3:
                $("#avion2").attr("src", "images/degat3.png").css({
                    width: "80px"
                });
                score2 -= 100
                $("#score2").text("Niveau 2: " + score2 + " Points");
                break;
            case 4:
                $("#avion2").attr("src", "images/degat4.png").css({
                    width: "75px"
                });
                score2 -= 100
                $("#score2").text("Niveau 2: " + score2 + " Points");
                break;
            case 5:
                $("#avion2").attr("src", "images/degat5.png").css({
                    width: "70px"
                });
                score2 -= 100
                $("#score2").text("Niveau 2: " + score2 + " Points");
                break;
            case 6:
                fctmort(2);
                break;
            default :
                break;
        }
    }

}

function fctmort(quelavion) {
    console.log("entrée fonction mort avec avion " + quelavion);

    $(".bruitage2").trigger('play');
    if (quelavion == 1) {
        console.log("mort virus un");
        $("#avion").attr("src", "images/virusMort.png").css({
            width: "70px"
        }).fadeOut(500).css({
            top:"-10000",
            left:"-10000"
        });
        mortun = true;
    }
    else if (quelavion == 2) {
        console.log("mort virus deux");
        $("#avion2").attr("src", "images/virusMort.png").css({
            width: "70px"
        }).fadeOut(500).css({
            top:"-10000",
            left:"-10000"
        });
        mortdeux = true;
    }

    fctdeuxmorts();
}

function fctdeuxmorts() {

    if (mortun == true && mortdeux==true) {
        $("#wrapper").fadeOut(1000);
        $("#conclusion").fadeIn(1000);
    }

}

function reussite() {

    etatVirus = 10;
    $("#wrapper").fadeOut(1000);
    $("#reussite").fadeIn(1000);

}

function relocal() {
    location.reload();
}

function niveaudeux() {
    window.location.replace("index3.html?score1=" + ancienScore1 + "&score2=" + score2);
}
