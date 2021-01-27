/** FUNCTION MODIFIED FROM w3Schools dropdown - - BASIC USE CREATIVE COMMOMNS  */
/*** ALLOWS DROPDOWN MENU IN REPOSNIVE DESIGN 
 * @param: NA
 * @return: NA
 */
function dropdown() {
    var menu = document.getElementById('nav'); 
    if (menu.style.display === "block") {
      menu.style.display = "none";
      if (x.matches) { // If media query matches
        menu.style.display = "flex";
      }
      } else {
        var x = window.matchMedia("(min-width: 700px)");
        if (x.matches) { // If media query matches
          menu.style.display = "flex";
        }
        else {
        menu.style.display = "block";
        }
      }
}
function windowTest(x) {
  var menu = document.getElementById('nav'); 
  if (x.matches) { // If media query matches
    menu.style.display = "flex";
  } else {

  }
}
var x = window.matchMedia("(min-width: 700px)");
var intervalId = window.setInterval(function(){
  windowTest(x); 
}, 1000);

console.log("X:" + x);
windowTest(x); 

document.getElementById("button1").onclick = function () {
  location.href = "www.duq.getqpay.com";
};




