-- Keep Better Auth tables separate from the FastAPI/Alembic-managed public schema.
CREATE SCHEMA IF NOT EXISTS "better_auth";

ALTER TABLE IF EXISTS "public"."user" SET SCHEMA "better_auth";
ALTER TABLE IF EXISTS "public"."session" SET SCHEMA "better_auth";
ALTER TABLE IF EXISTS "public"."account" SET SCHEMA "better_auth";
ALTER TABLE IF EXISTS "public"."verification" SET SCHEMA "better_auth";
