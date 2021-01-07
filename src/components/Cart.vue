<template>
  <v-main>
    <v-container v-show="items.length!=0" v-for="item in items" :key='item.id'>
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
    <v-container v-show="items.length==0">
      {{ message }}
    </v-container>
  </v-main>
</template>
<script>
import { mapGetters } from 'vuex'
export default {

  data: () => ({
    message: 'no items',
  }),
  methods: {
    ditem(id) {
      this.$store.dispatch('cart/ditem', id)
    }
  },
  computed: {
    ...mapGetters('cart', {
      items: 'getcartitems',
    }),

  }
}
</script>