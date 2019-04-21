<template lang="html">
  <div id="cardDisplay">
  <h1>IMMA READ YOUR MIND</h1>
  <ul>
    <li v-for="card in columnA"><img :src="card.image"/></li>
  </ul>
  <ul>
    <li v-for="card in columnB"><img :src="card.image"/></li>
  </ul>
  <ul>
    <li v-for="card in columnC"><img :src="card.image"/></li>
  </ul>
  <button v-on:click="deal">DEAL</button>
</div>
</template>

<script>
export default {
  data(){
    return {
      cards: [],
      columnA: [],
      columnB: [],
      columnC: [],
    }
  },
  mounted(){
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(res => res.json())
    .then(json => {
      fetch(`https://deckofcardsapi.com/api/deck/${json.deck_id}/draw/?count=21`)
      .then(res => res.json())
      .then(json => this.cards = json.cards)
    })
  },
  methods: {
    deal(){
      debugger;
      while(this.cards.length){
        const columns = [this.columnA, this.columnB, this.columnC];
        columns.forEach((column) => {
          column.push(this.cards.shift());
        })
      }
    }
  }
}
</script>

<style lang="css" scoped>
img {
  height: 100px;
}

#cardDisplay {
  display: flex;
}
</style>
