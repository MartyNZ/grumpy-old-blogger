<script setup>

const props = defineProps({
  number: {
    type: String,
    default: 3,
    required: true
  }
})
const { data: posts } = await useSanityQuery(`  *[_type == "post" && draft != true && dateTime(now()) > dateTime(publishedDate + "T00:00:00Z")]{
    _id,
    title,
    'slug': slug.current,
    image{
    'url': asset->url,
    "assetId":asset->_id
    },
    'excerpt': array::join(string::split(pt::text(body), "")[0...175], "") + "...",
    publishedDate,
    category->{
      _id,
      name,
      'slug':slug.current,
      'postCount':count(*[_type == 'post' && references(^._id)])
    },
    tags[]->{
      _id,
      tag,
      'slug':slug.current
    },
    authors[]->{
      _id,
      'slug':slug.current,
      'name':firstName + ' ' + lastName,
      image{'assetId':asset->_id,'url':asset->url},
    },
  } | order(publishedDate desc)[0...${props.number}]`);
</script>
<template v-if="posts">
  <section id="latest-posts" class="mb-3">
    <h3>Latest Posts</h3>

    <div id="posts-grid" data-aos="fade-up">
      <template v-for="post in posts" :key="post._id">
        <!-- <div class="container">
          <pre>{{ post.title }}</pre>
        </div> -->
        <lazy-blog-summary-card :post="post" />
      </template>
    </div>

  </section>
</template>

<style>
#latest-posts {
  container-type: inline-size;
  margin-bottom: 1.5em;
}

#posts-grid {
  display: grid;
  gap: 1.5em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
  container-type: inline-size;

  @container(width >=calc(100px * 2 + 1rem)) {}
}

@container (width > 530px) {
  #posts-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 0.5fr));
  }
}

.zoom:hover img {
  transform: scale(1.1);
}

.transition {
  transition: all 0.3s ease-in-out;
}

.bg-opacity-15 {
  background-color: rgba(255, 255, 255, 0.15) !important;
}

.object-fit-cover {
  object-fit: cover;
}
</style>
