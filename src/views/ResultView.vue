<template lang="html">
  <div>
    <h1>Is this your card?</h1>
    <CardDisplay :card="card"/>
    <button name="yes" @click="handleClick">Yes</button>
    <button name="no" @click="handleClick">No</button>
    <p v-if="stats.correct">The Great Cardini has been correct in {{correctPercentage}}% of visits</p>
    <button @click="resetScores">RESET</button>
  </div>
</template>

<script>
import caol from 'caol';
import router from '@/router';
import CardDisplay from '@/components/CardDisplay';

export default {
  data(){
    return {
      stats: {}
    }
  },
  props: ['card'],
  mounted(){
    if(!this.card){
      router.push({name: 'game'})
    }
    caol.connect();
  },
  components: {
    CardDisplay
  },
  methods: {
    handleClick(event){
      const answer = event.target.name;
      caol.get('XYSs13uP', stats => {
        stats.visits ++;
        if(answer === "yes") stats.correct ++ ;
        this.stats = stats;
        caol.set(stats, 'XYSs13uP');
      });
    },
    resetScores(){
        caol.set({visits: 0, correct: 0}, 'XYSs13uP');
    }
  },
  computed: {
    correctPercentage(){
      return ((this.stats.correct/this.stats.visits) * 100).toFixed(2);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
