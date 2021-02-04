<template>
  <v-card flat tile>
    <v-container fluid v-show="cards[0] != 'nores'">
      <v-subheader>item route...</v-subheader>
      <v-row class="justify-center mb-5">
        <v-col v-for="(card, a) in cards.data" :key="a" cols="12" sm="6" md="3">
          <v-hover v-slot:default="{ hover }">
            <v-card tile color="black" :elevation="hover ? 24 : 2" @click="godetail(card.uuid)">
              <v-img height="300px" :src="card.src"> </v-img>
              <v-card-actions class="white justify-center d-block">
                <v-card-text class="pt-2 pb-2" block v-text="card.name"></v-card-text>
                <v-card-text class="pt-2 pb-2 price">特價{{ card.price }}</v-card-text>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <div class="text-center">
        <v-pagination v-model="page" :length="cards.last_page" v-on:click.native="changepage()"></v-pagination>
      </div>
    </v-container>
    <v-container v-show="cards[0] == 'nores'">
      no search items
    </v-container>
  </v-card>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    cateid: '',
    page: 1,
  }),
  mounted: function() {
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
      let param = {
        id: this.$store.state.items.cateid,
        page: this.page,
      }
      await this.$store.dispatch('items/getitems', param)
      this.$router.push('/shop').catch(() => {})
    },
    async godetail(id) {
      await this.$store.dispatch('items/getitemdetail', id)
      this.$router.push('/goods')
    },
  },
}
</script>
