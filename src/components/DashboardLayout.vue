<template>
  <div class="p-d-flex p-justify-center">
    <span class="p-mr-3" @click="onItemClick('/today')">Today</span>
    <span class="p-mr-3" @click="onItemClick('/project/hjabsdjha')">Project</span>
    <span @click="onItemClick('/settings')">Settings</span>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'DashboardLayout',
  setup () {
    const router = useRouter()

    const onItemClick = (path: string) => {
      router.push({ path })
    }

    return { onItemClick }
  }
})
</script>
