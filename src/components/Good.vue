<template>
  <div>
    <v-container class="d-flex justify-center mb-6">
      <v-card elevation="4" class="mt-2" width="50%">
        <v-img lazy-src :src="src" />
        <v-card-title>{{name}}</v-card-title>
        <v-card-subtitle>Item Detail</v-card-subtitle>
        <v-card-text>Some amazing function</v-card-text>
        <v-card-actions @click=" addcart()" class="justify-center">add to cart</v-card-actions>
        <v-card-actions @click="back()" class="justify-center">back</v-card-actions>
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
      this.$router.go(-1);
    },
    addcart() {
     this.$store.dispatch('cart/additems',this.$data)
      alert('add success!')
    },
  }
}
</script>