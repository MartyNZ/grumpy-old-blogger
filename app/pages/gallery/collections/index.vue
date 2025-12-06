<script setup>
import {
  qryAllImagesByCollection
} from "~/queries/gallery";
const { data: collections } = await useSanityQuery(qryAllImagesByCollection);

definePageMeta({
  layout: false,
});
</script>
<template>
  <NuxtLayout name="internal">
    <template #breadcrumb>
      <AppBreadcrumb :image="collections[0].images[0].image" />
    </template>
    <template #default>
      <div id="collection-main" class="container mx-auto p-4 md:p-6">
        <div id="page-layout">
          <section id="collections-list" class="collections">
            <h2 class="mb-4">All Collections</h2>
            <div v-for="collection in collections" :key="collection._id">
              <template v-if="collection.images.length > 0">
                <div id="header" class="my-2 pb-3">
                  <NuxtLink :to="`/gallery/collections/${collection.slug}`">
                    <h3>{{ collection.title }}</h3>
                  </NuxtLink>
                  <p v-if="collection.description">{{ collection.description }}
                  </p>
                </div>
                <gallery-list :images="collection.images" />
              </template>
            </div>
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
