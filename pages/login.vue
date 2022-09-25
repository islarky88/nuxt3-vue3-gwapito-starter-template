<template>
  <div>
    <AuthLoginForm />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: `Login`,
});
definePageMeta({
  layout: 'auth',
});
</script>

<style scoped></style>
