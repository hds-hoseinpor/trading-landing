<template>
  <div class="flex border-b border-dark-gray">
    <button
      v-for="tab in tabs"
      :key="tab.value"
      class="mr-4 border-b-2 px-2 pb-1 text-14 text-black md:text-20 md:font-semibold"
      :class="
        vModel === tab.value ? 'border-trading-yellow' : 'border-transparent'
      "
      @click="vModel = tab.value"
    >
      {{ tab.title }}
    </button>

    <slot />
  </div>
</template>

<script setup>
  const vModel = defineModel({
    type: [String, Number],
    required: true,
  });

  defineProps({
    tabs: {
      type: Array,
      required: true,
    },
  });
</script>
