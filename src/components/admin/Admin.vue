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
      { name: 'SetCategory', path: 'Setcategory' },
      { name: 'SetItems', path: 'Setitems' },
    ],
  }),
}
</script>
