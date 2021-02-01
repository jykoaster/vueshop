<template>
  <v-app id="app">
    <!-- mobile nav -->
    <v-navigation-drawer id="nav-drawer" v-model="drawer" app temporary>
      <v-list>
        <v-list-item>
          <h3>Market</h3>
        </v-list-item>
        <v-list-item>
          <v-textarea auto-grow label="Search" rows="1" v-model="srch" required></v-textarea>
          <v-icon class="mb-5" @click="search()">mdi-magnify</v-icon>
        </v-list-item>
        <v-list-group v-for="(cate1, index) of categorys" :key="index" no-action>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="cate1.category1_name"></v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-group v-for="(cate2, index) in cate1.category2" :key="index" no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="cate2.category2_name"></v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="(cate3, index) in cate2.category3" :key="index">
              <v-list-item-content @click="gotocate(cate3.uuid)">
                <v-list-item-title v-text="cate3.category3_name"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <!-- mobile nav end -->

    <!-- mobile toolbar -->
    <div id="wrap-nav">
      <div id="navbar">
        <div class="d-flex d-md-none justify-end pa-4">
          <v-toolbar-title class="ml-2  text-h5" @click="home()">Market</v-toolbar-title>
          <v-spacer></v-spacer>
          <div v-for="(op, index) in useroptions" :key="index">
            <v-btn class="mb-2 mr-2" icon :to="`${op.path}`">
              <v-icon text>{{ op.icon }}</v-icon>
            </v-btn>
          </div>
          <v-app-bar-nav-icon class="d-md-none" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </div>
        <!-- mobile toolbar end-->
        <!-- pc toolbar -->
        <div class="d-none d-md-block pl-5 pr-5">
          <v-col class="d-flex pb-0 pt-0" cols="12">
            <v-toolbar-title class="ml-5 titlecursor text-h4 align-self-center" @click="home()">Market</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn height="60" text tile v-for="option of options" :key="option.name">
              <span>{{ option.name }}</span>
            </v-btn>
            <!-- menu start -->
            <v-menu
              open-on-hover
              close-delay="200"
              nudge-bottom="1"
              content-class="elevation-0"
              offset-y
              v-for="(cate1, index) of categorys"
              :key="index"
              min-width="100%"
              max-height="50%"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn height="60" text tile v-on="on" v-bind="attrs">
                  <span>{{ cate1.category1_name }}</span>
                </v-btn>
              </template>
              <v-list flat class="d-flex">
                <v-list-item class="d-block mt-5 listposition" v-for="(cate2, index) in cate1.category2" :key="index">
                  <h1>{{ cate2.category2_name }}</h1>
                  <v-list class="mt-5">
                    <v-list-item
                      class="listposition menuhover"
                      v-for="(cate3, index) in cate2.category3"
                      :key="index"
                      @click="gotocate(cate3.uuid)"
                    >
                      <v-list-item-title>{{ cate3.category3_name }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
          <hr />
          <!-- menu end -->

          <v-row class="justify-end">
            <v-col class="d-flex justify-end pa-0" cols="4">
              <v-btn height="60" text tile v-for="(op, index) in useroptions" :key="index" :to="`${op.path}`">
                <v-icon>{{ op.icon }}</v-icon>
                {{ op.name }}
              </v-btn>
            </v-col>
            <v-col cols="2" class="pt-0">
              <v-textarea
                solo
                flat
                class="pt-0"
                auto-grow
                label="Search"
                rows="1"
                v-model="srch"
                append-icon="mdi-magnify"
                @click:append="search()"
                required
              ></v-textarea>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
    <!-- pc toolbar end -->
    <v-main>
      <router-view />
    </v-main>
    <v-footer padless>
      <v-row justify="center" no-gutters>
        <v-btn v-for="link in links" :key="link" text rounded class="my-2">
          <v-icon>{{ link }}</v-icon>
        </v-btn>
        <v-col class="py-4 text-center" cols="12">
          <strong>Company</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>
<script>
import { mapState } from 'vuex'
import { getallcategorys } from '@/api/request'
export default {
  data: () => ({
    allusertags: [
      [
        { name: 'Login', path: '/login', icon: 'mdi-account' },
        { name: 'Cart', path: '/cart', icon: 'mdi-cart' },
      ],
      [
        { name: 'Admin', path: '/admin', icon: ' mdi-account-circle' },
        { name: 'Member', path: '/member', icon: 'mdi-account' },
        { name: 'Logout', path: '/logout', icon: 'mdi-logout' },
        { name: 'Cart', path: '/cart', icon: 'mdi-cart' },
      ],
    ],
    options: [{ name: 'NEWS' }],
    drawer: false,
    srch: '',
    links: ['mdi-image-filter-vintage', 'mdi-instagram'],
  }),
  async mounted() {
    let data = await getallcategorys()
    this.$store.commit('category/SET_CATEGORY', data)
  },
  methods: {
    search() {
      this.$store.dispatch('items/searchitem', this.srch)
      this.$data.drawer = false
      this.srch = ''
    },
    home() {
      this.$router.push('/').catch(() => {})
    },
    gotocate(id) {
      let param = {
        id: id,
      }
      this.$store.dispatch('items/getitems', param)
    },
  },
  computed: {
    useroptions() {
      if (this.$store.state.user.token == '') {
        return this.$data.allusertags[0]
      } else {
        return this.$data.allusertags[1]
      }
    },
    ...mapState({
      categorys: (state) => {
        return state.category.categorys
      },
    }),
  },
}
</script>
