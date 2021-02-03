<template>
  <v-main>
    <v-container v-show="items.length != 0" v-for="item in items" :key="item.id">
      <v-card @click="godetail(item.product_uuid)">
        <v-card-text class="d-flex justify-space-between">
          <div class="ml-6">
            <div>Name: {{ item.product.name }}</div>
            <div>count:{{ item.number }}</div>
          </div>
          <v-btn class="mr-6" @click.stop="ditem(item.id)">delete</v-btn>
        </v-card-text>
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
