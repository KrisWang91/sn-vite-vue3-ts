<template>
  <van-tabbar v-model="active" active-color="#129456">
    <van-tabbar-item icon="location-o">地图</van-tabbar-item>
    <van-tabbar-item icon="friends-o">客户</van-tabbar-item>
    <van-tabbar-item icon="chart-trending-o">视图</van-tabbar-item>
    <van-tabbar-item icon="user-circle-o" badge="20">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive } from 'vue'

interface State {
  active: number
}

export default defineComponent({
  name: 'TabBarItem',
  setup() {
    const state = reactive<State>({
      active: 0,
    })

    return {
      ...toRefs(state),
    }
  },
})
</script>

<style scoped lang="scss">
</style>