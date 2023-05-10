<template>
  <span v-if="errors && errors.length">
    <small class="text-xs text-danger" v-text="errors[0]" />
  </span>
</template>

<script>
export default {
  name: "ValidationError",
  props: {
    errors: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
