<template>
  <PatchMeta />
  <!-- <NavBar
    :title="'📝 vue3-md-blog'"
    :sections="blogSections"
  /> -->
  <div>
  <EblogTopBar/>
          <div class="layout-main-container">
          <div class="layout-main">
  <!-- <Suspense>
    <template #default>
      <router-view />
    </template>
    <template #fallback>
      <Loader />
    </template>
  </Suspense> -->
  <router-view />
  </div>
  </div>
  <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import PatchMeta from './components/PatchMeta.vue'
import EblogTopBar from './components/Elfinos1Topbar.vue'
import Loader from '@/components/Loader.vue'
// import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'github-markdown-css/github-markdown.css'

export default defineComponent({
  components: {
    PatchMeta,
    EblogTopBar,
    Loader,
    // NavBar,
    Footer
  },
  setup () {
    const blogSections = inject('blogSections', {})
    return { blogSections }
  }
})
</script>

<style>
.layout-main-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;
    padding: 7rem 2rem 2rem 4rem;
    /* transition: margin-left $transitionDuration; */
    background-color: #f3eff9;
}

.layout-main {
    flex: 1 1 auto;
}

</style>