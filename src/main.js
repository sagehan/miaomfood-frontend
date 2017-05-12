import 'src/assets/sass/main.scss'
import { addClass } from './helper'
import store from './store'
import initPhotoSwipeFromDOM from './gallery'
import { fetchCuisines } from './api'
import { initiate } from './app'

if ('ontouchstart' in document.documentElement) {
  const menuItems = document.querySelectorAll('.drawer')
  const drawerToggleFn = function (e) {
    var activeDrawer = document.querySelector('.drawer.is-active')
    if (activeDrawer) { activeDrawer.classList.toggle('is-active') }
    e.currentTarget.classList.toggle('is-active')
  }
  Array.prototype.forEach.call(menuItems, el => el.addEventListener('click', drawerToggleFn))
}

if (!('ontouchstart' in document.documentElement)) {
  addClass(document.documentElement, 'no-touch')
}

initPhotoSwipeFromDOM('.gallery')

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

{
  const consoleToggles = document.querySelectorAll('.console-toggle')
  const consoleToggleFn = function (e) {
    let console = document.querySelector('#console')
    e.preventDefault()
    console.classList.toggle('is-active')
  }
  Array.prototype.forEach.call(consoleToggles, el => el.addEventListener('click', consoleToggleFn))
}
