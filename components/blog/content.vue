<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});
// console.log("Post: ", JSON.stringify(props.post, null, 2))
</script>
<template>
  <!-- <pre>{{ post }}</pre> -->
  <section id="post" class="mb-10">
    <div id="post-content">
      <h2 class="">
        {{ post.title }}
      </h2>
      <div class="mb-6 ratio ratio-16x9">
        <SanityImage :asset-id="post.image?.asset?._id" class="object-fit-cover" :alt="post.title"
          :lqip="post.image?.asset?.metadata.lqip" />
      </div>

      <div class="m-6 flex items-center">
        <template v-if="post.authors">
          <span> Published: {{ post.publishedDate }}. Written by </span>
          <span v-for="(author, index) in post.authors" :key="author._id">
            <NuxtLink :to="`/authors/${author.slug}`" class="font-medium">
              <template v-if="author.nomDePlume">{{ author.nomDePlume }}</template>
              <template v-else>{{ author.name }}</template>
            </NuxtLink>
            <template v-if="index < post.authors.length - 1">
              ,&nbsp;
            </template>
          </span>
        </template>
      </div>
      <div class="sanity-content mt-5">
        <SanityContent :blocks="post.body" />
      </div>
    </div>

  </section>
</template>
