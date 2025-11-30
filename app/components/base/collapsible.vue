<template>
  <div
    class="cursor-pointer rounded-lg border border-transparent p-4 md:p-6"
    :class="{ 'bg-gray-100': show }"
    @click="show = !show"
  >
    <div class="flex items-center justify-between">
      <span class="pr-4 text-12 font-medium lg:text-16">
        {{ question }}
      </span>
      <Icon
        v-if="show"
        :name="closeIcon"
        size="20"
        class="text-trading-yellow"
      />
      <Icon v-else :name="openIcon" size="20" class="text-gray-400" />
    </div>
    <div v-if="show" class="mt-4 text-sm text-gray-600 md:text-base">
      {{ answer }}
    </div>
  </div>
</template>

<script setup>
  defineProps({
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    openIcon: {
      type: String,
      default: "mdi:plus-circle",
    },
    closeIcon: {
      type: String,
      default: "mdi:minus-circle",
    },
  });

  const show = ref(false);
</script>
