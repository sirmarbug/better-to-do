<template>
  <AuthLayout>
    <template #content>
      <h1 class="p-text-center">Register</h1>
      <RegisterForm/>
    </template>
  </AuthLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { AuthLayout, RegisterForm } from '@/components'

export default defineComponent({
  name: 'Register',
  components: { AuthLayout, RegisterForm }
})
</script>
