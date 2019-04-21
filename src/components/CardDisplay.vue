<template lang="html">
  <img :src="card.image"/>
</template>

<script>
export default {
  props: ['card']
}
</script>

<style lang="css" scoped>

img {
  height: 100px;
  width: 66px;
  padding: 5px;
}
</style>
