import Vue from 'vue'
import Vuex from 'vuex'
import {submitOrder} from './api'
import transit from 'transit-js'
import R from 'ramda'

Vue.use(Vuex)

const writer = transit.writer('json')

const state = {
  summonedCid: 'JQPG',
  gratuity: 3,
  Cuisines: [],
  cartItems: [],
  comment: '',
  customer: {
    'name': '霸气老板娘',
    'telephone': '18690890381',
    'address': '高新街桂林路东四巷锦林二巷8号1楼'
  },
  delayDayOptions: [
    {text: '今日', value: 0},
    {text: '明日', value: 1}
  ],
  reservation: {'delayday': 0, 'scheduledtime': '16:30'},
  paymentMethod: 'alipay_wap'
}

const getters = {
  isCartEmpty: state => R.isEmpty(state.cartItems),
  cuisineDetailsOf: state => {
    return function (cid) {
      return state.Cuisines.filter(c => c.productID === cid)
    }
  },
  cuisineNameOf: state => {
    return function (cid) {
      let [c] = this.cuisineDetailsOf(cid)
      return c.name
    }
  },
  speciesOf: state => {
    return function (cid) {
      let [c] = this.cuisineDetailsOf(cid)
      return c.offers
    }
  },
  specPriceOf: state => {
    return function (cid, spec) {
      let [c] = this.cuisineDetailsOf(cid)
      let ss = c.offers
      let [s] = ss.filter(i => i.name === spec)
      return !!s && s.price
    }
  },
  qtyOf: state => {
    return function (cid, spec) {
      let [c] = state.cartItems.filter(i => i.productID === cid && i.offers.name === spec)
      return !!c && c.qty
    }
  },
  total: (state) => state.cartItems.reduce(
    (total, p) => { return total + p.price * p.qty },
    0
  ) + state.gratuity,
  stagedOrder: (state, getters) => {
    let customer = transit.map([
      transit.keyword('Customer/name'), state.customer.name,
      transit.keyword('Customer/telephone'), state.customer.telephone,
      transit.keyword('Customer/address'), state.customer.address,
    ])
    return transit.map([
      transit.keyword('Order/customer'), customer,
      transit.keyword('Order/comment'), state.comment,
      transit.keyword('Order/schedule-day'), transit.integer(state.reservation.delayday),
      transit.keyword('Order/schedule-time'), state.reservation.scheduledtime,
      transit.keyword('Order/CartItems'), state.cartItems,
      transit.keyword('charge/paymentMethod'), transit.keyword('PaymentMethod/' + state.paymentMethod),
    ])
  }}

const mutations = {
  ensureCuisines (state, cuisines) { state.Cuisines = cuisines },
  closeModal (state) { state.summonedCid = '' },
  summonCuisine (state, cid) { state.summonedCid = cid },
  incCuisine (state, [cid, spec]) {
    let [c] = state.cartItems.filter(i => i.productID === cid && i.offers.name === spec)
    if (!c) {
      state.cartItems.push({'productID': cid, 'qty': 1, 'offers': {'name': spec}})
    } else {
      c.qty = c.qty + 1
    }
  },
  decCuisine (state, [cid, spec]) {
    let [c] = state.cartItems.filter(i => i.productID === cid && i.offers.name === spec)
    let i = state.cartItems.findIndex(i => i.productID === cid && i.offers.name === spec)
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
  updatePaymentMethod (state, value) {
    state.paymentMethod = value
  }
}

const actions = {
  submitOrder ({state, getters}) {
    let cartDatoms = writer.write(getters.stagedOrder)
    console.log(cartDatoms)
    submitOrder(cartDatoms)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
