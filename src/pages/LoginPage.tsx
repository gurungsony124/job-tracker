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
      <div className="flex min-h-screen items-center justify-center bg-background p-4">
        <div className="w-full max-w-md rounded-xl border bg-card p-6 shadow-sm">
          <LoginForm onSubmit={handleLogin} error={error} />
        </div>
      </div>
    </>
  )
}
