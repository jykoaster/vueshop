<template>
  <v-main class="pt-0">
    <v-carousel id="area1" hide-delimiter-background :show-arrows="false" height="auto" cycle interval="3000">
      <v-carousel-item v-for="(v, i) in all" :key="i">
        <v-img max-height="1000" :src="v.src"></v-img>
      </v-carousel-item>
    </v-carousel>
    <div id="area2" class="text-center">
      <div class="text-h5 font-weight-bold">{{ area2.title }}</div>
      <span class="text-h4 font-weight-bold">{{ area2.subtitle1 }}</span>
      <span class="text-h4 font-weight-bold">{{ area2.subtitle2 }}</span>
    </div>
    <v-row id="area3" class="ma-0">
      <v-card v-for="(i, index) in area3" :key="index" class="elevation-0" tile>
        <v-hover v-slot="{ hover }">
          <v-img max-height="770px" :src="i.img">
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
    <v-row id="area4" class="ma-0">
      <v-card class="elevation-0" tile>
        <v-hover v-slot="{ hover }">
          <v-img max-height="770px" :src="area4.img">
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
          <v-img :src="i.img">
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
        img: 'https://img.notorious-2019.com/da7082e373823b9738486373.jpg',
        name: '男子長袖運動衣',
      },
      {
        img: 'https://img.notorious-2019.com/cbeb7917980da1a9804ec298.jpg',
        name: '女子運動內衣',
      },
    ],
    area4: {
      img:
        'https://scontent.frmq2-1.fna.fbcdn.net/v/t1.0-9/136453742_2923182444628053_9015170274380995719_o.jpg?_nc_cat=111&ccb=2&_nc_sid=e3f864&_nc_ohc=U01Ej4qUST8AX9xeZp4&_nc_ht=scontent.frmq2-1.fna&oh=680b93fdce7e2632eec2b7f02a6804ea&oe=60371367',
      title: '時尚運動穿著',
      text: '限量販售',
    },
    area5: [
      {
        img: 'https://img.notorious-2019.com/0521df0a260307f260429326.jpg',
        text: '訓練長褲',
      },
      {
        img: 'https://img.notorious-2019.com/72debcde982cda898240cd98.jpg',
        text: '防風外套',
      },
      {
        img: 'https://img.notorious-2019.com/a2648bd99094223909480690.jpg',
        text: '時尚配件',
      },
    ],
  }),
  mounted: function() {
    const allcms = cms.getcms()
    this.all = allcms
  },
}
</script>
