<script setup>
import {
  qryImageBySlug
} from "~/queries/gallery";
const route = useRoute();
const routeParams = route.params;
const data = useSiteSettingsStore();
const settings = data.settings;

const { data: image } = await useSanityQuery(qryImageBySlug, {
  slug: routeParams.slug,
});
// console.log("Image: ", JSON.stringify(image.value, null, 2))
// const relatedProducts = image.value.relatedProducts;
// console.log("relatedProducts: ", JSON.stringify(relatedProducts[0]));

// useSeoMeta({
//   title: () => image.value.title,
//   description: () => image.value.excerpt,
//   ogTitle: () => image.value.title,
//   ogDescription: () => image.value.excerpt,
//   ogImage: () => image.value.image.url,
//   twitterTitle: () => image.value.title,
//   twitterDescription: () => image.value.excerpt,
//   twitterImage: () => image.value.image.url,
//   twitterCard: "summary_large_image",
// });

// defineOgImageComponent(
//   "image",
//   {
//     title: image.value.title,
//     description: image.value.excerpt,
//     image: image.value.image.url,
//     siteName: settings.title,
//     siteLogo: settings.logoUrl,
//   },
// );

definePageMeta({
  layout: false,
});
</script>

<template>
  <NuxtLayout name="internal">
    <template #breadcrumb>
      <!-- <pre>{{ image.image }}</pre> -->
      <AppBreadcrumb :image="image.image" />
    </template>
    <template #default>
      <div id="image-content" class="container">
        <section id="image-details">
          <!-- <pre>{{ image }}</pre> -->
          <gallery-content :image="image" />
        </section>
        <section id="image-sidebar">
          <div>
            <!-- <product-promotions /> -->
            <gallery-collection-navigation />
            <!-- <product-showcase /> -->
            <gallery-latest number="4" />
          </div>
        </section>
      </div>
    </template>
  </NuxtLayout>
</template>
<style>
#image-content {
  display: grid;
  gap: 1.5em;
}

@media (width > 1024px) {
  #image-content {
    grid-template-columns: 3fr 1fr;
  }
}
</style>
