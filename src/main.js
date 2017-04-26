import 'src/assets/sass/main.scss'
import store from './store'
import { fetchCuisines } from './api'
import { initiate } from './app'

if (!('ontouchstart' in document.documentElement)) {
  document.documentElement.className += ' no-touch'
}

fetchCuisines().then(
  cuisines => {
    store.commit('ensureCuisines', cuisines)
    initiate()
  },
  err => console.log('error message:' + err)
)

{
  const cartToggles = document.querySelectorAll('.toggle--cart')
  const cartToggleFn = function (e) {
    let body = document.querySelector('body')
    e.preventDefault()
    body.classList.toggle('cart-expanded')
  }
  for (var i = 0; i < cartToggles.length; i++) {
    cartToggles[i].addEventListener('click', cartToggleFn)
  }
}
