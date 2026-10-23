CREATE TABLE "WorkforceLoginAttempt" (
    "key" VARCHAR(64) NOT NULL,
    "attempts" INTEGER NOT NULL,
    "expiresAt" TIMESTAMPTZ(3) NOT NULL,
    CONSTRAINT "WorkforceLoginAttempt_pkey" PRIMARY KEY ("key")
);
CREATE INDEX "WorkforceLoginAttempt_expiresAt_idx" ON "WorkforceLoginAttempt"("expiresAt");
