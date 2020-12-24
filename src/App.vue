<template>
  <v-app id="app">
    <v-navigation-drawer v-model="drawer" app temporary disable-resize-watcher height="50%" bottom>
      <v-list-item v-for="( item , index ) of items" :to="item.path" :key="index" @focus="focused = true" link>
        <v-icon :id="'icon'+index" style="display: none">{{ item.icon }}</v-icon>
        <v-list-item-title :id="'lt'+index" style="display: none">{{ item.name }}</v-list-item-title>
      </v-list-item>
    </v-navigation-drawer>
    <v-app-bar app color='primary lighten-2' height="100%">
      <v-app-bar-nav-icon @click="drawer = !drawer,isshow(items)"></v-app-bar-nav-icon>
      <v-toolbar-title>Market</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn elevation="5">Login</v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer color="primary lighten-1" padless>
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
export default {
  data: () => ({
    drawer: null,
    focused: false,
    items: [
      { name: 'Home', path: '/', icon: 'mdi-image' },
      { name: 'member center', path: '/member', icon: 'mdi-view-dashboard' },
      { name: 'Shop', path: '/shop', icon: 'mdi-shopping' },
      { name:'cart',path:'cart',icon:'mdi-cart'}
    ],
    links: ['mdi-image-filter-vintage', 'mdi-instagram'],
  }),
  methods: {
    isshow(items) {
      let length = items.length
      for (let i = 0; i <= length - 1; i++) {
        let el = document.querySelector("#icon" + i)
        let el2 = document.querySelector("#lt" + i)
        el.setAttribute('style', 'display:none')
        el2.setAttribute('style', 'display:none')
        window.setTimeout(() => {
          el.setAttribute('style', 'display:true')
          el2.setAttribute('style', 'display:true')
        }, (i + 1) * 200);
      }
    }
  },
}
</script>