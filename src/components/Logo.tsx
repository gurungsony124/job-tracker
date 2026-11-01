interface LogoProps{
  size?: 'sm' | 'md'
  tagline?:string
}
export function Logo({size='md', tagline}:LogoProps){
  const box = size === 'md' ? 'h-9 w-9 text-lg' : 'h-7 w-7 text-sm'
  const text = size === 'md' ? 'text-xl' : 'text-base'
  return (
     <div className="flex flex-col items-center gap-1">
      <div className="flex items-center gap-2">
        <div className={`flex items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground ${box}`}>
          J
        </div>
        <span className={`font-bold text-foreground ${text}`}>JobTracker</span>
      </div>
      {tagline && <p className="text-sm text-muted-foreground">{tagline}</p>}
    </div>
  )
}