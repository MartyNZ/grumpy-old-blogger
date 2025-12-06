/* get global page data on start */
export default defineNuxtPlugin(async (nuxtApp) => {
  try {
    const blogCollectionNavigation = useBlogCollectionNavigationStore();
    await blogCollectionNavigation.fetchBlogCollectionNavigation();
    nuxtApp.provide("blogCollectionNavigation", blogCollectionNavigation);
  } catch (error) {
    console.error("Error during blog settings plugin execution:", error);
  }
});
