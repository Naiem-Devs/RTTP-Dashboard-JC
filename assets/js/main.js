(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (event){ 
    event.preventDefault();
    $('.siteBar-btn').toggleClass('change');  
    $('.mobile-menu').toggleClass('siteBar');  
    $('body').toggleClass('overlyOverFlue')  
  }); 
  
 // menu 
  $('.filter_btn').click( function (event){ 
    event.preventDefault();
    $('.Filter_menu').toggleClass('show');  
    $('body').toggleClass('overlyOverFlue') 
  }); 
 // menu 
  $('.notifications_btn').click( function (event){ 
    event.preventDefault();
    $('.notifications_Menu').toggleClass('show');  
    $('body').toggleClass('overlyOverFlue') 
  }); 
 // menu 
  $('.settings_btn').click( function (event){ 
    event.preventDefault();
    $('.Settings_menu').toggleClass('show');  
    $('body').toggleClass('overlyOverFlue') 
  }); 
  
 // Singel Select item 
  $('.oneSelect').click( function (event){ 
    event.preventDefault();
    $(this).toggleClass('active')
    $('.SelectFunction').toggleClass('singel_select'); 
    $('.SelectFunction').removeClass('all_select'); 
    $('.allSelect').removeClass('active');
    $(".checkbox_container input").removeAttr("checked","checked"); 
  }); 
  
 // All Select item 
  $('.allSelect').click( function (event){ 
    event.preventDefault();
    $(this).toggleClass('active')
    $('.SelectFunction').toggleClass('all_select'); 
    $('.SelectFunction').removeClass('singel_select'); 
    $('.oneSelect').removeClass('active'); 
    $(".checkbox_container input").attr("checked","checked");
  }); 
  

  // owlCarousel
  $(".deshboard-Hero_slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 1,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: true,
    dots: true
  });

  // owlCarousel
  $(".brand-active").owlCarousel({
    loop: true,
    margin: 30,
    items: 6,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 3
      },
      992: {
        items: 6
      }
    }
  });


  // Positions-Hub.html  position_hub_nav
  let phBtn = document.querySelectorAll('.position_hub_nav li a')

  phBtn.forEach(phBtns => {
      phBtns.addEventListener('click', (e) => {
        e.preventDefault()
          phremove()
          phBtns.classList.add('active')
      })
  })
  function phremove () {
      phBtn.forEach(phBtns => {
          phBtns.classList.remove('active')
      })
  }
 

  // Positions-List-select.html  Education-area Arrow Action
  let eduBtn = document.querySelectorAll('.Edu_blk button')

  eduBtn.forEach(eduBtns => {
      eduBtns.addEventListener('click', () => {
          eduremove()
          eduBtns.parentElement.parentElement.parentElement.parentElement.classList.add('active');
          eduBtns.classList.add('active')
      })
  })
  function eduremove () {
      eduBtn.forEach(eduBtns => {
          eduBtns.parentElement.parentElement.parentElement.parentElement.classList.remove('active');
          eduBtns.classList.remove('active')
      })
  }
 

  // Positions-List-select.html  Education-area Arrow Action
  let gdBtn = document.querySelectorAll('.gd_add_btn a')

  gdBtn.forEach(gdBtns => {
      gdBtns.addEventListener('click', (e) => {
        e.preventDefault()
          gdremove()
          gdBtns.parentElement.parentElement.parentElement.parentElement.classList.add('active');
          gdBtns.classList.add('active')
      })
  })
  function gdremove () {
      gdBtn.forEach(gdBtns => {
          gdBtns.parentElement.parentElement.parentElement.parentElement.classList.remove('active');
          gdBtns.classList.remove('active')
      })
  }
 

  //EIS-Reports.html sort_dropdown
  let sortBtn = document.querySelector('.sort_dropdown a')

  sortBtn.addEventListener('click', (e) => {
      e.preventDefault()
      let sortBtn = document.querySelector('.sort_dropdown')
      sortBtn.classList.toggle('toggled')


  })

})(jQuery);
