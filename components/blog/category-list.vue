<script setup>
const props = defineProps({
  collectionNav: {
    type: Object,
    required: true,
  },
});
const articleCollection = props.collectionNav.articleCollectionNavGroup
// console.log("Article Collection", JSON.stringify(props.collectionNav.articleCollectionNavGroup, null, 2))
const items = ref([])

function transformData(articleCollection) {
  items.value = articleCollection.map((category, index) => {
    // console.log("Category", JSON.stringify(category, null, 2))
    return {
      key: category._id,
      label: category.title,
      // route: `/articles/collections/${category.slug}`, // or any relevant data
      // icon: 'fad:angles-down',
      children: (category.collections || []).map((collection) => {
        return {
          key: collection._id, // Unique key for collection
          label: collection.title,
          route: `/articles/collections/${collection.slug}`, // or any relevant data
          icon: '', // You can set a specific icon if needed
          children: [] // Assuming no further nesting based on provided data
        };
      })
    };
  });
}
transformData(articleCollection)
// console.log("Navigation: ", JSON.stringify(items.value, null, 2))
// console.log("Article Collection: ", JSON.stringify(articleCollection, null, 2))

</script>
<template>
  <section id="article-collections" class="pb-4">
    <h3>
      <NuxtLink to="/articles/collections">Article Collections</NuxtLink>
    </h3>
    <PanelMenu :model="items" class="w-full">
      <template #headericon>
        <Icon name="fad:arrowdown" />
      </template>
      <template #item="{ item }">
        <NuxtLink v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple class="flex items-center cursor-pointer text-surface-700 dark:text-surface-0 px-4 py-2"
            :href="href" @click="navigate">
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </NuxtLink>
        <a v-else v-ripple class="flex items-center cursor-pointer text-surface-700 dark:text-surface-0 px-4 py-2"
          :href="item.url" :target="item.target">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
          <span v-if="item.items" class="pi pi-angle-down text-primary ml-auto" />
        </a>
      </template>
    </PanelMenu>

  </section>
</template>
