<template>
  <AuthLayout>
    <template #image>
      <img class="w-100 h-100" :src="require('@/assets/register-background.jpg')">
    </template>
    <template #content>
      <div class="w-100 p-d-flex p-flex-column p-align-center">
        <img class="logo" :src="require('@/assets/better-to-do.png')">
        <h1 class="p-text-center">Register</h1>
        <RegisterForm/>
      </div>
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

<style scoped lang="scss">
.logo {
  width: 200px;
}
</style>
