<template lang="html">
  <h1>IMMA READ YOUR MIND</h1>
</template>

<script>
export default {
  data(){
    return {
      cards: []
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
  }
}
</script>

<style lang="css" scoped>
</style>
