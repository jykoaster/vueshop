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
export default {
  // data: () => ({
  //   member: {
  //     account: 'member1',
  //     level: 'level1',
  //     email: 'e-mail1',
  //     address: 'address1',
  //   },
  // }),
  created: function() {
    this.$store.dispatch('user/getdata')
  },
  computed: mapState({
    member: (state) => {
      console.log(state.user.userdata)
      return state.user.userdata[0]
    },
  }),
}
</script>
