// require('../css/main.css');

var cards = ["cracovia.png", "gks.png", "gornik.png", "jagielonia.png", "korona.png", "lech.png", "lechia.png", "legia.png", "piast.png", "podbeskidzie.png", "pogon.png", "ruch.png", "slask.png", "termalica.png", "wisla.png", "zaglebie.png", "cracovia.png", "gks.png", "gornik.png", "jagielonia.png", "korona.png", "lech.png", "lechia.png", "legia.png", "piast.png", "podbeskidzie.png", "pogon.png", "ruch.png", "slask.png", "termalica.png", "wisla.png", "zaglebie.png"];

function shuffle(array) {
    var counter = array.length;
    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        var index = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        var temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}

shuffle(cards);

var divCollection = document.getElementsByClassName('card');

c0.addEventListener("click", function() { revealCard(0); });
c1.addEventListener("click", function() { revealCard(1); });
c2.addEventListener("click", function() { revealCard(2); });
c3.addEventListener("click", function() { revealCard(3); });

c4.addEventListener("click", function() { revealCard(4); });
c5.addEventListener("click", function() { revealCard(5); });
c6.addEventListener("click", function() { revealCard(6); });
c7.addEventListener("click", function() { revealCard(7); });

c8.addEventListener("click", function() { revealCard(8); });
c9.addEventListener("click", function() { revealCard(9); });
c10.addEventListener("click", function() { revealCard(10); });
c11.addEventListener("click", function() { revealCard(11); });

c12.addEventListener("click", function () { revealCard(12); });
c13.addEventListener("click", function () { revealCard(13); });
c14.addEventListener("click", function () { revealCard(14); });
c15.addEventListener("click", function () { revealCard(15); });

c16.addEventListener("click", function () { revealCard(16); });
c17.addEventListener("click", function () { revealCard(17); });
c18.addEventListener("click", function () { revealCard(18); });
c19.addEventListener("click", function () { revealCard(19); });

c20.addEventListener("click", function () { revealCard(20); });
c21.addEventListener("click", function () { revealCard(21); });
c22.addEventListener("click", function () { revealCard(22); });
c23.addEventListener("click", function () { revealCard(23); });

c24.addEventListener("click", function () { revealCard(24); });
c25.addEventListener("click", function () { revealCard(25); });
c26.addEventListener("click", function () { revealCard(26); });
c27.addEventListener("click", function () { revealCard(27); });

c28.addEventListener("click", function () { revealCard(28); });
c29.addEventListener("click", function () { revealCard(29); });
c30.addEventListener("click", function () { revealCard(30); });
c31.addEventListener("click", function () { revealCard(31); });
// -------------------------------------------------------------------
var oneVisible = false;
var turnCounter = 0;
var visible_nr;
var lock = false;
var pairsleft = 16;
var arr_match = [];

function revealCard(nr) {
        
    var opacityValue = $("#c" + nr).css("opacity");
    var count1 = Math.floor(Math.random() * 16);
            
        if (opacityValue != 0 && lock === false) {
            
            lock = true;
                
            var obraz = "url(img/" + cards[nr] + ")";
                $("#c" + nr).css("background-image", obraz);
                $("#c" + nr).addClass("cardA");
                $("#c" + nr).removeClass("card");
                arr_match.push(cards[nr]);      

            if (oneVisible === false ) {
                    // first card
                oneVisible = true;
                visible_nr = nr;
                lock = false;
            }
            else {
            //second card

            if (arr_match[0] == arr_match[1]) {
                setTimeout(function () { 
                    hide2Cards(nr, visible_nr) 
                }, 750);
            } else {
                setTimeout(function () { 
                    restore2Cards(nr, visible_nr) 
                }, 750); 
            }
            
            arr_match = [];

            if (visible_nr != nr) {
                turnCounter++;
            }

            $(".score").html("Turn counter: " + turnCounter);
            oneVisible = false;
        }
    } 
}
 
function hide2Cards(nr1, nr2) {
    $("#c" + nr1).css("opacity", "0");
    $("#c" + nr2).css("opacity", "0");

    pairsleft--;

    if(pairsleft === 0) {
        $(".board").html('<h1>You win!<br>Done in: </h1>' + turnCounter + " turns;");

    }
    lock = false;
}

function restore2Cards(nr1, nr2) {
    $("#c" + nr1).css("background-image", "url(img/cover.png)");
    $("#c" + nr1).addClass("card");
    $("#c" + nr1).removeClass("cardA");

    $("#c" + nr2).css("background-image", "url(img/cover.png)");
    $("#c" + nr2).addClass("card");
    $("#c" + nr2).removeClass("cardA");

    lock = false;
}





