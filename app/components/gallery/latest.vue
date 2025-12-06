<script setup>

const props = defineProps({
  number: {
    type: String,
    default: 3,
    required: true
  }
})
const { data: images } = await useSanityQuery(`
*[_type == "gallery.image" && draft != true]{
  _id,
  title,
  'slug': slug.current,
  featureImage,
  image{
    caption,
    altText,
    hotspot,
    'assetId':asset->_id,
    'url':asset->url,
    asset->
  },
  collections[]->,
} | order(_createdAt desc)[0...${props.number}]
`);
// console.log(JSON.stringify(images.value, null, 2))
</script>
<template v-if="images">
  <!-- <pre>{{ images }}</pre> -->
  <section id="latest-images" class="mb-3">
    <h3>Latest Images</h3>
    <div class="image-grid">
      <template v-for="image in images" :key="image._id">
        <div class="gallery-item ratio ratio-1x1">
          <SanityImage :asset-id="image.image.asset._id" class="object-fit-cover" :alt="image.altText" />
          <NuxtLink :to="`/gallery/${image.slug}`">
            <div class="gallery-info">
              <h4>{{ image.title }}</h4>
            </div>
          </NuxtLink>
        </div>
      </template>
    </div>

  </section>
</template>
<style>
.image-grid {
  padding: .5em;
  display: grid;
  gap: 0.75em;
  grid-template-columns: 1fr 1fr;
}

.image-grid .gallery-item .gallery-info {
  opacity: 0;
  position: absolute;
  /* left: 30px;
  right: 30px; */
  bottom: 0;
  text-align: center;
  padding: 15px;
  z-index: 3;
  transition: all ease-in-out 0.3s;
  background: rgba(255, 255, 255, 0.9);
}

.image-grid .gallery-item .gallery-info h4 {
  font-size: 12px;
}

.image-grid .gallery-item:hover .gallery-info {
  opacity: 1;
  /* bottom: 20px; */
}
</style>
