import { afterEach, describe, expect, it, vi } from 'vitest'

afterEach(() => {
  vi.unstubAllEnvs()
  vi.resetModules()
})

describe('recordNotification', () => {
  it('stores the notification and emails the profile', async () => {
    vi.resetModules()
    vi.stubEnv('COMPANY_NAME', 'الشركة')

    const create = vi.fn().mockResolvedValue({ id: 'n1' })
    const sendNotificationEmail = vi.fn().mockResolvedValue({ sent: true })

    vi.doMock('@/server/db', () => ({
      prisma: {
        workforceNotification: { create },
        workforceProfile: { findUnique: vi.fn().mockResolvedValue({ email: 'Alex@Example.com' }) },
      },
    }))
    vi.doMock('@/server/mail', () => ({
      configuredSiteUrl: () => 'https://workforce.example.com',
      sendNotificationEmail,
    }))

    const { recordNotification } = await import('@/server/notify')
    await recordNotification({
      userId: 'profile-alex',
      teamId: 'team-1',
      type: 'task_assigned',
      title: 'تم إسناد مهمة',
      message: 'تم إسناد المهمة "Design" إليك',
      data: { taskId: 'task-1' },
    })

    expect(create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          userId: 'profile-alex',
          type: 'task_assigned',
          title: 'تم إسناد مهمة',
        }),
      }),
    )
    expect(sendNotificationEmail).toHaveBeenCalledWith({
      to: 'alex@example.com',
      companyName: 'أعلاف الكوثر',
      title: 'تم إسناد مهمة',
      message: 'تم إسناد المهمة "Design" إليك',
      actionUrl: 'https://workforce.example.com/notifications',
    })
  })
})
