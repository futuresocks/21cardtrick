<template lang="html">
  <router-view id="view" :cards="cards" :handleReorderedCards="changeCards"/>
</template>

<script>
import router from '@/router';

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
    changeCards(cards, roundsToGo){
      this.cards = cards;
      if(roundsToGo === 0){
        router.push({name: 'result', params: {card: this.cards[10]}})
      }
    }
  }
}
</script>

<style lang="css" scoped>

</style>
