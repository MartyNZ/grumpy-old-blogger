<script setup>
import { qryContactPage } from '~/queries/siteSettings'

const { data: page } = await useSanityQuery(qryContactPage)

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.seo.description,
  ogDescription: page.value.seo.description,
  ogImage: page.value.seo.image?.asset?.url,
  twitterTitle: page.value.title,
  twitterDescription: page.value.seo.description,
  twitterImage: page.value.seo.image?.asset?.url,
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
        <SectionsContact />
        <AppPageSections :page="page" />
      </template>
    </NuxtLayout>
  </div>
</template>
