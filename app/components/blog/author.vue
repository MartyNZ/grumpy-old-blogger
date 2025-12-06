<script setup>
const props = defineProps({
  author: {
    type: Object,
    required: true,
  }
})
</script>
<template>
  <div class="author-container">
    <div class="author-card">
      <div class="author-detail">
        <div class="photo-wrapper">
          <SanityImage :asset-id="author.image?.asset?._id" class="author-image" />
        </div>
      </div>
      <div class="author-bio">
        <div class="author-info">
          <NuxtLink class="author-link" :to="`/authors/${author.slug}`">
            <span class="author-name">{{ author.name }}</span>
          </NuxtLink>
        </div>
        <SanityContent :value="author.bio" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.author-container {
  max-width: 40rem;
  height: 100%;
}

.author-card {
  background-color: #fff;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-radius: 0.5rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  height: 100%;
  display: flex;
  flex-direction: row;
}
.author-detail{
}
.photo-wrapper {
  padding: 0.5rem;
}

.author-image {
  border-radius: 9999px;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;
  width: 10rem;
  aspect-ratio: 1 / 1;
}
.author-bio {
  justify-self: end;
  padding-inline:.5em;
}
.author-info {
  padding: 0.5rem;
  flex: 0 1 0%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.author-name-wrapper {
  text-align: center;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
}

.author-link {
  font-size: 1.125rem;
  font-style: italic;
  font-weight: 500;
  line-height: 1.25;
  display: flex;
  gap: 0.25rem;
  place-content: center;
  text-decoration: none;
}

.author-link:hover {
  text-decoration: underline;
}

.author-name {
  max-width: 12rem;
}
</style>

