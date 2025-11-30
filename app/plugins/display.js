const useBreakpoints = () => {
  const windowWidth = ref(import.meta.client ? window.innerWidth : 0);

  const breakpoints = {
    xxs: 300,
    xs: 440,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
  };

  const xxs = computed(() => windowWidth.value <= breakpoints.xxs);
  const xsAndUp = computed(() => windowWidth.value >= breakpoints.xs);
  const xsAndDown = computed(() => windowWidth.value < breakpoints.xs);
  const smAndUp = computed(() => windowWidth.value >= breakpoints.sm);
  const smAndDown = computed(() => windowWidth.value < breakpoints.sm);
  const mdAndUp = computed(() => windowWidth.value >= breakpoints.md);
  const mdAndDown = computed(() => windowWidth.value < breakpoints.md);
  const lgAndUp = computed(() => windowWidth.value >= breakpoints.lg);
  const lgAndDown = computed(() => windowWidth.value < breakpoints.lg);
  const xlAndUp = computed(() => windowWidth.value >= breakpoints.xl);
  const xlAndDown = computed(() => windowWidth.value < breakpoints.xl);
  const xxlAndUp = computed(() => windowWidth.value >= breakpoints.xxl);
  const xxlAndDown = computed(() => windowWidth.value < breakpoints.xxl);

  const current = computed(() => {
    if (smAndUp.value) return "sm";
    if (mdAndUp.value) return "md";
    if (lgAndUp.value) return "lg";
    if (xlAndUp.value) return "xl";
    if (xxlAndUp.value) return "xxl";

    return "xs";
  });

  const updateBreakpoints = () => {
    if (import.meta.server) {
      const headers = useRequestHeaders();
      const userAgent = headers["user-agent"]?.toLowerCase() ?? "";

      if (userAgent.includes("mobile")) windowWidth.value = 375;
      else if (userAgent.includes("tablet")) windowWidth.value = 768;
      else windowWidth.value = 1440;
    } else windowWidth.value = window.innerWidth;
  };

  const debounce = (fn, delay) => {
    let timeoutId;

    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(null, args), delay);
    };
  };

  const handleResize = debounce(updateBreakpoints, 100);

  updateBreakpoints();

  return reactive({
    xxs,
    xsAndUp,
    xsAndDown,
    smAndUp,
    smAndDown,
    mdAndUp,
    mdAndDown,
    lgAndUp,
    lgAndDown,
    xlAndUp,
    xlAndDown,
    xxlAndUp,
    xxlAndDown,
    windowWidth,
    current,
    handleResize,
    updateBreakpoints,
  });
};

export default defineNuxtPlugin({
  name: "breakpoint",
  enforce: "post",
  setup(nuxtApp) {
    nuxtApp.provide("display", useBreakpoints());
  },
  hooks: {
    "app:beforeMount"() {
      const { $display } = useNuxtApp();
      $display.updateBreakpoints();
      window.addEventListener("resize", $display.handleResize);
    },
    "app:beforeUnmount"() {
      const { $display } = useNuxtApp();
      window.removeEventListener("resize", $display.handleResize);
    },
  },
});
