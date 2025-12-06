<script setup>
// const settings = useSiteSettingsStore().settings
import { qryGallery, qryAllImages } from '~/queries/gallery'

const { data: gallery } = await useSanityQuery(qryGallery)

// console.log("Articles Section: ", JSON.stringify(gallery.value, null, 2))

const { data: images } = await useSanityQuery(qryAllImages)
// console.log("Articles: ", JSON.stringify(images.value, null, 2))

useSeoMeta({
  title: () => gallery.value.title,
  description: () => gallery.value.excerpt,
  ogTitle: () => gallery.value.title,
  ogDescription: () => gallery.value.excerpt,
  ogImage: () => gallery.value.image.url,
  twitterTitle: () => gallery.value.title,
  twitterDescription: () => gallery.value.excerpt,
  twitterImage: () => gallery.value.image.url,
  twitterCard: "summary_large_image",
});

// defineOgImageComponent(
//   "gallery",
//   {
//     title: gallery.value.title,
//     description: gallery.value.excerpt,
//     image: gallery.value.image.url,
//     siteName: settings.title,
//     siteLogo: settings.logoUrl,
//   },
// );

definePageMeta({
  layout: false,
});
</script>
<template>
  <div>
    <NuxtLayout name="internal">
      <template #breadcrumb>
        <AppBreadcrumb :image="gallery.image" />
      </template>
      <template #default>
        <div id="gallery-main" class="container mx-auto p-4 md:p-6">
          <div id="page-layout">
            <section id="images-list" class="images">
              <h2>{{ gallery.title }}</h2>
              <p>{{ gallery.description }}</p>
              <!-- <pre>{{ images }}</pre> -->
              <gallery-list :images="images" />
            </section>
            <section id="images-sidebar" class="sidebar">
              <div>
                <!-- <product-promotions /> -->
                <gallery-collection-navigation />
                <!-- <product-showcase /> -->
                <gallery-latest number="4" />
              </div>
            </section>
          </div>
        </div>
      </template>
    </NuxtLayout>
  </div>
</template>
<style lang="css">
#gallery-main {
  container-type: inline-size;
  margin-bottom: 1em;
}

#page-layout {
  display: grid;
  gap: 1.5em;
  grid-template-columns: 1fr;
}

@container (width > 768px) {
  #page-layout {
    grid-template-columns: 70% 1fr;
  }
}

.sidebar {
  height: 100%;
}
</style>
