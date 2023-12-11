<template>
  <div>
    <van-sticky>
      <!-- 工具栏 -->
      <van-nav-bar
        :title="title"
        left-arrow
        @click-left="methods.onClickLeft"
        @click-right="methods.onClickRight"
      >
        <template #right>
          <van-icon name="more-o" size="20" />
        </template>
      </van-nav-bar>
      <!-- 搜索框 -->
      <van-search
        v-model="searchValue"
        placeholder="按客户姓名或手机号进行模糊搜索"
        @search="methods.onSearch"
      />
      <!-- 筛选 -->
      <DropDownMenuItem />
    </van-sticky>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import { key } from '../store'
import DropDownMenuItem from '@/components/DropDownMenu.vue'

interface State {
  title: string
  searchValue: string
}

interface Methods {
  onClickLeft: () => void
  onClickRight: () => void
  onSearch: () => void
}

export default defineComponent({
  name: 'NavBarItem',
  components: {
    DropDownMenuItem,
  },
  setup() {
    const store = useStore(key)

    const state = reactive<State>({
      title: '',
      searchValue: '',
    })
    state.title = store.state.navTitle

    const methods: Methods = {
      // 返回上一级页面
      onClickLeft() {},
      // 点击搜索
      onClickRight() {},
      // 搜索
      onSearch() {
        console.log(state)
      },
    }
    return {
      ...toRefs(state),
      methods,
    }
  },
})
</script>

<style scoped lang="scss">
</style>