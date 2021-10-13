<template>
  <div>
    <PatchMeta />
    <EblogTopBar/>
          <div class="layout-main">
              <Suspense >
          <template #default>
            <div class="layout-main-container">
                          <Sidebar/>
                          <div :style="{ 'margin-left': sidebarWidth }">
            <router-view />
                          </div>
            </div>
          </template>
          <template #fallback>
            <Loader />
          </template>
        </Suspense>
   </div>
    <Footer />
  </div>
</template>

<script lang="">
import { defineComponent, inject } from 'vue'
import PatchMeta from './components/PatchMeta.vue'
import EblogTopBar from './components/Elfinos1Topbar.vue'
import Loader from '@/components/Loader.vue'

import Footer from '@/components/Footer.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'github-markdown-css/github-markdown.css'

import '@fortawesome/fontawesome-free/js/all'
import Sidebar from './components/Elfinos2Sidebar.vue'
import { sidebarWidth } from './components/state'

export default defineComponent({
  components: {
    PatchMeta,
    EblogTopBar,
    Sidebar,
    Loader,
    Footer
  },
  setup () {
    const blogSections = inject('blogSections', {})
    return { blogSections, sidebarWidth }
  }
})
</script>

<style lang="scss" >
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