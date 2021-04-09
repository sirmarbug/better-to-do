<template>
  <Button :icon="icon" class="p-button-icon-only icon" :style="computedClass" @click="onClickHandle" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import Button from 'primevue/button'

export default defineComponent({
  name: 'Icon',
  components: {
    Button
  },
  props: {
    size: {
      type: [String, Number],
      default: '120'
    },
    color: {
      type: String,
      default: '#000000'
    },
    background: {
      type: String,
      default: '#ffffff'
    },
    icon: {
      type: String,
      default: 'pi pi-check'
    }
  },
  emits: ['click'],
  setup (props, { emit }) {
    const computedClass = computed(() => {
      return {
        backgroundColor: props.background,
        color: props.color,
        width: `${props.size}px`,
        height: `${props.size}px`,
        borderRadius: `${Number(props.size) / 75 * 26}px`
      }
    })

    const onClickHandle = () => {
      emit('click')
    }

    return {
      computedClass,
      onClickHandle
    }
  }
})
</script>

<style lang="scss" scoped></style>
