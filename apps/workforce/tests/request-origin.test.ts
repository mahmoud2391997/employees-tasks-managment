import {expect,it} from 'vitest'
import {allowsApiOrigin} from '@/lib/request-origin'
const request={method:'POST',pathname:'/api/tasks',origin:'https://employee.example.test',requestUrl:'http://internal:3001/api/tasks',siteUrl:'https://employee.example.test',production:true}
it('covers every unsafe API method, refuses missing/cross-site/opaque origins and fail-closes configuration',()=>{
 for(const method of ['POST','PUT','PATCH','DELETE']){
  expect(allowsApiOrigin({...request,method})).toBe(true)
  for(const origin of [null,'null','https://foreign.example.test','https://employee.example.test.attacker.test'])expect(allowsApiOrigin({...request,method,origin})).toBe(false)
 }
 expect(allowsApiOrigin({...request,pathname:'/api/tasks/id.with.dot',origin:null})).toBe(false)
 expect(allowsApiOrigin({...request,siteUrl:undefined})).toBe(false)
 expect(allowsApiOrigin({...request,siteUrl:'http://employee.example.test'})).toBe(false)
})
it('exempts only safe reads and the exact bearer-protected worker endpoint',()=>{
 expect(allowsApiOrigin({...request,method:'GET',origin:null})).toBe(true)
 expect(allowsApiOrigin({...request,pathname:'/api/internal/outbox',origin:null})).toBe(true)
 expect(allowsApiOrigin({...request,pathname:'/api/internal/outbox/extra',origin:null})).toBe(false)
 expect(allowsApiOrigin({...request,pathname:'/api/internal/outbox',method:'DELETE',origin:null})).toBe(false)
})
