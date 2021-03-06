<template>
  <AuthLayout>
    <template #content>
      <h1 class="p-text-center">Login</h1>
      <LoginForm/>
    </template>
  </AuthLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AuthLayout from '@/components/AuthLayout.vue'
import LoginForm from '@/components/auth/LoginForm.vue'

export default defineComponent({
  name: 'Login',
  components: { AuthLayout, LoginForm }
})
</script>
