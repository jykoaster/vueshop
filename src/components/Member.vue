<template>
  <v-main>
    <v-container>
      <h1>Member Detail</h1>
      <v-data-table hide-default-footer disable-sort :headers="header1" :items="desserts" class="elevation-1"></v-data-table>
      <v-data-table hide-default-footer disable-sort :headers="header2" :items="desserts" class="elevation-1"></v-data-table>
      <v-data-table hide-default-footer disable-sort :headers="header3" :items="desserts" class="elevation-1"></v-data-table>
    </v-container>
  </v-main>
</template>
<script>
export default {
  data: () => ({
    header1: [{
      text: 'Member Name',
      align: 'start',
      sortable: true,
      value: 'name'
    }, ],
    header2: [{
      text: 'Level',
      align: 'start',
      sortable: true,
      value: 'level'
    }, ],
    desserts: [{
      name: 'test',
      level: 'level',
    }, ],
  })
}
</script>