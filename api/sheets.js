export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const TARGET = process.env.TARGET_SHEETS_WEBHOOK || process.env.VITE_SHEETS_WEBHOOK;
  if (!TARGET) return res.status(500).json({ error: 'TARGET_SHEETS_WEBHOOK not configured' });

  try {
    const r = await fetch(TARGET, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });
    const text = await r.text();
    res.status(r.status).send(text);
  } catch (err) {
    res.status(502).json({ error: String(err) });
  }
}
