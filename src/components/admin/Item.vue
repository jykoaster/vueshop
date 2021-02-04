<template>
  <v-container id="setitempage">
    <h1>商品設定</h1>
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
        <v-btn elevation="2" color="primary" large @click="search">查詢</v-btn>
      </v-col>
    </v-row>
    <v-row v-show="items[0] != 'nores'">
      <v-list-item class="maxwidthhandle" v-for="(card, a) in items.data" :key="a">
        <div class="mr-5 d-flex">
          <v-icon class="mr-2" large @click="deleteitem()">mdi-delete</v-icon>
          <v-icon large @click="showdialog()">mdi-note</v-icon>
        </div>
        <v-list-item-title class="">{{ card.name }}</v-list-item-title>
      </v-list-item>
      <div class="text-center">
        <v-pagination v-model="page" :length="items.last_page" v-on:click.native="changepage()"></v-pagination>
      </div>
    </v-row>
    <v-row v-show="items[0] == 'nores'">
      無商品
    </v-row>
  </v-container>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    cate1id: null,
    cate2id: null,
    cate3id: null,
    page: 1,
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
          page: this.page,
        }
        await this.$store.dispatch('items/getitems', param)
        this.clear(1)
      } else {
        alert('請選擇所有層數')
      }
    },
    async changepage() {
      let param = {
        id: this.$store.state.items.cateid,
        page: this.page,
      }
      await this.$store.dispatch('items/getitems', param)
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
  },
}
</script>
