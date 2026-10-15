import bcrypt from 'bcryptjs'
import { z } from 'zod'
import { prisma } from '@/server/db'
export const accountSchema=z.object({firstName:z.string().trim().min(1).max(80),lastName:z.string().trim().max(80),currentPassword:z.string().min(1),newPassword:z.string().min(12).max(128).optional()})
export async function updateOwnAccount(userId:string,teamId:string,input:unknown){
 const body=accountSchema.parse(input)
 return prisma.$transaction(async tx=>{
  const user=await tx.workforceUser.findUnique({where:{id:userId},include:{profile:true}})
  if(!user||user.profile?.teamId!==teamId||!await bcrypt.compare(body.currentPassword,user.passwordHash))throw Error('بيانات التحقق غير صحيحة')
  await tx.workforceProfile.update({where:{id:user.profile.id},data:{firstName:body.firstName,lastName:body.lastName}})
  if(body.newPassword)await tx.workforceUser.update({where:{id:userId},data:{passwordHash:await bcrypt.hash(body.newPassword,12),authVersion:{increment:1}}})
  await tx.workforceAuditEvent.create({data:{actorId:userId,teamId,action:body.newPassword?'account.password-and-name.updated':'account.name.updated'}})
  return {changedPassword:Boolean(body.newPassword)}
 })
}
