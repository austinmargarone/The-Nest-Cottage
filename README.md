# The Nest Cottage

Website for The Nest Cottage, a lakeside rental in Webster, NY. Built with Next.js, replacing the old WordPress site.

## Edit content

Almost everything lives in `content/`:

- `content/site.ts`: phone, email, links, quick facts, reviews, and the "What's inside" list
- `content/stay.ts`: house rules, weather, packing lists
- `content/guide.ts`: the local guide (Eat, See, Shop for each area) and the driving tour

## Photos

- `public/photos/gallery/`: every image here shows up in the gallery, in file-name order. Name files like `05-front-porch.jpg`. The words after the number become the alt text.
- `public/photos/hero.jpg`, `living.jpg`, `porch-view.jpg`, `madi.jpg`: the large photos on the home page.
- Keep images around 1800–2400 px wide and under ~500 KB.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
```

## Deploy on Hostinger (Node.js web app)

1. In hPanel, go to **Websites → Add website → Node.js app**. Connect this GitHub repo and the `main` branch.
2. Build command: `npm run build`. Start command: `npm start`. Node 20 or newer.
3. Add environment variables (see below), then deploy.
4. Point thenest-cottage.com at the app and turn on SSL.

Pushing to `main` redeploys.

## Contact form

The form emails the owners through [Resend](https://resend.com) (free tier is plenty). Set:

| Variable | Value |
|---|---|
| `RESEND_API_KEY` | API key from Resend |
| `INQUIRY_FROM` | A sender on a domain verified in Resend, e.g. `The Nest Cottage <hello@thenest-cottage.com>` |
| `INQUIRY_TO` | Optional. Defaults to thenestcottage2022@gmail.com |

Without `RESEND_API_KEY`, the form shows an error telling people to email directly.

## Old URLs

`next.config.ts` redirects the old WordPress page URLs to the matching new pages, so search results and shared links keep working.
