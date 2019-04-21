<template lang="html">
  <div>
    <div id="card-columns">
      <CardColumn :column="columnA"/>
      <CardColumn :column="columnB"/>
      <CardColumn :column="columnC"/>
    </div>
    <button v-on:click="deal">DEAL</button>

  </div>
</template>

<script>
import CardColumn from '@/components/CardColumn';

export default {
  props: ['cards'],
  components: {
    CardColumn
  },
  data(){
    return {
      columnA: {selected: false, cards: []},
      columnB: {selected: false, cards: []},
      columnC: {selected: false, cards: []}
    }
  },
  methods: {
    deal(){
      while(this.cards.length){
        const columns = [this.columnA, this.columnB, this.columnC];
        columns.forEach(column => column.cards.push(this.cards.shift()));
      }
    },
    recompile(){
      //filter the unselected cards
      //insert the selected cards in between
      //concat the three arrays
      //eventBus them to the top again
    }
  }
}
</script>

<style lang="css" scoped>

#card-columns {
  display: flex;
}

</style>
