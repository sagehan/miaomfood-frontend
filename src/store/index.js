import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    customer: {},
    ifReserved: null,
    reservation: {},
    payment: ':payment.receiver/cash'
  },

  getters: {
    isCartEmpty: state => !state.items.length,
    total: state => state.items.reduce((total, p) => {
      return total + p.price * p.quantity
    }, 0)
  }
})
