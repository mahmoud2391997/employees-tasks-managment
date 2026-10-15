export function checkProductionEnvironment(env=process.env) {
 if (env.NODE_ENV !== 'production') return;
 const errors=[];
 const required=(key,n=1)=>{if((env[key]||'').trim().length<n)errors.push(key+' is required (minimum '+n+' characters)')};
 required('WORKFORCE_DATABASE_URL'); required('WORKFORCE_JWT_SECRET',32);
 const url=env['WORKFORCE_DATABASE_URL'];try{if(!['postgres:','postgresql:'].includes(new URL(url).protocol))throw Error()}catch{errors.push('A PostgreSQL connection URL is required')}
 required('COMPANY_ADMIN_EMAIL'); required('COMPANY_ADMIN_PASSWORD',12); required('COMPANY_NAME'); required('SITE_URL'); try{if(new URL(env.SITE_URL).protocol!=='https:')throw Error()}catch{errors.push('SITE_URL must use HTTPS')}; if(env.DEMO_MODE && env.WORKFORCE_DEMO_MODE && env.DEMO_MODE!==env.WORKFORCE_DEMO_MODE)errors.push('Conflicting demo flags');
 for(const key of ['DEMO_MODE','WORKFORCE_DEMO_MODE','CLINIC_DEMO'])if(env[key]&&!['on','off','true','false','1','0'].includes(env[key].trim().toLowerCase()))errors.push(key+' has an unknown value');
 if(errors.length)throw Error('Production configuration invalid:\n- '+errors.join('\n- '));
}
if(process.argv[1] && import.meta.url === new URL(process.argv[1], 'file:').href){try{checkProductionEnvironment()}catch(e){console.error(e.message);process.exitCode=1}}
