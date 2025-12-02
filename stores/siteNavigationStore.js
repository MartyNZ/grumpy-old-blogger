import {
  qrySiteNavigation,
} from "~/queries/siteSettings";
export const useSiteNavigationStore = defineStore("navigation", {
  state: () => {
    return {
      mainNavigation: {},
      footerNavigation: {},
      mobileNavigation: {},
      otherNavigation: [],
    };
  },
  actions: {
    async fetchStoreNavigation() {
      try {
        const { data: siteNav } = await useSanityQuery(qrySiteNavigation);
        // console.log('siteNav from store:', JSON.stringify(siteNav.value, null, 2));
        const navData = siteNav.value || {}; // Fallback for the entire result
        this.mainNavigation = navData.mainNav || {};
        this.footerNavigation = navData.footerNav || {};
        this.mobileNavigation = navData.mobileNav || {};
        this.otherNavigation = navData.otherNav || [];
      } catch (error) {
        console.error("An error occurred while fetching site navigation:", error);
        // Set default empty state to prevent crashes
        this.mainNavigation = {};
        this.footerNavigation = {};
        this.mobileNavigation = {};
        this.otherNavigation = [];
      }
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useSiteNavigationStore, import.meta.hot)
  );
}
