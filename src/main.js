import 'src/assets/sass/main.scss'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Cart from './components/Cart'
import AdditionModal from './components/AdditionModal'
import SpecTag from './components/SpecTag'
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

const SpecTagWidget = Vue.extend({
  store,
  render (h) {
    return h(SpecTag, {
      props: { cid: this.$el.parentNode.getAttribute('data-cid') }
    })
  }
})

const panelVm = new Vue({
  store,
  render: (h) => h(AdditionModal)
}).$mount()

new Vue({
  el: '#poster',
  store,
  template: document.body.querySelector('#poster').outerHTML,
  mounted () {
    let nodes = document.querySelectorAll('.h-product > .spec-tag')
    for (var i = 0; i < nodes.length; ++i) {
      new SpecTagWidget({ el: nodes[i] })
    }
  },
  methods: {
    showModal (e) {
      let target = e.currentTarget.parentNode
      let cid = target.getAttribute('data-cid')
      this.$store.commit('summonCuisine', cid)
      target.appendChild(panelVm.$el)
    }
  }
})
