<template>
  <v-app id="app">
    <!-- mobile nav -->
    <v-navigation-drawer v-model="drawer" app temporary height="40%" bottom>
      <v-list>
        <v-list-item v-for="(category, index) of categorys" :to="category.path" :key="index" @click="clear()" link>
          <v-icon>{{ category.icon }}</v-icon>
          <v-list-item-title>{{ category.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
      <!-- not login -->
      <div v-if="!islogin">
        <v-btn text block class="mbloginfield" color="primary" :to="{ name: 'login' }">
          Login
        </v-btn>
        <v-btn text block class="mbloginfield mt-2" color="primary" :to="{ name: 'register' }">
          Register
        </v-btn>
      </div>
      <!-- islogin -->
      <div v-if="islogin">
        <v-btn text block class="mbloginfield mt-2" color="primary" @click="logout()">
          Logout
        </v-btn>
      </div>
    </v-navigation-drawer>
    <!-- mobile nav end -->

    <!-- pc toolbar -->
    <v-app-bar app color="primary lighten-2">
      <v-toolbar-title class="ml-5" @click="home()">Market</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- mobile nav icon -->
      <v-app-bar-nav-icon class="d-md-none" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <!-- mobile nav icon end-->
      <v-menu offset-y v-for="(category, index) of categorys" :key="index" min-width="100%" max-height="50%">
        <template v-slot:activator="{ on, attrs }">
          <div class="d-none d-md-flex">
            <div class="mr-5 mt-5 d-flex">
              <!-- <v-btn-toggle group> -->
              <v-btn text v-on="on" v-bind="attrs" @click="clear()">
                <span>{{ category.name }}</span>
              </v-btn>
              <!-- </v-btn-toggle> -->
            </div>
          </div>
        </template>
        <v-list class="d-flex">
          <v-list-item class="d-block mt-5" v-for="(cate, index) in category.child" :key="index">
            <h1>{{ cate.name }}</h1>
            <v-list class="mt-5">
              <v-list-item v-for="(cate3, index) in cate.child" :key="index">
                <v-list-item-title>{{ cate3.name }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- extension content -->
      <template v-slot:extension>
        <!-- not login -->
        <v-row class="d-none d-md-flex justify-end" v-if="!islogin">
          <div class="d-flex  mt-5">
            <v-btn text class="mr-2" :to="{ name: 'register' }">
              Register
            </v-btn>
            <v-btn text class="mr-2" :to="{ name: 'login' }">
              Login
            </v-btn>
            <v-textarea auto-grow label="Search" rows="1" v-model="srch" required></v-textarea>
            <v-icon class="mb-5" @click="search()">mdi-magnify</v-icon>
          </div>
        </v-row>
        <!-- islogin -->
        <v-row class="d-flex justify-end" v-if="islogin">
          <div class="d-flex  mt-5">
            <v-btn text class="mr-2" :to="{ name: 'member' }">
              Member Center
            </v-btn>
            <v-btn text class="mr-2" @click="logout()">
              Logout
            </v-btn>
            <v-btn text class="mr-2" :to="{ name: 'cart' }">
              Cart
            </v-btn>
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
import Vue from 'vue'
import { mapState } from 'vuex'
export default {
  data: () => ({
    drawer: null,
    srch: '',
    links: ['mdi-image-filter-vintage', 'mdi-instagram'],
  }),
  created: function() {
    this.$store.dispatch('category/getallcategorys')
  },
  methods: {
    logout() {
      Vue.axios
        .post('/api/v1/logout')
        .then(() => {
          alert('Logout Success')
        })
        .catch((error) => {
          alert(error.error)
        })
    },
    search() {
      this.$store.dispatch('items/searchitem', this.srch)
      this.srch = ''
    },
    clear() {
      this.$store.dispatch('items/clear')
    },
    home() {
      this.$router.push('/')
    },
  },
  computed: {
    ...mapState({
      islogin: (state) => {
        if (state.user.token != '') {
          return true
        } else {
          return false
        }
      },
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
</style>
