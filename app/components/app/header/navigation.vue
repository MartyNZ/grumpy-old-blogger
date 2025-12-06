<script setup>
const route = useRoute();
const fullPath = route.fullPath;
const slug = route.params.slug
const data = useSiteNavigationStore();
const mainNav = data.navigation.mainNav;
// console.log("Full Path: ", fullPath, " | Slug: ", slug);
// console.log(JSON.stringify(mainNav, null, 2));
</script>
<template>
  <nav id="navbar" class="navbar">
    <ul>
      <li v-for="link in mainNav.navigationLinks" :key="link._key">
        <template v-if="link.linkType === 'int'">
          <a :href="`/${link.internalLink.reference.slug}`"
            :class="{ 'active': `/${link.internalLink.reference.slug}` === fullPath }">{{
              link.internalLink.reference.title }}
          </a>
        </template>
        <template v-if="link.linkType === 'ext'">
          <a :href="link.externalLink.url" target="_blank">{{ link.name }}
          </a>
        </template>
        <template v-if="link.linkType === 'anc'">
          <a :href="`/${link.anchorLink.page.slug}#${link.anchorLink.anchor}`"
            :class="{ 'active': `/${link.anchorLink.page.slug}` === fullPath }">{{ link.name }}
          </a>
        </template>
      </li>
    </ul>
  </nav>
</template>
