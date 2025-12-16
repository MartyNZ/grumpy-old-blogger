<script setup>

const canShare = computed(() => {
  return navigator.share !== undefined
})

const shareContent = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Grumpy Old Blogger',
        url: window.location.href
      })
    } catch (error) {
      console.error('Error sharing:', error)
    }
  }
}
</script>

<template>
  <button @click="shareContent" v-if="canShare" class="share-button">
    <Icon name="solar:share-line-duotone" size="2em" />
  </button>
</template>

<style scoped>
.share-button {
  background-color: rgba(var(--color-secondary-rgb),0);
  border: none;
  color: white;
  width:3em;
  height:3em;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  justify-self: center;
  cursor: pointer;
  border-radius: 50%;

  /* Flexbox to center the icon */
    display: flex;
    justify-content: center;
    align-items: center;
}

.share-button:hover {
  background-color: rgba(255,255,255,0.4);
  color: rgba(var(--color-secondary-rgb), 0.8);
}

.share-button:active {
  background-color: rgba(255, 255, 255, 1);
  color: rgba(var(--color-secondary-rgb), 1);
}
</style>

