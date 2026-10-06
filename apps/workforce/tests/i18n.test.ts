import { describe, expect, it } from 'vitest'
import { english, translate } from '@/lib/i18n/messages'
import ts from 'typescript'
import { readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'
function files(dir: string): string[] { return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => entry.isDirectory() ? files(path.join(dir, entry.name)) : entry.name.endsWith('.tsx') ? [path.join(dir, entry.name)] : []) }
describe('bilingual interface', () => {
  it('translates labels and interpolation without changing user content', () => {
    expect(translate('en', 'الموظفون')).toBe('Employees')
    expect(translate('ar', 'الموظفون')).toBe('الموظفون')
    expect(translate('en', 'مساحة عمل {company}. سجل الدخول بالبريد وكلمة المرور.', { company: 'Acme' })).toContain('Acme workspace')
    expect(translate('ar', 'HIGH')).toBe('عالية')
    expect(translate('en', 'My custom task')).toBe('My custom task')
  })
  it('has English translations for all literal Arabic UI translation keys', () => {
    const missing = new Set<string>()
    for (const file of [...files('apps/workforce/app'), ...files('apps/workforce/components')]) {
      const source = ts.createSourceFile(file, readFileSync(file, 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX)
      function visit(node: ts.Node) {
        if (ts.isCallExpression(node) && node.expression.getText(source) === 'tr' && node.arguments[0] && ts.isStringLiteral(node.arguments[0])) {
          const key = node.arguments[0].text
          if (/[\u0600-\u06ff]/.test(key) && !english[key]) missing.add(key)
        }
        ts.forEachChild(node, visit)
      }
      visit(source)
    }
    expect([...missing]).toEqual([])
  })
})
