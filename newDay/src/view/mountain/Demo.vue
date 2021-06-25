<!--
 * @Author: your name
 * @Date: 2021-01-26 15:25:14
 * @LastEditTime: 2021-06-15 17:12:44
 * @LastEditors: huz
 * @Description: In User Settings Edit
 * @FilePath: \vue_demo\src\components\HelloWorld.vue
-->
<template>
  <div>
    <div id="map"></div>
    <div class="btn">
      <el-form :model="user" :inline="true" :rules="rule">
        <el-form-item label="你的名字" prop="name">
          <el-input v-model="user.name" placeholder=""></el-input>
        </el-form-item>
        <!-- <el-form-item label="位置：">
          <el-input v-model="user.location" placeholder=""></el-input>
        </el-form-item> -->
        <el-button type="primary" @click="showDialog">选择头像</el-button>
        <el-button type="primary" @click="chosePosition()">选择位置</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
const mapboxgl = require("mapbox-gl");
var MapboxLanguage = require("@mapbox/mapbox-gl-language");
export default {
  name: "Demo",
  data() {
    return {
      user: {
        name: "",
        location: []
      },
      showMarker: true,
      marker: {},
      rule: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { max: 4, message: "长度不超过4个字符", trigger: "blur" }
        ]
      }
    };
  },
  mounted() {
    // 加载地图
    this.initmap();
  },

  methods: {
    showDialog() {
      
    },
    chosePosition() {
      const that = this;
      if (that.showMarker) {
        that.marker = new mapboxgl.Marker({
          draggable: true
        })
          .setLngLat([108, 37])
          .addTo(window.map);
      }

      that.showMarker = false;

      function onDragEnd() {
        var lngLat = that.marker.getLngLat();
        console.log("Longitude", lngLat.lng);
        console.log("Latitude", lngLat.lat);
        that.user.location = [lngLat.lng, lngLat.lat];
      }
      that.marker.on("dragend", onDragEnd);
    },
    initmap() {
      mapboxgl.accessToken =
        "pk.eyJ1Ijoiemh1MTIxMzgiLCJhIjoiY2trZG5zZ28yMDRqdzJ3bzU2eGQxNjU3cCJ9.mSwtLkCHXpcEIZZPxGoJog";
      var map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/zhu12138/ckp7wna0800vp18n43n05v104",
        zoom: 4,
        minZoom: 3,
        maxZoom: 9,
        center: [108, 37]
        // pitch: 40,
        // maxPitch: 50,
        // antialias: true
      });
      window.map = map;
      map.on("load", () => {
        // 绘制网点
        map.addSource("pointData", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: ["121.4692688", "31.2381763"]
                }
              }
            ]
          }
        });
        map.addLayer({
          id: "points",
          type: "symbol",
          source: "pointData",
          paint: {
            //   "circle-radius": 10,
            // "circle-radius": 3,
            // "circle-color": "red"
          },
          layout: {
            "icon-image": "sun",
            "icon-size": 1,
            "icon-allow-overlap": true,
            "icon-rotate": ["get", "degrees"]
            // 'icon-offset': [-10, 0]
          }
        });
      });
    }
  }
};
</script>

<style scoped>
#map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}
.btn {
  position: relative;
  padding: 20px;
  /* width: 90px;
  height: 20px; */
}
</style>
