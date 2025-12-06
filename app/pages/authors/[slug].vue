<script setup>
import {
  qryArticleBySlug
} from "~/queries/articles";
const route = useRoute();
const routeParams = route.params;
const data = useSiteSettingsStore();
const settings = data.settings;

const { data: article } = await useSanityQuery(qryArticleBySlug, {
  slug: routeParams.slug,
});
// console.log("Article: ", JSON.stringify(article.value, null, 2))
// const relatedProducts = article.value.relatedProducts;
// console.log("relatedProducts: ", JSON.stringify(relatedProducts[0]));

// const articleTags = article.value.tags;
// console.log("Article Tags: ", JSON.stringify(articleTags));

// useSeoMeta({
//   title: () => article.value.title,
//   description: () => article.value.excerpt,
//   ogTitle: () => article.value.title,
//   ogDescription: () => article.value.excerpt,
//   ogImage: () => article.value.image.url,
//   twitterTitle: () => article.value.title,
//   twitterDescription: () => article.value.excerpt,
//   twitterImage: () => article.value.image.url,
//   twitterCard: "summary_large_image",
// });

// defineOgImageComponent(
//   "article",
//   {
//     title: article.value.title,
//     description: article.value.excerpt,
//     image: article.value.image.url,
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
      <AppBreadcrumb :image="article.image" />
    </template>
    <template #default>
      <div id="collection-main" class="container mx-auto p-4 md:p-6">
        <div id="page-layout">
          <section id="article">
            <article-content :article="article" />
          </section>
          <section id="collections-sidebar" class="sidebar">
            <div class="sticky-top">
              <!-- <product-promotions /> -->
              <article-collection-navigation />
              <!-- <product-showcase /> -->
              <article-latest number="4" />
            </div>
          </section>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>
