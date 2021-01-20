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
import { login, captcha } from '@/api/request'
export default {
  data: () => ({
    acc: 'jytest',
    pwd: 'password',
    cap: '',
    key: '',
    img: null,
  }),
  async mounted() {
    let data = await captcha()
    this.img = data.img
    this.key = data.key
  },
  methods: {
    login() {
      let param = {
        account: this.acc,
        password: this.pwd,
        captcha: this.cap,
        key: this.key,
      }
      login(param)
    },
    async captcha() {
      let data = await captcha()
      this.img = data.img
      this.key = data.key
    },
  },
}
</script>
