# Safe deploy helper.
# Commits site changes and pushes main, which triggers Cloudflare Pages.

$ErrorActionPreference = "Stop"

git status --short

$changes = git status --porcelain
if (-not $changes) {
  Write-Host "No changes to deploy." -ForegroundColor Yellow
  exit 0
}

git add .gitignore .github deploy.ps1 components lib pages public styles scripts package.json package-lock.json next.config.js postcss.config.js tailwind.config.js README.md
git commit -m "Deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
git push origin main

Write-Host "Deploy pushed. Cloudflare Pages will build from GitHub Actions." -ForegroundColor Green
