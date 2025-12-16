<script setup>
import { qryPage } from '~/queries/siteSettings'
const route = useRoute();
const slug = route.params.slug;
const config = useRuntimeConfig();
const siteUrl = config.public.siteUrl

const { data: page } = await useSanityQuery(qryPage, {
  slug: slug
})

useSeoMeta({
  title: () =>  page.value.title,
  ogTitle: () =>  page.value.title,
  twitterTitle: () =>  page.value.title,
  description: () =>  page.value.seo.description,
  ogDescription: () =>  page.value.seo.description,
  twitterDescription: () =>  page.value.seo.description,
  ogImage: () =>  page.value.image?.asset?.url,
  twitterImage: () =>  page.value.image?.asset?.url,
  ogUrl: () =>  `${siteUrl}/${slug}`,
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
      <AppBreadcrumb :image="page.image" />
    </template>
    <template #default>
      <div id="page-main" class="container mx-auto p-4 md:p-6">
        <div id="page-layout">
          <section id="page-content">
          <AppPageSections :page="page" />
          </section>
          <section id="page-sidebar" class="sidebar">
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
<style lang="css" scoped>
#page-main {
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
