<template>
  <div class="p-field">
    <label :for="name" :class="{ 'p-error': errors[name] }">{{ label }}</label>
    <Field :name="name" :id="name" :type="type" class="p-inputtext p-component p-mb-1" :class="{ 'p-invalid': errors[name] }" :placeholder="placeholder" v-model="value" :autocomplete="autocomplete" />
    <small class="p-error">{{ errors[name] }}</small>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import { Field } from 'vee-validate'

export default defineComponent({
  name: 'InputText',
  components: { Field },
  emits: ['update:modelValue'],
  props: {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    errors: {
      type: Object as PropType<Record<string, string>>,
      default: () => ({})
    },
    modelValue: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    autocomplete: {
      type: String,
      default: ''
    }
  },
  setup (props, { emit }) {
    const value = computed({
      get: () => props.modelValue,
      set: (val: string) => emit('update:modelValue', val)
    })

    return {
      value
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
