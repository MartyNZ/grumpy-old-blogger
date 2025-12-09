<script setup>
import {
  qryAllPostsByCategory,
} from "~/queries/blog";
const { data: categories } = await useSanityQuery(qryAllPostsByCategory);
// console.log("Categories: ", JSON.stringify(categories.value, null,2));

definePageMeta({
  layout: false,
});
</script>
<template>
  <NuxtLayout name="internal">
    <template #breadcrumb>
      <AppBreadcrumb :image="categories[0].image" />
    </template>
    <template #default>
      <div id="collection-main" class="container mx-auto p-4 md:p-6">
        <div id="page-layout">
          <section id="collections-list" class="collections">
            <h2 class="mb-4">All Collections</h2>
            <div v-for="category in categories" :key="category._id">
              <template v-if="category.posts.length > 0">
                <div id="header" class="my-2 pb-3">
                  <NuxtLink :to="`/blog/collections/${category.slug}`">
                    <h3>{{ category.title }}</h3>
                  </NuxtLink>
                  <SanityContent v-if="category.description" :value="category.description" />
                </div>
                <blog-list :posts="category.posts" />
              </template>
            </div>
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
