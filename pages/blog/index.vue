<script setup>
import { qryBlog, qryPosts } from '~/queries/blog'
const config = useRuntimeConfig();
const siteUrl = config.public.siteUrl;

const { data: blog } = await useSanityQuery(qryBlog)

// console.log("Blogs Section: ", JSON.stringify(blog.value, null, 2))

const { data: posts } = await useSanityQuery(qryPosts)
// console.log("Posts: ", JSON.stringify(posts.value, null, 2))

useSeoMeta({
  title: () => blog.value.title,
  ogTitle: () => blog.value.title,
  twitterTitle: () => blog.value.title,
  description: () => blog.value.excerpt,
  ogDescription: () => blog.value.excerpt,
  twitterDescription: () => blog.value.excerpt,
  ogImage: () => blog.value.image?.asset?.url,
  twitterImage: () => blog.value.image?.asset?.url,
  ogUrl: () => `${siteUrl}/${blog.value.slug}`,
  twitterCard: "summary_large_image",
});

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
