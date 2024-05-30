<template>
  <div class="w-[1200 px] px-[20px]">
    <main class="w-[563.6px] block border-[1px]">
      <div class="flex block__item-1 pt-[15px] pr-[16px]">
        <div
          class="px-[50px] py-[15px] text-[white] font-['Commuters-Sans'] bg-[#242223] min-w-[249px] bord-1 text-[24px] leading-[30px] uppercase"
        >
          Backpack
        </div>
        <div
          class="px-[81px] py-[16px] text-[white] font-['Commuters-Sans'] bg-[#393839] min-w-[257px] bord-2 text-[24px] leading-[30px] uppercase text-[center]"
        >
          Nexus
        </div>
        <div class="p-[14px] font-['Commuters-Sans'] bg-[#242223] min-w-[56px] bord-3">
          <img src="/public/chest.svg" alt="" />
        </div>
      </div>
      <HeadlessTabGroup>
        <div></div>
        <HeadlessTabList class="w-[64px] flex items-center bg-[#393839] block__item-2">
          <Asidebar class="flex flex-col items-center" />
        </HeadlessTabList>
        <HeadlessTabPanels class="min-w-[499px] bg-[#242223] block__item-3">
          <div class="flex justify-between my-[12px] ml-[14px] mr-[22px] items-center uppercase">
            <HeadlessTabPanel
              v-for="(elem, index) in category"
              :key="index"
              class="text-[white] font-['Commuters-Sans'] text-[20px] leading-[25px]"
            >
              {{ elem.title }}
            </HeadlessTabPanel>
            <div class="text-[white] font-['Apercu-Pro'] text-[19px] leading-[19px] font-[500]">
              11/100
            </div>
          </div>
          <Netting />
        </HeadlessTabPanels>
      </HeadlessTabGroup>
      <div class="block__item-4"></div>
    </main>
  </div>
</template>

<script setup>
const category = ref([
  {
    title: 'all items',
  },
  {
    title: 'Armor',
  },
  {
    title: 'Weapons',
  },
  {
    title: 'Misc',
  },
]);
</script>

<style scoped lang="scss">
.block {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  &__item-1 {
    grid-area: 1 / 1 / span 1 / span 6;
  }
  &__item-2 {
    grid-area: 2 / 1 / span 10 / span 1;
    flex-direction: column;
    padding-left: 16px;
    padding-right: 16px;
    .img {
      padding-top: 16px;
    }
    border-right: 1px solid #000000;
  }
  &__item-3 {
    grid-area: 2 / 2 / span 6 / span 5;
  }
  &__item-4 {
  }
}
.block {
  &__item-2 {
    grid-area: 2 / 1 / span 10 / span 1;

    padding-left: 16px;
    padding-right: 16px;
    .img {
      padding-top: 16px;
    }
    border-right: 1px solid #000000;
  }
}
.bord-1 {
  border-bottom: 1px solid #000000;
  border-right: 1px solid #000000;
}
.bord-2 {
  border-bottom: 1px solid #000000;
  border-right: 1px solid #000000;
}
.bord-3 {
  border-bottom: 1px solid #000000;
}
</style>
