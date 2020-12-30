<template>
  <v-main>
    <v-container v-show="show" v-for="item in items" :key='item.id'>
      <v-card>
        <v-card-text class="d-flex justify-space-between">
          <div class="ml-6">
            <div> Name: {{item.name}}</div>
            <div>count:{{item.count}}</div>
          </div>
          <v-btn class="mr-6" @click="ditem(item.id)">delete</v-btn>
        </v-card-text>
      </v-card>
    </v-container>
    <v-container v-show="!show">
      {{ items }}
    </v-container>
  </v-main>
</template>
<script>
export default {
  data: () => ({
    items: null,
    show: false,
    gloitem: null
  }),
  mounted: function() {
    this.$data.gloitem = this.GLOBAL.cartitems
    this.loaditems()
  },
  methods: {
    ditem(idx) {
      this.GLOBAL.cartitems.splice(idx,1,null);
      console.log(this.GLOBAL.cartitems)
    },
    loaditems() {
      let tmp = [];
      this.GLOBAL.cartitems.forEach(function callback(element) {
        if (element != null) {
          tmp.push(element)
        }
      });
      if (tmp.length !== 0) {
        this.$data.items = tmp
        this.$data.show = true
      } else {
        this.$data.items = 'no item'
        this.$data.show = false
      }
      console.log(this.GLOBAL.cartitems)
    }
  },
  watch: {
    gloitem: function() {
      this.loaditems()
    }
  }
}
</script>