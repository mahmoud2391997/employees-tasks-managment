import {cache} from 'react'
import {resolveWorkforceDatabaseUrl} from '@workforce/database/env'
import {prisma} from '@/server/db'
import {brandingFromDetails} from '@/lib/branding'
export const getTeamBranding=cache(async(teamId:string|null|undefined)=>{
 if(!teamId)return brandingFromDetails(null)
 const team=await prisma.workforceTeam.findUnique({where:{id:teamId},select:{details:true}})
 return brandingFromDetails(team?.details)
})
/** Public login exposes only the configured company's approved name/color, never contacts or team IDs. */
export const getPublicBranding=cache(async()=>{
 const email=process.env.COMPANY_ADMIN_EMAIL?.trim().toLowerCase()
 if(!resolveWorkforceDatabaseUrl()||!email)return brandingFromDetails(null)
 const team=await prisma.workforceTeam.findFirst({where:{owner:{email}},orderBy:{createdAt:'asc'},select:{details:true}})
 return brandingFromDetails(team?.details)
})
