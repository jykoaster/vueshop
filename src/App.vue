<template>
  <v-app id="app">
    <!-- mobile nav -->
    <v-navigation-drawer id="nav-drawer" v-model="drawer" app temporary>
      <v-list>
        <v-list-item>
          <h3>Market</h3>
        </v-list-item>
        <v-list-item>
          <v-text-field @keydown.enter="search()" auto-grow label="搜尋商品" v-model="srch" required></v-text-field>
          <v-icon class="mb-5" @click="search()">mdi-magnify</v-icon>
        </v-list-item>
        <v-list-group v-for="(cate1, index) of categorys" :key="index" no-action>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="cate1.category1_name"></v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-group v-for="(cate2, index) in cate1.category2" :key="index" no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="cate2.category2_name"></v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="(cate3, index) in cate2.category3" :key="index">
              <v-list-item-content @click="gotocate(cate3.uuid)">
                <v-list-item-title v-text="cate3.category3_name"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <!-- mobile nav end -->

    <!-- mobile toolbar -->
    <div id="wrap-nav">
      <div id="navbar">
        <div class="d-flex d-md-none justify-end pa-4">
          <v-toolbar-title class="ml-2  text-h5" @click="home()">Market</v-toolbar-title>
          <v-spacer></v-spacer>
          <div v-for="(op, index) in useroptions" :key="index">
            <v-btn class="mb-2 mr-2" icon :to="`${op.path}`">
              <v-icon text>{{ op.icon }}</v-icon>
            </v-btn>
          </div>
          <v-app-bar-nav-icon class="d-md-none" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </div>
        <!-- mobile toolbar end-->
        <!-- pc toolbar -->
        <div class="d-none d-md-block pl-5 pr-5">
          <v-col class="d-flex pb-0 pt-0" cols="12">
            <v-toolbar-title class="ml-5 titlecursor text-h4 align-self-center" @click="home()">Market</v-toolbar-title>
            <v-spacer></v-spacer>
            <!-- custom options start  -->
            <!-- <v-btn height="60" text tile v-for="option of options" :key="option.name">
              <span>{{ option.name }}</span>
            </v-btn> -->
            <!-- custom options end -->

            <!-- menu start -->
            <v-menu
              open-on-hover
              close-delay="200"
              nudge-bottom="1"
              content-class="elevation-0"
              offset-y
              v-for="(cate1, index) of categorys"
              :key="index"
              min-width="100%"
              max-height="50%"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn height="60" text tile v-on="on" v-bind="attrs">
                  <span>{{ cate1.category1_name }}</span>
                </v-btn>
              </template>
              <v-list id="menulist" flat class="d-flex">
                <v-list-item class="d-block mt-5 " v-for="(cate2, index) in cate1.category2" :key="index">
                  <h1>{{ cate2.category2_name }}</h1>
                  <v-list class="mt-5">
                    <v-list-item
                      class="grayhover"
                      v-for="(cate3, index) in cate2.category3"
                      :key="index"
                      @click="gotocate(cate3.uuid)"
                    >
                      <v-list-item-title>{{ cate3.category3_name }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
          <hr />
          <!-- menu end -->

          <v-row class="justify-end">
            <v-col class="d-flex justify-end pa-0" cols="4">
              <v-btn height="60" text tile v-for="(op, index) in useroptions" :key="index" :to="`${op.path}`">
                <v-icon>{{ op.icon }}</v-icon>
                {{ op.name }}
              </v-btn>
            </v-col>
            <v-col cols="2" class="pt-0">
              <v-text-field
                solo
                flat
                class="pt-0"
                label="搜尋商品"
                v-model="srch"
                append-icon="mdi-magnify"
                @keydown.enter="search()"
                @click:append="search()"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
    <!-- pc toolbar end -->
    <v-main>
      <router-view />
    </v-main>
    <v-footer>
      <v-row class="d-block d-md-flex">
        <v-col cols="12" md="6" class="d-flex justify-md-end text-center">
          <v-col class="mr-5" cols="6" md="4">
            <p class="text-h6 font-weight-black">聯絡資訊</p>
            <div>
              <p>客服專線: (xx)-xxxxxxxx</p>
              <p>E-mail: company@email</p>
            </div>
          </v-col>
          <v-col class="mr-5" cols="6" md="4">
            <p class="text-h6 font-weight-black">條款與政策</p>
            <div>
              <p>購物須知</p>
              <p>退換貨政策</p>
            </div>
          </v-col>
        </v-col>
        <v-col cols="12" md="6" class="d-flex justify-md-start text-center">
          <v-col cols="6" md="4" class="mr-5">
            <p class="text-h6 font-weight-black">關於我們</p>
            <div>
              <p>品牌概念</p>
              <p>未來展望</p>
            </div>
          </v-col>
          <v-col class="mr-5" cols="6" md="4">
            <p class="text-h6 font-weight-black">關注我們</p>
            <div>
              <v-icon>mdi-facebook</v-icon>
              <v-icon>mdi-instagram</v-icon>
            </div>
          </v-col>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    allusertags: [
      [
        { name: '登入', path: '/login', icon: 'mdi-account' },
        { name: '購物車', path: '/cart', icon: 'mdi-cart' },
      ],
      [
        { name: '管理後臺', path: '/admin', icon: ' mdi-account-circle' },
        { name: '會員詳情', path: '/member', icon: 'mdi-account' },
        { name: '登出', path: '/logout', icon: 'mdi-logout' },
        { name: '購物車', path: '/cart', icon: 'mdi-cart' },
      ],
    ],
    // options: [{ name: 'NEWS' }],//custom options
    drawer: false,
    srch: '',
  }),
  mounted: function() {
    this.$store.dispatch('category/getallcategorys')
  },
  methods: {
    search() {
      if (this.srch != '') {
        this.$store.dispatch('items/searchitem', this.srch)
        this.$data.drawer = false
        this.$router.push('/shop').catch(() => {})
      }
      this.srch = ''
    },
    home() {
      this.$router.push('/').catch(() => {})
    },
    async gotocate(id) {
      let param = {
        id: id,
        page: 1,
        status: 1,
      }
      await this.$store.dispatch('items/getitems', param)
      this.$router.push('/shop').catch(() => {})
    },
  },
  computed: {
    useroptions() {
      if (this.$store.state.user.token == '') {
        return this.$data.allusertags[0]
      } else {
        return this.$data.allusertags[1]
      }
    },
    ...mapState({
      categorys: (state) => {
        return state.category.categorys
      },
    }),
  },
}
</script>
