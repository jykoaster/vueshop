<template>
  <div>
    <v-container>
      <v-card flat class="d-sm-flex justify-center">
        <v-card style="width:500px">
          <v-img lazy-src :src="src" />
        </v-card>
        <v-card style="width:500px">
          <div class="pt-10">
            <v-card-title>{{ name }}</v-card-title>
            <v-card-subtitle>Item Detail</v-card-subtitle>
            <v-card-text>Some amazing function</v-card-text>
          </div>
          <div class="d-flex mt-10 justify-center align-self-end">
            <v-btn @click="addcart()">add to cart</v-btn>
            <v-btn @click="back()" class="ml-2">back</v-btn>
          </div>
        </v-card>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    src: null,
    id: null,
    name: null,
  }),
  mounted: function() {
    this.$data.id = this.$route.query.id
    this.$data.src = this.$route.query.src
    this.$data.name = this.$route.query.name
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    addcart() {
      this.$store.dispatch('cart/additems', this.$data)
      alert('add success!')
    },
  },
}
</script>
