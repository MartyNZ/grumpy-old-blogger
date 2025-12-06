<script setup>
const data = useSiteSettingsStore();
const settings = data.settings;
const navData = useSiteNavigationStore();
const navigation = navData.navigation;
// console.log("Settings: ", JSON.stringify(settings, null, 2))
// console.log("Navigation: ", JSON.stringify(navigation, null, 2))
const footerNav = navigation.footerNav;
const otherNav = navigation.otherNav

</script>

<template>
  <footer id="footer" class="footer">

    <div class="footer-content">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-5 col-md-12 footer-info">
            <a href="/" class="logo d-flex align-items-center">
              <span>{{ settings.title }}</span>
            </a>
            <p>{{ settings.description }}</p>
            <div class="social-links d-flex  mt-3">
              <template v-for="c in settings.primaryLocation.socialConnections" :key="c._key">
                <NuxtLink :to="c.url">
                  <Icon :name="`fa:${c._type}`" />
                </NuxtLink>
              </template>
            </div>
          </div>

          <div class="col-lg-2 col-6 footer-links">
            <h4>{{ footerNav.name }}</h4>
            <ul>
              <ul>
                <li v-for="link in footerNav.navigationLinks" :key="link._key">
                  <template v-if="link.linkType === 'int'">
                    <NuxtLink :to="`/${link.internalLink.reference.slug}`">{{ link.internalLink.reference.title }}
                    </NuxtLink>
                  </template>
                  <template v-if="link.linkType === 'ext'">
                    <NuxtLink :to="link.externalLink.url" target="_blank">{{ link.name }}
                    </NuxtLink>
                  </template>
                  <template v-if="link.linkType === 'anc'">
                    <NuxtLink :to="`/${link.anchorLink.page.slug}#${link.anchorLink.anchor}`">{{ link.name }}</NuxtLink>
                  </template>
                </li>
              </ul>
            </ul>
          </div>

          <div class="col-lg-2 col-6 footer-links">
            <h4>{{ otherNav.name }}</h4>
            <ul>
              <li v-for="link in otherNav.navigationLinks" :key="link._key">
                <template v-if="link.linkType === 'int'">
                  <NuxtLink :to="`/${link.internalLink.reference.slug}`">{{ link.internalLink.reference.title }}
                  </NuxtLink>
                </template>
                <template v-if="link.linkType === 'ext'">
                  <NuxtLink :to="link.externalLink.url" target="_blank">{{ link.name }}
                  </NuxtLink>
                </template>
                <template v-if="link.linkType === 'anc'">
                  <NuxtLink :to="`/${link.anchorLink.page.slug}#${link.anchorLink.anchor}`">{{ link.name }}</NuxtLink>
                </template>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>
              {{ settings.address }} <br>
              {{ settings.addressExt }} <br />
              {{ settings.city }}, {{ settings.state }} {{ settings.postcode }}<br>
              {{ settings.country }} <br><br>
              <strong>Phone:</strong> <span v-for="(p, index) in settings.primaryLocation.phoneNumbers" :key="index">
                {{ p.number }}<br></span>
              <strong>Email:</strong> {{ settings.email }}<br>
            </p>

          </div>

        </div>
      </div>
    </div>

    <div class="footer-legal">
      <div class="container">
        <div class="copyright">
          &copy; Copyright <strong><span>{{ settings.siteOwner }}</span></strong>. All Rights Reserved
        </div>

      </div>
    </div>
  </footer>
</template>
