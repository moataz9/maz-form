<script setup lang="ts"></script>

<template>
  <div class="h-[50px] md:h-[71px]">
    <nav class="bg-white fixed top-0 w-full z-50 hidden md:block">
      <!-- In your component or layout file -->
      <div class="container mx-auto p-4 flex justify-between items-center">
        <!-- left side -->
        <ul class="list-none flex items-center space-x-10 text-black font-bold text-lg">
          <!-- Logo -->
          <li>
            <img src="/images/logo.png" alt="logo" />
          </li>

          <!-- Home -->
          <li><nuxt-link to="/" active-class="text-primary active-link"> Home </nuxt-link></li>

          <!-- Blog -->
          <li><nuxt-link to="/blog" active-class="text-primary active-link"> Blog </nuxt-link></li>

          <!-- Gifts -->
          <li><nuxt-link to="/gifts" active-class="text-primary active-link"> Gifts </nuxt-link></li>
        </ul>

        <!-- right side -->
        <ul class="list-none flex items-center space-x-5">
          <!-- Search icon -->
          <li class="px-2">
            <img src="/images/icons/search.png" alt="search" class="w-[24px] h-[24px]" />
          </li>

          <!-- Bill icon -->
          <li class="border-x-2 px-5 py-2 border-secondary-200 border-opacity-40">
            <img src="/images/icons/notification.png" alt="search" class="w-[24px] h-[24px]" />
          </li>

          <!-- Circle image -->
          <li class="h-[40px] w-[40px] rounded-full overflow-hidden">
            <img src="/images/mock-person.png" alt="Profile" class="object-cover w-full h-full" />
          </li>

          <!-- Button -->
          <li>
            <MazBtnAdd>Add new Product</MazBtnAdd>
          </li>

          <!-- Earth icon -->
          <li class="flex">
            <img src="/images/icons/global.png" alt="search" class="w-[24px] h-[24px]" />
            <span class="ml-2 px-2 border-l-2 border-maz-gray-300">EN</span>
          </li>
        </ul>
      </div>
    </nav>

    <nav class="bg-white fixed top-0 w-full z-50 md:hidden px-4 py-2">
      <div class="container mx-auto flex justify-between">
        <ul class="list-none flex items-center space-x-2">
          <!-- Logo -->
          <li>
            <button class="bg-transparent border-none outline-none mt-2">
              <img src="/images/icons/menu.svg" class="w-[24px] h-[24px]" alt="" />
            </button>
          </li>

          <!-- Logo -->
          <li>
            <img src="/images/logo.png" alt="logo" class="w-[108px] h-[38px]" />
          </li>
        </ul>
        <ul class="list-none flex items-center space-x-4">
          <!-- Search icon -->
          <li class="px-2">
            <img src="/images/icons/search.png" alt="search" class="w-[24px] h-[24px]" />
          </li>

          <!-- Bill icon -->
          <li class="">
            <img src="/images/icons/notification.png" alt="search" class="w-[24px] h-[24px]" />
          </li>

          <!-- Circle image -->
          <li class="h-[24px] w-[24px] rounded-full overflow-hidden">
            <img src="/images/mock-person.png" alt="Profile" class="object-cover w-full h-full" />
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.active-link {
  position: relative;
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: -1.6rem;
    left: 0;
    width: 100%;
    height: 6px;
    border-radius: 5px 5px 0 0;
    background-color: currentColor;
  }
}
</style>
