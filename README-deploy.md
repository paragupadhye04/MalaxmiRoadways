Deployment / Demo instructions

This project is a Vite + Vue 3 static site. Here are several free hosting options and exact steps for deploying a demo.

1) GitHub Pages (recommended via GitHub Actions - already added)
--------------------------------------------------------------
What I added for you:
- A GitHub Actions workflow at `.github/workflows/deploy-gh-pages.yml` that builds the site and deploys `dist/` to the `gh-pages` branch automatically when you push to `main`.
- The workflow also copies `dist/index.html` to `dist/404.html` so deep links fall back to your SPA.

How to trigger:
- Push your changes to `main`:

```powershell
git add .
git commit -m "Prepare site for GitHub Pages"
git push origin main
```

- Open the Actions tab in GitHub to watch the build. On success the action will push to `gh-pages` branch and GitHub Pages will serve the site.

Notes:
- If your repository is private, GitHub Pages still works but check Pages settings in the repository to confirm the source branch is `gh-pages`.
- If the Action fails on build, paste the Actions log here and I'll help fix it.


2) Local / direct deploy to GitHub Pages using `gh-pages` (manual)
-----------------------------------------------------------------
I added `gh-pages` devDependency and npm scripts to your `package.json`:
- `npm run predeploy` (runs `npm run build`)
- `npm run deploy` (publishes `dist/` using `gh-pages`)

Steps (Windows PowerShell):

```powershell
# install deps once (do this in project root)
npm install

# build and publish
npm run deploy
```

Important: GitHub Pages for SPAs needs a fallback for client-side routing. The GitHub Actions workflow already copies `index.html` to `404.html`. If you deploy locally with `npm run deploy`, copy `index.html` to `404.html` before running deploy (PowerShell):

```powershell
Copy-Item -Path .\dist\index.html -Destination .\dist\404.html -Force
npm run deploy
```


3) Netlify (drag-and-drop or Git integration)
--------------------------------------------
Quick manual drag-and-drop:
- Build locally: `npm install && npm run build`
- Open https://app.netlify.com/drop and drop the `dist` folder

If you connect the repo to Netlify, create `public/_redirects` with:

```
/* /index.html 200
```

so SPA routing works correctly.


4) Vercel (zero-config)
------------------------
- Connect your GitHub repo in Vercel and it will detect Vite.
- Build command: `npm run build`
- Output directory: `dist`


Troubleshooting local build issues (esbuild EPERM on Windows)
------------------------------------------------------------
If you saw an `EPERM` error (esbuild locked), try these steps:
1. Close editors (VS Code) and any running dev servers.
2. Kill node processes:
```powershell
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force
```
3. Remove `node_modules` and lockfile and reinstall:
```powershell
Remove-Item -Recurse -Force .\node_modules
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue
npm install
```
4. If esbuild still errors, try rebuilding esbuild:
```powershell
npm rebuild esbuild --force
```
5. If problems persist, temporarily disable antivirus or re-run as Administrator.


If you'd like I can:
- Add `public/_redirects` and `netlify.toml` for Netlify deploys.
- Add an automated GitHub Action badge or README section with the expected Pages URL (after first successful deploy).
- Try to run `npm ci && npm run build` here again (I attempted earlier but hit local permission issues; the GitHub Action should succeed independently).

Tell me which option you want to use now (GitHub Actions, gh-pages local, Netlify, Vercel) and I will proceed with any follow-up edits or run/monitor the build for you.