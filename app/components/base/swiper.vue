<template>
  <swiper
    :keyboard="{
      enabled: hasKeyboard,
    }"
    :centeredSlides="center"
    :autoplay="{
      enabled: !!autoPlayDelay,
      delay: autoPlayDelay,
    }"
    :pagination="{
      enabled: hasPagination,
      clickable: hasPagination,
    }"
    :grabCursor="grabCursor"
    :navigation="hasNavigation"
    :slides-per-view="initialSlides"
    :space-between="spaceBetween"
    :loop="loop"
    class="base-swiper w-full !pb-10"
    :breakpoints="breakpoints"
    :modules="modules"
    v-bind="$attrs"
    @swiper="onSwiperInit"
    @slideChange="slideSwiperChange"
  >
    <swiper-slide v-for="(item, i) in items" :key="item?.id ?? i">
      <slot :item="item" :index="i" />
    </swiper-slide>
  </swiper>
</template>

<script setup>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Autoplay, Keyboard, Pagination, Navigation } from "swiper/modules";

  import "swiper/css/pagination";
  import "swiper/css/navigation";
  import "swiper/css";

  const vModel = defineModel({
    type: [Number, String],
    default: "",
  });

  const props = defineProps({
    sizes: {
      type: Object,
      default: () => ({}),
    },
    items: {
      type: Object,
      required: true,
    },
    spaceBetween: {
      type: Number,
      default: 20,
    },
    hasKeyboard: {
      type: Boolean,
      default: true,
    },
    hasNavigation: {
      type: Boolean,
      default: false,
    },
    center: {
      type: Boolean,
      default: false,
    },
    hasPagination: {
      type: Boolean,
      default: false,
    },
    autoPlayDelay: {
      type: Number,
      default: 0,
    },
    loop: {
      type: Boolean,
      default: false,
    },
    loaderCount: {
      type: Number,
      default: 8,
    },
    grabCursor: {
      type: Boolean,
      default: false,
    },
  });

  const { $display } = useNuxtApp();

  const swiperController = ref(null);
  const modules = [Keyboard, Pagination, Navigation, Autoplay];

  const initialSlides = computed(() => {
    return (
      (import.meta.server
        ? props.sizes[$display.current]
        : (props.sizes.xxs ?? props.sizes.xs)) ?? "auto"
    );
  });

  const breakpoints = computed(() => ({
    440: {
      slidesPerView: props.sizes.xs || "auto",
    },
    640: {
      slidesPerView: props.sizes.sm || "auto",
    },
    768: {
      slidesPerView: props.sizes.md || "auto",
    },
    1024: {
      slidesPerView: props.sizes.lg || "auto",
    },
    1280: {
      slidesPerView: props.sizes.xl || "auto",
    },
    1536: {
      slidesPerView: props.sizes["2xl"] || "auto",
    },
  }));

  const onSwiperInit = (swiperInstance) => {
    swiperController.value = swiperInstance;
    if (swiperInstance && swiperInstance.controller)
      swiperInstance.controller.control = swiperController.value;
    else console.log("Swiper instance is not available yet. in swiper init");
  };

  const slideSwiperChange = () => {
    if (swiperController.value) vModel.value = swiperController.value.realIndex;
  };
</script>

<style>
  .base-swiper {
    .swiper-slide {
      box-sizing: border-box !important;
      height: unset !important;
      width: fit-content;
    }
    .swiper-pagination-bullet {
      transition: var(--btn-transition);

      @apply bg-primary;
      opacity: 1;
      width: 18px;
      height: 6px;
      border-radius: 400px;

      &:not(.swiper-pagination-bullet-active) {
        @apply bg-primary/10;
        width: 18px;
        height: 6px;
        border-radius: 200px;
      }
    }
  }
</style>
