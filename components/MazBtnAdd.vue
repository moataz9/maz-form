<script setup lang="ts"></script>

<template>
  <button
    class="bg-linear-gradient font-bold text-white px-4 py-2 rounded-[10px] flex items-center space-x-1"
  >
    <img src="/images/icons/add-circle.png" alt="add-icon" class="w-[24px] h-[24px] object-cover" />
    <span> <slot /> </span>
  </button>
</template>

<style lang="scss" scoped></style>
