# Asahi（朝日）

A modern Japanese studio from complete beginner (**JLPT N5 / CEFR A1**) to advanced (**N1 / C1–C2**).

## What you can do

- **Kana dojo** — full hiragana & katakana, listening, recall, brush tracing
- **Kanji path** — N5–N1 characters with on/kun, mnemonics, compounds, tracing
- **Vocabulary** — SM-2 spaced repetition
- **Grammar dojo** — particles through literary patterns (`ざるを得ない`, `だに`, `んばかり`)
- **Reading room** — graded passages with furigana and click-to-gloss
- **Listening lab** — Japanese TTS quizzes and shadowing
- **JLPT checkpoints** — mixed quizzes per level
- **暁先生** — local library tutor, plus **Grok 4.6** via SpaceXAI when `XAI_API_KEY` is set

Progress is stored in the browser (`localStorage`). No account required.

## Run

```bash
cd asahi
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## AI Sensei (optional)

Sensei talks to [SpaceXAI / xAI](https://docs.x.ai) **on the server**. The key never ships in the client bundle.

- **Local:** Vite middleware at `/api/sensei`
- **Vercel:** Edge function at `api/sensei.ts`

1. Create a key at https://console.x.ai
2. Copy `.env.example` to `.env` (local) **or** add `XAI_API_KEY` in the Vercel project settings (production)
3. Restart `npm run dev` / redeploy

Without a key, Sensei still looks up kanji, vocab, and grammar from the built-in library.

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/gavrielka/asahi)

1. Open [vercel.com/new/clone?repository-url=https://github.com/gavrielka/asahi](https://vercel.com/new/clone?repository-url=https://github.com/gavrielka/asahi)
2. Import the `gavrielka/asahi` GitHub repo (Vite preset)
3. Optionally add `XAI_API_KEY` under Project → Settings → Environment Variables

Or from this folder:

```bash
npx vercel login
npx vercel --prod
```

## Build

```bash
npm run build
npm run preview
```
