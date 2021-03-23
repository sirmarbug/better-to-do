<template>
  <div class="login-form">
    <Form @submit="onSubmit" :validation-schema="loginSchema" v-slot="{ errors }">
      <div class="p-fluid p-grid p-mt-5">
        <div class="p-col-8 p-offset-2">
          <InputText
            name="email"
            type="text"
            label="E-mail"
            placeholder="Adres E-mail"
            :errors="errors"
          />
        </div>
        <div class="p-col-8 p-offset-2">
          <InputText
            name="password"
            type="password"
            label="Password"
            placeholder="Password"
            :errors="errors"
          />
        </div>
      </div>
      <div class="p-fluid p-grid p-mb-5">
        <div class="p-col-8 p-offset-2">
          <Button type="submit" label="Login"/>
        </div>
      </div>
    </Form>
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
import Button from 'primevue/button'
import { useRouter } from 'vue-router'
import { Form } from 'vee-validate'
import InputText from '@/components/forms/InputText.vue'
import { loginSchema } from '@/plugins/yup'

export default defineComponent({
  name: 'LoginForm',
  components: { Button, Form, InputText },
  setup () {
    const router = useRouter()

    const onCreateNowClick = () => {
      router.push({ path: '/register' })
    }

    const onSubmit = (vaule: any, actions: any) => {
      console.log('onSubmit', [vaule, actions])
    }

    return {
      onCreateNowClick,
      loginSchema,
      onSubmit
    }
  }
})
</script>
