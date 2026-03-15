<template>
  <div class="min-h-screen bg-neutral-900 flex flex-col font-sans">
    <NuxtRouteAnnouncer />
    <Navbar />
    <main class="flex-1 w-full min-w-0">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </main>
  </div>
</template>

<script setup>
import Navbar from '~/components/navigation/Navbar.vue'
</script>

<style>
@import url('~/assets/css/smooth-scroll.css');
</style>
