<template>
  <v-main class="pt-0">
    <v-carousel cycle interval='3000'>
      <v-carousel-item v-for="(v,i) in all" :src="v.src" :key="i"></v-carousel-item>
    </v-carousel>
    <v-card height="300px">
      area2
    </v-card>
    <v-card height="800px">
      area3
    </v-card>
    <v-card height="300px">
      area4
    </v-card>
    <v-card height="800px">
      area5
    </v-card>
  </v-main>
</template>
<script>
import cms from '@/api/cms'
export default {
  name: 'Home',
  model: 0,
  data: () => ({
    all: []
  }),
  mounted: function() {
    const allcms = cms.getcms()
    console.log(allcms)
    this.all=allcms
  }
}
</script>