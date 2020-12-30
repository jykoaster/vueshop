<template>
  <v-main>
    <v-container>
      <v-form ref="form">
        <v-text-field v-model="acc" label="Account" required></v-text-field>
        <v-text-field v-model="pwd" type="password" label="Password" required></v-text-field>
        <v-text-field v-model="cap" label="Captcha" required></v-text-field>
        <v-img :src="img" @click="captcha()"></v-img>
        <v-btn color="success" class="mr-4" @click="login()">
          Login
        </v-btn>
      </v-form>
    </v-container>
  </v-main>
</template>
<script>
import Vue from 'vue'
export default {
  data: () => ({
    acc: '',
    pwd: '',
    cap: '',
    key: '',
    img: null,
  }),
  mounted: function() {
    this.captcha()
  },
  methods: {
    login() {
      Vue.axios.post('/api/v1/login', { account: this.acc, password: this.pwd, captcha: this.cap, key: this.key }).then(() => {
        alert('success')
      }).catch((error) => {
        alert(error.response.data.error)
      })
    },
    captcha() {
      Vue.axios.get('/api/v1/captcha/math').then((response) => {
        this.img = response.data.img
        this.key = response.data.key
      })
    },

  }
}
</script>