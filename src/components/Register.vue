<template>
  <v-main>
    <v-form ref="form">
      <v-container class="text-center">
        <div class="text-h2 font-weight-medium">Register</div>
        <v-row class="justify-center">
          <v-col cols="md-4" class="formborder pa-10 ma-5">
            <v-text-field v-model="acc" label="Account" required></v-text-field>
            <v-text-field v-model="pwd" type="password" label="Password" required></v-text-field>
            <v-text-field v-model="pwdchk" type="password" label="Password Confirm" required></v-text-field>
            <v-text-field v-model="username" label="Username" required></v-text-field>
            <v-text-field v-model="phone" label="Phone" required></v-text-field>
            <v-text-field v-model="email" label="E-mail" required></v-text-field>
            <v-btn color="success" block @click="register()">
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
    acc: '',
    pwd: '',
    pwdchk: '',
    username: '',
    phone: '',
    email: '',
  }),
  methods: {
    register() {
      const param = {
        account: this.acc,
        password: this.pwd,
        password_confirmation: this.pwdchk,
        name: this.username,
        phone: this.phone,
        email: this.email,
        group_id: '1', //for api require
      }
      let res = this.$store.dispatch('user/register', param)
      if (res == 'success') {
        this.$router.push('/')
      }
    },
  },
}
</script>
