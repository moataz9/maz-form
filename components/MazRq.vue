<script setup lang="ts">
defineProps<{ name: string; rqImage: string }>()
const showRQ = ref(true)
</script>

<template>
  <div class="p-6 rounded-3xl bg-white">
    <div class="flex justify-between">
      <h4 class="text-maz-gray-100 font-bold">QR Code</h4>
      <div class="flex space-x-6">
        <button class="bg-transparent border-none outline-none">
          <img src="/images/icons/eye.png" alt="eye" />
        </button>
        <button class="bg-transparent border-none outline-none">
          <img src="/images/icons/share.png" alt="eye" />
        </button>
        <button class="bg-transparent border-none outline-none">
          <img src="/images/icons/document-download.png" alt="eye" />
        </button>
        <button
          class="border-none outline-none rounded-full md:hidden bg-opacity-20 "
          :class="showRQ ? 'bg-secondary-200' : 'bg-maz-gray-300'"
          @click="showRQ = !showRQ"
        >
          <img src="/images/icons/arrow-down.png" alt="eye" :class="showRQ ? 'rotate-180' : undefined" class="w-[30px] h-[30px] p-[5px]" />
        </button>
      </div>
    </div>
    <template v-if="showRQ">
      <div class="my-6 p-4 flex bg-secondary-100 rounded-2xl space-x-2 items-center">
        <img src="/images/icons/document-download-2.png" alt="" />
        <p>Download the QR code or share it with your friends.</p>
      </div>
      <div class="bg-linear-gradient p-4 rounded-2xl">
        <div class="rounded-2xl bg-white p-4 text-center space-y-2">
          <img src="/images/logo-2.png" alt="logo" class="w-[152px] h-[48px] mx-auto" />
          <h4 class="font-bold text-xl">{{ name }}</h4>
          <img :src="rqImage" alt="RQ" class="w-[135px] h-[135px] mx-auto" />
          <p>Follow Us on Mazaady</p>
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped></style>
