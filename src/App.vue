<template>
  <v-app id="app">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item v-for="item in items" :to="item.path" :key="item.name" link>
        <v-icon>{{ item.icon }}</v-icon>
        <v-list-item-title>{{ item.name }}</v-list-item-title>
      </v-list-item>
    </v-navigation-drawer>
    <v-app-bar app color='cyan'>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
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
    items: [
      { name: 'Home', path: '/', icon: 'mdi-image' },
      { name: 'Helloworld', path: '/helloworld', icon: 'mdi-view-dashboard' },
      { name: 'Shop', path: '/shop', icon: 'mdi-shopping' },
    ],

  })
}
</script>