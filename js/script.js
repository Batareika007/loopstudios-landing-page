const hamburgerTriger = document.querySelector('.header__top_hamburger');
const hamburgerTrigerImg = document.querySelector('.header__top_hamburger img');
const navMenu = document.querySelector('.nav')

hamburgerTriger.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active')
        hamburgerTrigerImg.setAttribute('src', 'images/icon-hamburger.svg')

        gsap.to(navMenu, {
            duration: 0.5,
            ease: "circ.out",
            left: '100%',
        })

    } else {
        // navMenu.style.display = "unset";
        hamburgerTrigerImg.setAttribute('src', 'images/icon-close.svg')
        gsap.to(navMenu, {
            duration: 0.5,
            ease: "circ.out",
            left: 0
        })
        navMenu.classList.add('active')

    }

})