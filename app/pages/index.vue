<script setup>
import { qryHomePage } from '~/queries/siteSettings'

const { data: page } = await useSanityQuery(qryHomePage)

// console.log("Homepage: ", JSON.stringify(page.value, null, 2))
useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.seo.description,
  ogDescription: page.value.seo.description,
  ogImage: page.value?.seo?.image?.url,
  twitterTitle: page.value.title,
  twitterDescription: page.value.seo.description,
  twitterImage: page.value?.seo?.image?.url,
  twitterCard: "summary_large_image",
});

definePageMeta({
  layout: 'homepage'
})
</script>

<template>
  <div>
    <AppPageSections :page="page" />
  </div>
</template>
