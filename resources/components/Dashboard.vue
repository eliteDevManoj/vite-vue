<template>
    <p class="greeting">{{ greeting }}</p>
</template>

<script setup>
import { ref } from 'vue'
const greeting = ref('Hello Welcome Back!')
</script>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>