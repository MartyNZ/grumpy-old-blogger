<script setup>
const route = useRoute();
const props = defineProps({
  image: {
    type: Object
  }
})
const pathSegments = ref([]);

watch(
  () => route.fullPath,
  () => {
    const partPath = route.fullPath.split("?")[0];
    const fullPath = partPath.split("#")[0];
    pathSegments.value = [];
    const segments = fullPath.substring(1).split("/");

    if (route.fullPath !== "/") {
      for (let i = 0; i < segments.length; i++) {
        let segment = segments[i];
        if (i === 0) {
          // Convert the first segment to upper case
          segment = segment
            .replace(/-/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase());
        } else if (i < segments.length - 1) {
          segment = segment
            .replace(/-/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase());
        } else {
          // Convert the last segment to title case and replace '-' with ' '
          segment = segment
            .replace(/-/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase());
        }
        pathSegments.value.push({
          title: segment,
          slug:
            i < segments.length - 1
              ? `/${segments.slice(0, i + 1).join("/")}`
              : undefined,
        });
      }
    }
  },
  { immediate: true },
);

const home = computed(() => ({
  icon: "fa-duotone fa-home",
  route: "/",
}));

const items = computed(() => {
  return pathSegments.value.map((segment, index) => ({
    label: segment.title,
    route:
      index < pathSegments.value.length - 1 ? `${segment.slug}` : undefined,
  }));
});
</script>

<template>
  <div class="breadcrumbs d-flex align-items-center" :style="{ backgroundImage: `url(${image?.asset?.metadata?.lqip})` }">
    <div class="container position-relative d-flex flex-column align-items-center">

      <h2>{{ items[items.length - 1].label }}</h2>
      <ol class="d-flex align-items-center">
        <li>
          <a href="/">
            <Icon name="bi:house" />
          </a>
        </li>
        <li v-for="(item, index) in items" :key="index">
          <template v-if="item.route">
            <a :href="item.route">
              {{ item.label }}
            </a>
          </template>
          <template v-else>
            {{ item.label }}
          </template>
        </li>
      </ol>

    </div>
  </div>
</template>
