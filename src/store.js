import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    summonedCid: 'JQPG',
    gratuity: 3,
    allCuisines: [
      { 'cid': 'JQPG',
        'cname': '激情培根',
        'species': [
          {'spec': '八寸', 'specPrice': 59, 'inventory': 500},
          {'spec': '十寸', 'specPrice': 79, 'inventory': 500}
        ]},
      { 'cid': 'FQXWY',
        'cname': '风情夏威夷',
        'species': [
          {'spec': '八寸', 'specPrice': 59, 'inventory': 500},
          {'spec': '十寸', 'specPrice': 79, 'inventory': 500}
        ]},
      { 'cid': 'NNMM',
        'cname': '内牛满面',
        'species': [
          {'spec': '八寸', 'specPrice': 59, 'inventory': 500},
          {'spec': '十寸', 'specPrice': 79, 'inventory': 500}
        ]}
    ],
    cartItems: [
      {'cid': 'JQPG', 'spec': '八寸', 'qty': 2},
      {'cid': 'JQPG', 'spec': '十寸', 'qty': 1},
      {'cid': 'FQXWY', 'spec': '八寸', 'qty': 1}
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
    cuisineDetailsOf: state => {
      return function (cid) {
        return state.allCuisines.filter(c => c.cid === cid)
      }
    },
    cuisineNameOf: state => {
      return function (cid) {
        let [c] = this.cuisineDetailsOf(cid)
        return c.cname
      }
    },
    speciesOf: state => {
      return function (cid) {
        let [c] = this.cuisineDetailsOf(cid)
        return c.species
      }
    },
    qtyOf: state => {
      return function (cid, spec) {
        let [c] = state.cartItems.filter(i => i.cid === cid && i.spec === spec)
        return !!c && c.qty
      }
    },
    total: (state) => state.cartItems.reduce(
      (total, p) => { return total + p.specPrice * p.qty },
      0
    ) + state.gratuity
  },

  mutations: {
    closeModal (state) { state.summonedCid = '' },
    summonCuisine (state, cid) { state.summonedCid = cid },
    incCuisine (state, [cid, spec]) {
      let [c] = state.cartItems.filter(i => i.cid === cid && i.spec === spec)
      if (!c) {
        state.cartItems.push({'cid': cid, 'spec': spec, 'qty': 1})
      } else {
        c.qty = c.qty + 1
      }
    },
    decCuisine (state, [cid, spec]) {
      let [c] = state.cartItems.filter(i => i.cid === cid && i.spec === spec)
      let i = state.cartItems.findIndex(i => i.cid === cid && i.spec === spec)
      if (c.qty === 1) {
        state.cartItems.splice(i, 1)
      } else {
        c.qty = c.qty - 1
      }
    },
    updateCustomer (state, [k, v]) {
      state.customer[k] = v
    },
    updateReservation (state, [k, v]) {
      state.reservation[k] = v
    },
    updatePayment (state, value) {
      state.payment = value
    }
  }
})
