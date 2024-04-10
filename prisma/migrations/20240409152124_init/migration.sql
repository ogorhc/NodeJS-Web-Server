-- CreateTable
CREATE TABLE "product" (
    "id" SERIAL NOT NULL,
    "text" VARCHAR NOT NULL,
    "completedAt" TIMESTAMP,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);
