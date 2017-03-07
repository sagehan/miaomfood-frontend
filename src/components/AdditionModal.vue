<template>
  <Modal v-if="!!summonedCid" @closeModal="closeModal" class="modal">
    <ul>
      <li v-for="s in species">
        <span class="item-tag">
          <b>{{s.spec}}</b>/<b>{{s.specPrice}}</b><b v-show="!!qtyOf(summonedCid, s.spec)"> x {{qtyOf(summonedCid, s.spec)}}</b>
        </span>
        <span @click="incCuisine(s.spec)" class="btn-add"></span>
        <span @click="decCuisine(s.spec)" class="btn-retract" v-show="!!qtyOf(summonedCid, s.spec)"></span>
      </li>
    </ul>
  </Modal>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
  import Modal from './Modal'

  export default {
    name: 'addition-modal',
    components: { Modal },

    computed: {
      ...mapState(['summonedCid']),
      ...mapGetters(['cuisineDetailsOf', 'specNameOf', 'speciesOf', 'qtyOf']),
      species () { return this.speciesOf(this.summonedCid) }
    },

    methods: {
      closeModal (e) { this.$store.commit('closeModal') },
      incCuisine (spec) { this.$store.commit('incCuisine', [this.summonedCid, spec]) },
      decCuisine (spec) { this.$store.commit('decCuisine', [this.summonedCid, spec]) }
    }
  }
</script>
