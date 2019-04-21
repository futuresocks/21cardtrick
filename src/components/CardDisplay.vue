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
  height: 40px;
}
</style>
