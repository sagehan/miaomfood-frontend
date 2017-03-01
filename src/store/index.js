import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gratuity: 3,
    cartItems: [
      {'cid': 'JQPG', 'cname': '激情培根', 'spec': '八寸', 'specPrice': 59, 'qty': 2},
      {'cid': 'FQXWY', 'cname': '风情夏威夷', 'spec': '八寸', 'specPrice': 59, 'qty': 1},
      {'cid': 'RLNR', 'cname': '热辣牛肉', 'spec': '十寸', 'specPrice': 79, 'qty': 1}
    ],
    customer: {'name': '霸气老板娘', 'tel': '18690890381', 'addr': '高新街桂林路东四巷锦林二巷8号1楼'},
    delayDayOptions: [
      {text: '今日', value: '0'},
      {text: '明日', value: '1'}
    ],
    reservation: {'delayday': 0, 'scheduledtime': '16:30'},
    payment: 'cash'
  },

  getters: {
    isCartEmpty: state => !state.cartItems.length,
    total: (state, {gratuity}) => state.cartItems.reduce((total, p) => {
      return total + p.specPrice * p.qty
    }, 0) + state.gratuity
  },

  mutations: {
    updateCustomer (state, [k, v]) {
      // let [k, v] = kv
      state.customer[k] = v
    },
    updateReservation (state, [k, v]) {
      // let [k, v] = kv
      state.reservation[k] = v
    },
    updatePayment (state, value) {
      state.payment = value
    }
  }
})
