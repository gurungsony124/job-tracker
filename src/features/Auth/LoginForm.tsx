import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { FormField } from '@/components/FormField'
import { PasswordInput } from '@/components/PasswordInput'

export interface LoginValues {
  email: string
  password: string
}

const schema = Yup.object({
  email: Yup.string().email('Enter a valid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
})

interface Props {
  onSubmit: (values: LoginValues) => void | Promise<void>
  error?: string
}

export function LoginForm({ onSubmit, error }: Props) {
  const formik = useFormik<LoginValues>({
    initialValues: { email: '', password: '' },
    validationSchema: schema,
    onSubmit: async (values) => {
      await onSubmit(values)
    },
  })

  const showError = (field: keyof LoginValues) =>
    formik.touched[field] ? formik.errors[field] : undefined

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
      <div>
        <h1 className="text-2xl font-bold">Welcome back!</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Log in to continue tracking your jobs.
        </p>
      </div>

      <FormField label="Email" htmlFor="email" error={showError('email')}>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="name@company.com"
          className="h-12 px-6"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          aria-invalid={!!showError('email')}
        />
      </FormField>

      <FormField label="Password" htmlFor="password" error={showError('password')}>
        <PasswordInput
          id="password"
          name="password"
          placeholder="Enter your password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          aria-invalid={!!showError('password')}
        />
      </FormField>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <Button type="submit" className="h-12 w-full" disabled={formik.isSubmitting}>
        {formik.isSubmitting ? 'Logging in...' : 'Log In'}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        No account?{' '}
        <Link to="/signup" className="font-semibold text-primary">
          Sign up
        </Link>
      </p>
    </form>
  )
}
