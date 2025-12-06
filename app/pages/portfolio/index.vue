<script setup>
import { qryPage } from '~/queries/siteSettings';
const route = useRoute();
const pathSegments = route.path.split('/')
const slug = pathSegments[1]

const { data: page } = await useSanityQuery(qryPage, {
  slug: slug
})

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.seo.description,
  ogDescription: page.value.seo.description,
  ogImage: page.value.seo.image.url,
  twitterTitle: page.value.title,
  twitterDescription: page.value.seo.description,
  twitterImage: page.value.seo.image.url,
  twitterCard: "summary_large_image",
});

definePageMeta({
  layout: 'false'
})
</script>
<template>
  <div>
    <NuxtLayout name="internal">
      <template #breadcrumb>
        <AppBreadcrumb :image="page.image" />
      </template>

      <template #default>
        <SectionsPortfolio />
        <AppPageSections :page="page" />
      </template>
    </NuxtLayout>
  </div>
</template>
