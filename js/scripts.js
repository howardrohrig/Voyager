$(function() {
    $('.switch').click(function(){
        $('body,nav,a,h5,p,hr,button.rounded-circle,button.random-circle i,.nav-brand,.nav-link,a.active,a.nav-link,.card,.card.rounded-pill').toggleClass('dark-mode');

        $('#navBurger').toggleClass('navbar-dark');
    });
    
    if($(window).width()<768){
        $('ul.navbar-nav').addClass('nav');
        $('ul.navbar-nav').addClass('nav-pills');
        $('ul.navbar-nav').addClass('nav-justified');
        $('ul.navbar-nav').removeClass('navbar-nav');
    }
    else{}
});

$(window).resize(function() {
    if($(window).width()<768){
        $('ul.navbar-nav').addClass('nav');
        $('ul.navbar-nav').addClass('nav-pills');
        $('ul.navbar-nav').addClass('nav-justified');
        $('ul.navbar-nav').removeClass('navbar-nav');
    }
    else{
        $('ul.nav-pills').addClass('navbar-nav');
        $('ul.navbar-nav').removeClass('nav-pills');
        $('ul.navbar-nav').removeClass('nav-justified');
        $('ul.navbar-nav').removeClass('nav');
    }
})