import {prisma} from '@/server/db'
import {companySettingsSchema} from '@/lib/branding'
export async function saveCompanySettings(teamId:string,actorId:string,input:unknown){
 const data=companySettingsSchema.parse(input)
 await prisma.$transaction(async tx=>{
  const team=await tx.workforceTeam.findUnique({where:{id:teamId},select:{details:true}})
  if(!team)throw Error('الشركة غير موجودة')
  const details=team.details&&typeof team.details==='object'&&!Array.isArray(team.details)?team.details as Record<string,unknown>:{}
  await tx.workforceTeam.update({where:{id:teamId},data:{name:data.name,details:{...details,...Object.fromEntries(Object.entries(data).filter(([key,value])=>key!=='name'&&value!==undefined))} as any}})
  await tx.workforceAuditEvent.create({data:{actorId,teamId,action:'company.settings.updated'}})
 })
}
