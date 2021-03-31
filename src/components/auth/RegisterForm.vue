<template>
  <div class="register-form">
    <Form @submit="onRegisterClick" :validation-schema="registerSchema" v-slot="{ errors }">
      <div class="p-fluid p-grid p-mt-5">
        <div class="p-col-12">
          <InputText
            name="email"
            type="text"
            label="E-mail"
            placeholder="Adres E-mail"
            autocomplete="username"
            :errors="errors"
          />
        </div>
      </div>
      <div class="p-fluid p-grid">
        <div class="p-col-12">
          <InputText
            name="password"
            type="password"
            label="Password"
            placeholder="Password"
            autocomplete="new-password"
            :errors="errors"
          />
        </div>
      </div>
      <div class="p-fluid p-grid">
        <div class="p-col-12">
          <InputText
            name="confirmPassword"
            type="password"
            label="Confirm password"
            placeholder="Confirm password"
            autocomplete="new-password"
            :errors="errors"
          />
        </div>
      </div>
      <div class="p-fluid p-grid p-mb-5">
        <div class="p-col-12">
          <Button label="Register" type="submit"/>
        </div>
      </div>
    </Form>
    <div class="p-grid">
      <div class="p-col-12 p-d-flex p-align-center">
        <span class="p-mr-2">Do you already have an account?</span>
        <Button label="Login" class="p-button-text" @click="onLoginClick" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { InputText } from '@/components'
import Button from 'primevue/button'
import { useRouter } from 'vue-router'
import { useAppStore } from '@/use'
import { Form } from 'vee-validate'
import { registerSchema } from '@/plugins/yup'
import { UserForm } from '@/types'

export default defineComponent({
  name: 'RegisterForm',
  components: { InputText, Button, Form },
  setup () {
    const router = useRouter()
    const store = useAppStore()

    const onLoginClick = () => {
      router.push({ path: '/login' })
    }

    const onRegisterClick = async (value: UserForm) => {
      await store.dispatch('auth/createUser', value)
    }

    return {
      onLoginClick,
      onRegisterClick,
      registerSchema
    }
  }
})
</script>
