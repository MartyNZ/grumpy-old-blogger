<script setup>

const props = defineProps({
  number: {
    type: String,
    default: 3,
    required: true
  }
})
const { data: posts } = await useSanityQuery(`  *[_type == "post" && draft != true && dateTime(now()) > dateTime(publishedDate + "T00:00:00Z")]{
    _id,
    title,
    'slug': slug.current,
    image{
      asset->{
        _url,
        _id,
        metadata
      }
    },
    'excerpt': array::join(string::split(pt::text(body), "")[0...175], "") + "...",
    publishedDate,
    'category':category->{
      title,
      'slug':slug.current
    }
  } | order(publishedDate desc)[0...${props.number}]`);
</script>
<template v-if="posts">
  <section id="latest-posts" class="mb-3">
    <h3>Latest Posts</h3>
    <div class="d-flex align-items-start pb-3" v-for="post in posts" :key="post._id">
      <div class="ratio ratio-16x9 position-relative overflow-hidden bg-cover bg-no-repeat shadow"
        style="max-width:125px;">
        <SanityImage :asset-id="post.image?.asset?._id" class="w-100 object-fit-cover align-middle transition"
          :alt="post.title" />
        <NuxtLink :to="`/blog/${post.slug}`">
          <div>
            <div
              class="position-absolute top-0 start-0 end-0 bottom-0 h-100 w-100 overflow-hidden bg-opacity-15 bg-light opacity-0 transition">
            </div>
          </div>
        </NuxtLink>
      </div>
      <div class="ms-2 text-sm">
        <NuxtLink :to="`/blog/${post.slug}`" class="text-dark text-decoration-none fw-medium">
          {{ post.title }}
        </NuxtLink>
        <p class="text-muted text-xs">
          {{ post.publishedDate }}
        </p>
      </div>
    </div>

  </section>
</template>

<style>
.zoom:hover img {
  transform: scale(1.1);
}

.transition {
  transition: all 0.3s ease-in-out;
}

.bg-opacity-15 {
  background-color: rgba(255, 255, 255, 0.15) !important;
}

.object-fit-cover {
  object-fit: cover;
}
</style>
