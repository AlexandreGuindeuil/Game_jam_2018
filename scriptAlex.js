var test = true;

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
          if (avionX < 980) {
          $("#avion").css('left', "+=25px");
    }
    break;
    case 32:
       $("#avion").attr("src","images/virusInvincible.png");
  }

});


$(document).ready(function () {

    ciel();
    rocket();
    rocket2();
    rocket3();
    rocket4();
    setInterval(collision, 16);

});



function ciel() {
    $("#principale").animate({
            backgroundPosition: "-=2000px"
        },
        40000,
        "linear", ciel);
}

/////////////////
//DROITE GAUCHE//
/////////////////

function rocket(){
  $(".rocket").each(function(i) {
      var y = Math.floor((Math.random() * 1000) + 10);
      $(this).css({
          left: "1200px"
      })

      $(this).delay(800).animate({
          left: "-200px",
          top: y
      },4000,callback_rocket)





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
///////////////////
// GAUCHE DROITE //
///////////////////
function rocket2(){
  $(".rocket2").each(function(i){

$(this).css({
  left:"-200px",
  top :"120px"
})

    var y = Math.floor((Math.random() * 390) + 10);

     $(this).delay(800).animate({
             left: "1200px",
             top: y
         },10000,callback_rocket2)
  });
};

function callback_rocket2() {
  console.log("test")
  $(".rocket2").each(function(i){
    var y2 = Math.floor((Math.random() * 390) + 10);
    $(this).css({
      left: "-100px",
      top: y2
    });
    test = true;
    setTimeout(rocket2);

  })
}
//////////////
// HAUT BAS //
//////////////
function rocket3(){
  console.log("bonjour")
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
         },7000,callback_rocket3)
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
///////
///////

//////////////
// BAS HAUT //
//////////////
function rocket4(){
  console.log("bonjour")
  $(".rocket4").each(function(i){
var y3 = Math.floor((Math.random() * 390) + 10);
$(this).css({
  top :"1100px",
  left: y3
})

    var y3 = Math.floor((Math.random() * 390) + 10);

     $(this).delay(300).animate({
             left: y3,
             top: "-30px"
         },6000,callback_rocket4)
  });
};

function callback_rocket4() {
  console.log("bonjour2")
  $(".rocket4").each(function(i){
    var y3 = Math.floor((Math.random() * 390) + 10);
    $(this).css({
      left: y3,
      top: "1100px"
    });
    test = true;
    setTimeout(rocket4);

  })
}
///////
///////
$("#btntest").click(function(){
 $("#avion").attr("src","images/virusInvincible.png")
 console.log("test")
})




// function rocket() {
//     var y = Math.floor((Math.random() * 390) + 10);
//
//     $("#rocket").animate({
//         left: "-200px",
//         top: y
//     }, 1800, callback_rocket);
// }
//
// function callback_rocket() {
//     var y2 = Math.floor((Math.random() * 390) + 10);
//     $("#rocket").css({
//         left: "700px",
//         top: y2
//     });
//     test = true;
//     setTimeout(rocket);
// }
//
// function rocket2() {
//
//     var x = Math.floor((Math.random() * 390) + 10);
//
//     $("#rocket2").animate({
//         left : "+700px",
//         top : x
//     }, 1800, callback_rocket2);
// };
// function callback_rocket2() {
//     var y2 = Math.floor((Math.random() * 390) + 10);
//     $("#rocket2").css({
//         left: "0px",
//         top: y2
//     });
//     test = true;
//     setTimeout(rocket2);
// }

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
    $("#avion").attr("src","images/degat1.png").css({
        width: "85px"
    });
    $(".boom").children("img").attr('src', 'img/200w.gif');
    setTimeout(function () {
        $(".boom").children("img").attr('src', '')
    }, 800);


}


var antiCorps = $(".tailleP")

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
               })
 		}
   };







//     var avionY = parseInt($("#avion").css("top"));
//     var avionX = parseInt($("#avion").css("left"));
//     var rocketY = parseInt($(".tailleP").css("top"));
//     var rocketX = parseInt($(".tailleP").css("left"));
//
//     rocketX = rocketX - 20;
//     console.log("avionY" + avionY);
//     //    console.log("avionX" + avionX);
//     //    console.log("rocketY" + rocketY);
//     //    console.log("rocketX" + rocketX);
//
//     var rectavion = {
//         x: avionX,
//         y: avionY,
//         width: 80,
//         height: 60
//     }
//     var rectmissile = {
//         x: rocketX,
//         y: rocketY,
//         width: 30,
//         height: 10
//     }
//
//
//     if (rectavion.x < rectmissile.x + rectmissile.width &&
//         rectavion.x + rectavion.width > rectmissile.x &&
//         rectavion.y < rectmissile.y + rectmissile.height &&
//         rectavion.height + rectavion.y > rectmissile.y && test === true) {
//         console.log("collision");
//         console.log($("#info"));
//         compteur();
//         bruitage();
//         boom();
//         test = false;
//     }
// }

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
