-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "passwordReset" TEXT,
    "nickname" TEXT,
    "salt" TEXT NOT NULL,
    "emailConfirm" TEXT,
    "role" INTEGER,
    "token" TEXT,
    "loggedIn" INTEGER,
    "online" INTEGER,
    "lastActivity" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pageviews" INTEGER DEFAULT 0,
    "onlineTime" INTEGER DEFAULT 0,
    "linkCount" INTEGER DEFAULT 0,
    "editCount" INTEGER DEFAULT 0,
    "reportCount" INTEGER DEFAULT 0,
    "grabCount" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Report" (
    "id" SERIAL NOT NULL,
    "issueId" INTEGER NOT NULL,
    "issueType" TEXT NOT NULL,
    "description" TEXT,
    "email" TEXT,
    "count" INTEGER DEFAULT 0,
    "userAgent" TEXT,
    "fixerUserId" INTEGER NOT NULL,
    "dateReported" TIMESTAMP(3),
    "dateFixed" TIMESTAMP(3),
    "createdBy" INTEGER NOT NULL DEFAULT 0,
    "updatedBy" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_salt_key" ON "User"("salt");
