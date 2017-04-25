<template>
  <Modal v-if="!!summonedCid" @closeModal="closeModal" class="modal">
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

  export default {
    name: 'addition-modal',
    components: { Modal },

    computed: {
      ...mapState(['summonedCid']),
      ...mapGetters(['cuisineDetailsOf', 'speciesOf', 'qtyOf']),
      species () { return this.speciesOf(this.summonedCid) }
    },

    methods: {
      closeModal (e) { this.$store.commit('closeModal') },
      incCuisine (spec) { this.$store.commit('incCuisine', [this.summonedCid, spec]) },
      decCuisine (spec) { this.$store.commit('decCuisine', [this.summonedCid, spec]) }
    }
  }
</script>
