<template>
  <van-dropdown-menu active-color="#129456">
    <div v-for="(item, index) in state.option" :key="index">
      <van-dropdown-item
        v-model="item['name']"
        :title="item['title']"
        ref="itemRef"
      >
        <div class="drop-content">
          <p class="title">{{ item['title'] }}</p>
          <van-tag
            v-for="(tag, idx) in item['tags']"
            :key="idx"
            plain
            type="primary"
            @click="methods.tagClick(item, idx)"
            :class="item['active'] == idx ? 'tag active' : 'tag'"
            >{{ tag['text'] }}</van-tag
          >

          <div class="popup-btns">
            <van-button
              class="btn reset-btn"
              type="primary"
              small
              @click="methods.onConfirm"
            >
              重置
            </van-button>
            <van-button
              class="btn confirm-btn"
              type="primary"
              small
              @click="methods.onConfirm"
            >
              确认
            </van-button>
          </div>
        </div>
      </van-dropdown-item>
    </div>
  </van-dropdown-menu>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

interface State {
  option: unknown
  distance: string
  marketing: string
}

const option = [
  {
    title: '附近',
    active: '0',
    name: 'distance',
    tags: [
      { text: '全部', value: '0' },
      { text: '1km', value: '1' },
      { text: '2km', value: '2' },
      { text: '3km', value: '3' },
      { text: '4km', value: '4' },
      { text: '5km', value: '5' },
    ],
  },
  {
    title: '触达',
    active: '1',
    name: 'marketing',
    tags: [
      { text: '全部', value: '0' },
      { text: '已营销', value: '1' },
      { text: '未营销', value: '2' },
    ],
  },
]

interface Methods {
  onConfirm: () => void
  tagClick: (item: object, idx: string) => void
}

export default defineComponent({
  name: 'DropDownItem',
  setup() {
    const state = reactive<State>({
      option,
      distance: '',
      marketing: '',
    })

    state.distance = option[0].active
    state.marketing = option[1].active

    const methods: Methods = {
      onConfirm: () => {},
      tagClick: (item, idx) => {
        item['active'] = idx
        console.log(item, idx)
      },
    }
    return {
      state,
      methods,
    }
  },
})
</script>

<style scoped lang="scss">
.drop-content {
  padding: 15px;
}
.title {
  font-size: var(--van-font-size-md);
  margin-bottom: 8px;
}
.tag {
  padding: 3px 10px;
  margin-right: 12px;
  color: #129456;
  border-color: #129456;
}
.tag.active {
  color: #fff;
  background-color: #129456;
}
.popup-btns {
  margin-top: 20px;
}
</style>