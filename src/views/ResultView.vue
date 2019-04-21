<template lang="html">
  <div>
    <h1>Your card is:</h1>
    <CardDisplay :card="card"/>
  </div>
</template>

<script>
import CardDisplay from '@/components/CardDisplay';

export default {
  props: ['card'],
  components: {
    CardDisplay
  }
}
</script>

<style lang="css" scoped>
</style>
