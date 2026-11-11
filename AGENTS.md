# AGENTS.md · Pravidla pro práci s CX case study

Tento soubor je určen pro člověka i coding asistenty, kteří upravují repozitář. Jeho cílem je **zachovat integritu dokončené prezentace**, snadnou editovatelnost a profesionální kvalitu výstupu.

## Kontext a zdroje pravdy

- **Repozitář:** https://github.com/Lahvy/CXcasestudy
- **Publikovaná prezentace:** https://lahvy.github.io/CXcasestudy/
- **Veřejný kontext:** [`README.md`](README.md)
- **Zadání, rozhodnutí, hypotézy a otevřené otázky:** [`PROJECT_CONTEXT.md`](PROJECT_CONTEXT.md)
- **Aktuální obsah a speaker notes:** `index.html`, pět sekcí s atributem `data-slide="1"` až `data-slide="5"`.

Nerozhoduj podle staršího ZIPu, screenshotu ani historické konverzace, pokud se liší od aktuálních souborů. Před úpravou vždy přečti nejnovější verzi repozitáře. Očekávaným výsledkem je **pětislidová CX case study pro pohovor, nikoli produkční aplikace**.

## Nejdůležitější pravidlo: minimální a bezpečná změna

1. **Měň jen to, co bylo výslovně zadáno.** Úprava jednoho slidu nesmí změnit jiné slidy, speaker notes, modaly, navigaci, cover ani existující obsah.
2. **Nikdy nepřepisuj aktualizovaný `index.html` starším souborem.** Uživatel průběžně ladil jednotlivé texty; předání zastaralé verze by je smazalo.
3. **Obsah patří do HTML.** Texty slidů, konceptů a speaker notes drž v `index.html`; nepřepisuj je dodatečně z JavaScriptu pomocí `innerHTML`. Výjimkou je již existující prezentační dekorace pro Slide 1 vytvářená skriptem (Continuous Discovery), kterou bez požadavku nereorganizuj.
4. **Vizuální změny dělej prioritně v CSS** a selektory omez na dotčený slide, např. `.slide--four ...`. Preferuj nejmenší možný patch před přestavbou celé stránky.
5. **Neprováděj nevyžádaný refactoring, přeformulování textů ani „opravy“ cizích částí.** Nalezené nesouvisející vady nejprve nahlas samostatně.
6. **Nikdy nepovažuj hypotézy za výsledky výzkumu.** Zachovej rozlišení mezi návrhem, předpokladem a empirickým zjištěním.
7. **Neprováděj automatický commit nebo push bez výslovného souhlasu.** Pro ruční nahrání na GitHub předávej pouze nezbytné soubory s původními názvy.

## Co obsahuje pět slidů

| Slide | Účel | Co je potřeba zachovat |
| --- | --- | --- |
| 1 | Iterativní service design postup | Align & Frame, Explore, Synthesize, Co-create, Test & Learn; Continuous Discovery, role týmu a AI. |
| 2 | Potřeby a motivace | Funkční, emocionální a sociální JTBD; čtyři behaviorální archetypy. |
| 3 | High-level customer journey | Impuls, plánování, hledání, prověření, nákup; bariéry, příležitosti a ne-priority. |
| 4 | Tři koncepty | A kalkulačka, B průvodce, C garáž; ekosystémové kanály a označení C jako vize mimo zadání. |
| 5 | Testování a další postup | Metody, hypotézy H1–H4, důvěra a další KPI, next steps a měřicí koncept meaningful progression. |

Každý slide má uvnitř `<template class="speaker-template">` vlastní poznámky prezentujícího. Ty jsou součástí obsahu, nikoli vedlejším zdrojem, a nesmějí být ztraceny.

## Technické konvence

- **Stack:** nativní HTML, CSS a JavaScript; bez frameworku, build procesu, backendu či API klíčů.
- **Plátno:** 1440 × 810 px (16:9) na desktopu; CSS/JS škálují viewport, do cca 800 px přechází na svislý mobilní layout.
- **Obsah:** `index.html`; **styly:** `styles.css` a `cover.css`; **interakce:** `script.js` a `cover.js`.
- **Navigace:** `#slide-1` až `#slide-5`, šipky, PageUp/Down, Home/End, dotykový swipe, klávesa `N` pro speaker notes a `F` pro fullscreen.
- **Tisk:** CSS print režim má vytvořit právě pět slidů bez ovládacích prvků a poznámek.
- **Barvy:** orientační vizuální jazyk `#002D62` a `#00A3E0`, vysoký kontrast textů a čitelné světle modré plochy. Nejde o oficiální interní design systém ČSOB.
- **Závislosti:** bez externích SDK, analytiky či automatického sběru osobních údajů. Nezavádět je bez výslovného požadavku a posouzení důsledků.

## Povinné kontroly po změně kódu

1. **Diff:** změny pouze ve vyžádaných souborech; žádný neúmyslně změněný text, poznámka nebo slide.
2. **Zobrazení:** typicky desktop 1440 × 900, notebook 1366 × 768, mobil 390 × 844 a užší mobil. Ověřit ořez, překryvy, přetečení a kontrast.
3. **Regrese:** porovnat vizuálně všechny nezměněné slidy s předchozí verzí. Zvlášť kontrolovat CSS pravidla pro `.slide--four` a `.slide--five` a jejich mobilní a tiskové varianty.
4. **Interakce:** navigace šipkami i myší, přímý hash odkaz, dialogy, otevření/zavření speaker notes, fullscreen tam, kde jej prohlížeč podporuje.
5. **Tisk:** přesně pět čitelných stran, správné pořadí, zachované pozadí.
6. **Obsah:** všech pět speaker templates, čtyři hypotézy H1–H4, tři koncepty A/B/C a nezměněné formulace mimo zadání.
7. **Deploy:** po nahrání ověřit GitHub Pages. Prohlížeč může držet staré CSS/JS v cache; doporučit tvrdé obnovení před dalším přepisováním souborů.

Dokud nebyla kontrola provedena, **netvrď, že prošla**. Pokud chybí nástroje k vizuálnímu ověření, pojmenuj to transparentně.

## Obsahová a etická pravidla

- Rozsah původního zadání končí **koupí ojetého auta**. Koncept „Moje garáž“ je ukázka širší ekosystémové vize, nikoli součást prioritního testu.
- „Kalkulačka nákladů“ je návrh k ověření, **nikoli implementovaná funkce** webu. Nezaměňuj snímek s funkčním prototypem produktu.
- Vztahy mezi veřejným webem, DoKapsy, ČSOB Smart, ČSOB Leasing, externími portály a partnery jsou **možné scénáře**, nikoli hotové integrace.
- Oddělit pomáhající funkci od získávání kontaktů či marketingových souhlasů. Nepředpokládat automatické profilování nebo přenos klientských dat.
- Prioritizaci formulovat jako rozhodnutí podmíněné validací (klientská hodnota × business hodnota × náročnost/riziko), nikoli jako potvrzené ROI.
- AI je pomocník při práci, ne zdroj vymyšlených rozhovorů, metrik nebo dat. O práci s AI komunikovat transparentně; požadovanou relevantní konverzaci přikládat samostatně.

## Jak předávat výsledek úprav

Při každém patchi uvést: **co se změnilo, co zůstalo nedotčeno, jaké testy skutečně proběhly, které soubory má autor nahrát**. Pokud jde pouze o CSS, neposílat pro jistotu celý `index.html`. Při editaci obsahu zachovat aktuální texty ostatních slidů a speaker notes přesným porovnáním.
