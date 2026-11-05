# LuaSec frontend clone

Replica de la experiencia publica de <https://luasec.dev/> en Next.js 14 (App Router) + Tailwind CSS.
Capturada el 2026-11-04 con el sitio activo (HTTP 200).

## Rutas

| Ruta | Contenido |
| --- | --- |
| `/` | Landing: hero, "From source file to paying buyer", proteccion, precios, FAQ, footer |
| `/login` | Acceso al panel por API key + boton Discord (modo demo) |
| `/register` | Alta con Discord o email |
| `/forgot-password` | Recuperacion de clave |
| `/panel` | Dashboard: 4 KPIs, grafico de 30 dias, scripts, ejecuciones recientes |
| `/panel/scripts` | Subida de releases, perfil de ofuscacion, historial |
| `/panel/licenses` | Tabla de licencias con filtros y acciones |
| `/panel/settings` | Cuenta Discord, webhook, rotacion de API key |
| `/terms` `/privacy` `/cookies` `/takedown` `/imprint` | Legales (placeholder) |

## Secciones de la landing (documentadas en Fase 1)

1. `Nav` — marca, 4 anclas, CTA "Open Panel", hamburguesa movil.
2. `Hero` — H1 grande, lead, dos CTAs, captura del dashboard.
3. `HowItWorks` — 3 pasos alternando texto y media (2 imagenes + bloque de codigo del loader).
4. `Protection` — lista `<dl>` de 4 filas: VM obfuscation, HWID, loader unico, stats.
5. `Pricing` — toggle mensual/anual, 4 planes (Starter 10/100, Premium 20/200, Pro 35/350, Enterprise custom).
6. `Faq` — acordeon de 4 preguntas.
7. `Footer` — marca, nav producto, nav legal.

## Componentes reutilizables

- `components/ui.tsx` — `Button`, `Badge`, `Card`, `Stat`, `SectionTitle`
- `components/site/*` — `Nav`, `Hero`, `HowItWorks`, `Protection`, `Pricing`, `Faq`, `Footer`
- `components/panel/panel-nav.tsx` — navegacion lateral con estado activo
- `components/auth-shell.tsx` — carcasa compartida de login/registro/recuperacion
- `lib/pricing.ts` — datos de planes extraidos de `main.js` del sitio original

## Tokens de diseno (copiados de `styles.css`)

```
--accent  #0a84ff
--bg      #121214
--text    #f5f5f7
--muted   #a1a1a6
--surface #1c1c1f
--line    rgba(255,255,255,0.10)
--radius  12px
font      Outfit (woff2 descargada a public/fonts)
```

## Arranque

```bash
npm install
npm run dev      # http://localhost:3100
npm run build
```

## Que es real y que es demo

- Real: layout, tipografia, paleta, copy publico, precios, interacciones (toggle, acordeon, menu movil, nav activa).
- Demo: autenticacion (los formularios navegan al panel sin backend), cifras del dashboard, tablas y acciones de licencias.
  El panel real esta en `ops.luasec.dev` y no es accesible sin API key, por lo que **no se clono ninguna logica de servidor**.
