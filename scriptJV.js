var test = true;
var etatVirus = 0;
var compteur;
var compteuri = 0;




$(document).ready(function () {

compteur()

});

function testbtn(){
    console.log("test bouton");
    $("#avion").attr("src", "images/rond_rouge.png");
}



//


function compteur() {
    compteuri++;
    console.log(compteuri);
    // $("#timer").text = 61 - compteuri;
    $("#timer").text(61 - compteuri);
    // if (compteuri == 60) {
    //
    //     clearTimeout(compteur);
    // }
    compteur2 = setTimeout(compteur, 1000);
    $( "#progressbar" ).progressbar({
        value: 37
    });
}



function timer(){



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
