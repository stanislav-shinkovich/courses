const anchors = document.querySelector('#headerNav').querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute('href').substr(1);
        headerMenu.classList.toggle("toggled");
        burger.classList.toggle("burger-wrapper-on");


        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        document.getElementById(blockID).classList.toggle("red");
        setTimeout(       ()=>  document.getElementById(blockID).classList.toggle("red")
    ,1500
    );

    })
}

