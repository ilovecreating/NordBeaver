<template>
  <div class="px-[14px] block-grid grid">
    <div v-for="(item, index) in props.allInfo" :key="index" class="relative block-grid__elem">
      <div
        :class="{ charges: item.charges, 'block-grid__elem-cooldown': item.cooldown }"
        class="absolute text-[white]"
      >
        {{ item.charges }} {{ item.charges }} {{ item.cooldown }}
      </div>
      <div :class="{ counts: item.count }">{{ item.count }}</div>
      <img
        :class="{
          'bg-transparent': true,
          'bg-gradient-purple': item.type === 'weapon',
          'bg-gradient-blue': item.type === 'armor',
          ' opacity-[37%]': item.cooldown,
        }"
        :src="item.imageUrl"
        alt="/public/misc.svg"
      />
    </div>
    <div v-for="na in cages" :key="na" class="block-grid__elem empty"></div>
  </div>
</template>

<script setup lang="ts">
import type aboutAll from '/interfaces/load';

const cages = 41;
const props = defineProps<{
  allInfo: aboutAll[];
  filtMisc: aboutAll[];
}>();

const extractedData = props.allInfo;

if (props.allInfo) {
  extractedData.map((item) => {
    if (item['cooldown']) {
      item['cooldown'] = new Date();
      const seconds = item['cooldown'].getSeconds() + `s`;
      item['cooldown'] = seconds;
    }
  });
  console.log(extractedData);
}
//async function getSec() {
//  await props.allInfo.forEach((elem) => {
//    const newElem = new Date(elem.cooldown);
//    const cooldownSeconds = newElem.getSeconds();
//    console.log(cooldownSeconds);
//  });
//}
//getSec();
</script>

<style scoped lang="scss">
.block-grid {
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

  &__elem {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #454545;
    background-color: #1a1a1a;
  }
  &__elem-cooldown {
    z-index: 100;
    font-family: 'Commuters Sans';
    font-size: 20px;
    line-height: 25px;
    transform: translate(0, 15px);
    &::before {
      content: '';
      display: block;
      background-image: url('/public/clock.svg');
      width: 28px;
      height: 27px;
    }
  }
}
.bg-gradient-purple {
  background: radial-gradient(circle, rgba(127, 89, 206, 1) 00%, rgba(0, 0, 0, 1) 100%);
}

.bg-gradient-blue {
  background: radial-gradient(circle, rgba(54, 124, 206, 1) 00%, rgba(0, 0, 0, 1) 100%);
}

.charges {
  padding-left: 5px;
  top: 0;
  left: 0;
}
.charges::before {
  content: '/';
  top: 0;
  left: 45%;
  position: absolute;
  width: 3px;
  height: 3px;
}

.counts {
  position: absolute;
  color: white;
  right: 0;
  bottom: 0;
  padding-right: 5px;
}

.counts::before {
  content: 'x';
  top: 0;
  right: 130%;
  position: absolute;
  width: 3px;
  height: 3px;
  color: white;
}
</style>
