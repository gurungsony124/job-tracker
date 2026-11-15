import { LoginForm, type LoginValues } from "@/features/Auth/LoginForm";
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | undefined>()
  const handleLogin = (values: LoginValues) => {
    setError(undefined);
    console.log(values, "values are:")
    navigate('/applications')

  }
  return (
    <>
      <div>Login Page</div>
      <LoginForm onSubmit={handleLogin} error={error} />
    </>
  )
}
