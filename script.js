const mainContent = document.getElementById("content");
const mainPic = document.querySelector(".spooky_art");
const firstLink = document.querySelector("menu li a");
const mainHeading = document.querySelector(".main_heading");
var para = document.createElement("p");
var newText = document.createTextNode("Inhabit hearing perhaps on ye do no. It maids decay as there he. Smallest on suitable disposed do although blessing he juvenile in. Society or if excited forbade. Here name off yet she long sold easy whom. Differed oh cheerful procured pleasure securing suitable in. Hold rich on an he oh fine. Chapter ability shyness article welcome be do on service.");
var copy = document.querySelector("footer p");


firstLink.innerHTML = "History";

mainPic.src = "https://res.cloudinary.com/dwuwuaov5/image/upload/v1571859683/hw3.png";

mainHeading.style.color = "#1EA896";

mainContent.innerHTML += "<article><img class='spooky_art' src='https://res.cloudinary.com/dwuwuaov5/image/upload/v1571859683/hw1.png' alt='' /><h1 class='main_heading'>Its Spooky Season</h1><p>Satisfied conveying an dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do mr prevailed. Mr feeling do chiefly cordial in do. Water timed folly right aware if oh truth. Imprudence attachment him his for sympathize. Large above be to means. Dashwood do provided stronger is. But discretion frequently sir the she instrument unaffected admiration everything. </p></article>";

para.appendChild(newText);
mainContent.insertBefore(para, document.querySelector("article"));

copy.parentNode.removeChild(copy);