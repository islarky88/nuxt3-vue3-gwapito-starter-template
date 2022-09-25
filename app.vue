<template>
  <div :class="{ dark: true }">
    <NuxtLayout class="text-dark-50 dark:text-light-50">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (title) => `${title} - Template`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [{ name: 'description', content: 'My amazing site.' }],
  bodyAttrs: {
    class: 'test',
  },
});
</script>

<style>
body {
  min-height: 100%;
  background-color: black;
}
</style>
