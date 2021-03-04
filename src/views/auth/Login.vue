<template>
  <AuthLayout>
    <template #content>
      <h1>Login</h1>
    </template>
  </AuthLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AuthLayout from '@/components/AuthLayout.vue'

export default defineComponent({
  name: 'Login',
  components: { AuthLayout }
})
</script>
