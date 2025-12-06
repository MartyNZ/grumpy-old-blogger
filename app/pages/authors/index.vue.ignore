<script setup>
// const settings = useSiteSettingsStore().settings
import { qryAuthors } from '~/queries/authors'

const { data: authors } = await useSanityQuery(qryAuthors)
// console.log("Articles: ", JSON.stringify(articles.value, null, 2))

const props = defineProps({
  image: {
    type: String,
    default: '',
  }
})

// useSeoMeta({
//   title: () => authors.value.title,
//   description: () => authors.value.excerpt,
//   ogTitle: () => authors.value.title,
//   ogDescription: () => authors.value.excerpt,
//   ogImage: () => authors.value.image.url,
//   twitterTitle: () => authors.value.title,
//   twitterDescription: () => authors.value.excerpt,
//   twitterImage: () => authors.value.image.url,
//   twitterCard: "summary_large_image",
// });

// defineOgImageComponent(
//   "article",
//   {
//     title: authors.value.title,
//     description: authors.value.excerpt,
//     image: authors.value.image.url,
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
        <AppBreadcrumb :image="articlesSection.image" />
      </template>
      <template #default>
        <div id="article-main" class="container mx-auto p-4 md:p-6">
          <div id="page-layout">
            <section id="articles-list" class="articles">
              <h2>{{ articlesSection.title }}</h2>
              <p>{{ articlesSection.description }}</p>
              <!-- <pre>{{ articles }}</pre> -->
              <article-list :articles="articles" />
            </section>
            <section id="articles-sidebar" class="sidebar">
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
  </div>
</template>
<style lang="css">
#article-main {
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
