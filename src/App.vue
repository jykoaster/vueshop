<template>
  <v-app id="app">
    <v-navigation-drawer v-model="drawer" app temporary height="100%" bottom class="mt-16">
      <v-list-item v-for="( item , index ) of items" :to="item.path" :key="index" @focus="focused = true" link>
        <v-icon :id="'icon'+index" style="display: none">{{ item.icon }}</v-icon>
        <v-list-item-title :id="'lt'+index" style="display: none">{{ item.name }}</v-list-item-title>
      </v-list-item>
    </v-navigation-drawer>
    <v-app-bar app color='cyan'>
      <v-app-bar-nav-icon @click="drawer = !drawer,isshow(items)"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn elevation="5">Login</v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    drawer: null,
    focused: false,
    items: [
      { name: 'Home', path: '/', icon: 'mdi-image' },
      { name: 'member center', path: '/helloworld', icon: 'mdi-view-dashboard' },
      { name: 'Shop', path: '/shop', icon: 'mdi-shopping' },
    ],
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