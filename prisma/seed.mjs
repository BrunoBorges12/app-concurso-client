import "dotenv/config";
import { randomUUID } from "node:crypto";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import { hashPassword } from "better-auth/crypto";

const adminPassword = process.env.ADMIN_PASSWORD;
const adminEmail = process.env.ADMIN_EMAIL ?? "admin@vida-pessoal.local";
const adminName = process.env.ADMIN_NAME ?? "Administrador";
const connectionString = process.env.DATABASE_URL;

if (!adminPassword) {
  throw new Error("ADMIN_PASSWORD nao configurada no .env.");
}

if (!connectionString) {
  throw new Error("DATABASE_URL nao configurada no .env.");
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function createAdminUser() {
  const now = new Date();
  const adminUser = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {
      name: adminName,
      emailVerified: true,
      updatedAt: now,
    },
    create: {
      id: randomUUID(),
      name: adminName,
      email: adminEmail,
      emailVerified: true,
      image: null,
      createdAt: now,
      updatedAt: now,
    },
  });
  const passwordHash = await hashPassword(adminPassword);
  await prisma.account.upsert({
    where: { providerId_accountId: { providerId: "credential", accountId: adminUser.id } },
    update: {
      password: passwordHash,
      updatedAt: now,
    },
    create: {
      id: randomUUID(),
      userId: adminUser.id,
      accountId: adminUser.id,
      providerId: "credential",
      password: passwordHash,
      createdAt: now,
      updatedAt: now,
    },
  });
}

try {
  await createAdminUser();
  console.log(`Admin seed concluido para ${adminEmail}.`);
} finally {
  await prisma.$disconnect();
}
