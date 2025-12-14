<script setup>
import { qryPostBySlug } from "~/queries/blog";
const route = useRoute();
const routeParams = route.params;
const data = useSiteSettingsStore();
const settings = data.settings;

const { data: post } = await useSanityQuery(qryPostBySlug, {
  slug: routeParams.slug,
});
// console.log("Post: ", JSON.stringify(post.value, null, 2))
// const relatedProducts = post.value.relatedProducts;
// console.log("relatedProducts: ", JSON.stringify(relatedProducts[0]));

// const postTags = post.value.tags;
// console.log("Post Tags: ", JSON.stringify(postTags));

// useSeoMeta({
//   title: () => post.value.title,
//   description: () => post.value.excerpt,
//   ogTitle: () => post.value.title,
//   ogDescription: () => post.value.excerpt,
//   ogImage: () => post.value.image.url,
//   twitterTitle: () => post.value.title,
//   twitterDescription: () => post.value.excerpt,
//   twitterImage: () => post.value.image.url,
//   twitterCard: "summary_large_image",
// });

// defineOgImageComponent(
//   "post",
//   {
//     title: post.value.title,
//     description: post.value.excerpt,
//     image: post.value.image.url,
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
      <AppBreadcrumb :image="post.image" />
    </template>
    <template #default>
      <div id="collection-main" class="container mx-auto p-4 md:p-6">
        <div id="page-layout">
          <section id="post" class="mt-8">
            <blog-content :post="post" />
          </section>
          <section id="collections-sidebar" class="sidebar">
            <div class="d-none d-lg-block">
              <blog-collection-navigation />
            </div>
            <div>
              <blog-sidebar-latest number="4" />
            </div>
          </section>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>
<style lang="css">
#collection-main {
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
