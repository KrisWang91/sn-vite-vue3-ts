<template>
  <div id="map"></div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
// 地图
import AMapLoader from '@amap/amap-jsapi-loader'

export default defineComponent({
  name: 'MapItem',
  setup() {
    const map = ref({})

    const initMap = async () => {
      AMapLoader.load({
        key: '739e1770373940cfe578c553f32bb5e9', // 你的高德地图key
        version: '2.0',
        plugins: ['AMap.Marker', 'AMap.Geocoder'],
      })
        .then((AMap: any) => {
          map.value = new AMap.Map('map', {
            viewMode: '3D', // 是否为3D地图模式
            zoom: 15, // 初始化地图级别
            resizeEnable: true, // 是否监控地图容器尺寸变化
            center: [116.308809, 39.825178], // 初始化地图中心点位置
            showMarker: true, // 定位成功后在定位到的位置显示点标记，默认：true
          })

          // 添加标记
          const marker = new AMap.Marker({
            position: [116.308809, 39.825178],
            icon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_bs.png',
            draggable: true,
            // map: map.value,
          })
          map.value.add(marker)

          marker.on('click', (event: any) => {
            console.log(111)
          })

          marker.off('click')
        })
        .catch((e: object) => {
          console.log(e)
        })
    }

    onMounted(() => {
      initMap() // 初始化地图
    })
    return {}
  },
})
</script>

<style scoped lang="scss">
#map {
  height: 100%;
  width: 100%;
}
</style>