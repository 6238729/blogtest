<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="collapsed">
        <div>V</div>
        <div>S</div>
      </span>
      <span v-else>Vue Sidebar</span>
    </h1>

    <SidebarLink to="/main" icon="pi pi-home">Home</SidebarLink>
    <SidebarLink to="/" icon="pi pi-star-o">전체보기</SidebarLink>
    <SidebarLink to="/category1" icon="pi pi-moon">카테고리1</SidebarLink>
    <SidebarLink to="/category2" icon="pi pi-sun">카테고리2</SidebarLink>
    <SidebarLink to="/image" icon="pi pi-book">Images</SidebarLink>

    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<script>
import SidebarLink from './Elfinos3SidebarLink.vue'
import { collapsed, toggleSidebar, sidebarWidth } from './state'

export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  }
}
</script>


<style>
:root {
  --sidebar-bg-color: #7b61d1;
  --sidebar-item-hover: #2d2269;
  --sidebar-item-active: #582767;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 999;
  top: 7rem;
  left: 2rem;
  bottom: 2.4rem;
  padding: 1.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;

    border-top-left-radius: 12px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 12px;
}

.sidebar h1 {
  height: 2.5em;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  color: rgba(255, 255, 255, 0.7);

  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
