<script setup>
import { qryPortfolioItem } from '~/queries/porfolio'
const route = useRoute();
const slug = route.params.slug;

const { data: item } = await useSanityQuery(qryPortfolioItem, {
  slug: slug
})

useSeoMeta({
  title: item.value.title,
  ogTitle: item.value.title,
  description: item.value.summary,
  ogDescription: item.value.summary,
  ogImage: item.value.images[0].url,
  twitterTitle: item.value.title,
  twitterDescription: item.value.summary,
  twitterImage: item.value.images[0].url,
  twitterCard: "summary_large_image",
});

definePageMeta({
  layout: 'false'
})
</script>
<template>
  <NuxtLayout name="internal">
    <template #breadcrumb>
      <AppBreadcrumb :image="item.images[0]" />
    </template>

    <template #default>
      <section id="portfolio-details" class="portfolio-details">
        <div class="container" data-aos="fade-up">

          <div class="row gy-4">

            <div class="col-lg-8">
              <div class="slides-1 portfolio-details-slider swiper">
                <LazyClientOnly>
                  <Swiper :modules="[SwiperNavigation, SwiperPagination]" :navigation="{ enabled: true }"
                    :pagination="{ dynamicBullets: true, clickable: true }">
                    <template v-for="image in item.images" :key="image.assetId">
                      <SwiperSlide>
                        <SanityImage :asset-id="image.assetId" :w="640" :alt="item.title" />
                      </SwiperSlide>
                    </template>

                  </Swiper>
                  </LazyClientOnly>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li><strong>Category</strong>: {{ item.category.title }}</li>
                  <li><strong>Client</strong>: {{ item.client.name }}</li>
                  <li><strong>Project date</strong>: {{ item.completionDate }}</li>
                  <li><strong>Project URL</strong>: <NuxtLink :to="item.url" target="_blank">{{ item.url }}</NuxtLink>
                  </li>
                </ul>
              </div>
              <div class="portfolio-description">
                <h2>{{ item.title }}</h2>
                <p>{{ item.summary }}</p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </template>
  </NuxtLayout>
</template>
