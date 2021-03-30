<template>
  <AuthLayout>
    <template #image>
      <img class="w-100 h-100" :src="require('@/assets/login-background.jpg')">
    </template>
    <template #content>
      <h1 class="p-text-center">Login</h1>
      <LoginForm/>
    </template>
  </AuthLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { AuthLayout, LoginForm } from '@/components'

export default defineComponent({
  name: 'Login',
  components: { AuthLayout, LoginForm }
})
</script>
