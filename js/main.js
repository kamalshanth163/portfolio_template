
$(document).ready(function () {
  
  let $btns = $('.project-area .button-group button');

  $btns.click(function (e) {
    
    $('.project-area .button-group button').removeClass('active');
    e.target.classList.add('active');

    let selector = $(e.target).attr('data-filter');
    $('.project-area .grid').isotope({
      filter : selector
    })
    return false;
  })

  $('.project-area .button-group #btn1').trigger('click');

  $('.project-area .grid .test-popup-link').magnificPopup({
    type: 'image',
    gallery:{enabled:true}
    // other options
  });

  
});




// Sticky navigation menu

const navbar = document.querySelector('nav');
const nav_brand = document.querySelector('nav > .navbar-brand');

window.addEventListener('scroll', function(e) {
  const lastPosition = window.scrollY
  if (lastPosition > 150 ) {
    navbar.classList.add('change-nav-style');
    nav_brand.classList.add('change-brand-style')

  } else if (navbar.classList.contains('change-nav-style') && nav_brand.classList.contains('change-brand-style')) {
    navbar.classList.remove('change-nav-style')
    nav_brand.classList.remove('change-brand-style')

  } else {
    navbar.classList.remove('change-nav-style')
    nav_brand.classList.remove('change-brand-style')
  }
})




