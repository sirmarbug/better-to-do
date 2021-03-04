<template>
  <div class="login">
    <h1>Project: {{ projectId }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'Project',
  setup () {
    const route = useRoute()

    const projectId = route.params.id

    return { projectId }
  }
})
</script>
