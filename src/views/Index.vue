<template>
  <div class="container">
    <MapItem />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import MapItem from '@/components/MapContainer.vue'
import { useStore } from 'vuex'
import { key } from '../store'

interface State {
  title: string
  tabActive: number
}
export default defineComponent({
  name: 'Index',
  components: {
    MapItem,
  },
  setup() {
    // 绑定属性
    const state = reactive<State>({
      title: '三农营销地图',
      tabActive: 0,
    })

    // store
    const store = useStore(key)
    store.commit('changeNavTitle', state.title)
    store.commit('changeTabActive', state.tabActive)

    return {
      ...toRefs(state),
    }
  },
})
</script>

<style lang="scss" scoped>
</style>