<template>
  <ul class="spec-tag" v-if="!isMonad">
    <li v-for="s in species" :class="{isSelected: !!qtyOf(cid, s.name)}" class="p-spec">
      <span><b class="spec-price">¥{{s.price}}</b>/{{s.name}}</span>
      <span v-show="!!qtyOf(cid, s.name)" class="qty">x{{qtyOf(cid, s.name)}}</span>
    </li>
  </ul>
  <ul class="spec-tag" v-else>
    <li class="p-spec">
      <b class="spec-price">¥{{monadPrice}}</b>
      <span v-for="s in species">{{s.name}}/</span>
    </li>
  </ul>
</template>

<script>
  import { mapGetters } from 'vuex'
  import R from 'ramda'

  export default {
    name: 'spec-tag',
    props: ['cid'],

    computed: {
      ...mapGetters(['cuisineDetailsOf', 'speciesOf', 'specPriceOf', 'qtyOf']),
      species () { return this.speciesOf(this.cid) },
      isMonad () {
        let ss = this.species
        if (R.length(ss) === 1) {
          return false
        } else {
          return R.apply(R.partial(R.eqProps, ['price']), ss)
        }
      },
      monadPrice () { return R.prop('price', R.head(this.species)) },
    },

    mounted () {
      console.log(this.cid + '\'s ' + 'SpecTag component has been mounted')
    }
  }
</script>
