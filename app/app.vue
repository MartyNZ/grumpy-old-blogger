<script setup>
import { useSiteSettingsStore } from "~/stores/siteSettingsStore"; // Assuming the path
import { useHead, computed } from "#imports";

const settingsStore = useSiteSettingsStore();

// Fetch settings
await settingsStore.fetchStoreSettings();

const themeStyles = computed(() => {
  const settings = settingsStore.settings;
  if (!settings) return "";

  const primaryRGB = settings.clrPrimary?.rgb;
  const secondaryRGB = settings.clrSecondary?.rgb;
  const defaultRGB = settings.clrDefault?.rgb;

  return `
    :root {
      --color-primary: ${settings.clrPrimary?.hex || '#5e2804'};
      --color-primary-rgb: ${primaryRGB ? `${primaryRGB.r},${primaryRGB.g},${primaryRGB.b}` : '94,40,4'};
      --color-secondary: ${settings.clrSecondary?.hex || '#c05815'};
      --color-secondary-rgb: ${secondaryRGB ? `${secondaryRGB.r},${secondaryRGB.g},${secondaryRGB.b}` : '13,67,1'};
      --color-default: ${settings.clrDefault?.hex || '#170B02'};
      --color-default-rgb: ${defaultRGB ? `${defaultRGB.r},${defaultRGB.g},${defaultRGB.b}` : '44,28,5'};
      --font-primary: "${settings.fontPrimary || 'Montserrat'}", sans-serif;
      --font-secondary: "${settings.fontSecondary || 'Raleway'}", sans-serif;
    }
  `;
});

useHead(() => ({
  style: [
    {
      innerHTML: themeStyles.value
    }
  ]
}));

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
/*--------------------------------------------------------------
# Mobile Navigation Show/Hide
--------------------------------------------------------------*/
.mobile-nav-active {
  overflow: hidden;
}

.mobile-nav-active #navbar {
  right: 0;
}

.mobile-nav-active #navbar:before {
  content: "";
  position: fixed;
  inset: 0;
  background: rgba(var(--color-default-rgb), 0.9);
  z-index: 9996;
}
</style>
