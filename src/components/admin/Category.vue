<template>
  <v-container id="cateadmin">
    <v-dialog v-model="editdialog" persistent width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2">
          更改分類
        </v-card-title>
        名稱:
        <v-text-field v-model="catename" :label="catename" placeholder="分類名稱" solo></v-text-field>
        上層:
        <v-select
          v-model="upperid"
          :items="uppercate"
          :item-text="uppercatename"
          item-value="id"
          label="Standard"
        ></v-select>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="editcategory">
            儲存
          </v-btn>
          <v-btn color="error" text @click="hidedialog">
            取消
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="adddialog" persistent width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2">
          新增分類
        </v-card-title>
        <v-checkbox v-model="checkbox" label="只新增在第一層"></v-checkbox>
        名稱:
        <v-text-field v-model="catename" placeholder="分類名稱" solo></v-text-field>

        <div v-if="!checkbox">
          <v-select
            clearable
            clear-icon="mdi-close-circle"
            v-model="cate1id"
            :items="categorys"
            item-text="category1_name"
            item-value="id"
            label="新增在第一層下"
          ></v-select>
        </div>
        <div v-if="cate1id != null && !checkbox">
          <v-select
            clearable
            clear-icon="mdi-close-circle"
            v-model="cate2id"
            :items="allcate2"
            item-text="category2_name"
            item-value="id"
            label="新增在第二層下"
          ></v-select>
        </div>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="addcategory">
            儲存
          </v-btn>
          <v-btn color="error" text @click="hidedialog">
            取消
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-icon color="blue" large @click="adddialog = true">mdi-plus-circle</v-icon>
    <v-list-group v-for="(cate1, index) of categorys" :key="index" no-action>
      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title v-text="cate1.category1_name"></v-list-item-title>
        </v-list-item-content>
      </template>
      <template v-slot:prependIcon>
        <v-icon v-on:click.stop="deletecategory(1, cate1.id)">mdi-delete</v-icon>
        <v-icon v-on:click.stop="showdialog(1, cate1.id, cate1.category1_name)">mdi-note</v-icon>
      </template>
      <v-list-group class="ml-5" v-for="(cate2, index) in cate1.category2" :key="index" no-action>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="cate2.category2_name"></v-list-item-title>
          </v-list-item-content>
        </template>
        <template v-slot:prependIcon>
          <v-icon v-on:click.stop="deletecategory(2, cate2.id)">mdi-delete</v-icon>
          <v-icon v-on:click.stop="showdialog(2, cate2.id, cate2.category2_name, cate1.id)">mdi-note</v-icon>
        </template>
        <v-list-item v-for="(cate3, index) in cate2.category3" :key="index">
          <v-icon v-on:click.stop="deletecategory(3, cate3.id)">mdi-delete</v-icon>
          <v-icon v-on:click.stop="showdialog(3, cate3.id, cate3.category3_name, cate2.id)">mdi-note</v-icon>
          <v-list-item-content>
            <v-list-item-title v-text="cate3.category3_name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list-group>
  </v-container>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    checkbox: false,
    editdialog: false,
    adddialog: false,
    catename: '',
    level: '',
    id: '',
    upperid: '',
    uppercate: [],
    uppercatename: '',
    cate1id: null,
    cate2id: null,
  }),
  computed: {
    ...mapState({
      categorys: (state) => {
        return state.category.categorys
      },
    }),
    allcate2() {
      if (this.cate1id != null) {
        let all = this.categorys
        let res = all.find((element) => element.id == this.cate1id)
        return res.category2
      }
      return []
    },
  },

  methods: {
    deletecategory(level, id) {
      let levelname = 'category' + level
      let param = {
        level: levelname,
        id: id,
      }
      this.$store.dispatch('category/deletecategory', param)
    },
    async showdialog(level, id, name, upperid) {
      this.editdialog = true
      this.catename = name
      this.level = level
      this.id = id
      this.upperid = upperid
      if (level > 1) {
        let a = level - 1
        let levelcate = await this.$store.dispatch('category/getlevelcate', a)
        this.uppercate = levelcate
        this.uppercatename = 'category' + a + '_name'
      }
    },

    editcategory() {
      let param = {
        id: this.id,
        level: this.level,
        name: this.catename,
        upperid: this.upperid,
      }
      this.$store.dispatch('category/editcategory', param)
      this.cleardata()
    },
    addcategory() {
      let level = ''
      let upperid = ''
      if (this.checkbox) {
        level = 1
      } else if (this.cate2id == null) {
        upperid = this.cate1id
        level = 2
      } else if (this.cate1id != null && this.cate2id != null) {
        upperid = this.cate2id
        level = 3
      } else {
        alert('錯誤的設定')
        return
      }
      let param = {
        name: this.catename,
        upperid: upperid,
        level: level,
      }
      this.$store.dispatch('category/addcategory', param)
      this.cleardata()
    },
    hidedialog() {
      this.cleardata()
    },
    cleardata() {
      this.adddialog = false
      this.editdialog = false
      this.catename = ''
      this.level = ''
      this.id = ''
      this.upperid = ''
      this.uppercate = []
      this.uppercatename = ''
      this.cate1id = null
      this.cate2id = null
    },
  },
}
</script>
