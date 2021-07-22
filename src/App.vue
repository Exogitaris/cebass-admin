<template>
  <navbar></navbar>
  <router-view></router-view>
</template>

<script>
import Navbar from "@/components/navbar/Navbar";
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
  body {
    background: rgb(218,218,218);
    background: linear-gradient(90deg, rgba(218,218,218,1) 53%, rgba(255,255,255,1) 100%);
  }
</style>
