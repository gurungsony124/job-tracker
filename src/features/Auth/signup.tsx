import { FormField } from "@/components/FormField";
import { PasswordInput } from "@/components/PasswordInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from 'yup'

export interface SignupValues {
  fullname: string;
  email: string;
  password: string;
  confirm_password: string;
}
const signupValuesForm = Yup.object({
  fullname: Yup.string().required("FullName is required"),
  email: Yup.string().email("Enter a valid email").required("Email is required"),
  password: Yup.string().required("Password is required")
    .min(8, 'Password must be at least 8 characters')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).+$/,
      'Password must contain letters, numbers, and symbols'),
  confirm_password: Yup.string().required("Confirm Password is required")
    .oneOf([Yup.ref('password')], 'Passwords must match'),
})
interface Props {
  onSubmit: (values: SignupValues) => void | Promise<void>
  error?: string
}
export default function SignupForm({ onSubmit, error }: Props) {
  const formik = useFormik<SignupValues>({
    initialValues: { fullname: '', email: '', password: '', confirm_password: '' },
    validationSchema: signupValuesForm,
    onSubmit: async (values) => {
      await onSubmit(values)
    },
  })
  const showError = (field: keyof SignupValues) =>
    formik.touched[field] ? formik.errors[field] : undefined


  return (
    <>

      <form onSubmit={formik.handleSubmit} className="flex flex-col mt-8 gap-10">
        <div>
          <h2 className="text-2xl font-bold">Create Your Account</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Join JobTracker to start tracking your applications.
          </p>

        </div>
        <div className="flex flex-col gap-5">
          <FormField label="Full Name" htmlFor="fullname" error={showError('fullname')}>
            <Input
              id="fullname"
              name="fullname"
              type="fullname"
              placeholder="Sony Gurung"
              className="h-12"
              value={formik.values.fullname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              aria-invalid={!!showError('fullname')}
            />

          </FormField>
          <FormField label="Email" htmlFor="email" error={showError('email')}>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="name@company.com"
              className="h-12"
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
          <FormField label="Confirm Password" htmlFor="password" error={showError('confirm_password')}>
            <PasswordInput
              id="confirm_password"
              name="confirm_password"
              placeholder="Confirm your password"
              value={formik.values.confirm_password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              aria-invalid={!!showError('confirm_password')}
            />
          </FormField>
          {error && <p className="text-sm text-destructive">{error}</p>}

          <Button type="submit" className="h-12 w-full" disabled={formik.isSubmitting}>
            {formik.isSubmitting ? 'Signing in...' : 'Sign In'}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account? {' '}
            <Link to="/login" className="font-semibold text-primary">
              Login
            </Link>
          </p>
        </div>




      </form>
    </>
  )
}
