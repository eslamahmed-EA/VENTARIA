// Minimal proxy to forward frontend POSTs to a Google Apps Script / Sheets webhook
// Usage: set TARGET_SHEETS_WEBHOOK to your Apps Script web app URL, then run: node server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = global.fetch || require('node-fetch');

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
    const r = await fetch(TARGET, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });
    const text = await r.text();
    return res.status(r.status).send(text);
  } catch (err) {
    console.error('Proxy error forwarding to Sheets webhook:', err);
    return res.status(502).json({ error: 'Bad gateway', details: String(err) });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server listening on http://localhost:${PORT} - forwarding to TARGET_SHEETS_WEBHOOK`);
});
