# Manual test steps

## Member remove → reactivate (role preserved)

Prereqs:
- App is running (`pnpm dev`)
- A database is configured/migrated
- You can sign in as the company admin

Steps:
1. Go to **الأعضاء**.
2. Invite a new member (pick a non-default role if you want a stronger signal).
3. Complete the invite flow so the user appears in the members table.
4. Click **إزالة** on that member.
   - Expected: the member remains listed but becomes **غير نشط**.
5. In the invite card, enter the same email again and submit.
   - Expected: the UI switches into **إعادة التفعيل** mode (triggered by `EXISTING_USER_CAN_REACTIVATE`).
6. Submit **إعادة التفعيل**.
   - Expected: the member becomes **نشط** again.
   - Expected: the member’s **role** is the same as before removal (not reset to `EMPLOYEE`).


## Development readiness checks

- On a clean local database, sign in with generated admin credentials; confirm no demo employees/tasks appear in normal mode.
- Create an employee, invite that same email, and accept the invite. This is a known profile-reuse issue to resolve before release (see DEVELOPMENT_REVIEW.md).
- Verify task edits/deletes rejected by the API display an error and preserve the visible task.
- Verify an expired auth cookie redirects to login.
- Stop PostgreSQL and confirm admin login does not issue a fallback auth cookie.
- Test keyboard focus, Escape, and focus return in modals; focus trapping remains on the backlog.
