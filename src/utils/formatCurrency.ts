export function formatCurrency(value: number | string, lang: 'en' | 'ar') {
  // If value is a string containing letters (like "48M+"), just attach currency label
  if (typeof value === 'string') {
    const raw = value.trim();
    // If it already contains a currency marker like EGP or جنيه, return as-is
    if (/EGP|جنيه|ج.م/.test(raw)) return raw;
    // If it contains non-numeric letters (M, K, +) keep them and prefix/suffix currency
    if (/[A-Za-z]/.test(raw) || /\+/.test(raw)) {
      return lang === 'ar' ? `${raw} جنيه` : `EGP ${raw}`;
    }
    // Otherwise attempt numeric parse
    const num = Number(raw.replace(/[^0-9.-]/g, ''));
    if (isNaN(num)) return raw;
    if (lang === 'ar') return num.toLocaleString('ar-EG') + ' جنيه';
    return 'EGP ' + num.toLocaleString('en-US');
  }

  // number path
  if (lang === 'ar') return value.toLocaleString('ar-EG') + ' جنيه';
  return 'EGP ' + value.toLocaleString('en-US');
}
