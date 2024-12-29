<script setup lang="ts">
import {RouterLink } from 'vue-router'
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <header class="header">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1"><RouterLink to="/home">home</RouterLink></el-menu-item>
      <el-menu-item index="2"><RouterLink to="/login">login</RouterLink></el-menu-item>
      <el-menu-item index="3"><RouterLink to="/person">person</RouterLink></el-menu-item>
    </el-menu>
  </header>

</template>

<style scoped>

</style>