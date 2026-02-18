# Specification: Core Mailchimp Clone Engine (Supabase Edition)

## Overview
A multi-tenant email marketing platform supporting audience management, campaign creation, and high-deliverability sending infrastructure using Supabase and Vercel.

## Core Features
1. **Audience CRM**: Support for tags, segments, and custom fields.
2. **Campaign Builder**: Next.js based editor with template support.
3. **Delivery System**: Supabase Edge Functions + Resend/SendGrid.
4. **Analytics Dashboard**: Real-time stats powered by Postgres views.
5. **Multi-tenancy**: Row Level Security (RLS) for data isolation.

## Constraints
- API-first approach.
- Scalable deliverability handling via Serverless Edge Functions.
