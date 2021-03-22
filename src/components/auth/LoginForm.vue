<template>
  <div class="login-form">
    <Form @submit="onSubmit" :validation-schema="loginSchemat" v-slot="{ errors }">
      <div class="p-fluid p-grid p-mt-5">
        <div class="p-col-8 p-offset-2">
          <div class="p-field">
            <label for="email" :class="{ 'p-error': errors.email }">E-mail</label>
            <Field name="email" id="email" type="text" class="p-inputtext p-component p-mb-1" :class="{ 'p-invalid': errors.email }" />
            <small class="p-error">{{ errors.email }}</small>
          </div>
        </div>
        <div class="p-col-8 p-offset-2">
          <div class="p-field">
            <label for="password" :class="{ 'p-error': errors.password }">Password</label>
            <Field name="password" id="password" type="password" class="p-inputtext p-component p-mb-1" :class="{ 'p-invalid': errors.password }" />
            <small class="p-error">{{ errors.password }}</small>
          </div>
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
import { Form, Field } from 'vee-validate'
import * as Yup from 'yup'

export default defineComponent({
  name: 'LoginForm',
  components: { Button, Form, Field },
  setup () {
    const router = useRouter()

    const onCreateNowClick = () => {
      router.push({ path: '/register' })
    }

    const onSubmit = (vaule: any, actions: any) => {
      console.log('onSubmit', [vaule, actions])
    }

    const loginSchemat = Yup.object().shape({
      email: Yup.string()
        .required('Email is required'),
      password: Yup.string()
        .required('Password is required')
    })

    return {
      onCreateNowClick,
      loginSchemat,
      onSubmit
    }
  }
})
</script>
