<template lang="html">
  <div>
  <router-view id="view" :cards="cards" :handleReorderedCards="changeCards"/>
</div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      cards: []
    }
  },
  mounted(){
    this.getDeck()
    .then(json => this.draw21(json.deck_id));
  },
  methods: {
    getDeck(){
      return fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then(res => res.json())
    },
    draw21(deckID){
      fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=21`)
      .then(res => res.json())
      .then(json => this.cards = json.cards)
    },
    changeCards(cards){
      this.cards = cards;
    }
  }
}
</script>

<style lang="css" scoped>

</style>
