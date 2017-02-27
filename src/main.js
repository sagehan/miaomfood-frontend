import 'src/assets/sass/main.scss'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Cart from './components/Cart'
import store from './store'

if (!('ontouchstart' in document.documentElement)) {
  document.documentElement.className += ' no-touch'
}

/* eslint-disable no-new */
new Vue({
  el: '#cart',
  store,
  render: h => h(Cart)
})

new Vue({
  el: '#poster',
  store,
  components: { App }
})
