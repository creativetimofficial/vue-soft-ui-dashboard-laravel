<template>
  <div class="form-check">
    <input
      :id="id"
      class="form-check-input"
      type="checkbox"
      :name="name"
      :checked="modelValue"
      @input="$emit('update:modelValue', $event.target.checked)"
    />
    <label
      :for="id"
      class="custom-control-label mb-0"
      style="vertical-align: middle"
      :class="$attrs.class"
    >
      <slot />
    </label>
  </div>
</template>

<script>
export default {
  name: "SoftCheckbox",
  props: {
    name: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    checked: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
};
</script>
