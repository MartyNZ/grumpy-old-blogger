<script setup>
import {
  qryImagesByCollection
} from "~/queries/gallery";

definePageMeta({
  layout: false,
});

const route = useRoute();
const routeParams = route.params;
// console.log(routeParams.slug);

const { data: collection } = await useSanityQuery(qryImagesByCollection, {
  slug: routeParams.slug,
});
// console.log("Collection", JSON.stringify(collection.value, null, 2))
</script>
<template>
  <NuxtLayout name="internal">
    <template #breadcrumb>
      <AppBreadcrumb :image="collection.images[0].image" />
    </template>
    <template #default>
      <div id="collection-main" class="container mx-auto p-4 md:p-6">
        <div id="page-layout">
          <section id="articles-list" class="articles">
            <h1>
              {{ collection.title }}
            </h1>
            <div v-if="collection.description">
              {{ collection.description }}
            </div>
            <!-- <pre>{{ collection.articles }}</pre> -->
            <gallery-list :images="collection.images" />
          </section>
          <section id="images-sidebar" class="sidebar">
            <div>
              <!-- <product-promotions /> -->
              <gallery-collection-navigation />
              <!-- <product-showcase /> -->
              <gallery-latest number="4" />
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
