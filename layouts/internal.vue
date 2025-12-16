<template>
  <div>
    <slot name="breadcrumb" />
    <main id="main">
      <div class="d-block d-lg-none">
        <blog-collection-buttons />
      </div>
      <slot />
    </main>
  </div>
</template>
