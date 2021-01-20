<template>
  <v-app id="app">
    <!-- mobile nav -->
    <v-navigation-drawer v-model="drawer" app temporary height="40%" bottom>
      <v-list>
        <v-list-item v-for="(category, index) of categorys" :to="category.path" :key="index" @click="clear()" link>
          <v-list-item-title>{{ category.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- mobile nav end -->

    <!-- pc toolbar -->
    <v-app-bar app color="primary lighten-2">
      <v-toolbar-title class="ml-5" style="cursor:pointer" @click="home()">Market</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- mobile toolbar -->
      <v-row class="d-md-none justify-end">
        <div v-for="(op, index) in useroptions" :key="index">
          <v-btn icon :to="`${op.path}`">
            <v-icon text class="mr-2">{{ op.icon }}</v-icon>
          </v-btn>
        </div>
      </v-row>
      <v-app-bar-nav-icon class="d-md-none" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <!-- mobile toolbar end-->
      <div class="d-none d-md-flex">
        <div class="mr-5 mt-5 d-flex">
          <v-btn text v-for="option of options" :key="option.name" @click="clear()">
            <span>{{ option.name }}</span>
          </v-btn>
          <v-menu
            class="listposition"
            offset-y
            v-for="(category, index) of categorys"
            :key="index"
            min-width="100%"
            max-height="50%"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn text v-on="on" v-bind="attrs" @click="clear()">
                <span>{{ category.name }}</span>
              </v-btn>
            </template>
            <v-list class="d-flex">
              <v-list-item
                class="d-block mt-5 listposition"
                v-for="(cate2, index) in category.child"
                :key="index"
                @click="gotocate()"
              >
                <h1>{{ cate2.name }}</h1>
                <v-list class="mt-5">
                  <v-list-item
                    class="listposition"
                    v-for="(cate3, index) in cate2.child"
                    :key="index"
                    @click="gotocate()"
                  >
                    <v-list-item-title>{{ cate3.name }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>

      <!-- extension content -->
      <template v-slot:extension class="d-none">
        <v-row class="d-none d-md-flex justify-end">
          <div class="d-flex  mt-5">
            <div v-for="(op, index) in useroptions" :key="index">
              <v-btn text class="mr-2" :to="`${op.path}`">
                {{ op.name }}
              </v-btn>
            </div>
            <v-textarea auto-grow label="Search" rows="1" v-model="srch" required></v-textarea>
            <v-icon class="mb-5" @click="search()">mdi-magnify</v-icon>
          </div>
        </v-row>
      </template>
    </v-app-bar>
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
    drawer: null,
    srch: '',
    links: ['mdi-image-filter-vintage', 'mdi-instagram'],
  }),
  created: function() {
    this.$store.dispatch('category/getallcategorys')
  },
  methods: {
    search() {
      this.$store.dispatch('items/searchitem', this.srch)
      this.srch = ''
    },
    clear() {
      this.$store.dispatch('items/clear')
    },
    home() {
      this.$router.push('/').catch(() => {})
    },
    gotocate() {
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
<style scoped>
.mbloginfield {
  border-bottom: 1px solid;
  border-top: 1px solid;
}
.listposition {
  position: static;
}
</style>
