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
          會員等級:
          <v-select v-model="level" :items="alllevel" item-text="name" item-value="id" label="等級"></v-select>
        </v-col>
        <v-col>
          會員權限:
          <v-select v-model="group" :items="allgroup" item-text="name" item-value="id" label="權限"></v-select>
        </v-col>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="adduser">
            送出
          </v-btn>
          <v-btn color="error" text @click="cleardata">
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
          <v-text-field class="dialoginput" disabled flat dense :label="account" solo></v-text-field>
        </v-col>
        <v-col>
          註冊日期:
          <v-text-field class="dialoginput" disabled flat dense :label="created_at" solo></v-text-field>
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
          <v-radio-group v-model="status" row>
            <v-radio v-for="active in allstatus" :key="active.id" :label="active.name" :value="active.id"></v-radio>
          </v-radio-group>
          會員等級:
          <v-select v-model="level" :items="alllevel" item-text="name" item-value="id" label="群組名稱"></v-select>
        </v-col>
        <v-col>
          會員權限:
          <v-select v-model="group" :items="allgroup" item-text="name" item-value="id" label="群組名稱"></v-select>
        </v-col>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="edituser">
            送出
          </v-btn>
          <v-btn color="error" text @click="cleardata">
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
            <th class="text-left d-none d-md-table-cell">
              姓名
            </th>
            <th class="text-left  d-none d-md-table-cell">
              會員等級
            </th>
            <th class="text-left  d-none d-md-table-cell">
              E-mail
            </th>
            <th class="text-left">
              狀態
            </th>
            <th class="text-left  d-none d-md-table-cell">
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
            <td class="d-none d-md-table-cell">{{ user.name }}</td>
            <td class="d-none d-md-table-cell">{{ user.level.name }}</td>
            <td class="d-none d-md-table-cell">{{ user.email }}</td>
            <td>{{ user.active == 1 ? '啟用' : '停用' }}</td>
            <td class="d-none d-md-table-cell">{{ user.created_at }}</td>
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
    status: null,
    created_at: null,
    uuid: null,
    adddialog: false,
    editdialog: false,
  }),
  mounted: function() {
    this.$store.dispatch('user/getallusers')
    this.$store.dispatch('user/getformdata')
  },
  computed: {
    ...mapState({
      alluser: (state) => {
        return state.user.alluser
      },

      allgroup: (state) => {
        return state.user.allgroup
      },
      alllevel: (state) => {
        return state.user.alllevel
      },
      allstatus: (state) => {
        return state.user.allstatus
      },
    }),
  },
  methods: {
    cleardata() {
      this.adddialog = false
      this.editdialog = false
      this.name = null
      this.account = null
      this.email = null
      this.phone = null
      this.level = null
      this.group = null
      this.status = null
      this.created_at = null
      this.uuid = null
    },
    async adduser() {
      let param = {
        name: this.name,
        account: this.account,
        email: this.email,
        phone: this.phone,
        level: this.level,
        group: this.group,
      }
      await this.$store.dispatch('user/adduser', param)
      this.cleardata()
    },
    async edituser() {
      let param = {
        name: this.name,
        account: this.account,
        email: this.email,
        phone: this.phone,
        level: this.level,
        group: this.group,
        status: this.status,
        uuid: this.uuid,
      }
      await this.$store.dispatch('user/edituser', param)
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
      this.level = user.level.id
      this.group = user.group.id
      this.status = user.active
      this.created_at = user.created_at
      this.uuid = user.uuid
    },
  },
}
</script>
