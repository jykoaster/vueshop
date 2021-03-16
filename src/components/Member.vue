<template>
  <v-main>
    <v-form>
      <v-container>
        <!-- <v-btn elevation="2" color="primary" large>Edit</v-btn> -->
        <h1>會員資料</h1>
        <v-row class="formborder mb-5 justify-start pa-3">
          <v-col cols="6">
            帳號
            <v-text-field single-line disabled :label="member.account" outlined></v-text-field>
          </v-col>
          <v-col cols="6">
            等級
            <v-text-field single-line disabled :label="member.level" outlined></v-text-field>
          </v-col>
          <v-col cols="6">
            姓名
            <v-text-field single-line v-model="member.name" :label="member.name" outlined></v-text-field>
          </v-col>
          <v-col cols="6">
            聯絡電話
            <v-text-field single-line v-model="member.phone" :label="member.phone" outlined></v-text-field>
          </v-col>
          <v-col cols="6">
            E-mail
            <v-text-field single-line v-model="member.email" :label="member.email" outlined></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-btn elevation="2" color="primary" large @click="changedata()">儲存變更</v-btn>
          </v-col>
        </v-row>
        <h1>常用地址</h1>
        <v-row class="formborder">
          <v-col cols="12">
            地址
            <v-text-field single-line v-model="member.address" label="Address" outlined></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-main>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data: () => ({}),
  mounted: function() {
    this.$store.dispatch('user/getdata')
  },
  computed: mapState({
    member: (state) => {
      return state.user
    },
  }),
  methods: {
    changedata() {
      let param = {
        name: this.member.name,
        phone: this.member.phone,
        email: this.member.email,
      }
      this.$store.dispatch('user/changedata', param)
    },
  },
}
</script>
