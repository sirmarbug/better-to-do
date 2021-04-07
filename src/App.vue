<template>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useAppStore } from '@/use'

export default defineComponent({
  name: 'App',
  setup () {
    const store = useAppStore()
    store.dispatch('auth/authState')
  }
})
</script>
