import i18n from '@/plugins/i18n'
import * as Yup from 'yup'

const t = i18n.global.t

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Invalid format'),
  password: Yup.string()
    .required('Password is required')
})
