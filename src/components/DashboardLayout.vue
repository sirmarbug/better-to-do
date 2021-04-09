<template>
  <div class="dashboard-layout">
    <Navbar />
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '@/components/dashboard/Navbar.vue'

export default defineComponent({
  name: 'DashboardLayout',
  components: { Navbar }
})
</script>
