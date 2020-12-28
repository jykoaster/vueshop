<template>
  <v-card flat tile>
    <v-container :key="type" class="grey lighten-4" fluid>
      <v-subheader>{{ type }}</v-subheader>
      <v-row>
        <v-spacer></v-spacer>
        <v-col v-for="(card,a) in cards" :key="a" cols="12" sm="6" md="3">
          <v-hover v-slot:default="{ hover }">
            <v-card color='black' :elevation="hover ? 24:6" :to="{name:'goods',query:{src:card.src,id:card.good_id,name:card.name}}" >
              <v-img height="300px">
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
  </v-card>
</template>
<script>
export default {
  data: () => ({
    type: 'Hot',
    goods: null,
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
    this.$data.goods = [{
      good_id: '1',
      name: 'aaa',
      src:'https://i.picsum.photos/id/340/500/300.jpg?hmac=fPw17wmK3S9R_KlVBrEhGAGlcpnViHHon_aY6A7DmTA'
    }, {
      good_id: '2',
      name: 'aaa',
      src:'https://i.picsum.photos/id/340/500/300.jpg?hmac=fPw17wmK3S9R_KlVBrEhGAGlcpnViHHon_aY6A7DmTA'
    }, {
      good_id: '3',
      name: 'aaa',
      src:'https://i.picsum.photos/id/340/500/300.jpg?hmac=fPw17wmK3S9R_KlVBrEhGAGlcpnViHHon_aY6A7DmTA'
    }, {
      good_id: '4',
      name: 'aaa',
      src:'https://i.picsum.photos/id/340/500/300.jpg?hmac=fPw17wmK3S9R_KlVBrEhGAGlcpnViHHon_aY6A7DmTA'
    }]
  },
  computed: {
    cards() {
      return this.goods
    }
  }
}
</script>