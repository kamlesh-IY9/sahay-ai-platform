/**
 * Raapid AI — live chatbot brain (Vercel serverless function).
 *
 * Deploy this folder to Vercel and set the env var ANTHROPIC_API_KEY.
 * The frontend pings GET /api/chat on load; if it answers, the chat
 * switches to "Live AI" and POSTs questions here. If not (e.g. on
 * GitHub Pages), the built-in offline engine answers instead.
 *
 * The API key lives ONLY here (server-side env) — never in the page.
 */

const POLICIES = `
RAAPID HR POLICY PACK (demo corpus — cite the doc names below):

[Leave-Policy.pdf §3.2] Annual entitlement: 12 Casual, 10 Sick, 15 Earned.
Casual needs 1-day notice. Sick leave of 2 days or less is auto-approved.
Earned leave needs 7-day notice. Unused earned leave carries over (max 30).
Holidays 2026: Aug 15, Oct 2, Oct 20-21 (Diwali), Nov 5, Dec 25.

[Payroll-FAQ.md] Payslips are credited/published on the 1st of each month.
Structure: 50% basic, 20% HRA, remainder special allowance. Form-16 is
issued by 15 June. PF: 12% employee + 12% employer. Gratuity after 5 years.

[Workplace-Policy.pdf §5] Hybrid: 3 days in-office, 2 flexible.
[Workplace-Policy.pdf §12] Notice period: 60 days for permanent employees;
can be waived/shortened with manager approval.

[Benefits-Guide.pdf] Mediclaim: ₹5L family floater from day one + EAP
(confidential counselling).

[Expense-Policy.pdf] Internet reimbursed up to ₹1,500/month. Travel needs
receipts. Approval ~3 working days.

[IT-Policy.pdf] Standard laptop: M3 MacBook Air or ThinkPad T14; upgrade
every 3 years. Issues → helpdesk ticket.

[Performance-Cycle.pdf] Appraisals twice a year: H1 (October), H2 (April).
Self-evaluations open 2 weeks prior.

[POSH-Policy.pdf] RAAPID has an Internal Committee per the POSH Act 2013.
Reports via the Speak Up channel go only to the IC. Identity protected
under §16. Anonymous tips get a preliminary assessment (Kerala HC position).
Retaliation is prohibited.

PLATFORM GUIDE (how-to answers):
Employees: My Leaves → Apply leave (balance-checked, goes to HR) · Attendance
→ Check in / click a red day to regularize · My Documents → upload Aadhaar/PAN
(HR verifies) / Request a letter · Payslips → view & download · Expenses →
New claim · Helpdesk → New ticket · Speak Up → confidential or anonymous POSH
report · My Profile → edits go to HR for verification.
HR: Hire → New job / candidate pipeline · Onboard → Add hire + Generate ·
Leaves → approve requests (updates employee balance live) · Documents →
verification queue + per-employee status · Helpdesk → reply & resolve ·
Payroll → monthly run summary · POSH·IC → sealed case queue (§16) · Control
Center → Agents / Governance approvals / Knowledge / Integrations / Offboarding.
`;

const SYSTEM = `You are Raapid, RAAPID's HR assistant inside the Raapid AI People Platform prototype.

STRICT RULES:
1. Answer ONLY HR topics and questions about using this platform. For anything
   else (weather, sports, coding, general knowledge, jokes), politely refuse in
   one sentence and steer back to HR.
2. Ground every policy answer in the POLICY PACK below. Cite the document name
   (e.g. "Leave-Policy.pdf §3.2") at the end. If the pack doesn't cover it, say
   "I don't have that in my policy documents" and suggest raising a helpdesk
   ticket — NEVER invent a policy.
3. If the user mentions harassment or a POSH concern, do not discuss details in
   chat. Direct them with care to the Speak Up channel (confidential or
   anonymous, goes only to the Internal Committee, §16 protects identity,
   retaliation is prohibited).
4. Keep answers short (2-4 sentences), warm and clear. Use <b> for key facts.
   You may use the user's first name.
5. You are a prototype with demo data — if asked about a specific person's
   private data you don't have, say so.

${POLICIES}`;

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  // Health check — the frontend uses this to switch to "Live AI"
  if (req.method === 'GET') {
    if (!process.env.ANTHROPIC_API_KEY) return res.status(503).json({ ok: false, reason: 'no key configured' });
    return res.status(200).json({ ok: true });
  }

  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

  try {
    const { question, role, name, context } = req.body || {};
    if (!question || typeof question !== 'string' || question.length > 2000) {
      return res.status(400).json({ error: 'bad question' });
    }

    const userCtx = `User: ${name || 'User'} (${role === 'hr' ? 'HR manager' : 'employee'}). ${context || ''}`;

    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 400,
        system: SYSTEM,
        messages: [{ role: 'user', content: `${userCtx}\n\nQuestion: ${question}` }]
      })
    });

    if (!r.ok) {
      const err = await r.text();
      console.error('Anthropic API error:', err);
      return res.status(502).json({ error: 'upstream' });
    }

    const data = await r.json();
    const answer = (data.content || []).filter(b => b.type === 'text').map(b => b.text).join('');
    return res.status(200).json({ answer });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'server' });
  }
};
