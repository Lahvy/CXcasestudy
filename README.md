# Nákup ojetého auta · CX case study

Minimalistická, interaktivní prezentace o **5 slidech** postavená na HTML, CSS a JavaScriptu. Nevyžaduje Node, build, framework ani API klíče. Je připravená k publikaci přes **GitHub Pages**.

## Co obsahuje

- 5 slideů odpovídajících zadání case study: proces, potřeby klientů, customer journey, 2 koncepty, experimenty a KPI.
- Barevnost `#002D62` a `#00A3E0`.
- Plátno 16:9 na desktopu, čitelný vertikální layout na mobilu.
- Klávesové zkratky, navigační tečky, dotyková gesta, fullscreen.
- **Poznámky prezentujícího** s podrobným vysvětlením a metrikami.
- Vysvětlení práce s AI a veřejné inspirační zdroje.
- Klikací schéma, jak by se daly propojit kanály a partneři.
- Tisk do PDF přímo z prohlížeče, ideálně s povoleným tiskem pozadí.
- Adresy na konkrétní slide: `#slide-1` až `#slide-5`.

## Lokální spuštění

Otevři `index.html` v prohlížeči. Nic není potřeba instalovat.

Pokud chceš lokální HTTP server (např. kvůli realistickému testu):

```bash
python -m http.server 8000
```

Pak otevři `http://localhost:8000`.

## Nasazení na GitHub Pages

1. Na GitHubu vytvoř nový repozitář, například `cx-auto-case-study`.
2. Nahraj do **kořene** repozitáře soubory `index.html`, `styles.css`, `script.js`, `favicon.svg` a `README.md`.
3. V repozitáři otevři **Settings → Pages**.
4. V sekci **Build and deployment** vyber **Deploy from a branch**, větev `main` a složku `/ (root)`.
5. Ulož nastavení a otevři adresu, kterou GitHub Pages zobrazí (typicky `https://USERNAME.github.io/cx-auto-case-study/`).

Soubory jsou propojené relativními cestami, takže web funguje i v projektovém podadresáři na GitHub Pages.

## Ovládání

| Akce | Ovládání |
| --- | --- |
| Další / předchozí slide | `→` / `←`, `PageDown` / `PageUp`, šipky ve spodní liště |
| První / poslední slide | `Home` / `End` |
| Poznámky | `N` nebo tlačítko **Poznámky** |
| Celá obrazovka | `F` nebo ikona fullscreen (pokud prohlížeč podporuje) |
| PDF | Tlačítko **PDF**, v tiskovém dialogu „Uložit jako PDF“ |
| Mobil | Navigace dole, horizontální swipe, vertikální posun obsahu |

## Rychlé úpravy

- **Obsah slidů**: `index.html`, pět sekcí `.slide[data-slide]`.
- **Poznámky ke slidům**: `<template class="speaker-template">` uvnitř příslušného slidu.
- **Barvy**: CSS proměnné v úvodu `styles.css`.
- **Chování prezentace**: `script.js`.
- **Zdroje a použití AI**: dialog `#aboutDialog` v `index.html`.

## Důležité při odevzdání

- Zadání říká **maximálně 5 snímků**. Proto titulní informace patří na první slide a závěr je součástí pátého.
- Pracovní persony, journey a koncepty jsou **hypotézy**, nejsou vydávané za výsledky výzkumu.
- Přenos nákupního plánu mezi webem, DoKapsy a ČSOB Smart je **návrh**, ne tvrzení, že taková integrace už existuje.
- U Sauto lze v návrhu jednoduše uložit odkaz. Automatické propojení účtů a oblíbených vozidel vyžaduje partnerství, podporované API a souhlas.
- U případového zadání je požadována **relevantní část konverzace s AI jako příloha**. Sekce „O projektu & AI“ na webu tuto přílohu sama nenahrazuje. U veřejného webu zvaž, které části vlastní konverzace zveřejníš.
- Barevnost odkazuje na ČSOB, ale prezentace neobsahuje oficiální logo ani netvrdí, že jde o oficiální stránky banky.

## Licence / použití

Webové rozhraní bylo připravené jako osobní pracovní podklad pro výběrové řízení. Externí značky jsou zmíněny pouze pro ilustraci ekosystému; u případného veřejného použití zkontroluj jejich aktuální podmínky a správnost věcných tvrzení.
