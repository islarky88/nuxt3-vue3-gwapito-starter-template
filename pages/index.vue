<template>
  <section class="p-4">
    asd
    <Button label="Submit" class="p-button-text" />
    <a-badge count="5">
      <a-button type="primary">Primary Button</a-button>
    </a-badge>

    <a-input :value="'qwe'" placeholder="Basic usage">
      <template #prefix>
        <user-outlined type="user" />
      </template>
      <template #suffix>
        <a-tooltip title="Extra information">
          <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" />
        </a-tooltip>
      </template>
    </a-input>

    <a-carousel autoplay>
      <div><h3>1</h3></div>
      <div><h3>2</h3></div>
      <div><h3>3</h3></div>
      <div><h3>4</h3></div>
    </a-carousel>
    qwes
    <main class="flex flex-row">
      <section class="flex-grow">
        <div class="mb-8">
          qweqwes
          <h2 class="text-2xl">Trending Episodes</h2>
          <div class="mt-4 grid grid-cols-4 gap-4">
            <CommonEpisodeTile v-for="item in 12" :key="item" />
          </div>
        </div>
        <div class="mb-8">
          <h2 class="text-2xl">Latest Ongoing Episodes</h2>
          <div class="mt-4 grid grid-cols-4 gap-4">
            <CommonEpisodeTile v-for="item in 12" :key="item" />
          </div>
        </div>
      </section>
      <aside class="w-80 ml-12">
        <div class="mb-8">
          <h2 class="text-2xl">Popular Series</h2>
          <div class="mt-4 grid grid-cols-1 gap-4">
            <CommonEpisodeTile v-for="item in 3" :key="item" />
          </div>
        </div>
        <div class="mb-8">
          <h2 class="text-2xl">Other Series</h2>
          <div class="mt-4">
            <div class="border border-gray-500 mb-1" v-for="item in 12" :key="item">Naruto Episode {{ item }}</div>
          </div>
        </div>
      </aside>
    </main>
  </section>
</template>

<script setup lang="ts">
import { useColor } from '~~/composables/states';

const color = useColor(); // Same as useState('color')
useHead({
  title: 'Home Page',
});
</script>

<style scoped></style>
