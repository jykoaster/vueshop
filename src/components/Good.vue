<template>
  <v-container>
    <div class="text-h6">{{ route }}</div>
    <v-row class="justify-center">
      <v-col class="ma-md-10" cols="md-4">
        <v-img lazy-src :src="src" />
      </v-col>
      <v-col class="ma-md-10">
        <v-col>
          <v-card-title class="text-h3 font-weight-medium mb-5">{{ item.name }}</v-card-title>
          <v-card-subtitle>{{ item.detail }}</v-card-subtitle>
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
        <v-col class="mt-10" cols="8">
          <v-btn text block outlined tile class="mb-5" @click="addcart()">add to cart</v-btn>
          <v-btn text block outlined tile @click="back()">back</v-btn>
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
    id: null,
    name: null,
    route: '',
  }),
  mounted: function() {
    // this.$data.id = this.$route.query.id
    // this.$data.src = this.$route.query.src
    // this.$data.name = this.$route.query.name
    this.$store.dispatch('items/getitemdetail', this.$route.query.id)
    this.src = this.$store.state.items.detail.src[0]
    this.route = this.$route.query.route + '/' + this.$store.state.items.detail.name
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    addcart() {
      this.$store.dispatch('cart/additems', this.$data)
      alert('add success!')
    },
    changeimg(src) {
      this.src = src
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
