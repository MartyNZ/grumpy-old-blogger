<script setup>
import {
  qryPostsByCategory
} from "~/queries/blog";

definePageMeta({
  layout: false,
});

const route = useRoute();
const routeParams = route.params;
// console.log(routeParams.slug);

const { data: collection } = await useSanityQuery(qryPostsByCategory, {
  slug: routeParams.slug,
});
// console.log("Collection", JSON.stringify(collection.value.image, null, 2))
</script>
<template>
  <NuxtLayout name="internal">
    <template #breadcrumb>
      <AppBreadcrumb :image="collection.image" />
    </template>
    <template #default>
      <div id="collection-main" class="container mx-auto p-4 md:p-6">
        <div id="page-layout">
          <section id="posts-list" class="posts">
            <h1>
              {{ collection.name }}
            </h1>
            <SanityContent v-if="collection.description" :blocks="collection.description" />
            <!-- <pre>{{ collection.posts }}</pre> -->
            <blog-list :posts="collection.posts" />
          </section>
          <section id="posts-sidebar" class="sidebar">
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
