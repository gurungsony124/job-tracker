import { Logo } from '@/components/Logo'
import { FormField } from '@/components/FormField'
import { PasswordInput } from '@/components/PasswordInput'
import { Input } from '@/components/ui/input'
import { StatusBadge } from '@/features/applications/components/StatusBadge'
import { CompanyAvatar } from '@/features/applications/components/CompanyAvatar'

export default function App() {
  return (
    <div className="mx-auto min-h-screen max-w-md space-y-8 bg-background p-6">
      <Logo tagline="Track every application in one place" />

      <div className="flex flex-wrap gap-2">
        <StatusBadge status="applied" />
        <StatusBadge status="interview" />
        <StatusBadge status="offer" />
        <StatusBadge status="rejected" />
      </div>

      <div className="flex gap-2">
        {['Linear', 'Notion', 'Stripe', 'Airbnb', 'Vercel'].map((c) => (
          <CompanyAvatar key={c} name={c} />
        ))}
      </div>

      <FormField label="Email" htmlFor="email">
        <Input id="email" placeholder="name@company.com" className="h-12" />
      </FormField>

      <FormField label="Company" htmlFor="company" error="Company name is required">
        <Input id="company" aria-invalid className="h-12" />
      </FormField>

      <FormField label="Password" htmlFor="password">
        <PasswordInput id="password" placeholder="Enter password" />
      </FormField>
    </div>
  )
}