import { Logo } from "@/components/Logo";
import SignupForm, { type SignupValues } from "@/features/Auth/signup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | undefined>()
  const handleLogin = (values: SignupValues) => {
    setError(undefined);
    console.log(values, "values are:")
    navigate('/applications')

  }
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-background p-4 ">
        <div className="w-full max-w-md rounded-xl border bg-card p-6 shadow-sm">
          <Logo tagline="Track every application in one place" />
          <SignupForm onSubmit={handleLogin} error={error} />
        </div>



      </div>

    </>
  )
}
