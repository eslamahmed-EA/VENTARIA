// Minimal proxy to forward frontend POSTs to a Google Apps Script / Sheets webhook
// Usage: set TARGET_SHEETS_WEBHOOK to your Apps Script web app URL, then run: node server.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
let fetchFn = globalThis.fetch;
try {
  if (!fetchFn) {
    // dynamic import node-fetch (for Node <18 or environments without fetch)
    const mod = await import('node-fetch');
    fetchFn = mod.default || mod;
    globalThis.fetch = fetchFn;
  }
} catch (e) {
  // ignore - fetch may already exist
}

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

const TARGET = process.env.TARGET_SHEETS_WEBHOOK;
if (!TARGET) {
  console.warn('Warning: TARGET_SHEETS_WEBHOOK is not set. Proxy will return 500 until configured.');
}

app.post('/api/sheets', async (req, res) => {
  if (!TARGET) return res.status(500).json({ error: 'TARGET_SHEETS_WEBHOOK not configured on server.' });

  try {
    console.log('Proxy received request from', req.ip || req.connection.remoteAddress);
    try { console.log('Request body:', JSON.stringify(req.body)); } catch (e) { console.log('Request body (non-json)'); }

    const r = await fetch(TARGET, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });
    const text = await r.text();
    console.log(`Forwarded to TARGET, status=${r.status}`);
    // log response body short preview
    if (text && text.length > 0) console.log('Target response body:', text.slice(0, 200));
    else console.log('Target response body: <empty>');
    return res.status(r.status).send(text);
  } catch (err) {
    console.error('Proxy error forwarding to Sheets webhook:', err);
    return res.status(502).json({ error: 'Bad gateway', details: String(err) });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server listening on http://localhost:${PORT} - forwarding to TARGET_SHEETS_WEBHOOK`);
});
