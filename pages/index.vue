<script setup>
import { qryHomePage } from '~/queries/siteSettings'
const config = useRuntimeConfig();
const siteUrl = config.public.siteUrl;

const { data: page } = await useSanityQuery(qryHomePage)

useSeoMeta({
  title: () =>  page.value.title,
  ogTitle: () =>  page.value.title,
  twitterTitle: () =>  page.value.title,
  description: () =>  page.value.seo.description,
  ogDescription: () =>  page.value.seo.description,
  twitterDescription: () =>  page.value.seo.description,
  ogImage: () =>  page.value.seo.image?.asset?.url,
  twitterImage: () =>  page.value.seo.image?.asset?.url,
  ogUrl: () =>  siteUrl,
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
