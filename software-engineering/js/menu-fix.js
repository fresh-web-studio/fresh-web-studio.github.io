window.onscroll = function showHeader() {
    var header = document.querySelector('.header');
    if(window.pageYOffset > 150){
        header.classList.add('header_fixed');
    } else{
        header.classList.remove('header_fixed');
    }
    var header = document.querySelector('.optimization');
    if(window.pageYOffset > 150){
        header.classList.add('optimization_fixed');
    } else{
        header.classList.remove('optimization_fixed');
    }
    var header = document.querySelector('.header-top');
    if(window.pageYOffset > 150){
        header.classList.add('header-top_fixed');
    } else{
        header.classList.remove('header-top_fixed');
    }
}