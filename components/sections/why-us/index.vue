<script setup>
const props = defineProps({
  id: {
    type: String
  }
})

// Using the guaranteed root alias for the import path
import { qryWhyUsById } from '~/queries/sections.js'

const { data: whyUs } = await useSanityQuery(qryWhyUsById, {
  id: props.id
})
</script>

<template>
  <section id="why-us" class="why-us">
    <div class="container" data-aos="fade-up">

      <div v-if="whyUs" class="section-header">
        <h2>{{ whyUs.title }}</h2>
      </div>

      <!-- Ensure the data we need exists before rendering the row -->
      <div v-if="whyUs?.reasons?.length && whyUs?.image?.asset?.url" class="row g-0" data-aos="fade-up"
        data-aos-delay="200">

        <!-- Use the correct data path for the background image -->
        <div class="col-xl-5 img-bg" :style="{ backgroundImage: `url(${whyUs.image.asset.url})` }"></div>

        <div class="col-xl-7 position-relative">

          <!-- MANUAL BOOTSTRAP CAROUSEL -->
          <!-- We are not using the broken <Carousel> component -->
          <div id="whyUsCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">

            <!-- Indicators -->
            <div class="carousel-indicators">
              <button v-for="(reason, index) in whyUs.reasons" :key="`${reason._key}-indicator`" type="button"
                data-bs-target="#whyUsCarousel" :data-bs-slide-to="index" :class="{ active: index === 0 }"></button>
            </div>

            <!-- Inner container for slides -->
            <div class="carousel-inner">
              <div v-for="(reason, index) in whyUs.reasons" :key="reason._key" class="carousel-item"
                :class="{ active: index === 0 }">
                <!-- This is the actual content of each slide -->
                <div class="item">
                  <h3 class="mb-3">{{ reason.title }}</h3>
                  <h4 class="mb-3">{{ reason.subTitle }}</h4>
                  <p>{{ reason.summary }}</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css">
/* Your existing styles are correct */
.why-us {
  padding-bottom: 0;
}

.why-us .img-bg {
  min-height: 500px;
  background-size: cover;
}

.why-us .position-relative {
  min-height: 500px;
  display: flex;
  align-items: center;
}

/* These styles target the manual carousel structure */
.why-us .carousel {
  width: 100%;
}

.why-us .carousel-item {
  padding: 80px;
  /* Add a default transition for the fade effect */
  transition: opacity .6s ease-in-out;
}

/* CRITICAL: Bootstrap hides inactive carousel items.
The `.active` class makes the first one visible. */
.why-us .carousel-item.active {
  display: block;
}

.why-us h3 {
  font-size: 24px;
  font-weight: 700;
  color: var(--color-secondary);
}

.why-us h4 {
  font-size: 18px;
  font-weight: 400;
  color: #29486a;
  font-family: var(--font-secondary);
}

.why-us .carousel-indicators {
  position: relative;
  bottom: auto;
  left: auto;
  margin: 0;
  justify-content: flex-start;
  padding: 0 80px 30px;
}

.why-us .carousel-indicators button {
  background-color: var(--color-secondary);
}

.why-us .carousel-indicators .active {
  background-color: var(--color-primary);
}
</style>
