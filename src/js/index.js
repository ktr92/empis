document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.header__menu a').addEventListener('click', (event) => {
    event.preventDefault()
    document.getElementById('topmenu').classList.add('active')
  })

  document.querySelector('.topmenu__close a').addEventListener('click', (event) => {
    event.preventDefault()
    document.getElementById('topmenu').classList.remove('active')
  })

  window.addEventListener('scroll', (event) => {
    scroll = window.scrollY
    if (scroll >= 77) {
      document.getElementById('header').classList.add('fixed')
    } else {
      document.getElementById('header').classList.remove('fixed')
    }

  });

});