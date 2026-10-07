# Jays website CRM intake — October 7, 2026

Goal: every seller, buyer, financing and contact submission saves a CRM inquiry and notifies Julio.

Implemented /api/intake server bridge to the production CRM the-jays-dallas form. Replaced mailto forms; preserves inquiry type/details, supports email-only contact, shows confirmation only after CRM acknowledgment, blocks blind retry on ambiguous outcomes. Optional unchecked approved Hilltop SMS checkbox on seller form only. Buyer/contact/capital inquiries never authorize seller SMS or AI calls.

CRM migration jays_website_intake applied; atomic owner assignment, task and manual-review fields. Owner email julio@hilltophome.co and in-app notification independent of seller consent.

Checks: 9 route tests pass (all four intents, email-only contact, invalid seller, network/rejection/unconfirmed failures); lint/typecheck pass; webpack production build pass. Local Turbopack blocked by local port sandbox; production Netlify build must be verified. CRM backend 366 tests pass.

Pending: push website production main; verify Netlify deploy; controlled public-form inquiries from both websites; confirm saved CRM/tasks and signed owner-email delivery. Authorized tests only 214-701-0100 / julio@hilltophome.co.
