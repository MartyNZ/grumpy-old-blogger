<script setup>
const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  title: {
    type: String,
  },
  summary: {
    type: String,
  }
})
// console.log("Gallery images: ", JSON.stringify(props.images, null, 2))
</script>
<template>
  <!-- <pre>{{ images.length }}</pre> -->
  <section id="gallery-list" data-aos="fade-up">

    <h2 v-if="title" class="text-lg">{{ title }}</h2>
    <div v-if="summary" class="text-balanced mb-4">{{ summary }}</div>

    <div id="gallery-grid" data-aos="fade-up">
      <template v-for="image in images" :key="image._id">
        <!-- <pre>{{ image.title }}</pre> -->
        <lazy-gallery-summary-card :image="image" />
      </template>
    </div>

  </section>
</template>
<style scoped>
#gallery-list {
  container-type: inline-size;
  margin-bottom: 1.5em;
}

#gallery-grid {
  display: grid;
  gap: 1.5em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
  container-type: inline-size;

  @container(width >=calc(100px * 2 + 1rem)) {}
}

@container (width > 530px) {
  #gallery-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 0.5fr));
  }
}

.gallery-list article {
  height: 100%;
  border-bottom: 1px solid #d6e2ef;
  padding-bottom: 30px;
}

.gallery-list article+article {
  margin-top: 60px;
}

.gallery-list .article-img {
  max-height: 240px;
  overflow: hidden;
}

.gallery-list .title {
  font-size: 20px;
  font-weight: 600;
  padding: 0;
  margin: 20px 0 0 0;
}

.gallery-list .title a {
  color: var(--color-secondary);
  transition: 0.3s;
}

.gallery-list .title a:hover {
  color: var(--color-primary);
}

.gallery-list .meta-top {
  margin-top: 20px;
  color: #467ab3;
}

.gallery-list .meta-top ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  align-items: center;
  padding: 0;
  margin: 0;
}

.gallery-list .meta-top ul li+li {
  padding-left: 20px;
}

.gallery-list .meta-top i {
  font-size: 16px;
  margin-right: 8px;
  line-height: 0;
  color: rgba(86, 184, 230, 0.8);
}

.gallery-list .meta-top a {
  color: #467ab3;
  font-size: 14px;
  display: inline-block;
  line-height: 1;
}

.gallery-list .content {
  margin-top: 20px;
}

.gallery-list .read-more a {
  display: inline-block;
  color: #1f98d1;
  transition: 0.3s;
  font-size: 15px;
  font-weight: 500;
}

.gallery-list .read-more a:hover {
  color: var(--color-primary);
}
</style>
