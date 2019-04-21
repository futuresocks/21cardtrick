<template lang="html">
  <div>
    <div id="card-columns">
      <CardColumn :column="columnA" :recompile="recompile" :deal="deal"/>
      <CardColumn :column="columnB" :recompile="recompile" :deal="deal"/>
      <CardColumn :column="columnC" :recompile="recompile" :deal="deal"/>
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
      columnC: {selected: false, cards: []}
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
      this.handleReorderedCards(reorderedCards);
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
