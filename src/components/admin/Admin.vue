<template>
  <v-container>
    <v-tabs>
      <v-tab v-for="(v, i) in options" :key="i" :to="{ name: v.path }">{{ v.name }}</v-tab>
    </v-tabs>
    <router-view />
  </v-container>
</template>
<script>
export default {
  data: () => ({
    options: [
      { name: '分類管理', path: 'Setcategory' },
      { name: '商品管理', path: 'Setitems' },
      { name: '會員管理', path: 'Setuser' },
    ],
  }),
}
</script>
