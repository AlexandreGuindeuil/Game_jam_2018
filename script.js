var test = true;
var etatVirus = 0;
var compteur;
var compteuri = 0;


$(document).keydown(function (e) {
    var touche = e.which;
    var avionY = parseInt($("#avion").css("top"));
    var avionX = parseInt($("#avion").css("left"));
    switch (touche) {
        case 38:
            if (avionY >= 20) {
                $("#avion").css('top', "-=20px");
            }
            break;
        case 40:
            if (avionY < 550) {
                $("#avion").css('top', "+=20px");
            }
            break;
        case 37:
            if (avionX > 20) {
                $("#avion").css('left', "-=20px");
            }
            break;
        case 39:
            if (avionX < 980) {
                $("#avion").css('left', "+=20px");
            }
            break;
    }

});


$(document).ready(function () {

    ciel();
    rocket();
    rocket2();
    rocket3();
    setInterval(collision, 16);
    timer();

});

function testbtn(){
    console.log("test bouton");
    $("#avion").attr("src", "images/rond_rouge.png");
}

function ciel() {
    $("#principale").animate({
            backgroundPosition: "-=2000px"
        },
        40000,
        "linear", ciel);
}

function rocket() {
    var y = Math.floor((Math.random() * 390) + 10);

    $("#rocket").animate({
        left: "-200px",
        top: y
    }, 1800, callback_rocket);
}

function callback_rocket() {
    var y2 = Math.floor((Math.random() * 390) + 10);
    $("#rocket").css({
        left: "1200px",
        top: y2
    });
    test = true;
    setTimeout(rocket);
}

function rocket2() {

    var x = Math.floor((Math.random() * 390) + 10);

    $("#rocket2").animate({
        left : "+1200px",
        top : x
    }, 1800, callback_rocket2);
};
function callback_rocket2() {
    var y2 = Math.floor((Math.random() * 390) + 10);
    $("#rocket2").css({
        left: "-100px",
        top: y2
    });
    test = true;
    setTimeout(rocket2);
}

function rocket3() {

    var x2 = Math.floor((Math.random() * 390) + 10);

    $("#rocket3").animate({
        left : x2 ,
        top : "+600px"
    }, 1800, callback_rocket3);
};
function callback_rocket3() {
    var y2 = Math.floor((Math.random() * 390) -600);
    $("#rocket3").css({
        left: "400px",
        top: y2
    });
    test = true;
    setTimeout(rocket3);
}

//
var i = 0;

function compteur() {
    i++;
    $("#info").text(i);
    changeEtat();

}

function bruitage() {
    $(".bruitage").trigger('play');
}

function boom() {
    $(".boom").children("img").css({
        right: "400px",
        top: "100px"
    });
    $(".boom").children("img").attr('src', 'img/200w.gif');
    setTimeout(function () {
        $(".boom").children("img").attr('src', '')
    }, 800);


}

function timer(){

    $( "#progressbar" ).progressbar({
        value: 37
    });

}


function collision() {
    var avionY = parseInt($("#avion").css("top"));
    var avionX = parseInt($("#avion").css("left"));
    var rocketY = parseInt($("#rocket").css("top"));
    var rocketX = parseInt($("#rocket").css("left"));

    rocketX = rocketX - 20;
    console.log("avionY" + avionY);
    //    console.log("avionX" + avionX);
    //    console.log("rocketY" + rocketY);
    //    console.log("rocketX" + rocketX);

    var rectavion = {
        x: avionX,
        y: avionY,
        width: 80,
        height: 60
    }
    var rectmissile = {
        x: rocketX,
        y: rocketY,
        width: 20,
        height: 20
    }


    if (rectavion.x < rectmissile.x + rectmissile.width &&
        rectavion.x + rectavion.width > rectmissile.x &&
        rectavion.y < rectmissile.y + rectmissile.height &&
        rectavion.height + rectavion.y > rectmissile.y && test === true) {
        console.log("collision");
        console.log($("#info"));
        compteur();
        bruitage();
        boom();
        test = false;


    }

}
function changeetat(){
    console.log("testchange");
    etatVirus++;
    switch (etatVirus) {
        case 1:
            $("#avion").attr("src", "images/degat1.png");
            break;
        case 2:
            $("#avion").attr("src", "images/degat2.png");
            break;
        case 3:
            $("#avion").attr("src", "images/degat3.png");
            break;
        case 4:
            $("#avion").attr("src", "images/degat4.png");
            break;
        case 5:
            $("#avion").attr("src", "images/virusMort.png");
            break;
        case 6:
            fctmort();
            break;
    }


}

function fctmort(){
    $("#avion").attr("src", "images/mort.png");
}



//$(document).keydown(function (collision) {
//            var avionY = parseInt($("#avion").css("top"));
//
//            var avionX = parseInt($("#avion").css("left"));
//            var rocketY = parseInt($("#rocket").css("top"));
//            var rocketX = parseInt($("#rocket").css("left"));
//            console.log(avionY);
//            console.log(avionX);
//            console.log(rocketY);
//            console.log(rocketX);
//            if (avionY == rocketY && avionX == rocketX) {
//                //        alert("collision");
//                //    }
//            };