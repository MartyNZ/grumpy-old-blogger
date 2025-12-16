<script setup>
const props = defineProps({
  posts: {
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
// console.log("Posts: ", JSON.stringify(props.posts, null, 2))
</script>
<template>
  <!-- <pre>{{ posts.length }}</pre> -->
  <section id="post-list" data-aos="fade-up">
    <h2 v-if="title" class="text-lg">{{ title }}</h2>
    <div v-if="summary" class="text-balanced mb-4">{{ summary }}</div>
    <div id="posts-grid" data-aos="fade-up">
      <template v-for="post in posts" :key="post._id">
        <!-- <div class="container">
          <pre>{{ post.title }}</pre>
        </div> -->
        <lazy-blog-summary-card :post="post" />
      </template>
    </div>
  </section>
</template>
<style scoped>
#post-list {
  container-type: inline-size;
  margin-bottom: 1.5em;
}

#posts-grid {
  display: grid;
  gap: 1.5em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
  container-type: inline-size;

  @container(width >=calc(100px * 2 + 1rem)) {}
}

@container (width > 530px) {
  #posts-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 0.5fr));
  }
}

.post-list post {
  height: 100%;
  border-bottom: 1px solid #d6e2ef;
  padding-bottom: 30px;
}

.post-list post+post {
  margin-top: 60px;
}

.post-list .post-img {
  max-height: 240px;
  overflow: hidden;
}

.post-list .title {
  font-size: 20px;
  font-weight: 600;
  padding: 0;
  margin: 20px 0 0 0;
}

.post-list .title a {
  color: var(--color-secondary);
  transition: 0.3s;
}

.post-list .title a:hover {
  color: var(--color-primary);
}

.post-list .meta-top {
  margin-top: 20px;
  color: #467ab3;
}

.post-list .meta-top ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  align-items: center;
  padding: 0;
  margin: 0;
}

.post-list .meta-top ul li+li {
  padding-left: 20px;
}

.post-list .meta-top i {
  font-size: 16px;
  margin-right: 8px;
  line-height: 0;
  color: rgba(86, 184, 230, 0.8);
}

.post-list .meta-top a {
  color: #467ab3;
  font-size: 14px;
  display: inline-block;
  line-height: 1;
}

.post-list .content {
  margin-top: 20px;
}

.post-list .read-more a {
  display: inline-block;
  color: #1f98d1;
  transition: 0.3s;
  font-size: 15px;
  font-weight: 500;
}

.post-list .read-more a:hover {
  color: var(--color-primary);
}
</style>
