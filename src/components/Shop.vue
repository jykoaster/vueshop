<template>
  <v-card flat tile>
    <v-container class="grey lighten-4" fluid v-show="cards[0]!='nores'">
      <v-subheader>{{ types }}</v-subheader>
      <v-row class="justify-center">
        <v-col v-for="(card,a) in cards" :key="a" cols="12" sm="6" md="3">
          <v-hover v-slot:default="{ hover }">
            <v-card color='black' :elevation="hover ? 24:6" :to="{name:'goods',query:{src:card.src,id:card.good_id,name:card.name}}">
              <v-img height="300px" :src="card.src">
                <span class="headline white--text pl-4 pt-4 d-inline-block" v-text="card.name"></span>
              </v-img>
              <v-card-actions class="white justify-center">
                <v-btn v-for="(social, i) in socials" :key="i" :color="social.color" class="white--text" fab icon small>
                  <v-icon>{{ social.icon }}</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-show="cards[0]=='nores'">
      no search items
    </v-container>
  </v-card>
</template>
<script>
import { mapState } from 'vuex'
export default {

  data: () => ({
    types: 'Hot',
    socials: [{
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
  }),
  created: function() {
    if (this.$store.state.items.search.length == 0) {
      this.$store.dispatch('items/getallitems')
    }
  },
  computed: mapState({
    cards: state => {
      if (state.items.search.length == 0) {
        return state.items.all
      } else {
        return state.items.search
      }

    }
  }),
}
</script>