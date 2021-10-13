<template>
	<div class="layout-footer">
    <!-- <img alt="Logo" :src="darkTheme ? 'images/logo-dark.svg' : 'images/logo-white.svg'" height="20" class="mr-2" /> -->
    This is
    <span class="font-medium ml-2">Hailey</span>
  </div>
</template>

<script>
	export default {
		name: "Footer",
		computed: {
    // darkTheme() {
		// 		return this.$appState.theme.startsWith('saga');
		// 	}
		}
	}
</script>

<style scoped>
.layout-footer {
    transition: margin-left $transitionDuration;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;
    border-top: 1px solid var(--surface-border);
}
</style>