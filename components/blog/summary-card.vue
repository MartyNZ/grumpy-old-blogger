<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});
// console.log("Summary Card: ", JSON.stringify(props.post, null, 2))
</script>
<template>
  <!-- <pre>{{ post }}</pre> -->
  <article class="card d-flex flex-column">

    <div class="post-img ratio ratio-16x9">
      <SanityImage :max-w="700" :asset-id="post.image?.asset?._id" :alt="post.title" class="img-fluid" style="  object-fit: cover;
  width: 100%;
  height: 100%" />
    </div>
    <div class="card-details">
      <div class="card-body">
        <h5 class="title">
          <NuxtLink :to="`/blog/${post.slug}`">{{ post.title }}</NuxtLink>
        </h5>

        <div class="meta-top">
          <ul>
            <template v-if="post.authors.length > 1">
              <li class="d-flex align-items-center pb-1 gap-1">
                <Icon name="bi:people" />
                <template v-for="(a, index) in post.authors" :key="a._id">
                  <NuxtLink :to="`/authors/${a.slug}`"><span v-if="index > 0">&nbsp;/&nbsp;</span>{{ a.name }}
                  </NuxtLink>
                </template>
              </li>
            </template>
            <template v-else>
              <li class="d-flex align-items-center pb-1 gap-1">
                <Icon name="bi:person" />
                <NuxtLink :to="`/authors/${post.authors[0].slug}`">{{ post.authors[0].name }}</NuxtLink>
              </li>
            </template>
            <li class="d-flex align-items-center pb-1 gap-1">
              <Icon name="bi:clock" /> <time :datetime="post.publishedDate">{{
                post.publishedDate }}</time>
            </li>
          </ul>
        </div>

        <div class="content">
          <p>
            {{ post.excerpt }}
          </p>
        </div>
      </div>

      <div class="read-more">
        <NuxtLink :to="`/blog/${post.slug}`">Read More
          <Icon name="bi:arrow-right" />
        </NuxtLink>
      </div>
    </div>
  </article>

</template>
<style lang="css" scoped>
.card {
  padding-bottom: 0;
  margin-bottom: 0;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 0;
}

.card-details {
  height: 100%;
  display: grid;
  justify-content: space-between;
}

.card-details .read-more {
  padding-inline: 1.5em;
  padding-block: 1em;
}

.card-body .title {
  font-weight: 600;
  padding: 0;
  margin: 20px 0 0 0;
  color: var(--color-secondary);
  text-wrap: balance;
}

.card-body .content {
  margin-top: 20px;
}

.card-body .content h3 {
  font-size: 22px;
  margin-top: 30px;
  font-weight: bold;
}

.card-body .content blockquote {
  overflow: hidden;
  background-color: rgba(27, 47, 69, 0.06);
  padding: 60px;
  position: relative;
  text-align: center;
  margin: 20px 0;
}

.card-body .content blockquote p {
  color: var(--color-default);
  line-height: 1.6;
  margin-bottom: 0;
  font-style: italic;
  font-weight: 500;
  font-size: 22px;
}

.card-body .content blockquote:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background-color: var(--color-secondary);
  margin-top: 20px;
  margin-bottom: 20px;
}

.card-body .meta-top {
  margin-top: 20px;
  color: var(--color-gray);
}

.card-body .meta-top ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  align-items: center;
  padding: 0;
  margin: 0;
}

.card-body .meta-top ul li+li {
  padding-left: 20px;
}

.card-body .meta-top i {
  font-size: 16px;
  margin-right: 8px;
  line-height: 0;
  color: rgba(86, 184, 230, 0.8);
}

.card-body .meta-top a {
  color: var(--color-gray);
  font-size: 14px;
  display: inline-block;
  line-height: 1;
}

.card-body .meta-bottom {
  padding-top: 10px;
  border-top: 1px solid rgba(27, 47, 69, 0.15);
}

.card-body .meta-bottom i {
  color: #38618e;
  display: inline;
}

.card-body .meta-bottom a {
  color: rgba(27, 47, 69, 0.8);
  transition: 0.3s;
}

.card-body .meta-bottom a:hover {
  color: var(--color-primary);
}

.card-body .meta-bottom .cats {
  list-style: none;
  display: inline;
  padding: 0 20px 0 0;
  font-size: 14px;
}

.card-body .meta-bottom .cats li {
  display: inline-block;
}

.card-body .meta-bottom .tags {
  list-style: none;
  display: inline;
  padding: 0;
  font-size: 14px;
}

.card-body .meta-bottom .tags li {
  display: inline-block;
}

.card-body .meta-bottom .tags li+li::before {
  padding-right: 6px;
  color: var(--color-default);
  content: ",";
}

.card-body .meta-bottom .share {
  font-size: 16px;
}

.card-body .meta-bottom .share i {
  padding-left: 5px;
}

.post-author {
  padding: 20px;
  margin-top: 30px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.post-author img {
  max-width: 120px;
  margin-right: 20px;
}

.post-author h4 {
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 0px;
  padding: 0;
  color: var(--color-secondary);
}

.post-author .social-links {
  margin: 0 10px 10px 0;
}

.post-author .social-links a {
  color: rgba(27, 47, 69, 0.5);
  margin-right: 5px;
}

.post-author p {
  font-style: italic;
  color: rgba(var(--color-gray-rgb), 0.8);
  margin-bottom: 0;
}
</style>
