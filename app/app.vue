<script setup>
const router = useRouter();

// Scroll to top after each navigation
router.afterEach(() => {
  window.scrollTo(0, 0);
});
</script>
<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />
    <AppHeader />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <AppFooter />
    <a href="#" class="scroll-top d-flex align-items-center justify-content-center">
      <Icon name="bi:arrow-up-short" />
    </a>
  </div>
</template>
<style>
html {
  scroll-behavior: smooth;
}
</style>
