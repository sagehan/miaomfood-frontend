<template>
  <Modal v-if="!!summonedCid" @closeModal="closeModal" class="modal">
    <h2 class="modal__hd">{{cuisineNameOf(summonedCid)}}</h2>
    <ul>
      <li v-for="s in species">
        <span class="item-tag">
          <b><b>¥{{s.price}}</b>/{{s.name}}</b><b v-show="!!qtyOf(summonedCid, s.name)"> x {{qtyOf(summonedCid, s.name)}}</b>
        </span>
        <span @click="incCuisine(s.name)" class="btn-add"></span>
        <span @click="decCuisine(s.name)" class="btn-retract" v-show="!!qtyOf(summonedCid, s.name)"></span>
      </li>
    </ul>
  </Modal>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
  import Modal from './Modal'
  import { removeClass } from '../helper'

  export default {
    name: 'addition-modal',
    components: { Modal },

    computed: {
      ...mapState(['summonedCid']),
      ...mapGetters(['cuisineDetailsOf', 'cuisineNameOf', 'speciesOf', 'qtyOf']),
      species () { return this.speciesOf(this.summonedCid) }
    },

    methods: {
      closeModal (e) {
        let el = document.body
        removeClass(el, 'is-fixed')
        this.$el.parentNode.removeEventListener('touchmove', function (e) { e.preventDefault() }, false)
        this.$store.commit('closeModal')
      },
      incCuisine (spec) { this.$store.commit('incCuisine', [this.summonedCid, spec]) },
      decCuisine (spec) { this.$store.commit('decCuisine', [this.summonedCid, spec]) },
    }
  }
</script>
