<script setup>

const props = defineProps({
  posts: {
    type: Array,
    required: true,
  },
  sectionTitle: {
    type: String,
  },
  description: {
    type: String
  },
  loading: {
    type: Boolean,
    default: false
  },});
</script>

<template>
  <section id="blog-list">
    <h2 v-if="sectionTitle" :class="!description ? 'mb-4' : ''" class="text-lg">{{ sectionTitle }}
    </h2>
    <div v-if="description" class="text-balanced mb-4">{{ description }}
    </div>

    <div id="blog-grid">
      <template v-for="post in posts" :key="post._id">
        <blog-summary-card :post="post" :loading="loading" />
      </template>
    </div>
  </section>
</template>

<style scoped>
#blog-list {
  container-type: inline-size;
  margin-bottom: 2.5em;
}

#blog-grid {
  display: grid;
  gap: 1.5em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
}


@container (width > 530px) {
  #blog-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 0.5fr));
  }
}
</style>
