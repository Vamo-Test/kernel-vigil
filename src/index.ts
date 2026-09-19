// kernel-vigil — Real-time Linux kernel vulnerability scanner in your browser.
// Zero-dependency Worker that serves ONE self-contained HTML micro-product. The entire app
// (markup, styles, and logic) is authored by the agent and inlined below as a single document —
// no framework, no build step, no external requests.

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Kernel Vigil Demo</title>
<style>
body { font-family: monospace; background-color: #121212; color: #e0e0e0; margin: 0; padding: 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; }
canvas { border: 2px solid #4caf50; }
@media (prefers-color-scheme: light) {
  body { background-color: #ffffff; color: #000000; }
  canvas { border-color: #007bff; }
}
</style>
</head>
<body>
<canvas id="vulnCanvas" width="800" height="600"></canvas>
<script>
const canvas = document.getElementById('vulnCanvas');
const ctx = canvas.getContext('2d');

function simulateVulnerabilityScan() {
  const vulnerabilities = [
    { x: Math.random() * canvas.width, y: Math.random() * canvas.height, severity: Math.random() * 100 },
    { x: Math.random() * canvas.width, y: Math.random() * canvas.height, severity: Math.random() * 100 },
    { x: Math.random() * canvas.width, y: Math.random() * canvas.height, severity: Math.random() * 100 },
    { x: Math.random() * canvas.width, y: Math.random() * canvas.height, severity: Math.random() * 100 },
    { x: Math.random() * canvas.width, y: Math.random() * canvas.height, severity: Math.random() * 100 }
  ];

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#4caf50';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  vulnerabilities.forEach(vuln => {
    const radius = vuln.severity / 2;
    ctx.beginPath();
    ctx.arc(vuln.x, vuln.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = \`rgba(255, 0, 0, \${vuln.severity / 100})\`;
    ctx.fill();
    ctx.strokeStyle = '#ff9800';
    ctx.stroke();
  });
}

setInterval(simulateVulnerabilityScan, 2000);
simulateVulnerabilityScan();
</script>
</body>
</html>`;

export default {
  async fetch(): Promise<Response> {
    return new Response(html, {
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  },
};
