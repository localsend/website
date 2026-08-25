# LocalSend Website

## Setup

Make sure to install [pnpm](https://pnpm.io).

```bash
npm install -g pnpm
```

Get dependencies

```bash
pnpm install
```

Start the development server

```bash
pnpm run dev
```

## Deployment

Generates the static website in the `dist` directory.

```bash
pnpm run generate
```

### App Clip invocation endpoint

The static output includes `https://localsend.org/clip` and the Apple App Site Association file at `/.well-known/apple-app-site-association`. Validate their bundle/team identifiers, card metadata, headers, and generated output with:

```bash
pnpm run verify:app-clip -- --dist
```

The App Clip build uses `https://localsend.org/clip` as its invocation prefix. The Developer Portal capabilities and the default/advanced App Clip experiences in App Store Connect must match that URL and the identifiers in the AASA file before deployment.

## Contributing

### Adding a new language

1. Add new JSON file in `i18n/locales/` directory.
2. Add the new language in `nuxt.config.ts`.
