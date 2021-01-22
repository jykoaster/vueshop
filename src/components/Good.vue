<template>
  <v-container>
    <div class="text-h6">item category....</div>
    <v-row class="justify-center">
      <v-col class="ma-md-10" cols="md-4">
        <v-img lazy-src :src="src" />
      </v-col>
      <v-col class="ma-md-10">
        <v-col>
          <v-card-title class="text-h3 font-weight-medium mb-5">{{ name }}</v-card-title>
          <v-card-subtitle>Item Detail</v-card-subtitle>
          <v-card-text>Some amazing function</v-card-text>
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
