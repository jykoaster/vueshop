<template>
  <div>
    <v-container class="d-flex justify-center mb-6">
      <v-card elevation="4" class="mt-2" width="80%">
        <v-img lazy-src :src="src" />
        <v-card-title>{{id}}</v-card-title>
        <v-card-subtitle>Item Detail</v-card-subtitle>
        <v-card-text>Some amazing function</v-card-text>
        <v-card-actions @click="back()" class="justify-center">back</v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  data:()=>({
    src:null,
    id:null,
  }),
  mounted:function(){
    this.$data.id=this.$route.query.id
    this.$data.src=this.$route.query.src
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
}
</script>