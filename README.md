# plaza-web

Static contextual-inquiry ballot page for the Telegraph × Dwight study.
Single `index.html`; no build step.

## Local preview

```bash
npx serve .
# or
python3 -m http.server 8000
```

Open http://localhost:8000 (or whatever port the server prints) on desktop
or a phone on the same Wi-Fi.

## Google Form wiring

The ballot POSTs to a Google Form on submit.

1. Create a Google Form with three Short Answer questions:
   - Rank 1
   - Rank 2
   - Rank 3

   Leave all three optional so submissions with fewer than 3 ranks succeed.

2. Open the live form (the URL ending in `/viewform`). The form action URL
   is the same path with `viewform` → `formResponse`. For example:

   ```
   viewform:     https://docs.google.com/forms/d/e/1FAIpQLSxxxxxxxxxxxxxxxxxxx/viewform
   formResponse: https://docs.google.com/forms/d/e/1FAIpQLSxxxxxxxxxxxxxxxxxxx/formResponse
   ```

3. To find the entry IDs for each question, view the page source of the
   live form (right-click → View Source) and search for `entry.`. Each
   short-answer question has a `name="entry.NNNNNNNNN"` attribute on its
   `<input>`. Copy the three.

4. Paste into `index.html` near the top of the `<script>` block:

   ```js
   const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/.../formResponse'
   const ENTRY_RANK1 = 'entry.NNNNNNNNN'
   const ENTRY_RANK2 = 'entry.NNNNNNNNN'
   const ENTRY_RANK3 = 'entry.NNNNNNNNN'
   ```

5. Submit a test ballot, then check the form's Responses tab to confirm
   the three names land in the right columns.

If `GOOGLE_FORM_URL` is left as the placeholder, submissions are skipped
silently (the success screen still shows).

## Deploy to Firebase Hosting

One-time setup:

```bash
npm install -g firebase-tools
firebase login
firebase use --add   # pick your Firebase project
```

Each deploy:

```bash
firebase deploy --only hosting
```

The first deploy lands at `https://<project>.web.app` and
`https://<project>.firebaseapp.com`.

## Custom domain (GoDaddy)

1. Firebase console → Hosting → "Add custom domain". Paste the subdomain
   you want (e.g. `vote.plaza.app` or the root `plaza.app`).
2. Firebase shows DNS records to add — typically one or two `A` records
   for the root, or a single `CNAME` for a subdomain.
3. GoDaddy → My Products → Domain → DNS → add the records exactly as
   Firebase shows.
4. Wait. DNS can take anywhere from 5 minutes to a few hours to propagate
   and for Firebase to provision the TLS cert. The Firebase console will
   show "Pending" → "Connected" when it's done.
5. Visit the URL — should serve over HTTPS automatically.
