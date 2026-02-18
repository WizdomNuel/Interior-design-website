#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const { injectAxe, checkA11y } = require('@axe-core/playwright');

const BASE = process.env.BASE_URL || 'http://localhost:3001';
const ROUTES = ['/', '/about', '/services', '/portfolio', '/contact'];

(async () => {
  const out = [];
  const browser = await chromium.launch();
  const page = await browser.newPage();

  page.on('console', (msg) => {
    // capture console logs
    const text = `[console:${msg.type()}] ${msg.text()}`;
    console.log(text);
  });

  for (const route of ROUTES) {
    const url = `${BASE.replace(/\/$/, '')}${route}`;
    console.log('\n=== Auditing', url, '===');
    try {
      await page.goto(url, { waitUntil: 'networkidle' });
      await injectAxe(page);
      const results = await checkA11y(page, undefined, { detailedReport: true, detailedReportOptions: { html: true } });
      out.push({ route, url, results });
      const file = path.resolve(process.cwd(), `axe-report-${route === '/' ? 'home' : route.replace(/^\//,'')}.json`);
      fs.writeFileSync(file, JSON.stringify(results, null, 2));
      console.log('Saved report to', file);
    } catch (err) {
      console.error('Error auditing', url, err);
    }
  }

  await browser.close();
  console.log('\nAudit complete. Reports saved next to project root.');
  process.exit(0);
})();
