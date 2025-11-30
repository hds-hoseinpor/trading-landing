<template>
  <div
    class="cursor-pointer rounded-lg border border-transparent p-4 md:p-6"
    :class="{ 'bg-gray-100': show }"
    @click="show = !show"
  >
    <div class="flex items-center justify-between">
      <span class="pr-4 text-12 font-medium lg:text-16">
        {{ title }}
      </span>
      <Icon v-if="show" :name="closeIcon" size="20" :class="closeIconClass" />
      <Icon v-else :name="openIcon" size="20" :class="openIconClass" />
    </div>
    <div v-if="show">
      <slot />
    </div>
  </div>
</template>

<script setup>
  defineProps({
    title: {
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
    openIconClass: {
      type: String,
      default: "text-gray-400",
    },
    closeIconClass: {
      type: String,
      default: "text-trading-yellow",
    },
  });

  const show = ref(false);
</script>
