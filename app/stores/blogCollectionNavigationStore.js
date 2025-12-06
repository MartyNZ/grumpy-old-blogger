import { qryBlogCollectionNavigation } from "~~/app/queries/blog";
export const useBlogCollectionNavigationStore = defineStore(
  "blog-collection-navigation",
  {
    state: () => {
      return {
        blogCollectionNavigation: {},
      };
    },
    actions: {
      async fetchBlogCollectionNavigation() {
        const { data } = await useSanityQuery(qryBlogCollectionNavigation);
        this.blogCollectionNavigation = data.value;
        // console.log(
        //   "Collection Navigation Store: ",
        //   JSON.stringify(data.value, null, 2),
        // );
      },
    },
  },
);

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useBlogCollectionNavigationStore, import.meta.hot),
  );
}
