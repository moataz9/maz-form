<script setup lang="ts">
defineProps<{
  image: string
  name: string
  price: number | string
  nDays: number | string
  nHours: number | string
  nMinuts: number | string
  liked: boolean
  type: 'live' | 'hot-sale'
}>()
</script>

<template>
  <div class="md:p-4 flex gap-2 md:gap-4 relative mb-4 md:mb-0 ">
    <div class="absolute z-10 p-1 top-2 md:top-6 right-[90%] md:right-10 bg-white rounded-full md:bg-transparent">
      <img
        :src="liked ? '/images/icons/like-filled.png' : '/images/icons/like.png'"
        :alt="liked + ' state'"
        class="h-[24px] w-[24px]"
      />
    </div>
    <div
      class="bg-secondary-100 min-w-[87px] h-[87px] md:w-[145px] md:h-[145px] relative rounded-3xl overflow-hidden"
    >
      <img :src="image" :alt="name" class="h-full w-full" />
      <span
        v-if="type === 'live'"
        class="bg-primary rounded-tl-[2.11rem] rounded-br-[2rem] absolute bottom-0 right-0 w-[88%] text-center p-2 md:py-4 text-[0.55rem] md:text-base text-white font-medium capitalize"
      >
        Live Auction
      </span>
      <span
        v-else-if="type === 'hot-sale'"
        class="bg-secondary-200 rounded-tl-[2.11rem] rounded-br-[2rem] absolute bottom-0 right-0 w-[88%] text-center p-2 md:py-4 text-[0.55rem] md:text-base text-white font-medium capitalize"
      >
        Hot Sale
      </span>
    </div>
    <div class="flex flex-col justify-between py-1">
      <p class="text-sm md:text-xl text-maz-gray-200">{{ name }}</p>
      <p>
        <span class="text-sm md:text-xl text-maz-gray-300"> Starting Price </span>
        <span class="text-xl md:text-2xl text-maz-gray-100 font-bold"> {{ price }} EGB </span>
      </p>
      <div class="flex flex-col md:flex-row md:space-x-4 md:items-center">
        <p class="text-sm md:text-xl text-maz-gray-300 my-1 md:my-0">Lots Starts In</p>
        <div class="flex space-x-2 mt-2 md:mt-0">
          <span class="text-secondary-200 bg-secondary-100 rounded-full p-1 px-2 md:py-2 md:px-4 font-bold">
            <span class="text-sm md:text-2xl">{{ nDays }}</span> <small>Days</small>
          </span>
          <span class="text-secondary-200 bg-secondary-100 rounded-full p-1 px-2 md:py-2 md:px-4 font-bold">
            <span class="text-sm md:text-2xl">{{ nHours }}</span> <small>Hours</small>
          </span>
          <span class="text-secondary-200 bg-secondary-100 rounded-full p-1 px-2 md:py-2 md:px-4 font-bold">
            <span class="text-sm md:text-2xl">{{ nMinuts }}</span> <small>Minuts</small>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
