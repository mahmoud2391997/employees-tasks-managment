import {afterEach,expect,it,vi} from 'vitest'
import {isDemoModeEnabled} from '@/lib/demo-config'
afterEach(()=>vi.unstubAllEnvs())
it('canonical flags override legacy flags and accept the agreed on/off values',()=>{
 vi.stubEnv('NODE_ENV','test');vi.stubEnv('WORKFORCE_DEMO_MODE','true')
 for(const value of ['off','false','0']){vi.stubEnv('DEMO_MODE',value);expect(isDemoModeEnabled()).toBe(false)}
 for(const value of ['on','true','1']){vi.stubEnv('DEMO_MODE',value);expect(isDemoModeEnabled()).toBe(true)}
})

it('production requires an explicit workforce switch and ignores canonical alias',()=>{vi.stubEnv('NODE_ENV','production');vi.stubEnv('WORKFORCE_DEMO_MODE',undefined);vi.stubEnv('DEMO_MODE','on');expect(isDemoModeEnabled()).toBe(false);vi.stubEnv('WORKFORCE_DEMO_MODE','true');expect(isDemoModeEnabled()).toBe(true)})
