let burger = document.querySelector(".burger-wrapper");
let headerMenu = document.getElementById("toggleMenu");
 burger.onclick=function () {
    headerMenu.classList.toggle("toggled");
    this.classList.toggle("burger-wrapper-on");
}