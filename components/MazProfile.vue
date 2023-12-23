<script setup lang="ts">
defineProps<{
  image: string
  name: string
  desc: string
  nFowllowing: number | number
  nFollowers: number | number
  nRate: number | number
  nRaters: number | number
}>()
</script>

<template>
  <div class="p-4 md:p-6 rounded-3xl bg-white">
    <img :src="image" alt="person" class="w-[100] h-[100] rounded-3xl" />
    <h3 class="font-bold text-xl mt-4 mb-2 text-maz-gray-100">{{ name }}</h3>
    <p class="text-maz-gray-300">{{ desc }}</p>
    <div class="columns-3 mt-6">
      <div class="bg-secondary-100 flex items-center p-2 rounded-2xl">
        <div class="pr-1 md:px-2">
          <img src="/images/icons/profile/user-tick.svg" alt="user-tick" class="w-[24] h-[24]" />
        </div>
        <div class="flex flex-col">
          <span class="font-bold text-maz-gray-100">{{ nFowllowing }}</span>
          <span class="text-secondary-200 capitalize text-sm md:text-base">following</span>
        </div>
      </div>
      <div class="bg-secondary-100 flex items-center p-2 rounded-2xl">
        <div class="pr-1 md:px-2">
          <img src="/images/icons/profile/profile-2user.svg" alt="profile2-user" class="w-[24] h-[24]" />
        </div>
        <div class="flex flex-col">
          <span class="font-bold text-maz-gray-100">{{ nFollowers }}</span>
          <span class="text-secondary-200 capitalize text-sm md:text-base">followers</span>
        </div>
      </div>
      <div class="bg-secondary-100 flex items-center p-2 rounded-2xl">
        <div class="pr-1 md:px-2">
          <img src="/images/icons/profile/magic-star.svg" alt="magic-star" class="w-[24] h-[24]" />
        </div>
        <div class="flex flex-col">
          <div>
            <span class="font-bold text-maz-gray-100">{{ nRate }}</span>
            <span class="text-maz-gray-300 text-sm px-1">({{ nRaters }})</span>
          </div>
          <span class="text-secondary-200 capitalize text-sm md:text-base">rate</span>
        </div>
      </div>
    </div>
    <button
      class="bg-linear-gradient font-bold text-white py-4 flex w-full justify-center items-center mt-6 rounded-2xl capitalize"
    >
      follow
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
