<template>
  <v-main>
    <v-form>
      <v-container>
        <!-- <v-btn elevation="2" color="primary" large>Edit</v-btn> -->
        <h1>Member Data</h1>
        <v-row class="formborder mb-5 justify-start pa-3">
          <v-col cols="6">
            Member Account
            <v-text-field single-line disabled v-model="member.account" label="Account" outlined></v-text-field>
          </v-col>
          <v-col cols="6">
            Level
            <v-text-field single-line disabled v-model="member.level" label="Level" outlined></v-text-field>
          </v-col>
          <v-col cols="6">
            Name
            <v-text-field single-line v-model="member.username" label="Name" outlined></v-text-field>
          </v-col>
          <v-col cols="6">
            Birth
            <v-text-field single-line v-model="member.birth" label="Birth" outlined></v-text-field>
          </v-col>
          <v-col cols="6">
            Phone
            <v-text-field single-line v-model="member.phone" label="Phone" outlined></v-text-field>
          </v-col>
          <v-col cols="6">
            E-mail
            <v-text-field single-line v-model="member.email" label="E-mail" outlined></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-btn elevation="2" color="primary" large @click="changedata()">Save Change</v-btn>
          </v-col>
        </v-row>
        <h1>Useful Address</h1>
        <v-row class="formborder">
          <v-col cols="12">
            Address
            <v-text-field single-line v-model="member.address" label="Address" outlined></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-main>
</template>
<script>
import { mapState } from 'vuex'
import { member } from '@/api/request'
export default {
  async mounted() {
    let data = await member()
    this.$store.dispatch('user/getdata', data)
  },
  computed: mapState({
    member: (state) => {
      return state.user
    },
  }),
  methods: {
    changedata() {
      const param = {
        account: this.member.account,
        name: this.member.username,
        phone: this.member.phone,
        email: this.member.email,
        birth: this.member.birth,
        gender: this.member.gender,
      }
      console.log(param)
      // POST TO API
    },
  },
}
</script>
