<script setup>
const store = useBlogCollectionNavigationStore();

const collectionNav = store.blogCollectionNavigation;
</script>

<template>
  <section id="blog-collection-navpanel" class="snaps-inline py-2">
    <NuxtLink
      v-for="child in collectionNav.blogCollectionNavGroup"
      :key="child._id"
      :to="`/blog/collections/${child.slug}`"
      class="collection-link btn btn-sm border rounded-pill text-nowrap"
    >
      {{ child.title }}
    </NuxtLink>
  </section>
</template>

<style scoped>
#blog-collection-navpanel {
  display: grid;
  gap: 1em; /* Adjusted gap slightly */
  grid-auto-flow: column;
  overflow-x: auto;
  padding-bottom: 0.75em;
  margin-bottom: 0.75em;
}

.snaps-inline {
  scroll-snap-type: inline mandatory;
  scroll-padding-inline: 0.5em; /* This ensures the snapped item has some padding */
}

.snaps-inline > * {
  scroll-snap-align: start;
}

/* Custom class to replicate Tailwind's hover/focus states with Bootstrap variables */
.collection-link {
  --bs-btn-color: var(--color-primary);
  --bs-btn-border-color: var(--color-primary);
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: var(--color-primary);
  --bs-btn-hover-border-color: var(--color-primary);
}

/* Hide scrollbar for a cleaner look */
#blog-collection-navpanel::-webkit-scrollbar {
  display: none;
}
#blog-collection-navpanel {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>
