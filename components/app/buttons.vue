<script setup>
const props = defineProps({
  buttons: {
    type: Array
  }
})
</script>

<template>
  <div class="d-flex" data-aos="fade-up" data-aos-delay="200">
    <!-- <pre class="text-white">{{ buttons }}</pre> -->
    <div v-for="button in buttons" :key="button._key" class="d-flex align-items-center gap-3">
      <NuxtLink v-if="button.linkType === 'internal'" :to="button.internalLink.link.slug" class="btn-get-started mx-2">
        {{
          button.title }}</NuxtLink>
      <NuxtLink v-else-if="button.linkType === 'phone'" :to="`tel:${button.phone.number}`" class="btn-get-started mx-2">
        {{
          button.title }}</NuxtLink>
      <NuxtLink v-else-if="button.linkType === 'external'" :to="button.externalLink.url" class="btn-get-started mx-2"
        target="_blank">
        {{ button.title }}</NuxtLink>
      <a v-else :href="button.externalVideo.url" class="glightbox btn-watch-video d-flex align-items-center mx-2">
        <Icon name="bi:play-circle" />
        <span class="ms-1">{{ button.title }}</span>
      </a>
    </div>
  </div>
</template>

<style scoped></style>
