<template>
  <v-card flat tile>
    <v-container class="grey lighten-4" fluid v-show="cards[0] != 'nores'">
      <v-subheader>item route...</v-subheader>
      <v-row class="justify-center">
        <v-col v-for="(card, a) in cards.data" :key="a" cols="12" sm="6" md="3">
          <v-hover v-slot:default="{ hover }">
            <v-card color="black" :elevation="hover ? 24 : 6" @click="godetail(card.uuid)">
              <v-img height="300px" :src="card.src">
                <span class="headline white--text pl-4 pt-4 d-inline-block" v-text="card.name"></span>
              </v-img>

              <v-card-actions class="white justify-center">
                <v-card-text>特價{{ card.price }}</v-card-text>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <div class="text-center">
        <!-- <v-pagination v-model="cards.links" :length="cards.last_page" @click="changepage"></v-pagination> -->
        <v-btn v-for="(v, i) in cards.links" :key="i" @click="changepage(v.label)">{{ v.label }}</v-btn>
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
    socials: [
      {
        icon: 'mdi-facebook',
        color: 'indigo',
      },
      {
        icon: 'mdi-linkedin',
        color: 'cyan darken-1',
      },
      {
        icon: 'mdi-instagram',
        color: 'red lighten-3',
      },
    ],
    cateid: '',
  }),
  props: ['id'],
  computed: {
    ...mapState({
      cards: (state) => {
        return state.items.search
      },
    }),
  },
  methods: {
    changepage(page) {
      let param = {
        id: this.$store.state.items.cateid,
        page: page,
      }
      this.$store.dispatch('items/getitems', param)
    },
    async godetail(id) {
      await this.$store.dispatch('items/getitemdetail', id)
      this.$router.push('/goods')
    },
  },
}
</script>
