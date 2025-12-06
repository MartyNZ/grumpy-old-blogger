<script setup>
import { qryPage } from '~/queries/siteSettings'
const route = useRoute();
const slug = route.params.slug;

const { data: page } = await useSanityQuery(qryPage, {
  slug: slug
})

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.seo.description,
  ogDescription: page.value.seo.description,
  ogImage: page.value.image?.url,
  twitterTitle: page.value.title,
  twitterDescription: page.value.seo.description,
  twitterImage: page.value.image?.url,
  twitterCard: "summary_large_image",
});

// console.log("Page -", JSON.stringify(page.value.title, null, 2), ": ", JSON.stringify(page.value, null, 2))

definePageMeta({
  layout: 'false'
})
</script>
<template>
  <NuxtLayout name="internal">
    <template #breadcrumb>
      <AppBreadcrumb :image="page.headerImage" />
    </template>
    <template #default>
      <AppPageSections :page="page" />
    </template>
  </NuxtLayout>
</template>
