/** Salary is never inferred from employee directory permissions or a role name. */
export function canViewSalary(permissions: readonly string[]) { return permissions.includes('salary.view') }
export function canEditSalary(permissions: readonly string[]) { return permissions.includes('salary.edit') }
export function salaryForViewer<T extends {salary?: unknown}>(row:T,permissions:readonly string[]):Omit<T,'salary'>&{salary?:T['salary']} {
 const {salary,...safe}=row
 return canViewSalary(permissions)?{...safe,salary}:{...safe}
}
export function salarySubmitted(input:unknown){return typeof input==='object'&&input!==null&&Object.prototype.hasOwnProperty.call(input,'salary')}
