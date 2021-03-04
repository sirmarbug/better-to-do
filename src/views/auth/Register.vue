<template>
  <AuthLayout>
    <h1>Register</h1>
  </AuthLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AuthLayout from '@/components/AuthLayout.vue'

export default defineComponent({
  name: 'Register',
  components: { AuthLayout }
})
</script>
