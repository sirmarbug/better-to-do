<template>
  <div class="register-form">
    <div class="p-fluid p-grid p-mt-5">
      <div class="p-field p-col-8 p-offset-2">
        <span class="p-float-label">
            <InputText v-model="loginForm.email" id="email" type="text" />
            <label for="email">Address E-mail</label>
        </span>
      </div>
      <div class="p-field p-col-8 p-offset-2">
        <span class="p-float-label">
            <InputText v-model="loginForm.password" id="password" type="password" />
            <label for="password">Password</label>
        </span>
      </div>
      <div class="p-field p-col-8 p-offset-2">
        <span class="p-float-label">
            <InputText v-model="loginForm.repeatPassword" id="repeat-password" type="password" />
            <label for="repeat-password">Repeat password</label>
        </span>
      </div>
    </div>
    <div class="p-fluid p-grid p-mb-5">
      <div class="p-col-8 p-offset-2">
        <Button label="Register" @click="onRegisterClick"/>
      </div>
    </div>
    <div class="p-grid">
      <div class="p-col-8 p-offset-2 p-d-flex p-align-center">
        <span class="p-mr-2">Do you already have an account?</span>
        <Button label="Login" class="p-button-text" @click="onLoginClick" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'RegisterForm',
  components: { InputText, Button },
  setup () {
    const router = useRouter()
    const store = useStore()
    const loginForm = reactive({
      email: '',
      password: '',
      repeatPassword: ''
    })

    const onLoginClick = () => {
      router.push({ path: '/login' })
    }

    const onRegisterClick = async () => {
      await store.dispatch('auth/createUser', loginForm)
    }

    return { onLoginClick, onRegisterClick, loginForm }
  }
})
</script>
