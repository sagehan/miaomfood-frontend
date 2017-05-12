import 'src/assets/sass/main.scss'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import store from './store'
import Vue from 'vue'
import Console from './components/Console'
import Cart from './components/Cart'
import AdditionModal from './components/AdditionModal'
import SpecTag from './components/SpecTag'
import { addClass } from './helper'

export function initiate () {
  /* eslint-disable no-new */
  new Vue({
    el: '#console',
    store,
    render: h => h(Console)
  })

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

  const app = new Vue({
    el: '#goods',
    store,
    template: document.body.querySelector('#goods').outerHTML,
    mounted () {
      let nodes = document.querySelectorAll('.h-product > .spec-tag')
      Array.prototype.forEach.call(nodes, node => new SpecTagWidget({ el: node }))
    },
    methods: {
      showModal (e) {
        let target = e.currentTarget.parentNode
        let cid = target.getAttribute('data-cid')
        let el = document.body
        addClass(el, 'is--fixed')
        this.$store.commit('summonCuisine', cid)
        target.appendChild(panelVm.$el)
        target.addEventListener('touchmove', function (e) { e.preventDefault() }, false)
      }
    }
  })

  return app
}

