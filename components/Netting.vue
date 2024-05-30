<template>
  <div class="px-[14px] block-grid grid">
    <div class="block-grid__elem"><img src="/public/misc.svg" alt="/public/misc.svg" /></div>
    <div class="block-grid__elem"><img src="/public/misc.svg" alt="/public/misc.svg" /></div>
    <div class="block-grid__elem"><img src="/public/misc.svg" alt="/public/misc.svg" /></div>
    <div class="block-grid__elem"><img src="/public/misc.svg" alt="/public/misc.svg" /></div>
    <div class="block-grid__elem"><img src="/public/misc.svg" alt="/public/misc.svg" /></div>
    <div class="block-grid__elem"><img src="/public/misc.svg" alt="/public/misc.svg" /></div>
    <div class="block-grid__elem"><img src="/public/misc.svg" alt="/public/misc.svg" /></div>
    <div class="block-grid__elem"><img src="/public/misc.svg" alt="/public/misc.svg" /></div>
    <div class="block-grid__elem"><img src="/public/misc.svg" alt="/public/misc.svg" /></div>
    <div class="block-grid__elem"><img src="/public/misc.svg" alt="/public/misc.svg" /></div>
    <div class="block-grid__elem"><img src="/public/misc.svg" alt="/public/misc.svg" /></div>
    <div class="block-grid__elem"></div>
    <div class="block-grid__elem"></div>
    <div class="block-grid__elem"></div>
    <div class="block-grid__elem"></div>
    <div class="block-grid__elem"></div>
    <div class="block-grid__elem"></div>
    <div class="block-grid__elem"></div>
    <div class="block-grid__elem"></div>
    <div class="block-grid__elem"></div>
    <div class="block-grid__elem"></div>
    <div class="block-grid__elem"></div>
    <div class="block-grid__elem"></div>
    <div class="block-grid__elem"></div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.block-grid {
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;

  &__elem {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #454545;
    background-color: #1a1a1a;
  }
}
</style>
