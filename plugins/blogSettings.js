/* get global page data on start */
export default defineNuxtPlugin(async (nuxtApp) => {
  const blogCollectionNavigation = useBlogCollectionNavigationStore();
  await blogCollectionNavigation.fetchBlogCollectionNavigation();
  nuxtApp.provide("blogCollectionNavigation", blogCollectionNavigation);
});
