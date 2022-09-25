<template>
  <div>maasdnage</div>
</template>

<script setup lang="ts">
// use admin layout using defineMeta

definePageMeta({
  layout: 'admin',
  middleware: ['auth'],
});
</script>

<style scoped></style>
