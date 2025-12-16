<script setup>
const props = defineProps({
  page: Object,
  required: true
});

</script>

<template>
  <div>
    <template v-for="section in page.sections" :key="section._id">
      <div class="container" v-if="section._type == 'about'">
        <SectionsAbout :id="section._id" />
      </div>
      <div class="container" v-else-if="section._type == 'whyUs'">
        <SectionsWhyUs :id="section._id" />
      </div>
      <div class="container" v-else-if="section._type == 'services'">
        <SectionsServices :id="section._id" :layout="section.layout" />
      </div>
      <SectionsCta v-else-if="section._type == 'cta'" :id="section._id" />
      <div class="container" v-else-if="section._type == 'features'">
        <SectionsFeatures v-if="section._type == 'features'" :id="section._id" :layout="section.layout" />
      </div>
      <!-- <div class="container" v-else-if="section._type == 'latest.articles'">
        <ArticleLatest number="4" />
      </div> -->
      <div class="container" v-else-if="section._type == 'latest.images'">
        <GalleryLatest number="3" />
      </div>
      <div class="container" v-else-if="section._type == 'latest.posts'">
        <BlogLatest number="4" />
      </div>
      <div class="container" v-else-if="section._type == 'team'">
        <SectionsTeam :id="section._id" />
      </div>
      <div class="container" v-else-if="section._type == 'testimonials'">
        <SectionsTestimonials :id="section._id" />
      </div>
      <div class="container" v-else-if="section._type == 'policy'">
        <SectionsPolicy :id="section._id" />
      </div>
      <div class="container" v-else>
        <div>
          <h3>No sections have been selected</h3>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped></style>
