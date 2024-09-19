/*
  Warnings:

  - Added the required column `jobType` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "jobType" VARCHAR(20) NOT NULL;
