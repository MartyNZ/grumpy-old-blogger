<script setup>
const data = useSiteSettingsStore();
const settings = data.settings;
</script>

<template>
  <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container d-flex align-items-center justify-content-between">
      <div id="header-branding">
        <a href="/" class="logo d-flex align-items-center gap-2">
          <SanityImage :w="50" :h="50" :asset-id="settings.logo?.asset?._id" :alt="settings.title" />
          <h1 class="d-flex align-items-center">{{ settings.title }}</h1>
        </a>
      </div>
      <div id="header-navigation" class="header-navigation">
        <Icon name="solar:hamburger-menu-line-duotone" class="mobile-nav-toggle mobile-nav-show" size="2em"/>
        <Icon name="solar:close-circle-bold-duotone" class="mobile-nav-toggle mobile-nav-hide d-none" size="2em"/>
        <app-header-navigation />
        <app-share size="2em"/>
      </div>
    </div>
  </header>
</template>

<style scoped>
/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
.header {
  transition: all 0.5s;
  z-index: 997;
  padding: 24px 0;
}

@media (max-width: 1200px) {
  .header {
    padding: 12px 0;
  }
}

.header.sticked {
  background: rgba(var(--color-secondary-rgb), 0.9);
  padding: 12px 0;
}

.header .logo img {
  max-height: 40px;
  margin-right: 6px;
}

.header .logo h1 {
  font-size: 30px;
  font-weight: 700;
  color: #fff;
  font-family: var(--font-secondary);
  margin: 0;
}

/*--------------------------------------------------------------
# Mobile Navigation
--------------------------------------------------------------*/
@media (min-width: 1280px) {

  .mobile-nav-show,
  .mobile-nav-hide {
    display: none;
  }
}

@media (max-width: 1279px) {
  .mobile-nav-show {
    color: rgba(255, 255, 255, 0.9);
    font-size: 28px;
    cursor: pointer;
    line-height: 0;
    transition: 0.5s;
  }

  .mobile-nav-hide {
    color: rgba(255, 255, 255, 0.9);
    font-size: 32px;
    cursor: pointer;
    line-height: 0;
    transition: 0.5s;
    position: fixed;
    right: 15px;
    top: 15px;
    z-index: 9999;
  }
}

  .header-navigation {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 1em;
  }

</style>

