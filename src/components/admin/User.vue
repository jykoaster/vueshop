<template>
  <v-container>
    <h1>會員管理</h1>
    <v-dialog v-model="adddialog" persistent width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2">
          新增會員
        </v-card-title>
        <v-col>
          帳號:
          <v-text-field class="dialoginput" flat dense v-model="account" label="帳號" solo></v-text-field>
        </v-col>
        <v-col>
          姓名:
          <v-text-field class="dialoginput" flat dense v-model="name" label="姓名" solo></v-text-field>
        </v-col>
        <v-col>
          E-mail:
          <v-text-field class="dialoginput" flat dense v-model="email" label="email" solo></v-text-field>
        </v-col>
        <v-col>
          電話:
          <v-text-field class="dialoginput" flat dense v-model="phone" label="電話" solo></v-text-field>
        </v-col>
        <v-col>
          會員群組:
          <v-select v-model="group" :items="allgroupid" item-text="name" item-value="id" label="群組名稱"></v-select>
        </v-col>

        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="adduser">
            送出
          </v-btn>
          <v-btn color="error" text @click="hidedialog">
            取消
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="editdialog" persistent width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2">
          編輯會員資料
        </v-card-title>
        <v-col>
          帳號:
          <v-text-field class="dialoginput" flat dense v-model="account" label="帳號" solo></v-text-field>
        </v-col>
        <!-- <v-col>
          密碼:
          <v-text-field class="dialoginput" flat dense v-model="password" label="密碼" solo></v-text-field>
        </v-col>
        <v-col>
          確認密碼:
          <v-text-field class="dialoginput" flat dense v-model="password" label="密碼" solo></v-text-field>
        </v-col> -->
        <v-col>
          姓名:
          <v-text-field class="dialoginput" flat dense v-model="name" label="姓名" solo></v-text-field>
        </v-col>
        <v-col>
          E-mail:
          <v-text-field class="dialoginput" flat dense v-model="email" label="email" solo></v-text-field>
        </v-col>
        <v-col>
          電話:
          <v-text-field class="dialoginput" flat dense v-model="phone" label="電話" solo></v-text-field>
        </v-col>
        <v-col>
          會員群組:
          <v-select v-model="group" :items="allgroupid" item-text="name" item-value="id" label="群組名稱"></v-select>
        </v-col>

        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="edituser">
            送出
          </v-btn>
          <v-btn color="error" text @click="hidedialog">
            取消
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-btn class="ma-3" color="primary" large @click="adddialog = true">新增會員</v-btn>
    <v-simple-table fixed-header height="800px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              操作
            </th>
            <th class="text-left">
              帳號
            </th>
            <th class="text-left">
              姓名
            </th>
            <th class="text-left">
              會員等級
            </th>
            <th class="text-left">
              E-mail
            </th>
            <th class="text-left">
              狀態
            </th>
            <th class="text-left">
              註冊日期
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in alluser" :key="user.id">
            <td class="pl-2">
              <v-icon class="mr-1" @click="deleteuser(user)">mdi-delete</v-icon>
              <v-icon @click="showdialog(user)">mdi-note</v-icon>
            </td>
            <td>{{ user.account }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.level.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.active == 1 ? '啟用' : '停用' }}</td>
            <td>{{ user.created_at }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    name: null,
    account: null,
    email: null,
    phone: null,
    level: null,
    group: null,
    // password: null,
    adddialog: false,
    editdialog: false,
  }),
  mounted: function() {
    this.$store.dispatch('user/getallusers')
    this.$store.dispatch('user/getallgroup')
  },
  computed: {
    ...mapState({
      alluser: (state) => {
        return state.user.alluser
      },
      allgroupid: (state) => {
        return state.user.allgroup
      },
    }),
  },
  methods: {
    hidedialog() {
      this.cleardata()
    },
    cleardata() {
      this.adddialog = false
      this.editdialog = false
      this.name = null
      this.account = null
      this.email = null
      this.phone = null
      this.level = null
      this.group = null
      // this.password = null
    },
    async adduser() {
      let param = {
        name: this.name,
        account: this.account,
        email: this.email,
        phone: this.phone,
        level: 1,
        group: this.group,
      }
      await this.$store.dispatch('user/adduser', param)
      this.cleardata()
    },
    async deleteuser(user) {
      let yes = confirm('確定刪除會員' + user.account + '?')
      if (yes) {
        await this.$store.dispatch('user/deleteuser', user.uuid)
      }
    },
    showdialog(user) {
      this.editdialog = true
      this.name = user.name
      this.account = user.account
      this.email = user.email
      this.phone = user.phone
      this.level = user.level
      this.group = user.group
      // this.password = user.password
    },
  },
}
</script>
