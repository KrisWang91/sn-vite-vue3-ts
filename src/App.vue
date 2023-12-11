<template>
  <NavBar />
  <RouterView />
  <TabBar />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import TabBar from '@/components/TabBar.vue'
import NavBar from '@/components/NavBar.vue'

export default defineComponent({
  components: { TabBar, NavBar },
})
</script>

