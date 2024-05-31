<template>
  <div class="w-[1200 px] px-[20px]">
    <main class="w-[563.6px] block border-[1px] h-[899px]">
      <!-- 2 вкладки backpack и Nexus -->
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
        <!-- Название каждой из 4 вкладок. -->
        <HeadlessTabList class="w-[64px] flex items-center bg-[#393839] block__item-2">
          <Asidebar :all-info="allInfo" class="flex flex-col items-center" />
        </HeadlessTabList>
        <!-- Содержимое каждой из 4 вкладок. -->
        <HeadlessTabPanels class="min-w-[499px] bg-[#242223] block__item-3">
          <div class="my-[12px] ml-[14px] mr-[22px] uppercase">
            <HeadlessTabPanel>
              <div class="flex justify-between">
                <div
                  class="pl-[10px] font-['Commuters-Sans'] uppercase text-[white] text-[20px] leading-[25px]"
                >
                  {{ category.allItems }}
                </div>
                <div
                  class="text-[white] font-['Apercu-Pro'] text-[19px] leading-[19px] font-[500] pr-[13px]"
                >
                  11/100
                </div>
              </div>

              <Netting>
                <div v-for="(elem, ind) in allInfo" :key="ind" class="relative block-grid__elem">
                  <div
                    :class="{ charges: elem.charges, 'block-grid__elem-cooldown': elem.cooldown }"
                    class="absolute text-[white]"
                  >
                    {{ elem.charges }} {{ elem.charges }} {{ elem.cooldown }}
                  </div>
                  <div :class="{ counts: elem.count }">{{ elem.count }}</div>
                  <img
                    :class="{
                      'bg-transparent': true,
                      'bg-gradient-purple': elem.type === 'weapon',
                      'bg-gradient-blue': elem.type === 'armor',
                      ' opacity-[37%]': elem.cooldown,
                    }"
                    :src="elem.imageUrl"
                    alt="/public/misc.svg"
                  />
                </div>
                <div v-for="na in cages" :key="na" class="block-grid__elem empty"></div
              ></Netting>
            </HeadlessTabPanel>
          </div>
          <HeadlessTabPanel
            ><div class="flex justify-between">
              <div
                class="pl-[10px] font-['Commuters-Sans'] uppercase text-[white] text-[20px] leading-[25px]"
              >
                {{ category.armors }}
              </div>
              <div
                class="text-[white] font-['Apercu-Pro'] text-[19px] leading-[19px] font-[500] pr-[13px]"
              >
                11/100
              </div>
            </div>
            <Netting>
              <div v-for="(elem, ind) in filtArmor" :key="ind" class="relative block-grid__elem">
                <div
                  :class="{ charges: elem.charges, 'block-grid__elem-cooldown': elem.cooldown }"
                  class="absolute text-[white]"
                >
                  {{ elem.charges }} {{ elem.charges }} {{ elem.cooldown }}
                </div>
                <div :class="{ counts: elem.count }">{{ elem.count }}</div>
                <img
                  :class="{
                    'bg-transparent': true,
                    'bg-gradient-purple': elem.type === 'weapon',
                    'bg-gradient-blue': elem.type === 'armor',
                    ' opacity-[37%]': elem.cooldown,
                  }"
                  :src="elem.imageUrl"
                  alt="/public/misc.svg"
                />
              </div>
              <div v-for="na in cages" :key="na" class="block-grid__elem empty"></div></Netting
          ></HeadlessTabPanel>
          <HeadlessTabPanel
            ><div class="flex justify-between">
              <div
                class="pl-[10px] font-['Commuters-Sans'] uppercase text-[white] text-[20px] leading-[25px]"
              >
                {{ category.weapons }}
              </div>
              <div
                class="text-[white] font-['Apercu-Pro'] text-[19px] leading-[19px] font-[500] pr-[13px]"
              >
                11/100
              </div>
            </div>
            <Netting :filt-misc="filtMisc" :all-info="allInfo">
              <div v-for="(elem, ind) in filtWeapons" :key="ind" class="relative block-grid__elem">
                <div
                  :class="{ charges: elem.charges, 'block-grid__elem-cooldown': elem.cooldown }"
                  class="absolute text-[white]"
                >
                  {{ elem.charges }} {{ elem.charges }} {{ elem.cooldown }}
                </div>
                <div :class="{ counts: elem.count }">{{ elem.count }}</div>
                <img
                  :class="{
                    'bg-transparent': true,
                    'bg-gradient-purple': elem.type === 'weapon',
                    'bg-gradient-blue': elem.type === 'armor',
                    ' opacity-[37%]': elem.cooldown,
                  }"
                  :src="elem.imageUrl"
                  alt="/public/misc.svg"
                />
              </div>
              <div v-for="na in cages" :key="na" class="block-grid__elem empty"></div></Netting
          ></HeadlessTabPanel>
          <HeadlessTabPanel
            ><div class="flex justify-between">
              <div
                class="pl-[10px] font-['Commuters-Sans'] uppercase text-[white] text-[20px] leading-[25px]"
              >
                {{ category.misc }}
              </div>
              <div
                class="text-[white] font-['Apercu-Pro'] text-[19px] leading-[19px] font-[500] pr-[13px]"
              >
                11/100
              </div>
            </div>
            <Netting :filt-misc="filtMisc" :all-info="allInfo">
              <div v-for="(elem, ind) in filtMisc" :key="ind" class="relative block-grid__elem">
                <div
                  :class="{ charges: elem.charges, 'block-grid__elem-cooldown': elem.cooldown }"
                  class="absolute text-[white]"
                >
                  {{ elem.charges }} {{ elem.charges }} {{ elem.cooldown }}
                </div>
                <div :class="{ counts: elem.count }">{{ elem.count }}</div>
                <img
                  :class="{
                    'bg-transparent': true,
                    'bg-gradient-purple': elem.type === 'weapon',
                    'bg-gradient-blue': elem.type === 'armor',
                    ' opacity-[37%]': elem.cooldown,
                  }"
                  :src="elem.imageUrl"
                  alt="/public/misc.svg"
                />
              </div>

              <div v-for="na in cages" :key="na" class="block-grid__elem empty"></div></Netting
          ></HeadlessTabPanel>
        </HeadlessTabPanels>
      </HeadlessTabGroup>

      <div class="block__item-4"></div>
    </main>
  </div>
</template>

<script setup lang="ts">
import Materials from '~/helpers/Core';
import type { aboutAllFiltered } from '~/interfaces/load';
import type { T } from '~/interfaces/load';
import getFilter from '~/helpers/filter';

// Инициализируем экземпляр класса Materials.

const category = new Materials('All items', 'Armors', 'miscs', 'weapons');

// Запуск страницы, создание запроса на сервер. Поменяйте параметр на 1,2,3, чтобы получить разные итемы.

const allPageOne = await category.getAllItems(1);

// Declaring params

const allInfo = ref(allPageOne);
const filtArmor = <aboutAllFiltered[]>[];
const filtMisc = <aboutAllFiltered[]>[];
const filtWeapons = <aboutAllFiltered[]>[];
const cages = 41; // для получения непустых ячеек
const extractedData = allInfo; // для получения данных из timestampp в секунды.

// Проверяем, выполнился ли промис и если да, то запускаем фильтрацию.

if (allInfo.value) {
  getFilter(allInfo, filtArmor, filtMisc, filtWeapons, extractedData);
}
</script>

<style scoped lang="scss">
// Глобальная грид-разметка
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
    grid-area: 2/2 / span 10 / span 3;
    overflow: auto;
    scrollbar-color: #d9d9d9 #242223;
    scrollbar-width: thin;
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
