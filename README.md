# Raapid AI — People Platform (v2.0 · two-sided working prototype)

A **two-sided HR platform prototype**: an **HR side** (Anita Desai) and an **Employee side**
(Priya Sharma · Arjun Mehta · Sneha Kulkarni) sharing one live state — what an employee does
**instantly reflects** on the HR side, and vice-versa. Still honestly a prototype (demo data,
"Prototype" pill always visible), but every flow genuinely works end-to-end.

## Run it
- **Zero install:** double-click `index.html`. State persists in `localStorage`.
- **Reset demo data** any time: login screen footer, or avatar menu (top-right).
- **Switch person:** avatar (top-right) → *Switch role / person*. Data stays.

## Deploy
- **GitHub Pages:** push this folder's contents — works as-is (chatbot uses the built-in
  guarded offline engine, badge shows *Offline assistant*).
- **Vercel (full version):** `vercel deploy` this folder and set the env var
  **`ANTHROPIC_API_KEY`** → the chat auto-upgrades to **Live AI** (badge turns green).
  The key lives only in `api/chat.js` (serverless), never in the page.

## The 6-minute CEO demo script

1. **Login screen (15s).** "One platform, two sides. Let me start as an employee."
   → click **Priya Sharma** (new joiner).
2. **My Home (30s).** Personal worklist: pending documents, onboarding tasks, leave balances.
   "The system already knows what she owes HR."
3. **Documents (40s).** Upload PAN (any file) → status flips to *Submitted · awaiting HR*.
4. **Ask Raapid — guardrails (60s).** Type gibberish → it pushes back. Ask "tell me a joke" →
   politely refuses, HR-topics only. Ask **"what's my leave balance?"** → real numbers, cited.
5. **Ask Raapid — agent action (45s).** Type **"apply sick leave for tomorrow"** → it parses,
   shows a confirmation card (balance-checked) → Confirm → "filed, pending with HR."
   **"The agent does the task; a human still approves."**
6. **Speak Up (60s).** Open Speak Up: two modes — **Confidential** (identity sealed to the IC,
   §16) vs **Anonymous** (preliminary assessment, Kerala HC). Click **"Know the law"** →
   the cited legal toolkit. Submit an anonymous tip.
7. **Switch to Anita (HR) (20s).** Avatar → switch → **Anita Desai**. Home worklist now shows:
   leave to approve, PAN to verify, POSH case in queue — live counts.
8. **Leaves (30s).** Priya's requests (one marked *filed by agent*) → **Approve** → her balance
   updates instantly.
9. **Documents (20s).** PAN in the verification queue → **Verify**.
10. **POSH · IC (45s).** Sealed queue: anonymous tip has *no identity anywhere*; a confidential
    case hides the name until **"Open IC view"** — and that unmask is itself audit-logged.
    The general audit trail never shows a complainant name.
11. **Switch back to Priya (20s).** Leave: *Approved* ✓. PAN: *Verified* ✓. Round trip complete.
12. **Close (15s).** "Same pattern covers expenses, attendance corrections, profile changes,
    helpdesk, payroll and offboarding — all human-in-the-loop, all audited. This is a prototype;
    the build roadmap is the next conversation."

## What's working (all verified end-to-end, 31 automated checks)
- Role-picker login · role-filtered navigation · persistent shared state (localStorage)
- **Employee:** leave apply (balance-validated) · attendance check-in + regularization ·
  document upload + letter requests · payslips (viewable/printable) · expense claims ·
  helpdesk tickets · profile edits (HR-verified) · Speak Up (POSH)
- **HR:** leave approvals (updates employee balance live) · document verification queue +
  per-employee status · helpdesk inbox (reply→resolve) · payroll run snapshot · offboarding
  checklist · governance queue now includes self-service items · POSH IC sealed queue
- **Chatbot:** gibberish + off-topic guardrails · role-aware answers with citations + action
  chips · honest abstention ("I don't have that…") with ticket escalation · **agent actions**
  (apply leave / raise ticket / request letter) with confirm + HR approval · POSH keywords
  route to Speak Up, never casual chat · optional **Live AI** via Vercel + `ANTHROPIC_API_KEY`
- Light/dark themes · responsive (mobile drawer nav) · premium motion (staggered cards,
  status-flip animations, login shimmer) · `prefers-reduced-motion` respected

## Honesty notes (say these out loud)
- The **"Prototype"** pill stays visible; numbers are illustrative.
- Files aren't actually stored (names only); payslip figures are derived demo values.
- The POSH legal toolkit is a researched plain-language summary (ssrana.in, corridalegal.com,
  rainmaker.co.in, mondaq.com) — not legal advice.
- Offline chatbot answers come from a curated intent base; the Live AI mode is grounded via
  a policy pack in the serverless prompt — both refuse rather than invent.
