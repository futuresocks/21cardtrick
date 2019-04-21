<template lang="html">
  <div>
    <div id="card-columns">
      <h1>{{roundsToGo}} to go!</h1>
      <CardColumn :column="columnA" :recompile="recompile"/>
      <CardColumn :column="columnB" :recompile="recompile"/>
      <CardColumn :column="columnC" :recompile="recompile"/>
    </div>
  </div>
</template>

<script>
import CardColumn from '@/components/CardColumn';

export default {
  props: ['cards', 'handleReorderedCards'],
  components: {
    CardColumn
  },
  data(){
    return {
      columnA: {selected: false, cards: []},
      columnB: {selected: false, cards: []},
      columnC: {selected: false, cards: []},
      roundsToGo: 3
    }
  },
  watch: {
    cards(){
      this.deal();
    }
  },
  methods: {
    deal(){
      while(this.cards.length){
        this.columns.forEach(column => column.cards.push(this.cards.shift()));
      }
    },
    resetColumns(){
      this.columnA = {selected: false, cards: []};
      this.columnB = {selected: false, cards: []};
      this.columnC = {selected: false, cards: []};
    },
    recompile(){
      const reorderedColumns = this.columns.filter(column => !column.selected);
      const selectedColumn = this.columns.find(column => column.selected);
      reorderedColumns.splice(1, 0, selectedColumn);
      const reorderedCards = reorderedColumns
                            .map(column => column.cards)
                            .reduce((flat, toFlatten) => flat.concat(toFlatten), []);
      this.resetColumns();
      this.roundsToGo -= 1;
      this.handleReorderedCards(reorderedCards, this.roundsToGo);
    }
  },
  computed: {
    columns(){
      return [this.columnA, this.columnB, this.columnC];
    }
  }
}
</script>

<style lang="css" scoped>

#card-columns {
  display: flex;
}

</style>
