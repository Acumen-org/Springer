window.onload = function (){
    document.getElementById('#email_contact').innerHTML = "contact@somethingsomething";
};
function myRead() {
    document.getElementById('#email_contact').innerHTML = "contact@somethingsomething";
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }