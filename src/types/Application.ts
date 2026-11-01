
 export type Status = 'applied' | 'interview' | 'offer' | 'rejected'
 export interface ApplicationData{
  id:string;
  user_id:string;
  company:string;
  role:string;
  status:Status;
  applied_date:string;
  job_link:string | null;
  notes:string | null;
  created_at?:string;
}