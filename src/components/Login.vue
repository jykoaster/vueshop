<template>
  <v-main>
    <v-form ref="form">
      <v-container class="text-center">
        <div class="text-h2 font-weight-medium">Login</div>
        <v-row class="justify-center ">
          <v-col cols="md-4" class="formborder pa-10 ma-5">
            <v-text-field v-model="acc" label="Account" required></v-text-field>
            <v-text-field v-model="pwd" type="password" label="Password" required></v-text-field>
            <v-text-field v-model="cap" label="Captcha" required></v-text-field>
            <v-col cols="7">
              <v-img :src="img" @click="captcha()"></v-img>
            </v-col>
            <v-btn block color="success" class="mb-2" @click="login()">
              Login
            </v-btn>
            <v-btn block color="primary" :to="`/register`">
              Register
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-main>
</template>
<script>
export default {
  data: () => ({
    acc: 'jytest',
    pwd: 'password',
    cap: '',
    key: '',
    img: null,
  }),
  async mounted() {
    await this.captcha()
  },
  methods: {
    login() {
      let param = {
        account: this.acc,
        password: this.pwd,
        captcha: this.cap,
        key: this.key,
      }
      this.$store.dispatch('user/login', param)
    },
    async captcha() {
      let data = await this.$store.dispatch('user/captcha')
      this.img = data.img
      this.key = data.key
    },
  },
}
</script>
