<template>
  <div class="auth-layout">
    <div class="p-grid">
      <div class="p-col-7 auth-layout-image" :style="`background-image: url(https://picsum.photos/1920/1080)`">
      </div>
      <div class="p-col-5 auth-layout-content p-d-flex p-flex-column p-justify-center">
        <div class="p-grid">
          <div class="p-col-12 p-d-flex p-justify-center">
            <span class="p-mr-3" @click="onItemClick('/login')">Login</span>
            <span class="p-mr-3" @click="onItemClick('/register')">Register</span>
          </div>
        </div>
        <div class="p-grid">
          <div class="p-col-12">
            <slot name="content"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'AuthLayout',
  setup () {
    const router = useRouter()

    const onItemClick = (path: string) => {
      router.push({ path })
    }

    return { onItemClick }
  }
})
</script>

<style lang="scss" scoped>
.auth-layout-image,
.auth-layout-content {
  height: 100vh;
}

.auth-layout-content {
  background-color: $catskill-white
}
</style>
