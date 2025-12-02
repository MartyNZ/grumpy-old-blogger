<script setup>
import { qryAllPosts } from "~/queries/blog";

const isLoadingPosts = ref(true)
const { data: allPosts } = await useSanityQuery(qryAllPosts).finally(() => {
  isLoadingPosts.value = false
});

const data = useSiteSettingsStore();
const settings = data.settings;
// console.log("From Index: ", JSON.stringify(settings, null, 2));

useSeoMeta({
  icon: computed(() => settings?.logoUrl || ''),
  title: computed(() => settings?.title || ''),
  ogTitle: computed(() => settings?.title || ''),
  description: computed(() => settings?.description || ''),
  ogDescription: computed(() => settings?.description || ''),
  ogImage: computed(() => settings?.image?.asset?.url || ''),
  twitterTitle: computed(() => settings?.title || ''),
  twitterDescription: computed(() => settings?.description || ''),
  twitterImage: computed(() => settings?.image?.asset?.url || ''),
  twitterCard: "summary_large_image",
});
// const pageSettings = computed(() => ({
//   title: settings?.title,
//   description: settings?.description,
//   image: settings?.image,
//   siteName: settings?.title,
//   icon: settings?.logoUrl,
//   twitterCard: "summary_large_image",
// }))
// defineOgImageComponent('default', pageSettings.value);

definePageMeta({
  layout: "false",
});

</script>

<template>
  <div>
    <NuxtLayout name="homepage">

      <main class="@container mx-auto mb-16 max-w-[1280px] px-4">
        <blog-list :posts="allPosts" :loading="isLoadingPosts" sectionTitle="Blog" />
      </main>
    </NuxtLayout>
  </div>
</template>
