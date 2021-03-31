<template>
  <div class="auth-layout">
    <div class="p-grid p-nogutter">
      <div class="p-col-7 auth-layout-image">
        <slot name="image"/>
        <div class="auth-layout-image-bg"/>
      </div>
      <div class="p-col-5 auth-layout-content p-d-flex p-flex-column p-justify-center">
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
  background-color: $white
}

.auth-layout-image {
  position: relative;
}

.auth-layout-image-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($black, 0.5)
}
</style>
