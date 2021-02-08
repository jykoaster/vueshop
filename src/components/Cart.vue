<template>
  <v-main id="cart">
    <v-container v-show="items.length != 0">
      <v-card class="d-flex mb-2" v-for="item in items" :key="item.id" flat tile @click="godetail(item.product_uuid)">
        <v-card-text class="text-align-center"> Name: {{ item.product.name }} </v-card-text>
        <v-card-text class="text-align-center"> count:{{ item.number }} </v-card-text>
        <v-cart-actions class="align-self-center">
          <v-btn text class="mr-6" @click.stop="ditem(item.id)">delete</v-btn>
        </v-cart-actions>
      </v-card>
    </v-container>
    <v-container v-show="items.length == 0">
      {{ message }}
    </v-container>
  </v-main>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    message: 'no items',
  }),
  mounted: function() {
    this.$store.dispatch('cart/getcartitems')
  },
  methods: {
    ditem(id) {
      this.$store.dispatch('cart/ditem', id)
    },
    async godetail(id) {
      await this.$store.dispatch('items/getitemdetail', id)
      this.$router.push('/goods')
    },
  },
  computed: {
    ...mapState({
      items: (state) => {
        return state.cart.cartitems
      },
    }),
  },
}
</script>
