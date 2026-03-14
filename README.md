# Global Watch

**Real-time global intelligence dashboard** — AI-powered news aggregation, geopolitical monitoring, and infrastructure tracking in a unified situational awareness interface.

---

## Why Global Watch?

| Problem                            | Solution                                                                                                                                                                                |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| News scattered across 100+ sources | **Single unified dashboard** with 435+ curated feeds across 15 categories                                                                                                               |
| No geospatial context for events   | **Interactive map** with 45 toggleable data layers and CII country risk heatmap                                                                                                         |
| Information overload               | **AI-synthesized briefs** with focal point detection and local LLM support                                                                                                              |
| Crypto/macro signal noise          | **7-signal market radar** with composite BUY/CASH verdict                                                                                                                               |
| Expensive OSINT tools ($$$)        | **100% free & open source**                                                                                                                                                             |
| Static news feeds                  | **Real-time updates** with live video streams and AI-powered deductions                                                                                                                 |
| Cloud-dependent AI tools           | **Run AI locally** with Ollama/LM Studio — no API keys, no data leaves your machine. Opt-in **Headline Memory** builds a local semantic index of every headline for RAG-powered queries |
| Web-only dashboards                | **Native desktop app** (Tauri) for macOS, Windows, and Linux + installable PWA with offline map support                                                                                 |
| Flat 2D maps                       | **Dual map engine** — photorealistic 3D globe (globe.gl + Three.js) and WebGL flat map (deck.gl) with 45 toggleable data layers, runtime-switchable                                     |
| English-only OSINT tools           | **21 languages** with native-language RSS feeds, AI-translated summaries, and RTL support for Arabic                                                                                    |
| Siloed financial data              | **Finance variant** with 92 stock exchanges, 19 financial centers, 13 central banks, BIS data, WTO trade policy, and Gulf FDI tracking                                                  |
| Undocumented, fragile APIs         | **Proto-first API contracts** — 22 typed services with auto-generated clients, servers, and OpenAPI docs                                                                                |

---

## Key Features

- **Dual Map Engine** — 3D globe (globe.gl + Three.js) and WebGL flat map (deck.gl), runtime-switchable with 45 shared data layers.
- **AI & Intelligence** — LLM-synthesized summaries, AI deduction, RAG-powered Headline Memory, threat classification, and country brief pages.
- **Live News & Video** — 435+ RSS feeds, 30+ live video streams, 22 live webcams, and custom keyword monitors.
- **Scoring & Detection** — Country Instability Index, hotspot escalation, strategic risk score, signal aggregation, and cross-stream correlation.
- **Finance & Markets** — Macro signal analysis, Gulf FDI, stablecoin & BTC ETF monitoring, oil & energy analytics, BIS & WTO data, and premium stock analysis.
- **Desktop & Mobile** — Native desktop app (Tauri), installable PWA, mobile-optimized map, and responsive layout.
- **Platform Features** — 21 languages, command palette, proto-first API contracts, dark/light theme, and story sharing.

---

## Quick Start

```bash
# Clone and run
git clone https://github.com/nk10nikhil/globalwatch.git
cd globalwatch
npm install
vercel dev       # Runs frontend + all 60+ API edge functions
```

Open [http://localhost:3000](http://localhost:3000)

> **Note**: `vercel dev` requires the Vercel CLI (`npm i -g vercel`). If you use `npm run dev` instead, only the frontend starts — news feeds and API-dependent panels won't load.

---

## Self-Hosting

Global Watch relies on 60+ Vercel Edge Functions in the `api/` directory for RSS proxying, data caching, and API key isolation. Running `npm run dev` alone starts only the Vite frontend — the edge functions won't execute, and most panels (news feeds, markets, AI summaries) will be empty.

### Option 1: Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel          # Follow prompts to link/create project
```

Add your API keys in the Vercel dashboard under **Settings → Environment Variables**, then visit your deployment URL.

### Option 2: Local Development with Vercel CLI

```bash
npm install -g vercel
cp .env.example .env.local   # Add your API keys
vercel dev                   # Starts on http://localhost:3000
```

### Option 3: Static Frontend Only

```bash
npm run dev    # Vite dev server on http://localhost:5173
```

---

## Tech Stack

- **Frontend**: TypeScript, Vite, globe.gl, Three.js, deck.gl, MapLibre GL
- **Desktop**: Tauri 2 (Rust), Node.js sidecar, OS keychain integration
- **AI/ML**: Ollama / LM Studio, Groq, OpenRouter, Transformers.js, IndexedDB vector store
- **Caching**: Redis (Upstash), Vercel CDN, service worker
- **Geopolitical APIs**: OpenSky, GDELT, ACLED, UCDP, HAPI, USGS, GDACS, NASA EONET, NASA FIRMS, Polymarket, Cloudflare Radar, WorldPop, OREF, gpsjam.org, Telegram MTProto
- **Market APIs**: Yahoo Finance, CoinGecko, mempool.space, alternative.me
- **Threat Intel APIs**: abuse.ch, AlienVault OTX, AbuseIPDB, C2IntelFeeds
- **Economic APIs**: FRED, EIA, Finnhub
- **Localization**: i18next (21 languages), RTL support
- **API Contracts**: Protocol Buffers, buf CLI, auto-generated TypeScript clients/servers, OpenAPI 3.1.0 docs
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel Edge Functions, Railway, Tauri, PWA
- **Finance Data**: 92 stock exchanges, 19 financial centers, 13 central banks, 10 commodity hubs, 64 Gulf FDI investments
- **Data**: 435+ RSS feeds, ADS-B, AIS, VIIRS, 30+ live video channels, 26 Telegram OSINT channels

---

## Credits

Based on the open-source [World Monitor](https://github.com/koala73/worldmonitor) project by Elie Habib.
