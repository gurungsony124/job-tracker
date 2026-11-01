import { useState } from 'react'
import type { ComponentProps } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Input } from '@/components/ui/input'

export function PasswordInput(props: Omit<ComponentProps<typeof Input>, 'type'>) {
  const [show, setShow] = useState(false)

  return (
    <div className="relative">
      <Input {...props} type={show ? 'text' : 'password'} className={`h-12 pr-11 ${props.className ?? ''}`} />
      <button
        type="button"
        onClick={() => setShow((v) => !v)}
        aria-label={show ? 'Hide password' : 'Show password'}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
      >
        {show ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
  )
}