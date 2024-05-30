<template>
  <Inventary />
</template>
<script setup>
import { provideHeadlessUseId, useId } from '#imports';
provideHeadlessUseId(() => useId());
</script>
