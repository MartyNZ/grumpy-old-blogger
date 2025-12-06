<script setup>
import {
  qryAuthorBySlug
} from "~/queries/authors";
const route = useRoute();
const routeParams = route.params;
const data = useSiteSettingsStore();
const settings = data.settings;

const { data: author } = await useSanityQuery(qryAuthorBySlug, {
  slug: routeParams.slug,
});
// console.log("Author: ", JSON.stringify(author.value, null, 2))

// useSeoMeta({
//   title: () => author.value.title,
//   description: () => author.value.excerpt,
//   ogTitle: () => author.value.title,
//   ogDescription: () => author.value.excerpt,
//   ogImage: () => author.value.image?.asset?.url,
//   twitterTitle: () => author.value.title,
//   twitterDescription: () => author.value.excerpt,
//   twitterImage: () => author.value.image?.asset?.url,
//   twitterCard: "summary_large_image",
// });

// defineOgImageComponent(
//   "author",
//   {
//     title: author.value.title,
//     description: author.value.excerpt,
//     image: author.value.image.url,
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
      <AppBreadcrumb :image="author.image" />
    </template>
    <template #default>
      <div id="collection-main" class="container mx-auto p-4 md:p-6">
        <div id="page-layout">
          <section id="author">
            <div class="author-info">
              <blog-author :author="author" />
              <blog-collection-navigation />
            </div>
            <div class="sticky-top">
              <blog-latest number="4" />
            </div>
          </section>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>
<style scoped>
.author-info {
  display: flex;
  gap: 20px;
}
</style>
