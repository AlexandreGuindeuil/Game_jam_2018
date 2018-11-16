var test = true;

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
    setInterval(collision, 16);

});



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
        left: "700px",
        top: y2
    });
    test = true;
    setTimeout(rocket);
}

function rocket2() {

    var x = Math.floor((Math.random() * 390) + 10);

    $("#rocket2").animate({
        left : "+700px",
        top : x
    }, 1800, callback_rocket2);
};
function callback_rocket2() {
    var y2 = Math.floor((Math.random() * 390) + 10);
    $("#rocket2").css({
        left: "0px",
        top: y2
    });
    test = true;
    setTimeout(rocket2);
}

//
var i = 0;

function compteur() {
    i++;
    $("#info").text(i);
    console.log(i);
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
        width: 30,
        height: 10
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
