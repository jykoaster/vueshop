<template>
  <v-main>
    <v-container v-model="member">
      <v-btn elevation="2" color="primary" large>Edit</v-btn>
      <table>
        <tr>
          <td>Member Account</td>
          <td>{{ member.account }}</td>
        </tr>
        <tr>
          <td>Phone</td>
          <td>{{ member.phone }}</td>
        </tr>
        <tr>
          <td>Level</td>
          <td>{{ member.level }}</td>
        </tr>
        <tr>
          <td>E-mail</td>
          <td>{{ member.email }}</td>
        </tr>
        <tr>
          <td>Address</td>
          <td>{{ member.address }}</td>
        </tr>
      </table>
    </v-container>
  </v-main>
</template>
<script>
import { mapState } from 'vuex'
import Vue from 'vue'
export default {
  created: function() {
    Vue.axios
      .get('/api/v1/auth')
      .then((response) => {
        let data = response.data.result
        this.$store.dispatch('user/getdata', data)
      })
      .catch((error) => {
        alert(error)
      })
  },
  computed: mapState({
    member: (state) => {
      return state.user
    },
  }),
}
</script>
