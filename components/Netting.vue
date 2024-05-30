<template>
  <div class="px-[14px] block-grid grid">
    <div v-for="(item, index) in props.allInfo" :key="index" class="block-grid__elem">
      <img
        :class="{
          'bg-transparent': true,
          'bg-gradient-blue': item.type === 'weapon',
          'bg-[#7F59CE]': item.type === 'armor',
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
}>();
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
}
.bg-gradient-blue {
}
</style>
