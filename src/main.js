import 'src/assets/sass/main.scss'
import store from './store'
import { fetchCuisines } from './api'
import { initiate } from './app'
// import transit from 'transit-js'

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

