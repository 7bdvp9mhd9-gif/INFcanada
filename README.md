# INF Canada

A small TypeScript foundation for an INF Canada charity website supporting Nepal.

## Commands

```bash
npm install
npm run dev
npm run build
```

## Structure

- `src/App.tsx` handles the small route switch for the site.
- `src/pages/` contains full page-level screens.
- `src/components/brand/` keeps logo, Canadian mark, and mountain brand assets wrapped as components.
- `src/components/layout/` holds site chrome such as the header and footer.
- `src/components/sections/` holds reusable homepage sections.
- `src/data/` keeps site copy, navigation, travel details, and section data in one place.
- `src/styles/global.css` contains the global stylesheet and font declarations.
- `src/assets/images/` stores site photography and generated project-owned visuals.
- `src/assets/logos/`, `src/assets/mountains/`, and `src/assets/fonts/` group brand, mountain, and type assets.
- `src/assets/reference/` keeps visual-check PNGs out of the project root.

## Next Layers

- Add donation provider integration.
- Add story detail pages and a content model.
- Add official Canadian charity registration, tax receipt, and governance copy when available.
