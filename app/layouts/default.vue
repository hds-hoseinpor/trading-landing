<template>
  <div class="h-screen bg-black flex flex-col overflow-hidden">
    <!-- Header -->
    <AppHeader />

    <!-- Main Content Area -->
    <div class="flex-1 flex overflow-hidden">
      <!-- Mobile Sidebar Overlay -->
      <div
        v-if="showMobileSidebar"
        class="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        @click="showMobileSidebar = false"
      ></div>

      <!-- Sidebar -->
      <AppSidebar v-if="showMobileSidebar" class="lg:block" />

      <!-- Main Trading Area -->
      <main class="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

<script setup>
const showMobileSidebar = ref(false);

// Provide mobile sidebar toggle function to child components
provide("toggleMobileSidebar", () => {
  showMobileSidebar.value = !showMobileSidebar.value;
});

const display = useDisplay();

watch(
  () => display.lgAndUp.value,
  (value) => {
    console.log(value);
    showMobileSidebar.value = false;
  }
);
</script>
