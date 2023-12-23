<script setup lang="ts">
defineProps<{ active?: boolean }>()
</script>

<template>
  <div>
    <button
      class="border-2 rounded-[1.2rem] font-bold px-4 py-2 capitalize"
      :class="
        active
          ? ' border-secondary-200 bg-secondary-100 text-secondary-200'
          : 'border-maz-gray-300 bg-white text-maz-gray-300 opacity-60'
      "
    >
      <slot />
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
