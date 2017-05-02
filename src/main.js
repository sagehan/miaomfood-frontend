import 'src/assets/sass/main.scss'
import { addClass } from './helper'
import store from './store'
import { fetchCuisines } from './api'
import { initiate } from './app'

if (!('ontouchstart' in document.documentElement)) {
  addClass(document.documentElement, 'no-touch')
}

fetchCuisines().then(
  cuisines => {
    store.commit('ensureCuisines', cuisines)
    initiate()
  },
  err => console.log('error message:' + err)
)

{
  const cartToggles = document.querySelectorAll('.cart-toggle')
  const cartToggleFn = function (e) {
    let cart = document.querySelector('#cart')
    e.preventDefault()
    cart.classList.toggle('is-active')
  }
  Array.prototype.forEach.call(cartToggles, el => el.addEventListener('click', cartToggleFn))
}
