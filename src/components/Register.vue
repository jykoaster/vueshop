<template>
  <v-main>
    <v-container>
      <v-form ref="form">
        <v-text-field v-model="acc" label="Account" required></v-text-field>
        <v-text-field v-model="pwd" type="password" label="Password" required></v-text-field>
        <v-text-field v-model="pwdchk" type="password" label="Password Confirm" required></v-text-field>
        <v-text-field v-model="username" label="Username" required></v-text-field>
        <v-text-field v-model="phone" label="Phone" required></v-text-field>
        <v-text-field v-model="email" label="E-mail" required></v-text-field>
        <v-btn color="success" class="mr-4" @click="register()">
          Register
        </v-btn>
      </v-form>
    </v-container>
  </v-main>
</template>
<script>
import vue from 'vue'
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
      }
      vue.axios
        .post('/api/v1/register', param)
        .then((response) => {
          console.log(response.data)
          alert('success')
          this.$router.push('/')
        })
        .catch((error) => {
          console.log(error.error)
          alert(error.error)
        })
    },
  },
}
</script>
