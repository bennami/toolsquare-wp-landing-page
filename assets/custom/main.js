
// on scroll, change background navbar to darker color on homepage
$(window).scroll(function(){$('nav').toggleClass('bg-not-transparent', $(this).scrollTop() > 100);});

// on scroll show navbar brand
$(window).scroll(function(){$('.navbar-brand').toggleClass('show-brand', $(this).scrollTop() > 100);});

//on mobile change bg color to dar
let btn= document.querySelector('.navbar-toggler');
btn.addEventListener("click", function(){
    let element = document.getElementById("navbar1");
    element.classList.add("bg-not-transparent");
});


// back to top
