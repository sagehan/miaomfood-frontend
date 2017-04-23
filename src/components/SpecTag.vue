<template>
  <ul class="spec-tag">
    <li v-for="s in species" :class="{isSelected: !!qtyOf(cid, s.name)}" class="p-spec">
      <span><b class="spec-price">¥{{s.price}}</b>/{{s.name}}</span>
      <span v-show="!!qtyOf(cid, s.name)" class="qty">x{{qtyOf(cid, s.name)}}</span>
    </li>
  </ul>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'spec-tag',
    props: ['cid'],

    computed: {
      ...mapGetters(['cuisineDetailsOf', 'speciesOf', 'qtyOf']),
      species () { return this.speciesOf(this.cid) }
    },

    mounted () { console.log('spectag component has been mounted') }
  }
</script>
