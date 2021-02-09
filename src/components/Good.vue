<template>
  <v-container id="goodpage">
    <div class="text-h6">{{ route }}</div>
    <v-row class="justify-center">
      <v-col class="ma-md-10" md="4" cols="12">
        <v-img height="100%" :src="require(`../assets/images/home_area5_1.png`)" />
      </v-col>
      <v-col class="ma-md-10">
        <v-col>
          <v-card-title class="text-h3 font-weight-medium mb-5">{{ item.name }}</v-card-title>
          <v-card-subtitle class="mt-5">{{ item.description }}</v-card-subtitle>
          <div>
            <v-card-text class="text-decoration-line-through">原價:{{ item.suggested_price }}</v-card-text>
            <v-card-text class="pt-0">特價:{{ item.price }}</v-card-text>
          </div>
          <v-col class="d-flex" cols="3">
            <v-btn outlined tile icon height="56" @click="chcount('decrease')">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <input v-model="count" />
            <v-btn outlined tile icon height="56" @click="chcount('add')">
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-col>
        </v-col>
        <v-col class="d-flex">
          <v-img
            v-for="(img, index) in item.src"
            :key="index"
            class="roundimg mr-2"
            max-height="50"
            max-width="50"
            :src="img"
            @click="changeimg(img)"
          />
        </v-col>
        <v-col class="mt-10  d-md-flex" md="8" cols="12" id="itemevent">
          <v-btn text outlined tile class="mr-5 mb-5" @click="addcart(item.uuid)">加入購物車</v-btn>
          <v-btn text outlined tile @click="back">立即購買</v-btn>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    src: null,
    // id: null,
    name: null,
    count: 1,
    route: '',
  }),
  methods: {
    back() {
      this.$router.go(-1)
    },
    addcart(id) {
      let param = {
        id: id,
        count: this.count,
      }
      this.$store.dispatch('cart/additems', param)
    },
    changeimg(src) {
      this.src = src
    },
    chcount(event) {
      if (event == 'add') {
        this.count++
      } else if (event == 'decrease' && this.count > 1) {
        this.count--
      }
    },
  },
  computed: {
    ...mapState({
      item: (state) => {
        return state.items.detail
      },
    }),
  },
}
</script>
