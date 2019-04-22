<template lang="html">
  <div>
    <h1>Is this your card?</h1>
    <CardDisplay :card="card"/>
    <button @click="yes">Yes</button>
    <button @click="no">No</button>
  </div>
</template>

<script>
import caol from 'caol';
import CardDisplay from '@/components/CardDisplay';

export default {
  props: ['card'],
  components: {
    CardDisplay
  },
  methods: {
    yes(){
      
    },
    no(){

    }
  }
}
</script>

<style lang="css" scoped>
</style>
