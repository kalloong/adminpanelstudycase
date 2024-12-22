<template>
  <div class="flex h-screen bg-gray-50 text-gray-800">
    <Sidebar />
    <div class="flex-1 flex flex-col">
      <Header />
      <main class="flex-1 p-6">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Header from './components/Header.vue';

export default {
  components: { Sidebar, Header },
};
</script>

<style>
body {
  font-family: 'Inter', sans-serif;
}
</style>
