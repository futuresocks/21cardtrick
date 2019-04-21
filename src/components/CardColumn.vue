<template lang="html">
  <div class="card-column">
    <CardDisplay v-for="card in column.cards" :card ="card"/>
    <button @click="columnSelect">My card is in this row</button>
  </div>
</template>

<script>
import CardDisplay from '@/components/CardDisplay';

export default {
  props: ['column', 'recompile', 'deal'],
  components: {
    CardDisplay
  },
  methods: {
    columnSelect(){
      this.column.selected = true;
      this.recompile();
    }
  }
}
</script>

<style lang="css" scoped>
.card-column {
  display: flex;
  flex-direction: column;
  padding: 20px;
}
</style>
