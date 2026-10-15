ALTER TABLE "WorkforceUser" ADD COLUMN "authVersion" INTEGER NOT NULL DEFAULT 0;
CREATE TABLE "WorkforceAuditEvent" ("id" TEXT PRIMARY KEY,"actorId" TEXT NOT NULL,"teamId" TEXT NOT NULL,"action" TEXT NOT NULL,"createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP);
CREATE INDEX "WorkforceAuditEvent_teamId_createdAt_idx" ON "WorkforceAuditEvent"("teamId","createdAt");
