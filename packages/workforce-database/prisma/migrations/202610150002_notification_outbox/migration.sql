ALTER TABLE "WorkforceNotification" ADD COLUMN "emailStatus" TEXT NOT NULL DEFAULT 'SKIPPED';
ALTER TABLE "WorkforceNotification" ALTER COLUMN "emailStatus" SET DEFAULT 'PENDING';
ALTER TABLE "WorkforceNotification" ADD COLUMN "emailAttempts" INTEGER NOT NULL DEFAULT 0;
