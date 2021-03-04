<template>
  <AuthLayout>
    <h1>Login</h1>
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
