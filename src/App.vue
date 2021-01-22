<template>
  <v-app id="app">
    <!-- mobile nav -->
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list>
        <v-list-item>
          <h3>Market</h3>
        </v-list-item>
        <v-list-item>
          <v-textarea auto-grow label="Search" rows="1" v-model="srch" required></v-textarea>
          <v-icon class="mb-5" @click="search()">mdi-magnify</v-icon>
        </v-list-item>
        <v-list-group v-for="(category, index) of categorys" :key="index" no-action>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="category.name"></v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-group v-for="(cate2, index) in category.child" :key="index" no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="cate2.name"></v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="(cate3, index) in cate2.child" :key="index">
              <v-list-item-content @click="gotocate(category.id, cate2.id, cate3.id)">
                <v-list-item-title v-text="cate3.name"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <!-- mobile nav end -->

    <!-- mobile toolbar -->
    <div class="d-flex d-md-none justify-end pa-5 " style="background-color:#6aaaff">
      <v-toolbar-title class="ml-5 titlecursor text-h4" @click="home()">Market</v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-for="(op, index) in useroptions" :key="index">
        <v-btn icon :to="`${op.path}`">
          <v-icon text class="mr-2">{{ op.icon }}</v-icon>
        </v-btn>
      </div>
      <v-app-bar-nav-icon class="d-md-none" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </div>
    <!-- mobile toolbar end-->
    <!-- pc toolbar -->
    <div class="d-none d-md-block pa-5 pb-0" style="background-color:#6aaaff;">
      <v-col class="d-flex" cols="12">
        <!-- <div class="mr-5 mt-5 d-flex"> -->
        <v-toolbar-title class="ml-5 titlecursor text-h4" @click="home()">Market</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text v-for="option of options" :key="option.name">
          <span>{{ option.name }}</span>
        </v-btn>
        <!-- menu start -->
        <v-menu
          class="listposition"
          offset-y
          v-for="(category, index) of categorys"
          :key="index"
          min-width="100%"
          max-height="50%"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-on="on" v-bind="attrs">
              <span>{{ category.name }}</span>
            </v-btn>
          </template>
          <v-list class="d-flex">
            <v-list-item class="d-block mt-5 listposition" v-for="(cate2, index) in category.child" :key="index">
              <h1 @click="gotocate(category.id, cate2.id)">{{ cate2.name }}</h1>
              <v-list class="mt-5">
                <v-list-item
                  class="listposition"
                  v-for="(cate3, index) in cate2.child"
                  :key="index"
                  @click="gotocate(category.id, cate2.id, cate3.id)"
                >
                  <v-list-item-title>{{ cate3.name }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
      <!-- menu end -->

      <v-row class="justify-end">
        <v-col class="d-flex justify-end" cols="4">
          <v-btn text v-for="(op, index) in useroptions" :key="index" :to="`${op.path}`">
            <v-icon>{{ op.icon }}</v-icon>
            {{ op.name }}
          </v-btn>
        </v-col>
        <v-col cols="2">
          <v-textarea
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
    <!-- pc toolbar end -->
    <v-main>
      <router-view />
    </v-main>
    <v-footer color="primary lighten-1" app padless>
      <v-row justify="center" no-gutters>
        <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">
          <v-icon>{{ link }}</v-icon>
        </v-btn>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          <strong>Company</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    allusertags: [
      [
        { name: 'Login', path: '/login', icon: 'mdi-account' },
        { name: 'Cart', path: '/cart', icon: 'mdi-cart' },
      ],
      [
        { name: 'Member', path: '/member', icon: 'mdi-account' },
        { name: 'Logout', path: '/logout', icon: 'mdi-logout' },
        { name: 'Cart', path: '/cart', icon: 'mdi-cart' },
      ],
    ],
    options: [{ name: 'NEWS' }],
    drawer: false,
    srch: '',
    ext: false,
    links: ['mdi-image-filter-vintage', 'mdi-instagram'],
  }),
  mounted: function() {
    this.$store.dispatch('category/getallcategorys')

    console.log(window.innerWidth)
    if (window.innerWidth >= 960) {
      this.ext = true
    }
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
    gotocate(cate1, cate2, cate3) {
      let param = {
        cate1: cate1,
        cate2: cate2,
        cate3: cate3,
      }
      this.$store.dispatch('items/getitems', param)
      this.$data.drawer = false
      this.$router.push('/shop').catch(() => {})
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
