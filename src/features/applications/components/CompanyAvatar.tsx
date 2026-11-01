const colors = [
  'bg-indigo-50 text-indigo-600',
  'bg-green-50 text-green-600',
  'bg-red-50 text-red-600',
  'bg-amber-50 text-amber-600',
  'bg-sky-50 text-sky-600',
  'bg-gray-100 text-gray-700',
]

function pickColor(name:string) {
  let hash = 0
  for(const char of name) hash += char.charCodeAt(0)
    return colors[hash % colors.length ]
}

export function CompanyAvatar({name}: {name:string}){
  return(
    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-base font-bold ${pickColor(name)}`}>
      {name.charAt(0).toUpperCase()}
    </div>
  )
}