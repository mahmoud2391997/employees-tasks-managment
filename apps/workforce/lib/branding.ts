import {z} from 'zod'
import {BRAND} from './brand'
export const DEFAULT_BRAND_COLOR='#0f766e'
export const brandColorSchema=z.string().regex(/^#[0-9a-fA-F]{6}$/).transform(v=>v.toLowerCase())
export const companySettingsSchema=z.object({
 name:z.string().trim().min(2).max(120).refine(v=>!/[\u0000-\u001f\u007f]/.test(v)),
 systemName:z.string().trim().min(1).max(80).refine(v=>!/[\u0000-\u001f\u007f]/.test(v)).optional(),
 brandColor:brandColorSchema.optional(),
 phone:z.string().trim().max(30).optional(),email:z.union([z.literal(''),z.string().email()]).optional(),address:z.string().trim().max(300).optional(),
})
export type Branding={systemName:string;brandColor:string}
export function brandingFromDetails(details:unknown):Branding {
 const d=details&&typeof details==='object'&&!Array.isArray(details)?details as Record<string,unknown>:{}
 const name=typeof d.systemName==='string'?d.systemName.trim():''
 return {systemName:name&&name.length<=80&&!/[\u0000-\u001f\u007f]/.test(name)?name:BRAND.name,brandColor:brandColorSchema.safeParse(d.brandColor).success?String(d.brandColor).toLowerCase():DEFAULT_BRAND_COLOR}
}
function luminance(hex:string){const values=hex.slice(1).match(/../g)!.map(v=>parseInt(v,16)/255).map(v=>v<=0.04045?v/12.92:((v+0.055)/1.055)**2.4);return values[0]*0.2126+values[1]*0.7152+values[2]*0.0722}
export function contrastRatio(a:string,b:string){const x=luminance(a),y=luminance(b);return (Math.max(x,y)+0.05)/(Math.min(x,y)+0.05)}
function mix(hex:string,target:number,ratio:number){return '#'+hex.slice(1).match(/../g)!.map(v=>Math.round(parseInt(v,16)*(1-ratio)+target*ratio).toString(16).padStart(2,'0')).join('')}
/** Text and primary buttons always retain at least 4.5:1 against white. */
export function readableBrandColor(input:string){let color=brandColorSchema.safeParse(input).success?input:DEFAULT_BRAND_COLOR;while(contrastRatio(color,'#ffffff')<4.5)color=mix(color,0,0.08);return color}
export function brandingVariables(input:Branding){const color=brandColorSchema.parse(input.brandColor),ink=readableBrandColor(color);return {
 '--brand-selected':color,'--color-brand-50':mix(color,255,0.96),'--color-brand-100':mix(color,255,0.90),'--color-brand-200':mix(color,255,0.8),'--color-brand-300':mix(color,255,0.6),'--color-brand-400':mix(color,255,0.3),'--color-brand-500':color,'--color-brand-600':ink,'--color-brand-700':mix(ink,0,0.15),'--color-brand-800':mix(ink,0,0.3),'--color-brand-900':mix(ink,0,0.45),'--color-brand-950':mix(ink,0,0.65),
}}
