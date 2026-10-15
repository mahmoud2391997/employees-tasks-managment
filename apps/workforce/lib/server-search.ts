export function readSearch(params:URLSearchParams){
 const q=(params.get('q')||'').trim().slice(0,120)
 const departmentId=(params.get('departmentId')||'').slice(0,120)
 const status=(params.get('status')||'').slice(0,30)
 const assignment=params.get('assignment')||'all'
 return {q,departmentId,status,assignment}
}
export function employeeSearchWhere(params:URLSearchParams){const {q,departmentId,status}=readSearch(params);return {...(q?{OR:[{profile:{firstName:{contains:q,mode:'insensitive' as const}}},{profile:{lastName:{contains:q,mode:'insensitive' as const}}},{position:{contains:q,mode:'insensitive' as const}},{department:{name:{contains:q,mode:'insensitive' as const}}}]}:{}),...(departmentId?{departmentId}:{}),...(['ACTIVE','INACTIVE','ON_LEAVE','TERMINATED'].includes(status)?{status:status as 'ACTIVE'|'INACTIVE'|'ON_LEAVE'|'TERMINATED'}:{})}}
export function taskSearchWhere(params:URLSearchParams,profileId:string){const {q,departmentId,status,assignment}=readSearch(params);return {...(q?{OR:[{title:{contains:q,mode:'insensitive' as const}},{description:{contains:q,mode:'insensitive' as const}}]}:{}),...(departmentId?{departmentId}:{}),...(['TODO','IN_PROGRESS','REVIEW','COMPLETED'].includes(status)?{status:status as 'TODO'|'IN_PROGRESS'|'REVIEW'|'COMPLETED'}:{}),...(assignment==='me'?{assigneeId:profileId}:assignment==='by_me'?{createdById:profileId}:{})}}
