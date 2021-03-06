<template>
  <div class="login-form">
    <div class="p-fluid p-grid p-mt-5">
      <div class="p-field p-col-8 p-offset-2">
        <span class="p-float-label">
            <InputText id="email" type="text" />
            <label for="email">Address E-mail</label>
        </span>
      </div>
      <div class="p-field p-col-8 p-offset-2">
        <span class="p-float-label">
            <InputText id="password" type="password" />
            <label for="password">Password</label>
        </span>
      </div>
    </div>
    <div class="p-fluid p-grid p-mb-5">
      <div class="p-col-8 p-offset-2">
        <Button label="Login"/>
      </div>
    </div>
     <div class="p-grid">
      <div class="p-col-8 p-offset-2 p-d-flex p-align-center">
        <span class="p-mr-2">Don't have an account?</span>
        <Button label="Create new" class="p-button-text" @click="onCreateNowClick" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'LoginForm',
  components: { InputText, Button },
  setup () {
    const router = useRouter()

    const onCreateNowClick = () => {
      router.push({ path: '/register' })
    }

    return { onCreateNowClick }
  }
})
</script>
