<template>
  <AuthLayout>
    <template #image>
      <img class="w-100 h-100" :src="require('@/assets/login-background.jpg')">
    </template>
    <template #content>
      <div class="w-100 p-d-flex p-flex-column p-align-center">
        <img class="logo" :src="require('@/assets/better-to-do.png')">
        <h1 class="p-text-center">Login</h1>
        <LoginForm/>
      </div>
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

<style scoped lang="scss">
.logo {
  width: 200px;
}
</style>
