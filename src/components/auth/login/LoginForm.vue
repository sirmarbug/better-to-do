<template>
  <div class="p-fluid p-grid">
    <div class="p-field p-col-12">
        <span class="p-float-label">
            <InputText id="email" type="text" />
            <label for="email">InputText</label>
        </span>
    </div>
    <div class="p-field p-col-12">
        <span class="p-float-label">
            <InputText id="password" type="text" />
            <label for="password">InputText</label>
        </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import InputText from 'primevue/inputtext'

export default defineComponent({
  name: 'LoginForm',
  components: { InputText }
})
</script>

<style lang="scss" scoped>

</style>
