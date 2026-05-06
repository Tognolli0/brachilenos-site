# BRACHILENOS

Site institucional e comercial para contabilidade, gestao financeira e planejamento tributario Brasil x Chile.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- API Routes para leads e banco de talentos
- Rotas multi-idioma: `/pt-br`, `/es`, `/en`

## Rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Build para hospedagem

```bash
npm run build
npm run start
```

Hospedagens indicadas:

- Vercel, melhor encaixe para Next.js.
- Cloudflare Pages, com adapter para Next.js se desejarem edge.
- Netlify, tambem suporta Next.js.

## Integracoes futuras

Os formularios chamam:

- `/api/leads` para clientes.
- `/api/talents` para candidatos, parceiros e prestadores.

Configure no `.env`:

```bash
LEADS_WEBHOOK_URL=
TALENTS_WEBHOOK_URL=
```

Esses webhooks podem apontar para Google Sheets, HubSpot, Pipedrive, Airtable, Make, Zapier ou Supabase.

Para upload real de curriculo, a recomendacao de producao e usar Supabase Storage, Cloudflare R2 ou S3 e salvar no banco apenas a URL do arquivo.
