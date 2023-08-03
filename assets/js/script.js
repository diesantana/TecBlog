function menuMobile(){
    const menuIcon = document.querySelector('.menu-mobile');
    const nav = document.querySelector('.nav-bar');
    
    function toggleMenu(){
        nav.classList.toggle('active');
    }
    menuIcon.addEventListener('click', toggleMenu);
}

menuMobile();