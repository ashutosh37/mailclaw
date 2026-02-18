# Implementation Plan: Supabase & Vercel MVP

## Tech Stack
- Frontend: Next.js (App Router), Tailwind CSS.
- Backend: Supabase (Auth, Postgres, Edge Functions).
- Email: Resend.

## Architecture
- RLS for tenant isolation.
- Edge Functions for email sending triggers.
- Next.js Server Actions for data management.
