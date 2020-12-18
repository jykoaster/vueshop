<template>
  <div>
    <v-row justify="center" class="pa-2">
      <v-img lazy-src="https://picsum.photos/id/11/10/6" max-height="600" max-width="600" src="https://picsum.photos/id/11/500/300" />
    </v-row>
    <v-row justify="center">
      <a @click="back()">back</a>
    </v-row>
  </div>
</template>
<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
}
</script>