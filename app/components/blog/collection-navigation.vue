<script setup>
import { qryBlogCount } from '~/queries/blog';

const { data: posts } = await useSanityQuery(qryBlogCount)
</script>

<template>
  <div class="sidebar-item categories">
    <h3 class="sidebar-title">
      Collections
    </h3>
    <!-- <pre>{{ postCollectionNavigation }}</pre> -->
    <ul class="mt-2 ps-3">
      <li v-for="item in posts" :key="item._id">
        <template v-if="item.posts > 0">

          <NuxtLink :to="`/blog/collections/${item.slug}`">
            {{ item.title }}
          </NuxtLink>&nbsp;&nbsp;
          (<span style="font-size: 0.85rem;">{{ item.posts }}</span>)

        </template>
      </li>
    </ul>
    <!-- <template>
      <NuxtLink v-if="item.route" v-slot="{ href, navigate }" :to="item.route">
        <a v-ripple class="flex items-center cursor-pointer text-surface-700 dark:text-surface-0 px-4 py-2" :href="href"
          @click="navigate">
          <iconify-icon :icon="item.icon"></iconify-icon>
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </NuxtLink>
      <a v-else v-ripple class="flex items-center cursor-pointer text-surface-700 dark:text-surface-0 px-4 py-2"
        :href="item.url" :target="item.target">
        <span :class="item.icon" />
        <span class="ml-2">{{ item.label }}</span>
        <span v-if="item.items" class="pi pi-angle-down text-primary ml-auto" />
      </a>
    </template> -->
  </div>
</template>
<style scoped>
.sidebar-title {
  font-size: 22px;
  font-weight: 400;
  padding: 0;
  margin: 0;
  color: var(--color-secondary);
}

.sidebar-item+.sidebar-item {
  margin-top: 40px;
}



.categories ul {
  list-style: none;
  padding: 0;
}

.categories ul li+li {
  padding-top: 10px;
}

.categories ul a {
  color: var(--color-secondary);
  font-size: 15px;
}

.categories ul a:hover {
  color: var(--color-default);
}

.categories ul a span {
  padding-left: 5px;
  color: rgba(var(--color-default-rgb), 0.4);
  font-size: 14px;
}

.recent-posts .post-item {
  display: flex;
  box-shadow: 0px 0 15px rgba(0, 0, 0, 0.08);
  padding: 20px;
}

.recent-posts .post-item+.post-item {
  margin-top: 15px;
}

.recent-posts img {
  width: 80px;
  margin-right: 15px;
}

.recent-posts h4 {
  font-size: 18px;
  font-weight: 400;
}

.recent-posts h4 a {
  color: var(--color-secondary);
  transition: 0.3s;
}

.recent-posts h4 a:hover {
  color: var(--color-primary);
}

.recent-posts time {
  display: block;
  font-style: italic;
  font-size: 14px;
  color: rgba(var(--color-default-rgb), 0.4);
}

.tags {
  margin-bottom: -10px;
}

.tags ul {
  list-style: none;
  padding: 0;
}

.tags ul li {
  display: inline-block;
}

.tags ul a {
  color: #38618e;
  font-size: 14px;
  padding: 6px 14px;
  margin: 0 6px 8px 0;
  border: 1px solid rgba(27, 47, 69, 0.15);
  display: inline-block;
  border-radius: 50px;
  transition: 0.3s;
}

.tags ul a:hover {
  color: #fff;
  border: 1px solid var(--color-primary);
  background: var(--color-primary);
}

.tags ul a span {
  padding-left: 5px;
  color: rgba(27, 47, 69, 0.8);
  font-size: 14px;
}
</style>
