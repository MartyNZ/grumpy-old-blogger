<script setup>
// const settings = useSiteSettingsStore().settings
import { qryBlog, qryPosts } from '~/queries/blog'

const { data: blog } = await useSanityQuery(qryBlog)

// console.log("Blogs Section: ", JSON.stringify(blog.value, null, 2))

const { data: posts } = await useSanityQuery(qryPosts)
// console.log("Posts: ", JSON.stringify(posts.value, null, 2))

// useSeoMeta({
//   title: () => blog.value.title,
//   description: () => blog.value.excerpt,
//   ogTitle: () => blog.value.title,
//   ogDescription: () => blog.value.excerpt,
//   ogImage: () => blog.value.image.url,
//   twitterTitle: () => blog.value.title,
//   twitterDescription: () => blog.value.excerpt,
//   twitterImage: () => blog.value.image.url,
//   twitterCard: "summary_large_image",
// });

// defineOgImageComponent(
//   "post",
//   {
//     title: blog.value.title,
//     description: blog.value.excerpt,
//     image: blog.value.image.url,
//     siteName: settings.title,
//     siteLogo: settings.logoUrl,
//   },
// );

definePageMeta({
  layout: false,
});
</script>
<template>
  <div>
    <NuxtLayout name="internal">
      <template #breadcrumb>
        <AppBreadcrumb :image="blog.image" />
      </template>
      <template #default>
        <div id="post-main" class="container mx-auto p-4 md:p-6">
          <div id="page-layout">
            <section id="posts-list" class="posts">
              <h2>{{ blog.title }}</h2>
              <p>{{ blog.description }}</p>
              <!-- <pre>{{ posts }}</pre> -->
              <blog-list :posts="posts" />
            </section>
            <section id="posts-sidebar" class="sidebar">
              <div>
                <!-- <product-promotions /> -->
                <blog-collection-navigation />
                <!-- <product-showcase /> -->
                <blog-sidebar-latest number="4" />
              </div>
            </section>
          </div>
        </div>
      </template>
    </NuxtLayout>
  </div>
</template>
<style lang="css">
#post-main {
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
