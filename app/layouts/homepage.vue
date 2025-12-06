<script setup>
const route = useRoute();
const fullPath = route.fullPath;
</script>

<template>
  <main id="main">
    <SectionsHero v-if="fullPath == '/'" />
    <slot />
  </main>
</template>
