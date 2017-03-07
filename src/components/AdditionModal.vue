<template>
  <Modal v-if="!!summonedCid" @closeModal="closeModal">
    <ul >
      <li v-for="s in species">
        <span>
          <b>{{s.spec}}</b><b>{{s.specPrice}}</b>
        </span>
        <span class="btn-add"></span>
        <span class="btn-retract"></span>
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
      ...mapGetters(['cuisineDetailsOf', 'specNameOf', 'speciesOf']),
      species () {
        return this.speciesOf(this.summonedCid)
      }
    },

    methods: {
      closeModal (e) {
        this.$store.commit('closeModal')
      }
    }
  }
</script>
