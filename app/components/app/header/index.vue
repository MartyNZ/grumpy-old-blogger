<script setup>
const route = useRoute();
const fullPath = route.fullPath;
const data = useSiteSettingsStore();
const settings = data.settings;
</script>

<template>
  <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="/" class="logo d-flex align-items-center gap-2">
        <!-- <Icon name="fa6-solid:sink" size="2em" /> -->
        <SanityImage :w="50" :h="50" :asset-id="settings.logo?.asset?._id" :alt="settings.title" />
        <h1 class="d-flex align-items-center">{{ settings.title }}</h1>
      </a>

      <Icon name="bi:list" class="mobile-nav-toggle mobile-nav-show" />
      <Icon name="bi:x" class="mobile-nav-toggle mobile-nav-hide d-none" />
      <app-header-navigation />
    </div>
  </header>
</template>
