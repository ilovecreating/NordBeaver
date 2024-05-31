<template>
  <!-- Инициализация второй грид-сетки -->
  <div class="px-[14px] block-grid grid">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.block-grid {
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 100px 100px 100px 100px 100px 100px 100px;
  height: 1200px;

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

// Стили для каждой ячейки.

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
