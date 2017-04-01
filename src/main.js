import 'src/assets/sass/main.scss'
import store from './store'
import { fetchCuisines } from './api'
import { initiate } from './app'
import transit from 'transit-js'

if (!('ontouchstart' in document.documentElement)) {
  document.documentElement.className += ' no-touch'
}

fetchCuisines().then(
  cuisines => {
    store.commit('ensureCuisines', cuisines)
    console.log(transit.mapToObject(store.state.Cuisines))
    initiate()
  },
  err => console.log('error message:' + err)
)

