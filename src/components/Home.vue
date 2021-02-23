<template>
  <v-main class="pt-0">
    <v-carousel id="area1" hide-delimiter-background :show-arrows="false" height="auto" cycle interval="3000">
      <v-carousel-item v-for="(v, i) in all" :key="i">
        <v-img max-height="1000" :src="require(`../assets/images/${v.src}.png`)"></v-img>
      </v-carousel-item>
    </v-carousel>
    <div id="area2" class="text-center">
      <div class="text-h5 font-weight-bold">{{ area2.title }}</div>
      <span class="text-h4 font-weight-bold">{{ area2.subtitle1 }}</span>
      <span class="text-h4 font-weight-bold">{{ area2.subtitle2 }}</span>
    </div>
    <v-row id="area3" class="ma-0">
      <v-card v-for="(i, index) in area3" :key="index" class="elevation-0 animate__animated" data-aos="flip-left" tile>
        <v-hover v-slot="{ hover }">
          <v-img max-height="770px" :src="require(`../assets/images/${i.img}.png`)">
            <div v-if="hover" class=" d-flex  img-hover-style">
              <v-btn text tile large :class="{ 'show-btns': hover }">直接購買</v-btn>
            </div>
          </v-img>
        </v-hover>
        <v-card-title class="text-h5 font-weight-bold  mt-5 mb-5 justify-center">
          {{ i.name }}
        </v-card-title>
      </v-card>
    </v-row>
    <v-row id="area4" class="ma-0 animate__animated" data-aos="flip-up">
      <v-card class="elevation-0" tile>
        <v-hover v-slot="{ hover }">
          <v-img max-height="770px" :src="require(`../assets/images/${area4.img}.png`)">
            <div v-if="hover" class=" d-flex  img-hover-style">
              <v-btn text tile large :class="{ 'show-btns': hover }">直接購買</v-btn>
            </div>
          </v-img>
        </v-hover>
        <v-card-title class="text-h4 font-weight-bold  mt-5 mb-0 justify-center">
          {{ area4.title }}
        </v-card-title>
        <v-card-text class="text-center">{{ area4.text }}</v-card-text>
      </v-card>
    </v-row>
    <v-row id="area5" class="d-none d-md-flex ma-0">
      <v-col cols="4" v-for="(i, index) in area5" :key="index">
        <v-hover v-slot="{ hover }">
          <v-img :src="require(`../assets/images/${i.img}.png`)">
            <div v-if="hover" class=" d-flex  img-hover-style">
              <v-btn text tile large :class="{ 'show-btns': hover }">直接購買</v-btn>
            </div>
          </v-img>
        </v-hover>
        <v-card-text class="text-center text-h5 font-weight-bold">{{ i.text }}</v-card-text>
      </v-col>
    </v-row>
  </v-main>
</template>
<script>
import cms from '@/api/cms'
export default {
  name: 'Home',
  model: 0,
  data: () => ({
    all: [],
    area2: {
      title: '秋冬裝備全新上市',
      subtitle1: '我們全心改良裝備',
      subtitle2: '讓您專注提升表現',
    },
    area3: [
      {
        img: 'home_area3_1',
        name: '男子長袖運動衣',
      },
      {
        img: 'home_area3_2',
        name: '女子運動內衣',
      },
    ],
    area4: {
      img: 'home_area4',
      title: '時尚運動穿著',
      text: '限量販售',
    },
    area5: [
      {
        img: 'home_area5_1',
        text: '訓練長褲',
      },
      {
        img: 'home_area5_2',
        text: '防風外套',
      },
      {
        img: 'home_area5_3',
        text: '時尚配件',
      },
    ],
  }),
  mounted: function() {
    const allcms = cms.getcms()
    this.all = allcms
  },
  mehtods: {
    getimg() {},
  },
}
</script>
