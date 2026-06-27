#!/usr/bin/env node
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const ROOT = path.join(__dirname, '..', 'out');
const PORT = process.env.PORT ? Number(process.env.PORT) : 8080;

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.txt': 'text/plain; charset=utf-8',
  '.ico': 'image/x-icon'
};

function sendFile(res, filePath) {
  fs.stat(filePath, (err, stats) => {
    if (err) return send404(res);
    if (stats.isDirectory()) filePath = path.join(filePath, 'index.html');
    const ext = path.extname(filePath).toLowerCase();
    const type = mime[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': type });
    const stream = fs.createReadStream(filePath);
    stream.on('error', () => send404(res));
    stream.pipe(res);
  });
}

function send404(res) {
  const notFound = path.join(ROOT, '404.html');
  if (fs.existsSync(notFound)) {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    fs.createReadStream(notFound).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 Not Found');
  }
}

const server = http.createServer((req, res) => {
  try {
    const parsed = url.parse(req.url);
    let safePath = decodeURIComponent(parsed.pathname);
    if (safePath.includes('\0')) return send404(res);
    safePath = path.normalize(safePath).replace(/^\.\./, '');
    let filePath = path.join(ROOT, safePath);
    if (!filePath.startsWith(ROOT)) return send404(res);
    // default to index.html for directory or root
    if (safePath === '/' || safePath === '') filePath = path.join(ROOT, 'index.html');
    sendFile(res, filePath);
  } catch (e) {
    send404(res);
  }
});

server.listen(PORT, () => {
  console.log(`Serving ${ROOT} on http://localhost:${PORT}`);
});

server.on('error', (err) => {
  console.error('Server error:', err.message);
  process.exit(1);
});
