import type { Status } from "@/types/Application";

interface StatusDetil{
  badge:string;
  dot:string
}

const styles:Record<Status, StatusDetil> = {
  applied: {badge:'bg-blue-50 text-blue-700', dot:'bg-blue-500' },
  interview:{ badge: 'bg-amber-50 text-amber-700', dot: 'bg-amber-500'},
   offer:     { badge: 'bg-green-50 text-green-700', dot: 'bg-green-500' },
  rejected:  { badge: 'bg-red-50 text-red-700',     dot: 'bg-red-500' },
}

export function StatusBadge({status}: {status:Status}){
  const s= styles[status]
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium capitalize ${s.badge}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
      {status}
    </span>
  )
}