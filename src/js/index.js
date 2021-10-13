document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.header__menu a').addEventListener('click', (event) => {
    event.preventDefault()
    document.getElementById('topmenu').classList.add('active')
  })

  document.querySelector('.topmenu__close a').addEventListener('click', (event) => {
    event.preventDefault()
    document.getElementById('topmenu').classList.remove('active')
  })
});