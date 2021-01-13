<template>
  <v-main>
    <v-container>
      <v-form ref="form">
        <v-text-field v-model="acc" label="Account" required></v-text-field>
        <v-text-field v-model="pwd" type="password" label="Password" required></v-text-field>
        <v-text-field v-model="cap" label="Captcha" required></v-text-field>
        <v-img style="width:20%" :src="img" @click="captcha()"></v-img>
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
    acc: 'jytest',
    pwd: 'password',
    cap: '',
    key: '',
    img: null,
  }),
  mounted: function() {
    this.captcha()
  },
  methods: {
    login() {
      let param = {
        account: this.acc,
        password: this.pwd,
        captcha: this.cap,
        key: this.key,
      }
      Vue.axios
        .post('/api/v1/login', param)
        .then(() => {
          // const token = response.data['result']['token']
          // this.$store.dispatch('user/settoken', token)

          alert('success')
          this.$router.push('/')
        })
        .catch((error) => {
          alert(error)
        })
    },
    captcha() {
      Vue.axios.get('/api/v1/captcha').then((response) => {
        this.img = response.data.img
        this.key = response.data.key
      })
    },
  },
}
</script>
