document.addEventListener('DOMContentLoaded', function () {

  let cover = document.querySelector('.pageheader--cover')
  if (cover) {
    document.getElementById('header').classList.add('header--white')
  }

  document.querySelector('.header__menu a').addEventListener('click', (event) => {
    event.preventDefault()
    document.getElementById('topmenu').classList.add('active')
  })



  document.querySelector('.contact__call').addEventListener('click', (event) => {
    event.preventDefault()
    if (event.currentTarget.classList.contains('active')) {
      event.currentTarget.classList.remove('active')
      document.querySelector('.contact__content').classList.remove('active')
    } else {
      event.currentTarget.classList.add('active')
      document.querySelector('.contact__content').classList.add('active')
    }

  })

  document.querySelector('.topmenu__close a').addEventListener('click', (event) => {
    event.preventDefault()
    document.getElementById('topmenu').classList.remove('active')
  })

  if (window.innerWidth >= 767) {

    window.addEventListener('scroll', (event) => {
      scroll = window.scrollY
      if (scroll >= 77) {
        document.getElementById('header').classList.add('fixed')
      } else {
        document.getElementById('header').classList.remove('fixed')
      }

    });
  } else {
    window.addEventListener('scroll', (event) => {
      scroll = window.scrollY
      if (scroll >= 177) {
        document.getElementById('header').classList.add('fixed')
      } else {
        document.getElementById('header').classList.remove('fixed')
      }

    });
  }




});



$(document).ready(function () {

  var something = (function () {
    var executed = false;
    return function () {
      if (!executed) {
        executed = true;
        $('.stats__number span').each(function () {
          $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
          }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
              $(this).text(Math.ceil(now));
            }
          });
        });
      }
    };
  })();



  $(window).scroll(function () {
    var top_of_element = $(".stats").offset().top;
    var bottom_of_element = $(".stats").offset().top + $(".stats").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
      something()
    } else {

    }
  });

  function init() {
    $('.slidecontent').css('width', window.innerWidth + 'px');


    $('.solutionslider__wrapper').css(
      'height',
      $('.solutionslider__content').outerHeight() + $('.scrollbar').outerHeight(true))

    $('#slider-app').sly({

      horizontal: 1,
      itemNav: 'basic',
      smart: 1,
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 1,
      startAt: 0,
      scrollBar: $('#slider-app').parent().find('.scrollbar'),
      scrollBy: 1,
      speed: 400,
      elasticBounds: 1,
      dragHandle: 1,
      dynamicHandle: 1,
      clickBar: 1,

      // Cycling
      cycleBy: 'items',
      cycleInterval: 0,
      pauseOnHover: 1,


      // Buttons
      prev: $(this).parent().find('.prev'),
      next: $(this).parent().find('.next')
    });

    $('.siteslider__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      infinite: false,
      arrows: false,

    });

    $('.pageslider__slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      fade: false,
      infinite: false,
      arrows: false,

    });

    $('.imgcard__wrapper_slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      fade: false,
      infinite: false,
      arrows: false,
      dots: true

    });

    $(".slickarrows .next").click(function (e) {
      $(this).closest('.slickcontainer').find(".slick-slider").slick("slickNext");
    });
    $(".slickarrows .prev").click(function (e) {
      $(this).closest('.slickcontainer').find(".slick-slider").slick("slickPrev");
    });

    /* 
        $('#slider-site').sly({
          horizontal: 1,
          itemNav: 'forceCentered',
          smart: 1,
          activateMiddle: 0,
          releaseSwing: 0,
          startAt: 0,
          scrollBy: 0,
          speed: 300,
          elasticBounds: 0,
          dragHandle: 0,
          touchDragging: 1,
          dynamicHandle: 0,
          clickBar: 0,
          easing: 'swing',
          pagesBar: $(this).find('.dots'),

          // Buttons
          prev: $(this).find('.prev'),
          next: $(this).find('.next')
        });
     */
    $('#slider-branding').sly({
      horizontal: 1,
      itemNav: 'forceCentered',
      smart: 1,
      activateMiddle: 1,
      releaseSwing: 1,
      startAt: 0,
      scrollBy: 1,
      speed: 300,
      elasticBounds: 1,
      dragHandle: 1,
      touchDragging: 1,
      dynamicHandle: 1,
      clickBar: 1,
      pagesBar: $(this).find('.dots'),
      activatePageOn: 'click',

      // Buttons
      prev: $(this).find('.prev'),
      next: $(this).find('.next')
    });


    $('#slider-devblock').sly({
      horizontal: 1,
      itemNav: 'forceCentered',
      smart: 1,
      activateMiddle: 1,
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 1,
      startAt: 0,
      scrollBy: 1,
      speed: 300,
      elasticBounds: 1,
      dragHandle: 1,
      dynamicHandle: 1,
      clickBar: 1,
      cycleBy: 'items', // Enable automatic cycling by 'items' or 'pages'.
      cycleInterval: 3000, // Delay between cycles in milliseconds.

    });




    $('#slider-solutionblock').sly({
      horizontal: 1,
      itemNav: 'forceCentered',
      smart: 1,
      activateMiddle: 1,
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 1,
      startAt: 0,
      scrollBy: 1,
      speed: 300,
      elasticBounds: 1,
      dragHandle: 1,
      dynamicHandle: 1,
      clickBar: 1,
      cycleBy: 'items', // Enable automatic cycling by 'items' or 'pages'.
      cycleInterval: 3000, // Delay between cycles in milliseconds.
    });
    $('#slider-topseoblock').sly({
      horizontal: 1,
      itemNav: 'forceCentered',
      smart: 1,
      activateMiddle: 1,
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 1,
      startAt: 0,
      scrollBy: 1,
      speed: 300,
      elasticBounds: 1,
      dragHandle: 1,
      dynamicHandle: 1,
      clickBar: 1,
      /*  cycleBy: 'items', // Enable automatic cycling by 'items' or 'pages'.
       cycleInterval: 3000, // Delay between cycles in milliseconds. */
    });

    $('.offerslider__slide').each(function () {
      let w = $(this).closest('.offerslider__container').width()
      $(this).css('width', w + 'px')
    })


    $('.next').each(function () {
      $(this).on('click', function () {
        var item = $(this).closest('.frame').data('item');
        $(this).closest('.frame').sly('next', item);
      });

    })



    $('.slidecontent').css('width', window.innerWidth + 'px');


    $('.solutionslider__wrapper').css(
      'height',
      $('.solutionslider__content').outerHeight() + $('.scrollbar').outerHeight(true))

    $('#slider-app').sly({

      horizontal: 1,
      itemNav: 'basic',
      smart: 1,
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 1,
      startAt: 0,
      scrollBar: $('#slider-app').parent().find('.scrollbar'),
      scrollBy: 1,
      speed: 400,
      elasticBounds: 1,
      dragHandle: 1,
      dynamicHandle: 1,
      clickBar: 1,

      // Cycling
      cycleBy: 'items',
      cycleInterval: 0,
      pauseOnHover: 1,


      // Buttons
      prev: $(this).parent().find('.prev'),
      next: $(this).parent().find('.next')
    });

    $('.siteslider__slider').slick('refresh');
    $('#slider-branding').sly('reload');
    $('#slider-devblock').sly('reload');
    $('#slider-solutionblock').sly('reload');
    $('#slider-topseoblock').sly('reload');


    $('.offerslider__slide').each(function () {
      let w = $(this).closest('.offerslider__container').width()
      $(this).css('width', w + 'px')
    })


    $('.next').each(function () {
      $(this).on('click', function () {
        var item = $(this).closest('.frame').data('item');
        $(this).closest('.frame').sly('next', item);
      });

    })


  };

  init();

  $(window).on('resize', function () {
    init()
  });

  new WOW().init();

  $("input[type=tel]").mask("+7 (999) 999 99 99");

  $("a.scrollTo").click(function () {

    var destination = $($(this).attr("href")).offset().top - 90;
    $("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 1100);
    return false;
  });
})


document.querySelectorAll('.dropdown').forEach(function (item) {
  item.addEventListener('click', event => {

    if (event.target.classList.contains('dropdown__label')) {
      if (item.querySelector('.dropdown__menu').classList.contains('active')) {
        item.querySelector('.dropdown__menu').classList.remove('active')
        item.querySelector('.dropdown__label').classList.remove('active')
      } else {
        item.querySelector('.dropdown__menu').classList.add('active')
        event.target.classList.add('active')
      }

    } else if (event.target.tagName.toLowerCase() == 'li') {
      if (item.querySelector('li.selected')) {
        item.querySelector('li.selected').classList.remove('selected')
      }

      event.target.classList.add('selected')
      item.querySelector('.dropdown__label').classList.remove('active')
      item.querySelector('.dropdown__label').textContent = event.target.textContent
      item.querySelector('.dropdown_value').value = event.target.textContent
      item.querySelector('.dropdown__menu').classList.remove('active')
    }
  })
})



window.onclick = function (event) {
  var dropdown = document.querySelectorAll('.dropdown__label.active')
  dropdown.forEach(function (drop) {
    if (event.target != drop) {
      document.querySelectorAll('.dropdown__menu.active').forEach(function (item) {
        item.classList.remove('active')
      })
      document.querySelectorAll('.dropdown__label.active').forEach(function (item) {
        item.classList.remove('active')
      })
    }





  })
}