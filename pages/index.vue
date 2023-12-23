<script setup lang="ts">
const activeTab = ref<'products' | 'articles' | 'reviews'>('products')
</script>

<template>
  <div class="flex flex-col md:flex-row gap-6">
    <aside class="md:basis-1/3 md:sticky md:top-[120px] md:h-fit">
      <MazProfile
        class="mb-6"
        image="/images/mock-person.png"
        desc="I am Hala Ahmed, I am the owner of the local brand called Beauty which is for Mackeup and Skin Care."
        :n-followers="20"
        :n-fowllowing="5"
        :name="'Hala Ahmad'"
        :n-rate="4.2"
        :n-raters="15"
      />
      <MazRq :name="'Hala Ahmad'" rq-image="/images/mock-rq.png" />
    </aside>
    <div class="md:basis-2/3 bg-white p-3 md:p-6 rounded-2xl">
      <div class="flex md:justify-between">
        <div class="flex space-x-3 items-center">
          <MazBtn :active="activeTab === 'products'" @click="activeTab = 'products'">Products</MazBtn>
          <MazBtn :active="activeTab === 'articles'" @click="activeTab = 'articles'">articles</MazBtn>
          <MazBtn :active="activeTab === 'reviews'" @click="activeTab = 'reviews'">reviews</MazBtn>
        </div>
        <MazBtnAdd class="py-3 fixed bottom-6 right-6 z-50 md:static">Add Review</MazBtnAdd>
      </div>
      <section v-if="activeTab === 'products'">
        <h3 class="my-6">
          <span class="text-3xl font-bold">Products </span>
          <span class="text-maz-gray-300 align-[6px]">(12)</span>
        </h3>
        <MazProduct
          v-for="i in 12"
          :key="i"
          image="/images/mock-product.png"
          :liked="Boolean(i % 2)"
          :price="i % 2 ? 1000 : 5222"
          name="Six-piece clothing set (blouse - pants - hat and ..."
          :n-days="i % 2 ? 2 : 1"
          :n-hours="i % 2 ? 10 : 51"
          :n-minuts="i % 2 ? 50 : 41"
          :type="i % 2 ? 'live' : 'hot-sale'"
        />
      </section>
      <section v-else-if="activeTab === 'articles'">
        <h3 class="my-6">
          <span class="text-3xl font-bold">Articles </span>
        </h3>
      </section>
      <section v-else-if="activeTab === 'reviews'">
        <h3 class="my-6">
          <span class="text-3xl font-bold">Reviews </span>
        </h3>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
