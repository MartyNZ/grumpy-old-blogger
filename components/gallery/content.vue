<script setup>
const props = defineProps({
  image: {
    type: Object,
    required: true,
  },
});
const imgHeight = computed(() => {
  return props.image.image.asset.metadata.dimensions.height;
})
const imgWidth = computed(() => {
  return props.image.image.asset.metadata.dimensions.width;
})
const imgAspect = computed(() => {
  return props.image.image.asset.metadata.dimensions.aspectRatio;
})

const imgDisplay = computed(() => {
  let maxHeight = 800; // maxHeight should be a number, not a string
  let maxWidth = 954;  // maxWidth should be a number, not a string
  if (imgHeight.value > imgWidth.value) {
    if (maxHeight > imgHeight.value) {
      return {
        h: imgHeight.value,
        w: (imgHeight.value * imgAspect.value).toFixed(2)
      }
    } else {
      return {
        h: maxHeight,
        w: (imgHeight.value * imgAspect.value).toFixed(2)
      }
    }
  } else {
    return {
      h: (imgWidth.value / imgAspect.value).toFixed(2),
      w: maxWidth,
    }
  }

})
// console.log("imgDisplay: ", JSON.stringify(imgDisplay.value, null, 2))


onMounted(async () => {
  const GLightbox = (await import('glightbox')).default;
  const portfolioLightbox = GLightbox({
    selector: ".preview-link",
  });
})
</script>
<template>
  <section id="image" class="mb-10">
    <div id="image-details">
      <!-- <pre>{{ image.image.asset.metadata.dimensions.aspectRatio }}</pre> -->
      <h2 class="">
        {{ image.title }}
      </h2>
      <div class="p-6">
        <!-- <pre>{{ image }}</pre> -->
        <a :href="image.image.asset.url" data-image="gallery-image" class="preview-link">
          <SanityImage :asset-id="image.image?.asset?._id" :w="imgDisplay.w" :h="imgDisplay.h"
            :alt="image.image.altText" auto="format" class="shadow img-fluid" />
        </a>
      </div>
      <div class="image-caption">
        {{ image.image.caption }}
      </div>
    </div>

  </section>
</template>
