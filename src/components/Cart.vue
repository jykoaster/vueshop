<template>
  <v-main id="cart">
    <v-container>
      <h1>購物車</h1>
      <v-row class="d-block d-md-flex">
        <v-col cols="8" v-if="items.data.length == 0">{{ message }}</v-col>
        <v-col cols="12" md="9">
          <transition-group leave-active-class="animate__animated animate__fadeOutLeft">
            <v-card
              class="d-block d-md-flex mb-2"
              v-for="item in items.data"
              :key="item.id"
              flat
              tile
              @click="godetail(item.product_uuid)"
            >
              <v-col cols="12" md="4">
                <v-card-text class="text-align-center align-self-center"> {{ item.product.name }} </v-card-text>
              </v-col>
              <v-col cols="12" md="6" class="text-align-center d-flex">
                <v-card-text> 售價:{{ item.product.price }}</v-card-text>
                <v-card-text> 數量:{{ item.number }}</v-card-text>
              </v-col>
              <v-col cols="12" md="2">
                <v-card-actions>
                  <v-btn text tile class="mr-6 fadeOut" @click.stop="ditem(item.id)">刪除</v-btn>
                </v-card-actions>
              </v-col>
            </v-card>
          </transition-group>
        </v-col>
        <v-col cols="12" md="3">
          <v-card flat tile>
            <v-card-title>商品統計</v-card-title>

            <v-col>
              <v-card-text class="text-start"> 總數: {{ items.total.number }}</v-card-text>
              <v-card-text class="text-start"> 原價: {{ items.total.suggested_price }}</v-card-text>
              <v-card-text class="text-start priceoff">
                折扣: {{ items.total.price - items.total.suggested_price }}</v-card-text
              >
              <hr />
              <v-card-text class="text-start"> 總額: {{ items.total.price }}</v-card-text>
              <v-card-actions>
                <v-btn text tile class="mr-6" @click.stop="checkout">結帳</v-btn>
              </v-card-actions>
            </v-col>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    message: '目前沒有商品',
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
    checkout() {
      //...
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
