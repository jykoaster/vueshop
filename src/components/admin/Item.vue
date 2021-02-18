<template>
  <v-container id="setitempage">
    <h1>商品設定</h1>
    <v-dialog v-model="adddialog" persistent width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2">
          新增商品
        </v-card-title>
        <v-col>
          商品名稱:
          <v-text-field class="dialoginput" flat dense v-model="name" label="姓名" solo></v-text-field>
        </v-col>
        <v-col>
          庫存:
          <v-text-field class="dialoginput" flat dense v-model="residual" label="庫存" solo></v-text-field>
        </v-col>
        <v-col>
          建議售價:
          <v-text-field class="dialoginput" flat dense v-model="suggest" label="建議售價" solo></v-text-field>
        </v-col>
        <v-col>
          特價:
          <v-text-field class="dialoginput" flat dense v-model="price" label="特價" solo></v-text-field>
        </v-col>
        <v-col>
          上傳圖片:
          <v-file-input small-chips v-model="image" label="圖片.."></v-file-input>
        </v-col>
        <v-col>
          商品詳情:
          <v-textarea filled label="詳情..." auto-grow v-model="description"></v-textarea>
        </v-col>
        <v-col>
          <v-radio-group v-model="status" row>
            <v-radio v-for="active in allstatus" :key="active.id" :value="active.id" :label="active.name"></v-radio>
          </v-radio-group>
        </v-col>
        <v-col>
          分類:
          <v-select
            v-on:click="clear(1)"
            label="第一層"
            :items="categorys"
            item-text="category1_name"
            item-value="id"
            v-model="cate1id"
          ></v-select>
          <v-select
            v-on:click="clear(2)"
            label="第二層"
            :items="allcate2"
            item-text="category2_name"
            item-value="id"
            v-model="cate2id"
          ></v-select>
          <v-select
            v-on:click="clear(3)"
            label="第三層"
            :items="allcate3"
            item-text="category3_name"
            item-value="uuid"
            v-model="cate3id"
          ></v-select>
        </v-col>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="additem">
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
          編輯商品
        </v-card-title>
        <v-col>
          商品名稱:
          <v-text-field class="dialoginput" flat dense v-model="name" :label="name" solo></v-text-field>
        </v-col>
        <v-col>
          庫存:
          <v-text-field class="dialoginput" flat dense v-model="residual" label="庫存" solo></v-text-field>
        </v-col>
        <v-col>
          建議售價:
          <v-text-field class="dialoginput" flat dense v-model="suggest" :label="'suggest'" solo></v-text-field>
        </v-col>
        <v-col>
          特價:
          <v-text-field class="dialoginput" flat dense v-model="price" :label="'price'" solo></v-text-field>
        </v-col>
        <v-col>
          商品詳情:
          <v-textarea filled auto-grow v-model="description"></v-textarea>
        </v-col>
        <!-- <v-col>
          <v-radio-group v-model="status" row>
            <v-radio v-for="active in allstatus" :key="active.id" :value="active.id" :label="active.name"></v-radio>
          </v-radio-group>
        </v-col> -->
        <v-col>
          圖片:
          <div v-if="image != null">
            <v-img :src="'//127.0.0.1:8090/storage/' + image" />
          </div>
          <div v-if="image == null">
            <v-img :src="require(`../../assets/images/defaultitem.png`)" />
          </div>
          <v-file-input chips v-model="image" label="圖片.."></v-file-input>
        </v-col>
        <v-col>
          分類:
          <v-select
            v-on:click="clear(1)"
            label="第一層"
            :items="categorys"
            item-text="category1_name"
            item-value="id"
            v-model="cate1id"
          ></v-select>
          <v-select
            v-on:click="clear(2)"
            label="第二層"
            :items="allcate2"
            item-text="category2_name"
            item-value="id"
            v-model="cate2id"
          ></v-select>
          <v-select
            v-on:click="clear(3)"
            label="第三層"
            :items="allcate3"
            item-text="category3_name"
            item-value="uuid"
            v-model="cate3id"
          ></v-select>
        </v-col>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="edititem">
            送出
          </v-btn>
          <v-btn color="error" text @click="cleardata">
            取消
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-row class="justify-center  justify-md-start">
      <v-col class="d-md-flex" md="8" cols="12">
        <v-select
          v-on:click="clear(1)"
          label="第一層"
          :items="categorys"
          item-text="category1_name"
          item-value="id"
          v-model="cate1id"
        ></v-select>
        <v-select
          v-on:click="clear(2)"
          label="第二層"
          :items="allcate2"
          item-text="category2_name"
          item-value="id"
          v-model="cate2id"
        ></v-select>
        <v-select
          v-on:click="clear(3)"
          label="第三層"
          :items="allcate3"
          item-text="category3_name"
          item-value="uuid"
          v-model="cate3id"
        ></v-select>
      </v-col>
      <v-col>
        <v-btn class="mr-2" elevation="2" color="primary" large @click="search">查詢</v-btn>
        <v-btn elevation="2" color="primary" large @click="adddialog = true">新增商品</v-btn>
      </v-col>
    </v-row>
    <v-row v-show="items.length != 0">
      <v-list-item class="maxwidthhandle" v-for="(card, a) in items.data" :key="a">
        <div class="mr-5 d-flex">
          <v-icon class="mr-2" @click="deleteitem()">mdi-delete</v-icon>
          <v-icon @click="showdialog(card)">mdi-note</v-icon>
        </div>
        <v-list-item-content class="ml-5">
          <v-list-item-title>{{ card.name }}</v-list-item-title>
        </v-list-item-content>
        <v-switch
          :input-value="card.active == '1' ? true : false"
          :label="card.active == 2 ? '下架' : '上架'"
          @click="offself(card)"
        ></v-switch>
      </v-list-item>
      <div class="text-center">
        <v-pagination v-model="page" :length="items.last_page" v-on:click.native="changepage()"></v-pagination>
      </div>
    </v-row>
    <v-row v-show="items.length == 0">
      無商品
    </v-row>
  </v-container>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    adddialog: false,
    editdialog: false,
    cate1id: null,
    cate2id: null,
    cate3id: null,
    name: null,
    suggest: null,
    price: null,
    description: null,
    residual: null,
    status: null,
    image: [],
    uuid: null,
    page: 1,
    allstatus: [
      { id: 1, name: '上架' },
      { id: 2, name: '下架' },
    ],
  }),
  mounted: function() {
    this.$store.dispatch('items/clear')
  },
  computed: {
    ...mapState({
      categorys: (state) => {
        return state.category.categorys
      },
      items: (state) => {
        return state.items.search
      },
    }),
    allcate2() {
      if (this.cate1id != null) {
        let all = this.categorys
        let res = all.find((element) => element.id == this.cate1id)
        if (res) {
          return res.category2
        }
      }
      return []
    },
    allcate3() {
      if (this.allcate2.length != 0 && this.cate2id != null) {
        let all = this.allcate2
        let res = all.find((element) => element.id == this.cate2id)
        if (res) {
          return res.category3
        }
      }
      return []
    },
  },
  methods: {
    async search() {
      if (this.cate1id != null && this.cate2id != null && this.cate3id != null) {
        let param = {
          id: this.cate3id,
          page: 1,
          status: 0,
        }
        await this.$store.dispatch('items/getitems', param)
        this.clear(1)
      } else {
        alert('請選擇所有層數')
      }
    },
    async changepage() {
      let url = this.items.links[this.page].url
      url = url.match(/\/api.*/)
      let param = {
        url: url[0],
        page: this.page,
      }
      await this.$store.dispatch('items/changepage', param)
    },
    cleardata() {
      this.editdialog = false
      this.adddialog = false
      this.cate1id = null
      this.cate2id = null
      this.cate3id = null
      this.name = null
      this.suggest = null
      this.price = null
      this.description = null
      this.residual = null
      this.status = null
      this.image = null
      this.uuid = null
    },
    clear(level) {
      switch (level) {
        case 1:
          this.cate1id = null
          this.cate2id = null
          this.cate3id = null
          break

        case 2:
          this.cate2id = null
          this.cate3id = null
          break
        case 3:
          this.cate3id = null
          break
      }
    },
    async additem() {
      let param = {
        cateid: this.cate3id,
        name: this.name,
        description: this.description,
        suggest: this.suggest,
        price: this.price,
        residual: this.residual,
        status: this.status,
        image: this.image,
      }
      await this.$store.dispatch('items/additem', param)
      this.cleardata()
    },
    async edititem() {
      let param = {
        cateid: this.cate3id,
        name: this.name,
        description: this.description,
        suggest: this.suggest,
        price: this.price,
        residual: this.residual,
        status: this.status,
        image: this.image,
        uuid: this.uuid,
        page: this.page,
      }
      await this.$store.dispatch('items/edititem', param)
      this.cleardata()
    },
    async showdialog(item) {
      await this.$store.dispatch('items/getitemdetail', item.uuid)
      let detail = this.$store.state.items.detail
      this.cate3id = detail.category3.uuid
      this.cate2id = detail.category3.category2_id
      this.cate1id = detail.category3.category2.category1_id
      this.name = item.name
      this.suggest = item.suggested_price
      this.price = item.price
      this.description = item.description
      this.residual = item.residual
      this.status = item.active
      this.image = item.image
      this.uuid = item.uuid
      this.editdialog = true
    },
    async offself({ uuid, name, description, suggested_price, price, residual, active }) {
      await this.$store.dispatch('items/getitemdetail', uuid)
      let detail = this.$store.state.items.detail
      active == 1 ? (active = 2) : (active = 1)
      let param = {
        cateid: detail.category3.uuid,
        name: name,
        description: description,
        suggest: suggested_price,
        price: price,
        residual: residual,
        status: active,
        // image: this.image,
        uuid: uuid,
        page: this.page,
      }
      console.log(param)
      await this.$store.dispatch('items/edititem', param)
    },
  },
}
</script>
