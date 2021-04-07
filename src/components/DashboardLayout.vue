<template>
  <div class="p-d-flex p-justify-center">
    <span class="p-mr-3" @click="onItemClick('/today')">Today</span>
    <span class="p-mr-3" @click="onItemClick('/project/hjabsdjha')">Project</span>
    <span class="p-mr-3" @click="onItemClick('/settings')">Settings</span>
    <span @click="onLogoutHandle">Logout</span>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '@/use'

export default defineComponent({
  name: 'DashboardLayout',
  setup () {
    const store = useAppStore()
    const router = useRouter()

    const onItemClick = (path: string) => {
      router.push({ path })
    }

    const onLogoutHandle = () => {
      store.dispatch('auth/logout')
    }

    return {
      onItemClick,
      onLogoutHandle
    }
  }
})
</script>
