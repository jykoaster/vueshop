<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <v-select :items="category1" item-value="id" item-text="category1_name" label="第一層" outlined> </v-select>
      </v-col>
      <!-- <v-col cols="2">
        <v-select :items="items" label="第二層" outlined></v-select>
      </v-col>
      <v-col cols="2">
        <v-select :items="items" label="第三層" outlined></v-select>
      </v-col> -->
    </v-row>
  </v-container>
</template>
<script>
import { getcategory1 } from '@/api/request'
export default {
  data: () => ({
    category1: [],
  }),
  async mounted() {
    this.$data.category1 = await getcategory1()
  },
}
</script>
