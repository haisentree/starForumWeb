<script setup lang="ts">
import {RouterView } from 'vue-router'
import MyHeader from '@/common/components/MyHeader.vue'
import MyFooter from '@/common/components/MyFooter.vue'
</script>

<template>
  <MyHeader></MyHeader>
    <RouterView />
  <MyFooter></MyFooter>
</template>

<style scoped>
</style>
