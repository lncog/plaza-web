# plaza-web

Next.js marketing site for Plaza Civic, plus the Telegraph × Dwight ballot at
`/vote`. Deployed to Vercel at `plazacivic.org`.

## Develop

```bash
npm install
npm run dev
```

## Routes

- `/` — landing
- `/privacy` — privacy policy (mirrors the in-app PrivacyPolicyScreen)
- `/terms` — terms placeholder
- `/vote` — ranked-choice ballot (formerly hosted on Firebase at vote.plaza-app.org)

## Ballot Google Form wiring

The ballot at `/vote` POSTs ranks to a Google Form. Constants live near the top
of `app/vote/VoteClient.tsx`:

```ts
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/.../formResponse'
const ENTRY_RANK1 = 'entry.NNNNNNNNN'
const ENTRY_RANK2 = 'entry.NNNNNNNNN'
const ENTRY_RANK3 = 'entry.NNNNNNNNN'
```

To find entry IDs: open the live form's `/viewform` URL, View Source, search
for `name="entry."`.
