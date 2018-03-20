/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// JS examples from book(Rusz głową! Programowanie w javaScript).
// require('../css/main.css'); DO WEBSERVERA

setTimeout(wakeUpUser, 5000);
function wakeUpUser() {}
// console.log("robimy stronkę?");


// -----------------------------------

var price = 28.99;
var discount = 10;
var total = price - price * (discount / 100);
if (total > 35) {
  console.log("o Panie");
} else {
  console.log("a jednak nie");
}

// -------------------------------------

var i;
for (i = 0; i < 10; i++) {}
var x = i;
console.log(x);

//---------------------------------------

var matrix = [];
matrix.push([1, 2, 3]);
matrix.push([4, 5, 6]);
matrix.push([7, 8, 9]);

x = matrix[0][2] + matrix[2][1];
// console.log(matrix);

//-------------------------------------
var count = 10;
while (count > 0) {
  setTimeout(juggle, 2000);
  count = count - 1;
}
function juggle() {
  setTimeout(1000);
  // console.log("idzie!");
}
//------------------------------------
var dog = { name: "Burek", weight: 35 };
if (dog.weight > 30) {
  console.log("HAU HAU");
} else {
  console.log("hau hau");
}

//------------------------------------

var circleRadius = 30;
var circleArea = Math.PI * (circleRadius * circleRadius);
console.log(circleArea);

//----------------------------------

var age = 10;
var name = "Olek";
if (age > 14) {
  console.log("Przykro mi, ta strona jest tylko dla dzieci");
} else {
  console.log("witaj " + name);
}
//------------------------------------

var temp = 10;
var resultsum = 9 / 5 * temp + 32;
console.log(resultsum);

//-----------------------------------

var sumStringNumber = 1000 + "108";
console.log(sumStringNumber);

//----------------------------------

var scoops = 5;
while (scoops > 0) {
  document.write("kolejna gałka!<br>");
  scoops = scoops - 1;
}
document.write("życie bez lodów nie jest już takie same<br>");

//----------------------------------

if (scoops >= 5) {
  alert("jedz szybciej, lody sie zaraz roztopią!");
} else if (scoops == 3) {
  alert("Lody się kończą");
} else if (scoops == 2) {
  alert("Dwa!");
} else if (scoops == 1) {
  alert("Jeden!");
} else if (scoops === 0) {
  // alert("I koniec");
} else {
  alert("Mamy jeszcze dużo lodów, przyjdź i skosztuj");
}

//----------------------------------

var i = 0;
var name = "Józek";
while (i < 2) {
  document.write("<br>Sto lat, sto lat.<br>");
  document.write("Niech żyje, żyje nam.<br>");
  i++;
}
document.write("Niech żyje nam " + name + " nam!<br>");

//-----------------------------------------

var word = "butelek";
var count = 99;
while (count > 0) {
  console.log(count + " " + word + " piwa na ścianie");
  console.log(count + " " + word + " piwa,");
  console.log("Jedną weź i podaj w koło,");
  count = count - 1;
  if (count == 4 || count == 3 || count == 2) {
    var word = "butelki";
    // console.log(count + " " + word + " piwa na ścianie");
  } else if (count == 1) {
    var word = "butelka";
  } else {
    var word = "butelek";
    console.log("nie ma już " + word + " piwa na ścianie");
  }
}

//------------------------------------------------
var inStock = true;
var inSale = true;
if (inStock === true && (inSale === true || price < 60)) {
  //to wygląda na świetny interes - kupuj!
  document.write("<br>kupuj, kupuj, kupuj!<br>");
}

//------------------------------------------------

var temp = 81;
var willRain = true;
var humid = temp > 80 && willRain === true;
console.log(humid);

var guess = 6;
var isValid = guess >= 0 && guess <= 6;
console.log(isValid);

var kB = 1287;
var tooBig = kB > 1000;
var urgent = true;
var sendFile = urgent === true || tooBig === false;
console.log(sendFile);

var keyPressed = "N";
var points = 142;
var level;
if (keyPressed == "Y" || points > 100 && points < 200) {
  level = 2;
} else {
  level = 1;
}
console.log(level);

//-------------------------------------------

var dogName = "Burek";
var dogWeight = 23;
if (dogWeight > 20) {
  console.log(dogName + " szczeka HAU HAU");
} else {
  console.log(dogName + " szczeka hau hau");
}

dogName = "Mops";
dogWeight = 13;
if (dogWeight > 20) {
  console.log(dogName + " szczeka HAU HAU");
} else {
  console.log(dogName + " szczeka hau hau");
}

dogName = "Reksio";
dogWeight = 53;
if (dogWeight > 20) {
  console.log(dogName + " szczeka HAU HAU");
} else {
  console.log(dogName + " szczeka hau hau");
}

dogName = "Saba";
dogWeight = 17;
if (dogWeight > 20) {
  console.log(dogName + " szczeka HAU HAU");
} else {
  console.log(dogName + " szczeka hau hau");
}

function bark(name, weight) {
  if (weight > 20) {
    console.log(name + " szczeka HAU HAU");
  } else {
    console.log(name + " szczeka hau hau");
  }
}

bark("Burek", 23);
bark("Mops", 13);
bark("Reksio", 53);
bark("Saba", 17);
bark("Skuter", -1); //"Skuter szczeka hau hau"
bark("Dino", 0, 0); //brak błędu
bark("Fido", "20"); //"Fido szczeka hau hau"
bark("Saba", 10); //"Saba szczeka HAU HAU"
bark("Agent", 21); //"Agent szczeka HAU HAU"

//---------------------------------------------

function whatShallIwear(temp) {
  if (temp < 15) {
    console.log("ubierz kurtkę");
  } else if (temp < 25) {
    console.log("ubierz sweter");
  } else {
    console.log("ubierz T-shirt");
  }
}

whatShallIwear(10);
whatShallIwear(15);
whatShallIwear(30);

//---------------------------------------

saveMyProfile("Tomek", 1991, 3.81, false);
function saveMyProfile(name, birthday, GPA, newuser) {
  if (birthday > 2004) {}
  //kod obsługi dziecka

  //reszta kodu funkcji
}
// _____

var student = "Krzysiu";
var year = 1998;
var GPA = 381 / 100;
var status = "oczekujący";
var isNewUser = status == "nowy_użytkownik";
saveMyProfile(student, year, GPA, isNewUser);
saveMyProfile(student, year, 381 / 100, status == "nowy_użytkownik"); //również dopuszczalne

//-----------------------------------------
// PARAMETR A ARGUMENT

function cook(degrees, mode, duration) {}
//ciało funkcji

// degrees, mode, duration - to są parametry funkcji

cook(180.0, "pieczenie", 30);
// 180, "pieczenie", 30 - to są argumenty przekazane do funkcji

// Parametry funkcji definiujemy raz, ale do funkcji możemy przekazać różne argumenty!

function doIt(param, name) {
  var jakistest2 = param / 2;
  console.log(jakistest2 + " " + name);
}
var jakisTest = 10;
var durneImię = "Tomek";
doIt(jakisTest, durneImię);

//----------------------------------------

function dogYears(dogName, age) {
  var years = age * 7;
  console.log(dogName + " ma " + years + " lata.");
}
var dog = "Adolf";
var dogYear = 11;
dogYears(dog, dogYear);

function makeTea(cups, tea) {
  console.log("Parzę " + cups + " filiżanek herbaty " + tea + ".");
}
var guests = 5;
makeTea(guests); //"Parzę 5 filiżanek herbaty undefinied"
makeTea(guests, "Earl Grey", 8); //"ominięcie nadmiarowych argumentów"

function secret() {
  console.log("Tajemnice bytu jest liczba 42");
}
secret();

// function speak(kind) {
//   var defaultSound = "";
//   if (kind == "pies") {
//     alert("Hau");
//   } else if (kind == "kot") {
//     alert("Miau");
//   } else {
//     alert(defaultSound);
//   }
// }
// var pet = prompt("Podaj rodzaj zwierzaka: ");
// speak(pet);

//--------------------------------

function bake(degrees) {
  var message;

  if (degrees > 200) {
    message = "Daj spokój, nie jestem reaktorem atomowym";
  } else if (degrees < 20) {
    message = "Nie jestem lodówką";
  } else {
    message = "Idealna temperatura";
    // setMode("pieczenie");
    // setTemp(degrees);
  }
  return message;
}
var status = bake(200);
console.log(status);

//-----------------------------------
// Śledzenie wykonania funkcji z instrukcją Return

function calculateArea(r) {
  var area;

  if (r <= 0) {
    return 0;
  } else {
    area = Math.PI * r * r;
    return area;
  }
}

var radius = 5.2;
var theArea = calculateArea(radius);
console.log("Pole koła wynosi: " + theArea);

//-----------------------------------

var avatar = "ogólny";
var skill = 1.0;
var pointsPerLevel = 1000;
var userPoints = 2008;

function getAvatar(points) {
  var level = points / pointsPerLevel;

  if (level == 0) {
    return "Niedźwiadek Yogi";
  } else if (level == 1) {
    return "Kot";
  } else if (level >= 2) {
    return "Goryl";
  }
}

function updatePoints(bonus, newPoints) {
  var i = 0;
  while (i < bonus) {
    newPoints = newPoints + skill * bonus;
    i = i + 1;
  }
  return newPoints + userPoints;
}

userPoints = updatePoints(2, 100);
avatar = getAvatar(2112);
console.log(userPoints);
console.log(avatar);

//---------------------------------

function playerTurn(player, location) {
  points = 0; //zmienna globalna!
  if (location == 1) {
    points = location + 100;
  }
  return points;
}
var total = playerTurn("Wilk", 1);
// alert(total);

//---------------------------------
// Przesłonięcie zmiennej globalnej

var beanCounter = 10;

function getNumberOfItems(ordertype) {
  var beanCounter = 3;
  if (ordertype == "zamówienie") {
    beanCounter = beanCounter * 8;
  }
  return beanCounter;
}
var someRes = getNumberOfItems("zamówienie");
console.log(someRes);

//-----------------------------------

var x = 32;
var y = 44;
var radius = 5;

var centerX = 0;
var centerY = 0;
var width = 600;
var height = 400;

function setup(width, height) {
  centerX = width / 2;
  centerY = height / 2;
}

function computeDistance(x1, y1, x2, y2) {
  var dx = x1 - x2;
  var dy = y1 - y2;
  var d2 = dx * dx + dy * dy;
  var d = Math.sqrt(d2);
  return d;
}

function someArea(r) {
  var area = Math.PI * r * r;
  return area;
}

setup(width, height);
var area = someArea(radius);
var distance = computeDistance(x, y, centerX, centerY);
// alert("Pole: " + area);
// alert("Odległość: " + distance);

//-------------------------------------

function clunk(times) {
  var num = times;
  while (num > 0) {
    display("brzęk");
    num = num - 1;
  }
}

function kodoskryptoinator(size) {
  var facky = 1;
  clunkCounter = 0;
  if (size == 0) {
    display("brzęk");
  } else if (size == 1) {
    display("biiip");
  } else {
    while (size > 1) {
      facky = facky * size;
      size = size - 1;
    }
    clunk(facky);
  }
}

function display(output) {
  console.log(output);
  clunkCounter = clunkCounter + 1;
}

var clunkCounter = 0;
kodoskryptoinator(5);
console.log(clunkCounter);

//----------------------------------

var balance = 10500; //ZMIENNA GLOBALNA
var cameraOn = true;

function steal(balance, amount) {
  //PRZESŁONIĘCIE PARAMETRU BALANCE - BŁĄD
  cameraOn = false;
  if (amount < balance) {
    balance = balance - amount;
  }
  return amount;
  cameraOn = true;
}

var amount = steal(balance, 1250);
// alert("Złodziej: ukardłem Ci " + amount + "!");

//---TABLICE W JAVASCRIPT--------------

var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54];
var solution2 = scores[2];
console.log("Płyn do baniek nr 2 wynik: " + solution2);

var flavors = ["waniliowe", "truskawkowe", "czekoladowe", "malaga", "jabłkowe"];
var iceCreams = flavors[3];
console.log(iceCreams);
flavors[3] = "jagodowe";
var iceCreams = flavors[3];
console.log(iceCreams);
console.log(flavors);
console.log(flavors.length);
var iceCreamLength = flavors.length;
console.log(iceCreamLength);
// -----------------------------------

function makePhrases() {
  var words1 = ["nieprzerwane", "wielowarstwowe", "tysiącmetrowe", "biznesowe", "niepowstrzymane"];
  var words2 = ["wspomagane", "wartościowe", "zorientowane", "skoncentrowane", "wyrównane"];
  var words3 = ["procesy", "rozwiązania", "punkty", "strategie", "wizje"];

  var rand1 = Math.floor(Math.random() * words1.length);
  var rand2 = Math.floor(Math.random() * words2.length);
  var rand3 = Math.floor(Math.random() * words3.length);

  var phrase = "<br>" + words1[rand1] + " " + words2[rand2] + " " + words3[rand3] + "<br>";
  document.write(phrase);
}

makePhrases();
makePhrases();
makePhrases();
makePhrases();
makePhrases();

//--------------------------------------

console.log(1 || ["element1", "element2"]);
console.log(0 || ["element1", "element2"]);
console.log(1 && ["element1", "element2"]);
console.log(0 && ["element1", "element2"]);
console.log(1 || ["element1", "element2"]);
console.log(0 || ["element1", "element2"]);
console.log(1 || false);
console.log(0 || false);
console.log(1 || true);
console.log(0 || true);
console.log(1 && true);
console.log(0 && true);
console.log(1 && false);
console.log(undefined && 1);
//-----------------------------------------

// //Gra w okręty - początek
//
// // położenie okrętu
// var randomLoc = Math.floor(Math.random() * 5);
// var location1 = randomLoc;
// var location2 = location1 + 1;
// var location3 = location2 + 1;
//
// // próby zatopienia okrętu
// var guess; //wskazanie do sprawdzenia
// var guesses = 0; //liczba prób
// var hits = 0; //trafione
//
// //wartość - czy okręt został zatopiony?
// var isSunk = false;
//
//   while (isSunk == false) {
//       guess = prompt("Gotów? Cel, pal! (podaj liczbę z zakresu 0-6):");
//       if (guess < 0 || guess > 6) {
//           alert("Proszę podać prawidłową liczbę z zakresu od 0-6!");
//       } else {
//         guesses = guesses + 1;
//
//         if (guess == location1 || guess == location2 || guess == location3) {
//           hits = hits + 1;
//           document.write("TRAFIONY!!");
//           if (hits == 3) {
//             isSunk == true;
//             document.write("Hej, zatopiłeś mój okręt!");
//             var stats = "Potrzebowałeś " + guesses + " ruchów, aby zatopić okręt. Twoja efektywność strzelecka wynosi: " + (3/guesses) + ".";
//             document.write(stats);
//           }
//         } else if (guess == null || guess == false) {
//           document.write("Ej, podaj jakąś liczbę")
//         } else {
//           document.write("PUDŁO!")
//         }
//       }
//   }

//-----------------------------------------

var products = ["Czu-czu-Lada", "Miętowy Chłód", "Ciasto naleśnikowe", "Guma Balonowa"];
var hasBubbleGum = [false, false, false, true];
var i = 0;

// Pętla while

// while (i < hasBubbleGum.length) {
//   if (hasBubbleGum[i]) {
//     console.log(products[i] + " zawiera gumę do żucia.");
//       }
//   i = i + 1;
// }

for (i = 0; i < hasBubbleGum.length; i++) {
  if (hasBubbleGum[i]) {
    console.log(products[i] + " zawiera gumę do żucia.");
  }
}
// Usuwanie z tablicy elementów, prototypowanie, strict mode, pobranie ID i data-setu z DOM, funkcje, operatory logiczne, hoisting...

var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 58, 87, 57, 48, 38, 58, 48, 69, 37, 48, 47, 27, 75, 63, 46, 58, 85, 87, 67, 36, 57, 84, 75, 39, 85, 74];
var costs = [34, 23, 53, 65, 75, 23, 76, 34, 76, 23, 56, 67, 12, 67, 45, 89, 65, .43, .32, .21, .45, .34, .12, .87, .65, .45, .34, .23, .34, .43, .32, .21, .45, .34, .12, .87];
var output;
var highScore = 0;
// Pętla While

// var i = 0;
//   while (i < scores.length) {
//   output = "Płyn do baniek nr: " + i +
//   " wynik: " + scores[i];
//   console.log(output);
//   i = i + 1;
// }

// for (i=0; i<scores.length; i++) {
//   output = "Płyn do baniek nr: " + i + " wynik: " + scores[i];
//   console.log(output);
//   if (scores[i] > highScore) {
//     highScore = scores[i]
//   }
// }
// console.log("Liczba testów: " + scores.length); //liczba testów
// console.log("Największa liczba wytworzonych baniek: " + highScore); //najwyższy wynik
//
// var bestSolutions = [];
// for (i=0; i<scores.length; i++) {
//   if (scores[i] == highScore) {
//     bestSolutions.push(i)
//   }
// }
// console.log("Płyny z najlepszym wynikiem to: " + bestSolutions);


//------------------------------------------

function printHighScores(scores) {
  var highScore = 0;
  var output;
  for (var i = 0; i < scores.length; i++) {
    output = "Płyn do baniek nr " + i + " wynik: " + scores[i];
    console.log(output);
    if (scores[i] > highScore) {
      highScore = scores[i];
    }
  }
  return highScore;
}

function getBestResults(scores, highscore) {
  var bestSolutions = [];
  for (var i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
      bestSolutions.push(i);
    }
  }
  return bestSolutions;
}

var highScore = printHighScores(scores);
console.log("Najwyższy wynik: " + highScore);

var bestSolutions = getBestResults(scores, highScore);
console.log("Płyny z najlepszym wynikiem: " + bestSolutions);

function getMoreEffectiveSolution(scores, costs, highscore) {
  var cost = 100;
  var index;
  for (var i = 0; i < scores.length; i++) {
    if (scores[i] == highscore) {
      if (cost > costs[i]) {
        index = i;
        cost = costs[i];
      }
    }
  }
  return index;
}

var mostCostEffective = getMoreEffectiveSolution(scores, costs, highScore);
console.log("Płyn numer: " + mostCostEffective + " jest najbardziej opłacalny.");

//-----------------------------------------------
// OBIEKTY

var chevy = {
  make: "Chevy",
  model: "Bel Air",
  year: 1957,
  color: "czerwony",
  passengers: 2,
  convertible: false,
  mileage: 1021,
  started: false,
  start: function start() {
    this.started = true;
  },
  stop: function stop() {
    this.started = false;
  },
  drive: function drive() {
    if (this.started) {
      console.log(this.make + " " + this.model + " robi: brrrrum wrrrr!");
    } else {
      console.log("Najpierw musisz włączyć silnik");
    }
  }
};
chevy.start();
chevy.drive();
chevy.stop();
chevy.drive();

console.log(chevy.model);

var cadi = {
  make: "Cadillac",
  model: "Thunder",
  year: 1955,
  color: "lightbrown",
  passengers: 5,
  mileage: 12892,
  convertible: false,
  "comfortable Seats": true,
  started: false,
  start: function start() {
    this.started = true;
  },
  stop: function stop() {
    this.started = false;
  },
  drive: function drive() {
    if (this.started) {
      console.log(this.make + " " + this.model + " wystartował więc jedziemyyyyyy");
    } else {
      console.log("Najpierw musisz włączyć silnik");
    }
  }
};
cadi.start();
cadi.drive();
cadi.stop();
cadi.drive();

cadi.hornSound = "buuuum";

var miles = cadi.mileage;
if (miles < 13000) {
  // buyIt();
  console.log(cadi);
}

//---------------------------------

var malyFiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "szaroniebieski",
  passengers: 2,
  convertible: false,
  mileage: 80000,
  needWashing: true
};

var doggy = {
  name: "Burek",
  weight: 20.3,
  age: 4,
  breed: "mieszaniec",
  activity: "przonoszenie piłki"
};
var bark;
if (doggy.weight > 20) {
  bark = "HAU HAU HAU";
} else {
  bark = "hau hau hau";
}
var speak = doggy.name + " szczeka " + bark + " kiedy ma ochotę na " + doggy.activity;
console.log(speak);

console.log(doggy);
delete doggy.age; //usunięcie właściowości "age"
console.log(doggy);

//------------------------------

var lookMaNoProsp = {};
lookMaNoProsp.age = 5;
if (lookMaNoProsp.age < 10) {
  lookMaNoProsp.school = "podstawowa";
};

//-----------------------------

var taxi = {
  make: "SieMoCorp",
  model: "Taxi",
  year: 1955,
  color: "żółty",
  passengers: "yellow",
  convertible: false,
  mileage: 281341,
  started: false,
  start: function start() {
    this.started = true;
  },
  stop: function stop() {
    this.started = false;
  },
  drive: function drive() {
    if (this.started) {
      console.log(this.make + " " + this.model + " wystartował!");
    } else {
      console.log("Najpierw musisz włączyć silnik");
    }
  }
};
taxi.start();
taxi.drive();
taxi.stop();
taxi.drive();

function prequal(car) {
  if (car.mileage > 10000) {
    return false;
  } else if (car.year > 1960) {
    return false;
  }
  return true;
}

var worthToLook = prequal(taxi);
if (worthToLook) {
  console.log("Powinieneś zainteresować się tym " + taxi.make + " " + taxi.model);
} else {
  console.log("Ten " + taxi.make + " " + taxi.model + " możesz sobie podarować");
}

var worthToLook2 = prequal(chevy);
if (worthToLook2) {
  console.log("Powinieneś zainteresować się tym " + chevy.make + " " + chevy.model);
} else {
  console.log("Ten " + chevy.make + " " + chevy.model + " możesz sobie podarować");
}

var worthToLook3 = prequal(cadi);
if (worthToLook3) {
  console.log("Powinieneś zainteresować się tym " + cadi.make + " " + cadi.model);
} else {
  console.log("Ten " + cadi.make + " " + cadi.model + " możesz sobie podarować");
}

var worthToLook4 = prequal(malyFiat);
if (worthToLook4) {
  console.log("Powinieneś zainteresować się tym " + malyFiat.make + " " + malyFiat.model);
} else {
  console.log("Ten " + malyFiat.make + " " + malyFiat.model + " możesz sobie podarować");
}

//-----------------------------------

var fido = {
  name: "Burek",
  weight: 48,
  breed: "mieszaniec",
  loves: "spacery"
};

function loseWeight(dog, amount) {
  dog.weight = dog.weight - amount;
  return dog.weight;
}

var goodDoggy = loseWeight(fido, 10);
console.log(goodDoggy);
console.log(fido.name + " waży teraz " + fido.weight + " kg");

//----------------------------------

var superSecretFile = {
  level: "tajne",
  opened: 0,
  password: 2,
  contents: "Następne spotkanie z dr. Zatanem odbędzie się w Katowicach."
};

function getSecret(file, secretPassword) {
  file.opened = file.opened + 1;
  if (secretPassword == file.password) {
    return file.contents;
  } else {
    return "Złe hasło, brak dostępu!";
  }
}

function setSecret(file, secretPassword, secret) {
  if (secretPassword == file.password) {
    file.opened = 0;
    file.contents = secret;
  }
}

var secret = getSecret(superSecretFile, 2);
console.log(secret);

setSecret(superSecretFile, 2, "Następne spotkanie z dr. Zatanem odbędzie się w Żywcu.");
secret = getSecret(superSecretFile, 2);

//------------------------------------------

function makeCar() {
  var makes = ["Chevy", "GM", "Fiat", "SieMoCorp", "Tucker"];
  var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
  var years = [1955, 1957, 1948, 1954, 1961];
  var colors = ["czerwony", "niebieski", "jasnobrązowy", "żółty", "biały"];
  var convertible = [true, false];

  var rand1 = Math.floor(Math.random() * makes.length);
  var rand2 = Math.floor(Math.random() * models.length);
  var rand3 = Math.floor(Math.random() * years.length);
  var rand4 = Math.floor(Math.random() * colors.length);
  var rand5 = Math.floor(Math.random() * 5) + 1;
  var rand6 = Math.floor(Math.random() * 2);

  var car = {
    make: makes[rand1],
    model: models[rand2],
    year: years[rand3],
    colors: colors[rand4],
    passengers: rand5,
    convertible: convertible[rand6],
    mileage: 0
  };
  return car;
}

function displayCar(car) {
  console.log("Twoim nowym samochodem jest: " + car.make + " " + car.model + " z roku " + car.year + " a jego kolor to " + car.colors + "." + " Liczba pasażerów jaka wejdzie: " + car.passengers);
}

var carToSell = makeCar();
displayCar(carToSell);

//------------------------------------------------
var myAge = 31;
var mySalary = 3000;
var myRaise = mySalary * 0.05;

function calculateSalary(age, pension, raise) {
  myRaise = mySalary * 0.05;
  for (var i = myAge; i < 67; i++) {
    mySalary = mySalary + myRaise;
    myRaise = mySalary * 0.05;
    myAge++;
    console.log(myAge);
    console.log(Math.floor(mySalary));
  }
  return Math.floor(mySalary);
}

var fullPensionBeforeRetirement = calculateSalary(myAge, mySalary, myRaise);
console.log(fullPensionBeforeRetirement);

//--------------------------------------------
//THIS - WŁAŚCIWOŚCI OBIEKTU

var fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "szaroniebieski",
  passengers: 2,
  convertible: false,
  mileage: 0,
  started: false,
  fuel: 0,
  start: function start() {
    if (this.fuel == 0) {
      console.log("Ej, musisz zatankować!");
    } else {
      this.started = true;
    }
  },
  stop: function stop() {
    this.started = false;
  },
  drive: function drive() {
    if (this.started) {
      if (this.fuel > 0) {
        console.log(this.make + " " + this.model + " " + " został odpalony");
        this.fuel = this.fuel - 1;
        console.log(this.fuel);
      } else {
        console.log("Kur..., brak paliwa");
        this.stop();
      }
    } else {
      console.log("Najpierw musisz zatankować");
    }
  },
  addFuel: function addFuel(amount) {
    this.fuel = this.fuel + amount;
  }
};

fiat.addFuel(2);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.stop();

//--------------------------------------------
var song = {
  name: "Brother in arms",
  artists: "Dire in Stairs",
  minutes: 4,
  seconds: 3,
  genre: "80",
  playing: false,
  play: function play() {
    if (!this.playing) {
      this.playing = true, console.log("Odtwarzam teraz " + this.name + " wykonywany przez: " + this.artists + ".");
    }
  },
  pause: function pause() {
    if (this.playing) {
      this.playing = false, console.log("Odwtwarzanie utworu " + this.name + " wykonywanego przez: " + this.artists + " zostało wstrzymane.");
    }
  }
};

song.play();
song.pause();

//----------------------------------------------

var eightBall = {
  index: 0,
  advice: ["tak", "nie", "nie wiem", "może"],
  shake: function shake() {
    this.index = Math.floor(Math.random() * this.advice.length);
    if (this.index >= this.advice.length) {
      this.index = 0;
    }
  },
  look: function look() {
    return this.advice[this.index];
  }
};

eightBall.shake();
console.log(eightBall.look());

//---------------------------------------------

// var access = document.getElementById("code9");
// var code = access.innerHTML;
// code = code + "północy";
// console.log(code);
//
// var access2 = document.getElementById("code4");
// var code2 = access2.innerHTML;
// code2 = code2 + " południu";
// console.log("code2");

//-------------------------------------------

//DOCUMENT OBJECT MODEL


//-----------------------------------------

function init() {

  var song1 = document.getElementById("song1");
  var song2 = document.getElementById("song2");
  var song3 = document.getElementById("song3");

  song1.innerHTML = "Smutne zamszowe łańcuchy, Elvisa Pagelya";
  song2.innerHTML = "Wielkie obiekty w ogniu, Jerry'ego JSON Lewisa";
  song3.innerHTML = "Pierwszy wiersz kodu, Johnny'ego JavaScripta";
  // --
  var planet = document.getElementById("redplanet");
  planet.innerHTML = "Alarm czerwony: rozpoczęto ostrzał z fazerów";
  planet.setAttribute("class", "redtext");
  // --
  var scoop = document.getElementById("raspberry");
  var altText = scoop.getAttribute("alt");
  if (altText == null) {
    console.log("Wartość alt nie istnieje");
  } else {
    console.log("W oknie konsoli nie mogę zobaczyć obrazka");
    console.log("ale powiedziano mi, że wygląda jak " + altText);
  }
}

// window.onload = init;

//--------------------------------------------
// TYPY

var y = false;
var x = true;
if (y == false && x == true) {
  y = x + y;
  x = y + x;
  console.log(y, x);
}

var customer = {
  name: "Joanna"
};
if (customer.phoneNumber == undefined) {
  console.log("brak numeru telefonu");
}

var test1 = "abcdef";
var test2 = 123;
var test3 = true;
var test4 = {};
var test5 = [];
var test6;
var test7 = { "abcdef": 123 };
var test8 = ["abcdef", 123];
function test9() {
  return "abcdef";
}
var test10 = null;

console.log(typeof test1 === "undefined" ? "undefined" : _typeof(test1));
console.log(typeof test2 === "undefined" ? "undefined" : _typeof(test2));
console.log(typeof test3 === "undefined" ? "undefined" : _typeof(test3));
console.log(typeof test4 === "undefined" ? "undefined" : _typeof(test4));
console.log(typeof test5 === "undefined" ? "undefined" : _typeof(test5));
console.log(typeof test6 === "undefined" ? "undefined" : _typeof(test6));
console.log(typeof test7 === "undefined" ? "undefined" : _typeof(test7));
console.log(typeof test8 === "undefined" ? "undefined" : _typeof(test8));
console.log(typeof test9 === "undefined" ? "undefined" : _typeof(test9));
console.log(typeof test10 === "undefined" ? "undefined" : _typeof(test10));

var ay = 0 / 0;
var by = "food" * 1000;
var cy = Math.sqrt(-9);

console.log(ay);

if (isNaN(ay)) {
  ay = 0;
}
console.log(ay);
//---------------------------------------

if (99 == "99") {
  console.log("Liczba jest równa łańcuchowi naków");
} else {
  console.log("Przecie licba nie jest równa łańcuchowi znaków");
}

var num1 = 1;
var num2 = "1";

if (num1 == num2) {
  console.log("równe");
}

//---------------------------------------
//Konwersje operandów operatora równości:

// 1. Liczba i łańcuch znaków

var compare1 = 99;
var compare2 = "vanilla";
console.log(compare1 == compare2);

//2. liczba i wartość logiczna

var compare3 = 1;
var compare4 = true;
console.log(compare3 == compare4);

//Liczba jako string i wartość logiczna

var compare5 = "1";
var compare6 = true;
console.log(compare5 == compare6);

// 3. Porównanie wartości null i undefined

var compare7 = undefined;
var compare8 = null;
console.log(compare7 == compare8);

// 4. porównanie liczby z pustym łańcuchem znaków

var compare9 = 1;
var compare10 = "";
console.log(compare9 == compare10);

//---------------------------------
console.log("42" == 42);
console.log(0 == "0");
console.log("0" == false);
console.log("true" == true);
console.log("0" == false);
console.log(true == ("1" !== 1));
console.log(42 === "42");
console.log(0 === "0");
console.log("0" === false);
console.log(true === "true");
console.log(true === (1 === "1"));

//---------------------------------

var addi = 3 + "4";
console.log(addi);
var plussi = "4" + 3;
console.log(plussi);
var multi = 3 * "4";
console.log(multi);
var divi = 80 / "10";
console.log(divi);
var mini = "10" - 5;
console.log(mini);
var conc = 1 + 2 + " pizza";
var conc2 = 1 + (2 + " pizza");
var conc3 = 1 + 2 + " pizza";
console.log(conc, conc2, conc3);
var love = -true + " love is sometimes " + -false;
console.log(love);
console.log(Infinity);
console.log("43" + 43);
console.log(2 + "1 1");
console.log("1" - "1");
console.log(7 + Number("10"));
console.log("hi there");
//--------------------------------

var s = 10;
var sy = --s + --s + s;
console.log(sy);

function findCarInLot(car) {
  for (var i = 0; i < lot.length; i++) {
    if (car == lot[i]) {
      return "Miejsce w tablicy elementu " + [i] + " to " + i;
    }
  }
  // return -1; //don't why they put it in here...?
}

var chevy1 = {
  make: "Chevy",
  model: "Bel Air"
};
var taxi = {
  make: "SieMoCorp",
  model: "Taxi"
};
var fiat1 = {
  make: "Fiat",
  model: "500"
};
var fiat2 = {
  make: "Fiat",
  model: "500"
};

var lot = [chevy1, taxi, fiat1, fiat2];
var loc1 = findCarInLot(fiat2);
var loc2 = findCarInLot(taxi);
var loc3 = findCarInLot(chevy1);
var loc4 = findCarInLot(fiat1);
console.log(loc1);
console.log(loc2);
console.log(loc3);
console.log(loc4);

//-------------------------------------

//var ma wartość undefined
var testThis;
if (testThis) {
  console.log("Zadeklarowana zmienna bez wartości jest TRUE");
} else {
  console.log("Zadeklarowana zmienna bez wartości jest FALSE");
}

//null
var element = document.getElementById("elementThatDoesntExists");
if (element) {
  console.log("Null przyjmuje wartość TRUE");
} else {
  console.log("Null przyjmuje wartość FALSE");
}

//0
if (0) {
  console.log("Zero ma wartość TRUE");
} else {
  console.log("Zero ma wartość FALSE");
}

//pusty string
if ("") {
  console.log("pusty string ma wartość jest TRUE");
} else {
  console.log("pusty string ma wartość jest FALSE");
}
//niepusty string!
if (" ") {
  console.log("pusty string ma wartość jest TRUE");
} else {
  console.log("pusty string ma wartość jest FALSE");
}

//Not a Number
if (NaN) {
  console.log("NaN przyjmuje wartość TRUE");
} else {
  console.log("Nan przyjmuje wartość FALSE");
}

//Infinity
if (Infinity) {
  console.log("Infinity przyjmuje wartość TRUE");
} else {
  console.log("Infinity przyjmuje wartość FALSE");
}

//Boolean - FALSE
if (false) {
  console.log("False przyjmuje wartość TRUE");
} else {
  console.log("False przyjmuje wartość FALSE");
}

//Tablica
if (true) {
  console.log("Tablica przyjmuje wartość TRUE");
} else {
  console.log("Tablica przyjmuje wartość FALSE");
}

//Wyrażenie liczbowe
if ((2 > 3 || 3 > 1 || 5 > 3) && (4 > 3 || 5 >= 3)) {
  console.log("Liczba 1 przyjmuje wartość TRUE");
} else {
  console.log("Liczba 1 przyjmuje wartość FALSE");
}

//Pełny string
if ("somewordsinstring") {
  console.log("niepusty string ma wartość TRUE");
} else {
  console.log("Niepusty string ma wartość FALSE");
}

//--------------------------------------------------

function lieDetectorTest() {
  var lies = 0;

  var stolenDiamonds = {};
  if (stolenDiamonds) {
    console.log("Ukradłeś diament!");
    lies++;
  }
  var car = {
    keysInPocket: null
  };
  if (car.emptyGasTank) {
    console.log("Jechałeś także skradzionym samochodem!");
    lies++;
  }
  var foundYouAtTheCrimeScene = [];
  if (foundYouAtTheCrimeScene) {
    console.log("To oczywisty dowód przestępstwa");
    lies++;
  }
  if (foundYouAtTheCrimeScene[0]) {
    console.log("Znaleziono przy Tobie skradziony diament");
    lies++;
  }
  var yourName = " ";
  if (yourName) {
    console.log("Dodatkowo skłamałeś podając swoje personalia");
    lies++;
  }
  return lies;
}

var numberOfLies = lieDetectorTest();
console.log("Skłamałeś " + numberOfLies + " razy");
if (numberOfLies >= 3) {
  console.log("Winny wszystkich zarzutów!");
}

//-----------------------------

var someRandomText = "PISZĄC WIADOMOŚCI, NIE POWIENIENEŚ UŻYWAĆ WIELKICH LITER";
var someRandomTextWithLowerCases = someRandomText.toLowerCase();
var someRandomText2 = "Pisząc tylko małymi literami możesz nie osiągnąć efektu wzmocnienia";
var someRandomTextWithUpperCases = someRandomText2.toUpperCase();

if (someRandomTextWithLowerCases.length > 0 && someRandomTextWithUpperCases.length > 0) {
  console.log(someRandomTextWithLowerCases + " ale " + someRandomTextWithUpperCases);
}

//-----------------------------

var emot = "XOxxOO";
var hugs = 0;
var kisses = 0;

emot = emot.trim();
emot = emot.toUpperCase();

for (i = 0; i < emot.length; i++) {
  if (emot.charAt(i) === "X") {
    hugs++;
  } else if (emot.charAt(i) === "O") {
    kisses++;
  }
}
console.log(hugs);

//-----------------------

var names = "janka";
var phone = "867-5309";
var fact = "To liczba pierwsza";
var songName = phone + "/" + names;
var indexs = phone.indexOf("-");

if (fact.substring(10, 18) === "pierwsza") {
  console.log(fact.substring(10, 18));
}

//-----------------------

//metoda Length
var superInput = "janka@bardzosprytni.com.pl";
for (var i = 0; i < superInput.length; i++) {
  if (superInput.charAt(i) === "@") {
    console.log(" Znak specjalny @ znajduje się na pozycji nr: " + i);
  }
}

//metoda indexOf
var phrase = "czy to kot, czy coś innego?";
var indexOfCat = phrase.indexOf("kot");
var indexOfIf = phrase.indexOf("czy", 7);
var indexofDog = phrase.indexOf("Pies");
console.log("Słowo zapisano zaczynając od indexu " + indexOfCat);
console.log("Słowo czy zapisano, zaczynając od indexu " + indexOfIf);
console.log("Słowo pies zapisano zaczynając od indexu " + indexofDog);

//metoda substpring
var data1 = "imię|telefon|adres";
var data1Val = data1.substring(5, 12);
var data1Val2 = data1.substring(13);
console.log("Wybrany fragment to " + data1Val);
console.log("Wybrany fragment to " + data1Val2);

//metoda split
var dataToAnalyze = "imię| nazwisko| telefon| adres| kontakt";
var vals = dataToAnalyze.split("|");
console.log("Oto tablica z podzielony łańcuchem: " + vals);

//metoda slice
var textToSlice = "Oto przykładowy łańcuch na którym uzyjemy metody slice";
var sliceMethod = textToSlice.slice(4, 9);
console.log(sliceMethod);

//------------------------------------

// metoda1
function validate(phoneNumber) {
  if (phoneNumber.length !== 8) {
    return false;
  }
  for (i = 0; i < phoneNumber.length; i++) {
    if (i === 3) {
      if (phoneNumber.charAt(i) !== "-") {
        return false;
      }
    } else if (isNaN(phoneNumber.charAt(i))) {
      return false;
    }
  }
}
// metoda2
function validate2(phoneNumber) {
  if (phoneNumber.length !== 8) {
    return false;
  }
  var first = phoneNumber.substring(0, 3);
  var second = phoneNumber.substring(4);
  if (phoneNumber.charAt(3) !== "-" || isNaN(first) || isNaN(second)) {
    return false;
  }
  return true;
}
//-------------------------------------

function Duck(sound) {
  this.sound = sound;
  this.quack = function () {
    console.log(this.sound);
  };
}

var toy = new Duck("kwa kwa");
toy.quack();

console.log(typeof toy === "undefined" ? "undefined" : _typeof(toy));
console.log(toy instanceof Duck);

//------------------------------------

function pageLoaderHandler() {
  // console.log("Ja żyję");
}

window.onload = pageLoaderHandler;

//------------------------------------

function quacks(num) {
  for (var i = 0; i < num; i++) {
    console.log("kwak");
    console.log(num);
  }
}
quacks(6);
quacks(3);

var fly = function fly(num) {
  for (var i = 0; i < num; i++) {
    console.log("latam!");
  }
};
fly(4);
fly(3);

//-----------------------------------

var midi = true;
var type = "piano";
var midiInterface;

function play(sequence) {}

var pause = function pause() {
  stop();
};

function stop() {}
function createMidi() {}

if (midi) {
  midiInterface = function midiInterface(type) {};
}

//-------------------------------------------

var passengers = [{ name: "Janka Pętlicka", paid: true, ticket: "turystyczna" }, { name: "Dr Zlatan", paid: true, ticket: "premium" }, { name: "Stefania Właściwa", paid: false, ticket: "pierwsza klasa" }, { name: "Janek funkcyjniak", paid: true, ticket: "turystyczna" }];

console.log(passengers);

function checkPaid(passenger) {
  for (var i = 0; i < passenger.length; i++) {
    if (!passenger[i].paid) {
      return false;
    }
  }
  return true;
}
var sth1 = checkPaid(passengers);
console.log(sth1);

function checkNoFly(passenger) {
  for (var i = 0; i < passenger.length; i++) {
    if (passenger[i].name) {
      return false;
    }
  }
  return true;
}

var sth2 = checkNoFly(passengers);
console.log(sth2);

function printPassengersName(passenger) {
  for (var i = 0; i < passenger.length; i++) {
    console.log(passenger[i].name);
  }
}
printPassengersName(passengers);

function sayIt(translator) {
  var phrase = translator("Witam");
  console.log(phrase);
}

function hawaiianTranslator(word) {
  if (word == "Witam") {
    return "Aloha";
  }
  if (word == "Do widzenia") {
    return ">Alohaa";
  }
}
sayIt(hawaiianTranslator);

//--------------------------------
function procesPassengers(passengers, testFunction) {
  for (var i = 0; i < passengers.length; i++) {
    if (testFunction(passengers[i])) {
      return false;
    }
  }
  return true;
}

function printPassengersList(passenger) {
  var message = passenger.name;

  if (passenger.paid === true) {
    message = message + " :zapłacił(a)";
  } else {
    message = message + " :nie zapłacił(a)";
  }
  console.log(message);
  return false;
}

procesPassengers(passengers, printPassengersList);

function serveCustomer(passenger) {
  var getDrinkOrderFunction = createDrinkOrder(passenger);
  var createFoodOrder = getDinnerOrderFunction(passenger);
  getDrinkOrderFunction();
  createFoodOrder();
  //Zamówienie na posiłek
  // getDrinkOrderFunction();
  // getDrinkOrderFunction();
  //Wyświetlamy film
  // getDrinkOrderFunction();
}

function createDrinkOrder(passenger) {
  var orderFunction;

  if (passenger.ticket === "pierwsza klasa") {
    orderFunction = function orderFunction() {
      alert("Podać koktajl czy wino?");
    };
  } else if (passenger.ticket === "turystyczna") {
    orderFunction = function orderFunction() {
      alert("Podać colę czy wodę?");
    };
  } else {
    orderFunction = function orderFunction() {
      alert("Podać colę, wodę czy wino?");
    };
  }
  return orderFunction;
}

function getDinnerOrderFunction(passenger) {
  var orderFoodFunction;

  if (passenger.ticket === "pierwsza klasa") {
    orderFoodFunction = function orderFoodFunction() {
      alert("Podać kurczaka czy makaron");
    };
  } else if (passenger.ticket === "premium") {
    orderFoodFunction = function orderFoodFunction() {
      alert("Podać przekąski czy talerz serów?");
    };
  } else {
    orderFoodFunction = function orderFoodFunction() {
      alert("Podać orzeszki czy precelki?");
    };
  }
  return orderFoodFunction;
}

function servePassengers(passengers) {
  for (var i = 0; i < passengers.length; i++) {
    serveCustomer(passengers[i]);
  }
}
// servePassengers(passengers); 
//---------------------------------------

var products = [{ name: "Grejpfrut", calories: 170, color: "czerwony", sold: 8200 }, { name: "Pomarańcza", calories: 160, color: "pomarańczowy", sold: 12101 }, { name: "Cola", calories: 210, color: "karmelowy", sold: 25412 }, { name: "Cola dietetyczna", calories: 0, color: "karmelowy", sold: 43922 }, { name: "Cytryna", calories: 200, color: "bezbarwny", sold: 14983 }, { name: "Malina", calories: 180, color: "różowy", sold: 9427 }, { name: "Piwo korzenne", calories: 200, color: "karmelowy", sold: 9909 }, { name: "Woda", calories: 0, color: "bezbarwny", sold: 62123 }];

function compareSold(colaA, colaB) {
  if (colaA.sold > colaB.sold) {
    return 1;
  } else if (colaA.sold === colaB.sold) {
    return 0;
  } else {
    return -1;
  }
}

console.log(products.sort(compareSold));

function compareProducts(products) {
  for (var i = 0; i < products.length; i++) {
    console.log("Nazwa: " + products[i].name + ", liczba kalorii: " + products[i].calories + ", kolor: " + products[i].color + ", liczba sprzedanych butelek: " + products[i].sold);
  }
}

compareProducts(products);

function compareNames(name1, name2) {
  if (name1.name > name2.name) {
    return 1;
  } else if (name1.name === name2.name) {
    return 0;
  } else {
    return -1;
  }
}

console.log(products.sort(compareNames));

function compareCalories(cal1, cal2) {
  if (cal1.calories > cal2.calories) {
    return 1;
  } else if (cal1.calories === cal2.calories) {
    return 0;
  } else {
    return -1;
  }
}

// console.log(products.sort(compareCalories));

// --------------------------------------------------
function addN(n) {
  var adder = function adder(x) {
    return n + x;
  };
  return adder;
}

var add2 = addN(100);
console.log(add2);

// -------------------------------------

// function vaccine(dosage) {
//   if (dossage > 0) {
//     inject(dossage);
//   }
// }

// administer(patient, vaccine, time);

// administr(patient, function(dossage){
//   if (dossage > 0) {
//     inject(dossage);
//   }
// }, time);

var count = 0;

function counting() {
  count = count + 1;
  return count;
}

console.log(counting());
console.log(counting());
console.log(counting());

//-----------------------

//Domknięcie leksykalne...

function makeCounter() {
  var count = 0;

  function counter() {
    count = count + 1;
    return count;
  }
  return counter;
}

var counterTest = makeCounter();
console.log(counterTest());
console.log(counterTest());
console.log(counterTest());

function makeCounter2() {
  var count = 100;

  return {
    increment: function increment() {
      count++;
      return count;
    },
    increment2: function increment2() {
      count = count + 2;
      return count;
    }
  };
}

var someCounter = makeCounter2();
console.log(someCounter.increment());
console.log(someCounter.increment2());
console.log(someCounter.increment2());

//-----------------------

function multiN(n) {
  return function multiBy(m) {
    return n * m;
  };
}

var multBy3 = multiN(3);
console.log(multBy3(3));

//-----------------------

function makeTimer(doneMessage, n) {

  setTimeout(function () {
    alert(doneMessage);
  }, n);
}

// makeTimer("Wszystko działa!", 2000);

function makeSomeTimer(doneM, n) {
  setTimeout(handler, n);
  function handler() {
    alert(doneM);
  }
}

// makeSomeTimer("Gtowe!", 2000);

function setTimer(doneMessage, n) {

  setTimeout(function () {
    alert(doneMessage);
  }, n);

  doneMessage = "BUUM";
}
// setTimer("Boli?", 2000);

function someFunction() {
  var body = document.getElementsByTagName("body");
  body[0].style.backgroundColor = "black";
};
//--------------------------------------
//Zmiana liczby kliknięć w DIVie bez domknięcia

// var count = 0; /*count jako zmienna globalna! */

// window.onload = function() {
//   var button = document.getElementById("clickme");
//   button.onclick = handleclick();
// };

// function handleclick() {
//   var message = "Kliknąłeś mnie";
//   var div = document.getElementById("message");
//   count++;
//   div.innerHTML = message + count + " razy";
// }
//----------------------------------------

//----------------------------------------
//Zmiana liczby kliknięć w DIVie z domknięciem;

// window.onload = function () {
//   var count = 0;
//   var message = "Kliknąłeś mnie";
//   var div = document.getElementById('message');

//   var button = document.getElementById('clickme');
//   button.onclick = function () {
//     count++;

//     if (count === 1) {
//       div.innerHTML = message + " " + count + " raz";
//     } else {
//       div.innerHTML = message + " " + count + " razy";
//     }
//   }
// }
//--------------------------------------------

//Konstruktor

function dogCatcher(obj) {
  return obj instanceof Dog;
}

function Cat(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}
var meow = new Cat("Filemon", "Syjamski", 5);
var whiskers = new Cat("Rojber", "dachowiec", 6);

var fido = {
  name: "Burek",
  breed: "mieszaniec",
  weight: 20
};

function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  this.bark = function () {
    if (this.weight > 15) {
      // alert(this.name + " szczeka hau hau")
    } else {
        // alert(this.name + " szczeka hiauuuuuu");
      }
  };
}

// var fido = new Dog("Maksio", "Owczarek", 5);
var fluffy = new Dog("Dino", "Pudel", 16);
var spot = new Dog("Kieł", "chiuaua", 4);
var dogs = [meow, fido, fluffy, spot, whiskers];

for (var i = 0; i < dogs.length; i++) {
  if (dogCatcher(dogs[i])) {
    console.log(dogs[i].name + " to pies!");
  }
}

// for (var i = 0; i < dogs.length; i++) {
//   var size = "mały";
//   if (dogs[i].weight > 10) {
//     size = "duży"
//   } 
//   // console.log("Pies: " + dogs[i].name + " to " + size + " pies rasy " + dogs[i].breed)
// }

// for (var i = 0; i < dogs.length; i++) {
//   dogs[i].bark();
// }

function widget(partNo, size) {
  this.no = partNo;
  this.breed = size;
};

function formFactor(material, widget) {
  this.material = material;
  this.widget = widget;
};

function superFactor(object, widget, formFactor) {
  this.object = object;
  this.widget = widget;
  this.formFactor = formFactor;
}

var widgetA = new widget(100, "duży");
var widgetB = new widget(101, "mały");
var formFactorA = new formFactor("plastikowy", widgetA);
var formFactorB = new formFactor("metalowy", widgetB);
var superFactorA = new superFactor("Wspaniały", widgetA, formFactorA);
var superFactorB = new superFactor("Niesamowity", widgetB, formFactorB);

console.log(formFactorA);
console.log(formFactorB);
console.log(superFactorA);
console.log(superFactorB);

function Coffee(roast, ounces) {
  this.roast = roast;
  this.ounces = ounces;
  this.getSize = function () {

    if (this.ounces === 250) {
      return "mała";
    } else if (this.ounces === 375) {
      return "średnia";
    } else if (this.ounces === 500) {
      return "duża";
    }
  };
  this.toString = function () {
    return "Twoje zamówienie: " + this.getSize() + " " + this.roast + ".";
  };
}

var coffee = new Coffee("Segafredo", 375);
console.log(coffee.toString());

var darkRoast = new Coffee("Parana Cafe", 500);
console.log(darkRoast.toString());

//250 ml to mała kawa;
//375 ml to średnia kawa;
//500ml to duża kawa;

//toString - Twoje zamówienie to: duża kawa Segafreo

// -------------------------------------------------
var cadiParams = {
  make: "GM",
  model: "cadillac",
  year: 1955,
  color: "jasnobrązowy",
  passengers: 5,
  convertible: false,
  milleage: 12892
};

var ferrariParams = {
  make: "Włoski",
  model: "Enzo",
  year: 2013,
  color: "czerwony",
  passengers: 2,
  convertible: false,
  milleage: 10000
};

var chevyParams = {
  make: "Chevy",
  model: "Bel Air",
  year: 1957,
  color: "czerwony",
  passengers: 2,
  convertible: false,
  milleage: 1021
};

var taxiParams = {
  make: "SieMoCOrp",
  model: "Taxi",
  year: 1955,
  color: "żółty",
  passengers: 4,
  convertible: false,
  milleage: 281341
};

var fiatParams = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "szaroniebieski",
  passengers: 2,
  convertible: false,
  milleage: 88000
};

var cadi = new Car(cadiParams);
var ferrari = new Car(ferrariParams);
var chevy = new Car(chevyParams);
var taxi = new Car(taxiParams);
var fiat = new Car(fiatParams);

function Car(params) {
  this.make = params.make;
  this.model = params.model;
  this.year = params.year;
  this.color = params.color;
  this.passengers = params.passengers;
  this.convertible = params.convertible;
  this.milleage = params.milleage;
  this.started = false;
  this.start = function () {
    this.started = true;
  };
  this.stop = function () {
    this.started = false;
  };
  this.drive = function () {
    if (this.started) {
      console.log(this.make + " " + this.model + " robi bruum");
      this.started = false;
    } else {
      console.log(this.make + " " + this.model + " nie jedzie");
      this.started = true;
    }
  };
}

// var ferrari = new Car("Włoski", "Enzo", 2013, "red", 2, false, 20000);
// var chevy = new Car("Chevy", "Bel air", 1957, "czerwony", 2, false, 1021);
// var cadi = new Car("Gm", "Cadillac", 1955, "jasnobrązowy", 5, false, 12892);
// var taxi = new Car("SieMoCorp", "Taxi", 1955, "żółty", 4, false, 281341) ;
// var fiat = new Car("Fiat", "500", 1957, "szaroniebieski", 2, false, 88000);

var cars = [ferrari, chevy, cadi, taxi, fiat];

for (var i = 0; i < cars.length; i++) {
  cars[i].start();
  cars[i].drive();
  cars[i].drive();
  cars[i].stop();
}

var limoParams = {
  make: "SieMoCorp",
  model: "limosine",
  year: 1983,
  color: "czarny",
  passengers: 12,
  convertible: true,
  mileage: 21120
};

var limoo = new Car(limoParams);
var limoDog = new Dog("Błękitna rapsodia", "Pudel", 40);

console.log(limoo.make + " " + limoo.model + " jest typu " + (typeof limoo === "undefined" ? "undefined" : _typeof(limoo)));
console.log(limoDog.name + " jest typu " + (typeof limoDog === "undefined" ? "undefined" : _typeof(limoDog)));

if ((typeof limoDog === "undefined" ? "undefined" : _typeof(limoDog)) === "object") {
  console.log("To jest obiekt");
}

if (limoDog instanceof Dog) {
  console.log("to jest instancja Dog");
}

//---------Konstruktor DATY-------------------------

var someDate = new Date();
var someDate2 = new Date("July 26, 1986");
var someDateToString = someDate.toDateString();
var someDateTimeString = someDate.toLocaleTimeString();
var someDateDateString = someDate.toLocaleDateString();
var someDateYear = someDate.getFullYear();
var someDateTime = someDate.getTime();
var someDateDay = someDate.getDay();

console.log(someDate);
console.log(someDate2);
console.log(someDateToString);
console.log(someDateTimeString);
console.log(someDateDateString);
console.log(someDateYear);
console.log(someDateTime);
console.log(someDateDay);

/***/ })
/******/ ]);