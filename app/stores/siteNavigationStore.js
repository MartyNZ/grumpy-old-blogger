import { qrySiteNavigation } from "~~/app/queries/siteSettings";
export const useSiteNavigationStore = defineStore("navigation", {
  state: () => {
    return {
      navigation: {},
    };
  },
  actions: {
    async fetchStoreNavigation() {
      const { data: siteNav } = await useSanityQuery(qrySiteNavigation);
      this.navigation = siteNav.value;
      // console.log(
      //   "Site Navigation Store",
      //   JSON.stringify(siteNav.value, null, 2)
      // );
      return this;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useSiteNavigationStore, import.meta.hot)
  );
}
