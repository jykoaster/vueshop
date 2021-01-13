<template>
  <v-app id="app">
    <!-- mobile nav -->
    <v-navigation-drawer v-model="drawer" app temporary disable-resize-watcher height="40%" bottom>
      <div>
        <v-list-item v-for="(item, index) of items" :to="item.path" :key="index" @click="clear()" link>
          <v-icon>{{ item.icon }}</v-icon>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
      </div>
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

    <v-app-bar app color="primary lighten-2" hide-on-scroll height="100%">
      <v-app-bar-nav-icon class="d-md-none" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="ml-5" @click="home()">Market</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- pc nav -->
      <div class="d-none d-md-flex">
        <div class="mr-5 mt-5">
          <v-btn-toggle v-for="(item, index) of items" :key="index" tile group>
            <v-btn :to="item.path" @click="clear()">
              <span>{{ item.name }}</span>
              <v-icon right>
                {{ item.icon }}
              </v-icon>
            </v-btn>
          </v-btn-toggle>
        </div>
        <!-- not login -->
        <div v-if="!islogin">
          <div class="d-flex justify-end mt-2">
            <v-btn elevation="5" class="mr-2" :to="{ name: 'register' }">
              Register
            </v-btn>
            <v-btn elevation="5" :to="{ name: 'login' }">
              Login
            </v-btn>
          </div>
          <div class="d-flex mt-2">
            <v-textarea auto-grow label="Search" rows="1" v-model="srch" required></v-textarea>
            <v-icon class="mb-5" @click="search()">mdi-magnify</v-icon>
          </div>
        </div>
        <!-- islogin -->
        <div v-if="islogin">
          <v-btn elevation="5" class="mr-2" @click="logout()">
            Logout
          </v-btn>
        </div>
      </div>
    </v-app-bar>
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
    focused: false,
    srch: '',
    items: [
      { name: 'Home', path: '/', icon: 'mdi-image' },
      { name: 'member center', path: '/member', icon: 'mdi-view-dashboard' },
      { name: 'Shop', path: '/shop', icon: 'mdi-shopping' },
      { name: 'cart', path: 'cart', icon: 'mdi-cart' },
    ],
    links: ['mdi-image-filter-vintage', 'mdi-instagram'],
  }),
  // mounted: function() {
  //   if (jwttoken) {
  //     this.$data.islogin = true
  //   } else {
  //     this.$data.islogin = false
  //   }
  // },
  methods: {
    // isshow(items) {
    //   let length = items.length
    //   for (let i = 0; i <= length - 1; i++) {
    //     let el = document.querySelector('#icon' + i)
    //     let el2 = document.querySelector('#lt' + i)
    //     el.setAttribute('style', 'display:none')
    //     el2.setAttribute('style', 'display:none')
    //     window.setTimeout(() => {
    //       el.setAttribute('style', 'display:true')
    //       el2.setAttribute('style', 'display:true')
    //     }, (i + 1) * 100)
    //   }
    // },
    logout() {
      // let jwttoken = this.$store.state.user.token
      // let param = {
      //   Authorization: jwttoken,
      // }
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
  computed: mapState({
    islogin: (state) => {
      console.log(state.user.token)
      if (state.user.token != '') {
        return true
      } else {
        return false
      }
    },
  }),
}
</script>
<style scoped>
.mbloginfield {
  border-bottom: 1px solid;
  border-top: 1px solid;
}
</style>
