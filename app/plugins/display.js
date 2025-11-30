/**
 * - sm: 640px
 * - md: 768px
 * - lg: 1024px
 * - xl: 1280px
 * - 2xl: 1536px
 */
export function useDisplay() {
  const width = ref(0);

  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
  };

  const sm = computed(() => width.value >= breakpoints.sm);
  const md = computed(() => width.value >= breakpoints.md);
  const lg = computed(() => width.value >= breakpoints.lg);
  const xl = computed(() => width.value >= breakpoints.xl);
  const xxl = computed(() => width.value >= breakpoints.xxl);

  const smAndUp = computed(() => sm.value);
  const mdAndUp = computed(() => md.value);
  const lgAndUp = computed(() => lg.value);
  const xlAndUp = computed(() => xl.value);
  const xxlAndUp = computed(() => xxl.value);

  const updateWidth = () => {
    if (import.meta.client) {
      width.value = window.innerWidth;
      return;
    }

    const headers = useRequestHeaders();
    const userAgent = headers["user-agent"]?.toLowerCase() ?? "";

    if (userAgent.includes("mobile")) windowWidth.value = 375;
    else if (userAgent.includes("tablet")) windowWidth.value = 768;
    else windowWidth.value = 1440;
  };

  return {
    width,
    sm,
    md,
    lg,
    xl,
    xxl,
    smAndUp,
    mdAndUp,
    lgAndUp,
    xlAndUp,
    xxlAndUp,
    updateWidth,
  };
}

export default defineNuxtPlugin({
  name: "breakpoint",
  enforce: "post",
  setup(nuxtApp) {
    nuxtApp.provide("display", useDisplay());
  },
  hooks: {
    "app:beforeMount"() {
      const { $display } = useNuxtApp();
      $display.updateWidth();
      window.addEventListener("resize", $display.updateWidth);
    },
    "app:beforeUnmount"() {
      const { $display } = useNuxtApp();
      window.removeEventListener("resize", $display.updateWidth);
    },
  },
});
