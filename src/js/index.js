const {
  eventListeners
} = require("@popperjs/core");

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