import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'

Vue.use(Vuex)

const state = {
  summonedCid: 'JQPG',
  gratuity: 3,
  Cuisines: [
    /*
      TransitMap {:cuisine/id => "FGZSKF", :cuisine/name => "??????", :cuisine/depict => [Bacon.JPG], :cuisine/species => [TransitMap {:spec/name => TransitMap {:db/ident => :spec.name/?}, :currency/Abbr => TransitMap {:db/ident => :currency.Abbr/CNY}, :spec/price => 25, :spec/inventory => 100}]},TransitMap {:cuisine/id => "QKLMK", :cuisine/name => "?????", :cuisine/depict => [Bacon.JPG], :cuisine/species => [TransitMap {:spec/name => TransitMap {:db/ident => :spec.name/?}, :currency/Abbr => TransitMap {:db/ident => :currency.Abbr/CNY}, :spec/price => 28, :spec/inventory => 100}]},TransitMap {:cuisine/id => "SGSL", :cuisine/name => "????", :cuisine/depict => [Salad.jpg], :cuisine/species => [TransitMap {:spec/name => TransitMap {:db/ident => :spec.name/?}, :spec/duplexable => true, :spec/price => 25, :spec/inventory => 100}]},TransitMap {:cuisine/id => "FQXWY", :cuisine/name => "?????", :cuisine/depict => [Hawaii.JPG], :cuisine/species => [TransitMap {:spec/name => TransitMap {:db/ident => :spec.name/??}, :currency/Abbr => TransitMap {:db/ident => :currency.Abbr/CNY}, :spec/duplexable => true, :spec/price => 39, :spec/inventory => 100},TransitMap {:spec/name => TransitMap {:db/ident => :spec.name/??}, :currency/Abbr => TransitMap {:db/ident => :currency.Abbr/CNY}, :spec/duplexable => true, :spec/price => 59, :spec/inventory => 100}]},TransitMap {:cuisine/id => "JQPG", :cuisine/name => "????", :cuisine/depict => [Bacon.JPG], :cuisine/species => [TransitMap {:spec/name => TransitMap {:db/ident => :spec.name/??}, :currency/Abbr => TransitMap {:db/ident => :currency.Abbr/CNY}, :spec/duplexable => true, :spec/price => 39, :spec/inventory => 100},TransitMap {:spec/name => TransitMap {:db/ident => :spec.name/??}, :currency/Abbr => TransitMap {:db/ident => :currency.Abbr/CNY}, :spec/duplexable => true, :spec/price => 59, :spec/inventory => 100}]}
    */
  ],
  cartItems: [
    {':cuisine/id': 'JQPG', ':spec/name': ':spec.name/八寸', ':spec/qty': 2},
  ],
  customer: {
    'name': '霸气老板娘',
    'tel': '18690890381',
    'addr': '高新街桂林路东四巷锦林二巷8号1楼'
  },
  delayDayOptions: [
    {text: '今日', value: '0'},
    {text: '明日', value: '1'}
  ],
  reservation: {'delayday': 0, 'scheduledtime': '16:30'},
  payment: 'cash'
}

const getters = {
  isCartEmpty: state => !state.cartItems.length,
  cuisineDetailsOf: state => {
    return function (cid) {
      return state.Cuisines.filter(c => c[':cuisine/id'] === cid)
    }
  },
  cuisineNameOf: state => {
    return function (cid) {
      let [c] = this.cuisineDetailsOf(cid)
      return c[':cuisine/name']
    }
  },
  speciesOf: state => {
    return function (cid) {
      let [c] = this.cuisineDetailsOf(cid)
      return c[':cuisine/species']
    }
  },
  specPriceOf: state => {
    return function (cid, spec) {
      let [c] = this.cuisineDetailsOf(cid)
      let ss = c.species
      let [s] = ss.filter(i => i.spec === spec)
      return !!s && s.specPrice
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
  ) + state.gratuity,
}

const mutations = {
  ensureCuisines (state, cuisines) { state.Cuisines = cuisines },
  closeModal (state) { state.summonedCid = '' },
  summonCuisine (state, cid) { state.summonedCid = cid },
  incCuisine (state, [cid, spec]) {
    let [c] = state.cartItems.filter(i => i.cid === cid && i.spec === spec)
    if (!c) {
      state.cartItems.push({'cid': cid, 'spec': spec, 'qty': 1})
    } else {
      c.qty = c.qaty + 1
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
  },
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})
