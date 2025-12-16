<script setup>
const props = defineProps({
  image: {
    type: Object,
    required: true,
  },
});
// console.log("Summary Card: ", JSON.stringify(props.image, null, 2))
</script>
<template>
  <!-- <pre>{{ image.image.asset.metadata.dimensions.aspectRatio }}</pre> -->
  <div class="gallery-item ratio ratio-1x1">
    <SanityImage :asset-id="image.image.asset._id" class="object-fit-cover" :alt="image.altText" />
    <NuxtLink :to="`/gallery/${image.slug}`">
      <div class="gallery-info">
        <h4>{{ image.title }}</h4>
      </div>
    </NuxtLink>
  </div>
</template>
<style lang="css">
.gallery-item {
  position: relative;
}

.gallery-item .gallery-info {
  opacity: 0;
  position: absolute;
  left: 30px;
  right: 30px;
  bottom: 0;
  text-align: center;
  padding: 15px;
  z-index: 3;
  transition: all ease-in-out 0.3s;
  background: rgba(255, 255, 255, 0.9);
}

.gallery-item .gallery-info h4 {
  font-size: 18px;
  font-weight: 600;
  color: var(--color-default);
  /* padding-right: 50px; */
}

/* .gallery-item .gallery-info .preview-link,
.gallery-item .gallery-info .details-link {
  position: absolute;
  right: 50px;
  font-size: 24px;
  top: calc(50% - 14px);
  color: rgba(27, 47, 69, 0.7);
  transition: 0.3s;
  line-height: 0;
}

.gallery-item .gallery-info .preview-link:hover,
.gallery-item .gallery-info .details-link:hover {
  color: var(--color-primary);
}

.gallery-item .gallery-info .details-link {
  right: 14px;
  font-size: 28px;
} */

.gallery-item:hover .gallery-info {
  opacity: 1;
  bottom: 20px;
}
</style>
