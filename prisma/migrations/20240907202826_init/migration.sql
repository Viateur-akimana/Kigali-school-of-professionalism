-- CreateTable
CREATE TABLE "View" (
    "id" SERIAL NOT NULL,
    "month" TEXT NOT NULL,
    "desktop" INTEGER NOT NULL,
    "mobile" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "View_pkey" PRIMARY KEY ("id")
);
