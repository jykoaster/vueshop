<template>
  <v-container id="shoppage">
    <div v-show="cards.length != 0">
      <v-row class="justify-center mb-5">
        <v-col v-for="(card, a) in cards.data" :key="a" cols="12" sm="6" md="3">
          <v-hover v-slot:default="{ hover }">
            <v-card flat tile color="black" :elevation="hover ? 5 : 0" @click="godetail(card.uuid)">
              <v-img v-if="card.image == null" height="300px" :src="require(`../assets/images/defaultitem.png`)" />
              <v-img v-if="card.image != null" height="300px" :src="'//18.216.206.131:8090/storage/' + card.image" />
              <v-card-actions class="white justify-center d-block">
                <v-card-text class="pt-2 pb-2" block v-text="card.name"></v-card-text>
                <v-card-text class="pt-2 pb-2 priceoff">特價{{ card.price }}</v-card-text>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <div class="text-center">
        <v-pagination v-model="page" :length="cards.last_page" v-on:click.native="changepage()"></v-pagination>
      </div>
    </div>
    <v-row v-show="cards.length == 0">
      <v-col>{{ message }}</v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    message: '沒有符合條件的商品',
    cateid: '',
    page: 1,
  }),
  mounted: function () {
    this.page = this.$store.state.items.page
  },
  computed: {
    ...mapState({
      cards: (state) => {
        return state.items.search
      },
    }),
  },
  methods: {
    async changepage() {
      let res = this.cards.links.find((element) => {
        if (element.label == this.page) {
          return element
        }
      })
      let url = res.url.match(/\/api.*/)
      let param = {
        url: url[0],
        page: this.page,
      }
      await this.$store.dispatch('items/changepage', param)
      this.$router.push('/shop').catch(() => {})
    },
    async godetail(id) {
      await this.$store.dispatch('items/getitemdetail', id)
      this.$router.push('/goods')
    },
  },
}
</script>
