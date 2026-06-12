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

- Netlify, hospedagem atual temporaria.
- Vercel, bom encaixe para Next.js.
- Cloudflare Pages, com adapter para Next.js se desejarem edge.

## Produção atual

Enquanto o dominio proprio nao for comprado, o site usa:

```bash
NEXT_PUBLIC_SITE_URL=https://brachilenos-site.netlify.app
```

Quando o dominio real estiver ativo, atualize essa variavel no Netlify e rode uma nova publicacao.

## Roadmap

As melhorias planejadas estao registradas em `docs/roadmap.md`.

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
