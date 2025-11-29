// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt([
  {
    // plugins: ["plugin:"],
    rules: {
      // Common JavaScript rules
      semi: ["error", "always"],
      quotes: ["warn", "double"],
      "no-unused-vars": "error",

      // Spacing and formatting
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],

      // typescript lints
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/no-dynamic-delete": "off",

      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "*", next: "export" },
        {
          blankLine: "always",
          prev: "import",
          next: ["block-like", "const", "let", "default", "function"],
        },
        {
          blankLine: "always",
          prev: [
            "const",
            "let",
            "block-like",
            "function",
            "multiline-const",
            "multiline-let",
            "multiline-block-like",
            "multiline-expression",
          ],
          next: [
            "function",
            "multiline-const",
            "multiline-let",
            "multiline-block-like",
            "multiline-expression",
          ],
        },
        {
          blankLine: "always",
          prev: ["multiline-const", "multiline-block-like"],
          next: "*",
        },
        { blankLine: "always", prev: "const", next: "function" },
        { blankLine: "always", prev: "*", next: "return" },
      ],

      // Vue specific rules
      "vue/attribute-hyphenation": "off",
      "vue/v-on-event-hyphenation": "off",
      "vue/no-v-html": "off",
      "vue/no-unused-refs": "off",
      "vue/multi-word-component-names": "off",
      "vue/require-prop-comment": [
        "off",
        {
          type: "JSDoc",
        },
      ],
      "vue/padding-line-between-blocks": ["warn", "always"],
      "vue/prefer-use-template-ref": "off",
      "vue/prefer-separate-static-class": "warn",
      "vue/no-unused-components": "error",
      "vue/script-setup-uses-vars": "error",
      "vue/html-self-closing": [
        "error",
        {
          html: {
            void: "always",
            normal: "always",
            component: "always",
          },
          svg: "always",
          math: "always",
        },
      ],
      "vue/require-component-is": "error",
      "vue/require-prop-types": "error",
      "vue/attributes-order": [
        "error",
        {
          order: [
            "LIST_RENDERING",
            "CONDITIONALS",
            ["UNIQUE", "SLOT"],
            "DEFINITION",
            "RENDER_MODIFIERS",
            "GLOBAL",
            "TWO_WAY_BINDING",
            "OTHER_DIRECTIVES",
            "OTHER_ATTR",
            "CONTENT",
            "EVENTS",
          ],
          alphabetical: false,
        },
      ],

      "vue/order-in-components": [
        "error",
        {
          order: [
            "el",
            "name",
            "key",
            "parent",
            "functional",
            ["delimiters", "comments"],
            "extends",
            "mixins",
            ["components", "directives", "filters"],
            ["provide", "inject"],
            "ROUTER_GUARDS",
            "layout",
            "middleware",
            "validate",
            "scrollToTop",
            "transition",
            "loading",
            "inheritAttrs",
            "model",
            ["props", "propsData"],
            "emits",
            "setup",
            "data",
            "asyncData",
            "fetch",
            "head",
            "computed",
            "watch",
            "watchQuery",
            "LIFECYCLE_HOOKS",
            "methods",
            ["template", "render"],
            "renderError",
          ],
        },
      ],

      // Composition API and <script setup> rules

      // "vue/no-setup-props-destructure": "error",
      // "vue/no-setup-props-reactivity-loss": "error",

      // "vue/component-api-style": ["error", ["script-setup"]],
      "vue/define-props-declaration": ["error", "type-based"],
      "vue/define-emits-declaration": ["error", "runtime"],
      "vue/define-macros-order": [
        "error",
        {
          order: [
            "defineOptions",
            "defineModel",
            "definePageMeta",
            "defineEmits",
            "defineProps",
            "defineSlots",
          ],
        },
      ],
      "vue/block-order": [
        "error",
        {
          order: ["template", "script[setup]", "style"],
        },
      ],
      "vue/block-lang": [
        "error",
        {
          style: {
            lang: "scss",
          },
          script: {
            lang: "js",
          },
        },
      ],
      "vue/component-name-in-template-casing": [
        "error",
        "kebab-case",
        {
          registeredComponentsOnly: false,
          ignores: [],
        },
      ],
      "vue/custom-event-name-casing": [
        "error",
        "camelCase",
        {
          ignores: ["/^[a-z]+(?:[A-Z][a-z0-9]*)*:[a-z]+(?:[A-Z][a-z0-9]*)*$/"],
        },
      ],
      "vue/block-tag-newline": [
        "error",
        {
          singleline: "consistent",
          multiline: "always",
          maxEmptyLines: 1,
          blocks: {
            template: {
              singleline: "consistent",
              multiline: "always",
              maxEmptyLines: 1,
            },
            script: {
              singleline: "consistent",
              multiline: "always",
              maxEmptyLines: 1,
            },
            style: {
              singleline: "consistent",
              multiline: "always",
              maxEmptyLines: 1,
            },
          },
        },
      ],
      "vue/html-comment-content-spacing": [
        "warn",
        "always",
        {
          exceptions: [],
        },
      ],
      "vue/new-line-between-multi-line-property": [
        "error",
        {
          minLineOfMultilineProperty: 3,
        },
      ],
      "vue/no-deprecated-model-definition": [
        "error",
        {
          allowVue3Compat: true,
        },
      ],
      "vue/no-multiple-objects-in-class": "error",
      // "vue/no-ref-object-reactivity-loss": "error",
      "vue/no-required-prop-with-default": "error",
      "vue/no-restricted-class": ["error", "/^v-[A-Za-z]*/"],
      "vue/no-static-inline-styles": "error",
      "vue/no-unused-emit-declarations": "error",
      "vue/no-unused-properties": "error",
      "vue/no-useless-mustaches": [
        "off",
        {
          ignoreIncludesComment: true,
          ignoreStringEscape: true,
        },
      ],
      "vue/no-useless-v-bind": [
        "error",
        {
          ignoreIncludesComment: false,
          ignoreStringEscape: false,
        },
      ],
      "vue/valid-define-options": "error",
      "vue/require-v-for-key": "error",
      "vue/no-side-effects-in-computed-properties": "error",
    },
  },
]);
