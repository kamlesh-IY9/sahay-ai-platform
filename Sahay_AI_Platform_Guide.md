# Sahay AI — People Platform
## Product Walkthrough & Competitive Analysis Guide
### Prepared for RAAPID · v0.4 Mockup · June 2026

---

## Table of Contents
1. [What is Sahay AI?](#1-what-is-sahay-ai)
2. [Dashboard Walkthrough — Tab by Tab](#2-dashboard-walkthrough)
3. [Agent Fleet — Live & Roadmap](#3-agent-fleet)
4. [Architecture & How It Works](#4-architecture)
5. [Security & Governance](#5-security--governance)
6. [Competitive Analysis — Sahay vs Leena AI vs Moveworks vs Build In-House](#6-competitive-analysis)
7. [Business Impact — Key Metrics](#7-business-impact)
8. [Interactive Mockup Checklist](#8-mockup-checklist)

---

## 1. What is Sahay AI?

**Sahay AI** is a full-lifecycle AI People Platform built for RAAPID. It replaces fragmented HR tools with a single copilot + agent fleet that automates hiring, onboarding, employee support, payroll, engagement, and governance — with humans always in control.

### Core Principles
| Principle | What it means |
|-----------|---------------|
| **AI suggests, humans decide** | The agent never auto-rejects candidates or approves high-risk actions on its own |
| **Grounded, not guessed** | Every answer cites your actual policy documents via RAG — no hallucination |
| **Multi-model, no lock-in** | Routes tasks to GPT-5.2, Claude Opus 4.8, Gemini 3.5, or on-prem Llama — swap anytime |
| **Data stays in your tenant** | Private RAG + role-based access; nothing trains public models |
| **Human-in-the-loop governance** | High-risk actions always pause for human approval; every action is audit-logged |

---

## 2. Dashboard Walkthrough

### 🏠 Home Tab
The landing page shows real-time operational health:

| Widget | What it shows |
|--------|---------------|
| **Time-to-productivity** | −68% faster onboarding |
| **Tickets auto-resolved** | 82% of HR queries handled by agents |
| **Avg. response time** | 26 hours → 3.4 seconds |
| **Employee eNPS** | +51 (from −5 baseline) |
| **Employee lifecycle stages** | Hire → Onboard → Manage → Develop → Retain → Offboard |
| **HR Requests chart** | Bar chart: auto-resolved vs escalated over 7 weeks |
| **Live agent activity feed** | Real-time feed of what agents are doing right now |
| **Business impact** | −77% manual HR workload · 48h → same-day onboarding · −95% data-entry errors |

> **How to check:** Click "Home" in the sidebar. All KPI numbers animate on load with smooth count-up transitions.

---

### 💼 Hire Tab
The recruitment pipeline powered by the Recruiter agent:

| Feature | How it works |
|---------|--------------|
| **Open Roles** | Lists all active job postings with applicant counts and status badges (Open / Screening) |
| **+ New Job button** | Opens a centered modal dialog to create a role — fields: title, department, location, type, skills, JD |
| **"Draft with AI" button** | Agent writes a tailored job description from the title and skills |
| **Candidate Kanban Board** | 4-column pipeline: Applied → Screening → Interview → Offer |
| **Drag & Drop** | Drag any candidate card to any column — forward or backward (undo mistakes) |
| **AI Shortlist badges** | Green "AI Shortlist" badge on cards with ≥85% fit score |
| **Candidate Detail Drawer** | Click any card → slide-in panel with AI-generated reasoning, resume match, and "Move to next stage" button |

> **How to check:** Click "Hire" → click a role → drag cards between columns → click a card to see the AI reasoning drawer.

---

### 🚀 Onboard Tab
The onboarding workflow powered by the Onboarding agent:

| Feature | How it works |
|---------|--------------|
| **New Hires list** | Shows employees pending Day-1 setup |
| **"Generate plan" button** | Click any new hire → loading animation → AI generates a personalized Week-1 onboarding checklist |
| **Checklist items** | IT provisioning, HR orientation, manager meet, compliance, welcome email |
| **Welcome Email Editor** | Live email preview that HR can review and send |

> **How to check:** Click "Onboard" → click "Generate plan" next to Aarav Shah → watch the loading screen → see the checklist and email preview.

---

### 💬 Ask Sahay Tab
The employee-facing AI chatbot:

| Feature | How it works |
|---------|--------------|
| **Chat interface** | Clean conversational UI with user/bot message bubbles |
| **Grounded answers** | Every answer cites the specific policy document and section |
| **Citation tags** | Clickable green citation badges (e.g., "Leave-Policy.pdf §3.2") |
| **Suggestion chips** | Quick-reply buttons for common follow-up questions |

> **How to check:** Click "Ask Sahay" → type a question like "How many casual leaves do I have?" → see the cited response.

---

### 👥 People Tab
The employee directory and people analytics:

| Feature | What it shows |
|---------|---------------|
| **Employee table** | Searchable directory with name, role, department, status |
| **Sentiment Trend chart** | Smooth Bezier-curve line chart showing engagement over time with hover tooltips |
| **eNPS Gauge** | Gradient ring gauge showing current eNPS score |
| **Talent Insights Radar** | 5-trait radar chart (Technical, Leadership, Communication, Adaptability, Teamwork) |

> **How to check:** Click "People" → hover over the sentiment chart points → check the eNPS gauge and radar chart.

---

### 📅 Leaves Tab
The leave and attendance management command center powered by the Leave & Attendance agent:

| Feature | How it works |
|---------|--------------|
| **Leave requests queue** | Lists pending leave requests with AI-generated pre-screening, policy rules checking, and dynamic team conflict warnings (e.g. Vikram Seth's paternity leave conflict with Priya Nair's annual leave). |
| **Interactive Approvals** | Approve or Reject button actions. Approving a leave dynamically subtracts days from the employee's balance ledger, triggers a success toast, updates the coverage calendar, and writes to the Governance Audit Log in real time. |
| **Balance Ledger** | Select an employee from the dropdown list to see their live remaining and taken days (Casual Leave, Earned Leave, Sick Leave, Paternity Leave). |
| **Coverage Heatmap Calendar** | A beautifully rendered visual presence calendar for June 2026. Green indicates full presence, Amber indicates a single planned absence, and **Rose (Red) indicates critical overlaps (under-staffed days)** that update automatically as requests are approved. |

> **How to check:** Click "Leaves" → check the pending queue → select different employees in the dropdown to view balances → click **Approve** on Vikram Seth's request and watch the calendar heatmap automatically highlight June 18–20 in **red** due to the overlap with Priya's leave!

---

### ⚙️ Control Center Tab
The admin's command center with 5 sub-panels:

| Sub-panel | What it contains |
|-----------|------------------|
| **Agent Fleet** | All 12 agents — 7 live, 5 roadmap. Click any agent tile for detailed drawer (how it works, sample run, tools, impact) |
| **Governance** | Human approval queue + audit trail. Approve/reject agent proposals. Every decision is logged with timestamp |
| **Knowledge** | Document library (policy PDFs, handbooks). Upload/delete docs. Agents answer from these |
| **Setup** | Multi-model router (Auto / Cost-optimized / Quality-first) + Integration status (HRIS, Slack, Email, etc.) |
| **How It Works** | Architecture diagram + request flow + CTO-grade design rationale |
| **Compare** | Side-by-side comparison table vs Leena AI, Moveworks, and build-in-house |

> **How to check:** Click "Control Center" → click through each sub-tab → approve/reject items in the Governance queue → click agent tiles for detail drawers.

---

## 3. Agent Fleet

### Live Agents (7) — In the Pilot Today

| # | Agent | Department | Tasks/mo | What it does |
|---|-------|------------|----------|--------------|
| 1 | **HR Helpdesk** | Employee Support | 3,180 | Answers policy, leave, IT & benefits questions from your documents — instantly, with citations |
| 2 | **Onboarding** | Onboarding | 410 | Turns "offer accepted" into a fully set-up Day 1 — plan, provisioning and warm welcome |
| 3 | **Recruiter** | Recruitment | 1,240 | Screens & ranks applicants on job-fit. Bias-audited and explainable. Never auto-rejects |
| 4 | **Interview Scheduler** | Recruitment | 860 | Coordinates interview slots, invites and reminders across everyone's calendars |
| 5 | **Engagement / VoE** | Engagement | 480 | Runs pulse surveys, tracks eNPS and themes sentiment from open feedback |
| 6 | **Payroll Analyst** | Operations | 640 | Detects payroll anomalies and variances before pay-run. Proposes fix → human approves |
| 7 | **Leave & Attendance** | Operations | 1,460 | Applies and approves leave, tracks balances. Auto-approves within policy; else routes to manager |

### Roadmap Agents (5) — Same Pattern, Next Phase

| # | Agent | Department | What it does |
|---|-------|------------|--------------|
| 8 | **Goals & Performance** | Develop | Helps set & track goals, summarizes 1:1s into clear highlights |
| 9 | **Learning Tutor** | Develop | Personalized micro-learning in the flow of work |
| 10 | **Talent Assessor** | Hire | Big Five / role-fit insights and high-potential signals — decision support only |
| 11 | **Offboarding** | Offboard | Exit checklist, knowledge handover, access deprovisioning |
| 12 | **Policy Analyst** | Governance | Step-by-step, cited guidance across employee lifecycle policies |

---

## 4. Architecture

```
┌──────────────────────┐
│  Employee / HR       │ Asks in chat, Slack, or email
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  Sahay Copilot       │ Understands intent, routes the task
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  Agent Fleet         │ The right specialist agent acts
└──────────┬───────────┘
           │
     ┌─────┼─────┐
     ▼     ▼     ▼
  ┌─────┐ ┌─────┐ ┌──────────────┐
  │ RAG │ │APIs │ │Multi-Model   │
  │Your │ │HRIS │ │Router        │
  │Docs │ │Pay  │ │GPT/Claude/   │
  │     │ │ITSM │ │Gemini/Llama  │
  └─────┘ └─────┘ └──────────────┘
```

### How a Request Flows
1. **Employee asks** in chat, Slack, or email
2. **Copilot understands** the intent and routes to the right agent
3. **Agent retrieves** relevant policy/data via RAG + system APIs
4. **Multi-model router** picks the best AI model for the task
5. **Low-risk** → instant response | **High-risk** → pauses for human approval
6. **Every action logged** in the audit trail

### Why This Design
- **No new app to learn** — employees use Slack / Teams / email
- **Managers approve** on mobile, in seconds
- **HR runs & oversees** everything in Sahay's dashboard
- **Multi-model** — best model per task; switch providers with zero rework
- **On-prem option** for sensitive data (Llama 3.1)

---

## 5. Security & Governance

| Area | How Sahay Handles It |
|------|---------------------|
| **Data residency** | All data stays in your tenant; no data sent to public model training |
| **RAG grounding** | Answers cite your actual documents — no invented facts |
| **Human-in-the-loop** | High-risk actions (payroll corrections, terminations) always require human approval |
| **Audit trail** | Every agent + human action is timestamped and logged |
| **Role-based access** | Only authorized roles see sensitive data |
| **Bias auditing** | Recruiter agent's decisions are bias-audited and explainable |
| **Model routing** | Sensitive data routes to on-prem Llama; general queries use cloud models |
| **Integration security** | All system connections via official APIs (no scraping, no unauthorized access) |

---

## 6. Competitive Analysis

### Sahay AI vs Leena AI vs Moveworks vs Build In-House

| Capability | Sahay (Ours) | Leena AI | Moveworks | Build In-House |
|:-----------|:-------------|:---------|:----------|:---------------|
| **Time to a useful pilot** | ✓✓ Weeks | ~ Weeks–months | ~ Months | ✗ Months+ |
| **Annual cost** | ✓✓ Lean / tailored | ✗ $100K+ | ✗ Enterprise $$$ | ~ Eng cost |
| **Tailored to RAAPID** | ✓✓ Custom-built | ~ Configurable | ~ Configurable | ✓✓ Custom |
| **Multi-model · no lock-in** | ✓ Multi-model | ~ Partial | ✗ Their stack | ✓ Full control |
| **Data stays in your tenant** | ✓ Yes | ~ Vendor cloud | ~ Vendor cloud | ✓ Yes |
| **Governance · human-in-loop** | ✓ Built-in | ✓ Yes | ✓ Yes | ~ Build it |
| **Integration breadth (today)** | ~ Main, growing | ✓✓ Deep | ✓✓ Deep | ✗ Build it |
| **Proven maturity / scale** | ~ New | ✓✓ Mature | ✓✓ Mature | ✗ Unproven |

> **Legend:** ✓✓ = strong | ✓ = yes | ~ = partial | ✗ = no

### The Honest Take

**Where Leena AI & Moveworks win:**
- **More mature** products with proven enterprise deployments
- **Deeper out-of-the-box integrations** (HRIS, ITSM, payroll connectors ready)
- **Established customer base** — lower perceived risk

**Where Sahay wins:**
- **Cost** — significantly leaner pricing, tailored to RAAPID's scale
- **Speed to pilot** — weeks, not months
- **Tailored** — built specifically for RAAPID's processes, not generic
- **Multi-model / no vendor lock-in** — switch between GPT, Claude, Gemini, or on-prem Llama
- **Data sovereignty** — your data stays in your tenant, not a vendor cloud
- **Transparency** — every agent decision is explainable and auditable

**Important Caveat:**
> Our column is a **pre-pilot projection**, not a proven benchmark. The competitor facts (e.g., Leena AI ≈ $100K+/yr, deploys in weeks–months) are from public sources. We earn our ticks in the pilot.

---

### Detailed Competitor Profiles

#### Leena AI
| Aspect | Detail |
|--------|--------|
| **Founded** | 2018, Mumbai |
| **Funding** | $37M+ (Series B) |
| **Focus** | Enterprise HR virtual assistant, employee engagement, onboarding |
| **Pricing** | ~$100K+/year for enterprise |
| **Deployment** | Cloud (SaaS); 2–6 months typical |
| **Strengths** | Deep HRIS/ITSM integrations, mature product, proven at scale |
| **Weaknesses** | Expensive, vendor lock-in, data resides on vendor cloud |
| **AI Model** | Proprietary models; limited model choice |

#### Moveworks
| Aspect | Detail |
|--------|--------|
| **Founded** | 2016, Mountain View |
| **Funding** | $305M+ (Series C, $2.1B valuation) |
| **Focus** | Enterprise AI copilot for IT + HR + Finance |
| **Pricing** | Enterprise pricing ($$$$); typically $100K–$500K+/year |
| **Deployment** | Cloud; typically 3–6 months |
| **Strengths** | Best-in-class IT automation, deep enterprise integrations, massive scale |
| **Weaknesses** | Very expensive, locked to their AI stack, overkill for mid-market |
| **AI Model** | Proprietary MoveLM; no model flexibility |

#### Build In-House
| Aspect | Detail |
|--------|--------|
| **Cost** | Engineering salaries (2–4 devs × 6+ months) |
| **Time** | 6–12+ months to a basic MVP |
| **Strengths** | Full control, custom to your needs |
| **Weaknesses** | Slow, expensive, ongoing maintenance burden, no pre-built agent patterns |

---

## 7. Business Impact

| Metric | Before Sahay | After Sahay | Change |
|--------|-------------|-------------|--------|
| **Manual HR workload** | 100% manual | 23% manual | **−77%** |
| **Onboarding cycle** | 48 hours | Same-day | **≈24x faster** |
| **Data-entry errors** | Frequent | Near-zero | **−95%** |
| **HR ticket resolution** | 26 hours avg | 3.4 seconds | **99.99% faster** |
| **Tickets auto-resolved** | 0% | 82% | **+82%** |
| **Employee eNPS** | −5 | +51 | **+56 points** |
| **Screening time** | Full manual | AI-assisted | **−70%** |

> *Note: These are industry-benchmark projections. Actual numbers will be validated during the pilot.*

---

## 8. Mockup Checklist

Use this checklist when demonstrating the mockup to stakeholders:

### Pre-Demo Setup
- [ ] Open `index.html` in Chrome/Edge (latest version)
- [ ] Maximize the browser window (1920×1080 recommended)
- [ ] Start on the **Home** tab

### Home Tab
- [ ] KPI cards animate with count-up numbers on load
- [ ] Bar chart shows auto-resolved vs escalated breakdown
- [ ] Live agent activity feed is visible
- [ ] Business impact numbers animate (−77%, same-day, −95%)
- [ ] Employee lifecycle stages are clickable

### Hire Tab
- [ ] Open Roles card shows 3 roles with applicant counts
- [ ] Click **"+ New Job"** → modal opens with blurred background
- [ ] Click **"Draft with AI"** → job description auto-fills
- [ ] Click **"Cancel"** → modal closes smoothly
- [ ] Kanban board shows 4 columns: Applied → Screening → Interview → Offer
- [ ] **Drag** a candidate card to another column → card moves, toast confirms
- [ ] **Drag back** to undo — works in any direction
- [ ] Empty columns show "Drag here" dashed placeholder
- [ ] Click a candidate card → detail drawer slides in with AI reasoning
- [ ] Click **"Move to Interview"** in the drawer → card advances

### Onboard Tab
- [ ] New hires list is visible
- [ ] Click **"Generate plan"** → loading animation plays
- [ ] Week-1 checklist appears with checkable items
- [ ] Welcome email preview is editable

### Leaves Tab
- [ ] Leaves sidebar navigation tab is visible and clickable
- [ ] KPI cards animate with count-up numbers on load
- [ ] Select different employees in the dropdown → leave balances ledger cards update dynamically
- [ ] Under-staffed calendar heatmap renders June 2026 dates (Priya Nair off on Jun 18-20 is amber)
- [ ] Click **"Approve"** on Vikram Seth's Paternity Leave request → balance updates, toast confirms
- [ ] Calendar heatmap dynamically colors June 15-25 as amber, and **June 18-20 as red** (due to overlap conflict warning with Priya Nair!)
- [ ] Go to **Control Center → Governance** → verify the human approval is written to the audit log trail in real-time

### Ask Sahay Tab
- [ ] Chat interface loads with suggestion chips
- [ ] Type a question → bot responds with cited answer
- [ ] Citations show green tags with policy references

### People Tab
- [ ] Employee table is searchable
- [ ] Sentiment line chart has smooth Bezier curves with hover tooltips
- [ ] eNPS gauge ring animates
- [ ] Talent radar chart is visible with trait labels

### Control Center
- [ ] **Agent Fleet**: 7 live + 5 roadmap agent tiles visible. Click any tile → detail drawer opens
- [ ] **Governance**: Approval queue with Approve/Reject buttons. Click → logged in audit trail
- [ ] **Knowledge**: Document list visible. Upload button works (mock)
- [ ] **Setup**: Multi-model router with Auto/Cost/Quality toggle. Integration status list
- [ ] **How It Works**: Architecture diagram + flow + design reasons visible
- [ ] **Compare**: Comparison table vs Leena AI, Moveworks, Build In-House

### Theme Toggle
- [ ] Click the **moon icon** (top-right) → dark mode activates smoothly
- [ ] All components render correctly in dark mode
- [ ] Click again → light mode restores

### General
- [ ] No console errors (F12 → Console tab)
- [ ] All hover effects and animations are smooth
- [ ] Search bar expands on focus
- [ ] Model selector dropdown works (Auto-route / GPT / Claude / Gemini / Llama)

---

## Quick Pitch (30-Second Elevator)

> *"Sahay AI is RAAPID's own AI People Platform — one dashboard where 12 AI agents handle hiring, onboarding, employee queries, payroll checks, and engagement tracking. Every answer is grounded in your actual policies. Every risky action pauses for a human. You can swap AI models anytime. Your data never leaves your tenant. And it costs a fraction of Leena AI or Moveworks."*

---

*Document generated: June 2026 · Sahay AI v0.4 Mockup · Built for RAAPID*
