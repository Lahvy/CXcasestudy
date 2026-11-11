# PROJECT_CONTEXT.md

> **Aktualizovaný kontext projektu · 11. 11. 2026**  
> Referenční dokument k rozhodnutím, předpokladům a následnému rozvoji CX case study. Pro veřejného čtenáře je určen zejména [README.md](README.md); toto je podrobnější pracovní kontext.

## 1. Zadání a klíčová otázka

**Role:** CX Manager, ekosystémové služby.  
**Téma:** nákup ojetého auta od prvních úvah po dokončení koupě.  
**Výchozí problém:** banka se často dostává k potřebě až ve chvíli, kdy klient ví, jaké financování nebo pojištění hledá.

Hledáme příležitosti, jak být při rozhodování užiteční dříve a jak rozpoznat potřebu na základě relevantního, ideálně **dobrovolně poskytnutého** signálu. Nejde o zadání navrhnout další finanční produkt ani implementovat plně integrovanou službu.

**In scope:** motivace, plánování, hledání, výběr a prověření ojetého vozu, dokončení nákupu.  
**Out of scope:** prodej vozu a následný provoz. Koncept „Moje garáž“ je záměrně označen jako širší budoucí vize.

**Forma:** pět slidů / přibližně 15 minut prezentace s navazující diskuzí. Klíčové je prokázat způsob uvažování, prioritizaci a schopnost přejít od hypotéz k ověřitelným krokům.

## 2. Důkazní status

| Prvek | Aktuální status | Co se nesmí tvrdit |
| --- | --- | --- |
| Původní zadání | Poskytnuté zadání case study | Že jde o širší schválený produktový brief. |
| JTBD a archetypy | Pracovní interpretační model | Že byly ověřeny reprezentativním výzkumem. |
| Customer journey | High-level hypotetická syntéza | Že zobrazuje empiricky zmapované kroky všech klientů. |
| Koncepty A/B/C | Varianty k diskusi a testu | Že jsou implementované, obchodně schválené či technicky prověřené. |
| Kanály a partneři | Možné role a návaznosti | Že existuje schválené sdílení kontextu, API nebo smlouva. |
| H1–H4 a KPI | Návrh validačního rámce | Že hypotézy vyšly nebo že byly naměřeny výsledky. |

**Zásada:** jasně oddělovat *pozorovaný fakt*, *předpoklad*, *možný koncept* a *rozhodnutí, které teprve čeká na ověření*.

## 3. Logika pěti slidů

### Slide 1 · Jak bych postupoval?

Iterativní proces **Align & Frame → Explore → Synthesize → Co-create → Test & Learn**. Před návrhem funkce je potřeba srovnat cíle klienta, banky a partnerů, včetně kritérií úspěchu. Design není lineární dodávka: nové poznatky mohou vést k reprioritizaci nebo návratu k framingu.

### Slide 2 · Proč lidé kupují ojeté auto?

Jobs to Be Done ve třech vrstvách:

- **Funkční:** bezpečná mobilita, celkové náklady, omezení rizika skrytých vad.
- **Emocionální:** klid, vyhnutí se stresu, důvěra ve vlastní rozhodnutí.
- **Sociální:** odpovědnost vůči rodině, status, „cool faktor“.

Pracovní archetypy: **Nováček, Pragmatik, Nadšenec, Nejistý kupující**. JTBD popisují, čeho chce klient dosáhnout; archetypy naznačují, jak přistupuje k rozhodování. Mohou se kombinovat a měnit v čase.

### Slide 3 · Kde může banka přinést hodnotu?

High-level zákaznická cesta **Impuls → Plánování → Hledání → Prověření → Nákup**. Kritické jsou rané potřeby a nejistoty, ne až samotná poptávka po úvěru. Tři návazné směry: orientace a finanční připravenost, důvěryhodný výběr, plynulá návaznost na ekosystém.

**Kam nevstupovat:** vlastní univerzální autobazar nebo vlastní síť inspekcí. Prověřování a nabídky vozů lze uvažovat přes existující služby či specialisty, pokud to bude dávat smysl klientovi a partnerům.

### Slide 4 · Tři koncepty. Jeden ekosystém.

| Koncept | Potřeba | Role v navrženém směru | Status |
| --- | --- | --- | --- |
| **A · Kalkulačka nákladů** | „Kolik mě auto skutečně bude stát?“ | První pomoc, jednoduchý výstup a možné včasné rozpoznání potřeby. | První kandidát rychlého testu. |
| **B · Průvodce nákupem** | „Jak vybrat a nenechat se nachytat?“ | Checklist, shortlist, porovnání, další kroky a partner pro prověření. | Pokročilejší návazný koncept. |
| **C · Moje garáž** | „Jak mít vozidla a související služby pod kontrolou?“ | Dlouhodobější kontext a opakovaná užitečnost ekosystému. | Budoucí vize mimo aktuální scope. |

**Kanály se neurčují předčasně.** Možnou roli má veřejný web (dohledatelnost, neklienti), DoKapsy (ekosystém a návraty), ČSOB Smart (bankovní návaznost) a partneři (specializované kroky). Konkrétní rozdělení musí vycházet ze zjištění, produktové strategie, identity, souhlasů a technické proveditelnosti.

**MVP logika:** před rozsáhlými integracemi otestovat jednoduchou pomoc. U odkazů na vozidla je možné uvažovat o ručním vložení URL; automatické propojení účtů nebo synchronizace není předpokladem prvního testu.

### Slide 5 · Ověřit hodnotu. Měřit posun.

Záměrně propojuje čtyři části: **co a jak ověřit → hypotézy → kritéria úspěchu → další kroky**. Cílem není jen potvrdit atraktivitu nápadu, ale rozhodnout, zda existuje klientská hodnota, důvěra, vhodný obchodní přínos a realistická cesta k dodání.

## 4. Výzkumný a validační plán

| Fáze | Metoda | Co chceme zjistit | Výstup pro rozhodnutí |
| --- | --- | --- | --- |
| **Explore** | Pracovně 8–12 kvalitativních rozhovorů napříč nákupními situacemi | Skutečná minulá zkušenost, JTBD, spouštěče, bariéry, důvěra | Potvrzené či změněné mapování potřeb, aktualizované priority. |
| **Prototype** | Úkolové testy kalkulačky a částí průvodce | Porozumění, použitelnost, rozhodovací jistota, další krok | Co zjednodušit, vypustit či doplnit. |
| **Behavioral signal** | Transparentní fake door nebo malý pilot | Reálný zájem a vykonané akce, ne pouze preference v rozhovoru | Rozhodnutí, zda má smysl funkci rozvíjet. |
| **Refinement + round 2** | Společná práce s týmy, konkrétnější prototyp / úzké MVP | Kvalita end-to-end řešení a technicko-obchodní proveditelnost | Iterate / scale / stop / reframe. |

Počet rozhovorů je **pracovní návrh pro první kvalitativní vlnu**, nikoli statistický odhad či realizovaný výzkum. Zahrnout stávající klienty i neklienty, zkušené i méně zkušené kupující a lidi v různých fázích rozhodování.

**Prevence zkreslení:** nejdříve se ptát na skutečné minulé situace a chování. Teprve potom ukázat prototyp; neptat se pouze, zda se klientovi nápad „líbí“.

## 5. Hypotézy H1–H4

- **H1 · Pomoc před produktem:** lidé potřebují praktické vedení ještě před výběrem auta či finančního produktu. *Ověřit:* rozhovory, úkolový test orientační kalkulace.
- **H2 · Hodnota za záměr:** část klientů dobrovolně poskytne kontext výměnou za užitečný výsledek. *Ověřit:* srozumitelnost formuláře, dokončení, dobrovolné uložení; oddělený marketingový souhlas.
- **H3 · Důvěryhodný výběr:** shortlist, checklist a možnost odborného prověření podpoří informované rozhodování. *Ověřit:* schopnost klienta porovnat kandidáty a naplánovat skutečný další krok.
- **H4 · Banka jako partner:** klient může důvěřovat bance i jako pomocníkovi při rozhodování, nejen při prodeji financování. *Ověřit:* vnímaná kompetence, nestrannost, očekávání od role banky a ochota službu použít.

Hypotézy se mají po discovery přepsat či vyřadit, pokud zjištění ukážou jinou realitu.

## 6. Definice úspěchu a ochranné podmínky

**Úspěch má pět komplementárních dimenzí:**

1. **Trust:** banka působí relevantně, kompetentně a nestranně; klient je ochotný pomoc využít.
2. **Early intent:** záměr je rozpoznán dobrovolně a včas, ještě před typickou produktovou poptávkou.
3. **Engagement:** dokončené výpočty či plány, smysluplné návraty a pokračování cesty.
4. **Customer value:** klient lépe chápe náklady, zvládne rozhodovací úkol a vykoná vhodný další krok.
5. **Business value:** relevantní předání partnerovi nebo nabídka vhodné bankovní služby a případný inkrementální přínos.

**North Star (pracovní návrh):** `meaningful progression rate` = počet klientů s deklarovaným nákupním záměrem, kteří v definovaném období vykonali významný ověřitelný krok / počet klientů příslušné kohorty s deklarovaným záměrem. Konkrétní definice kroků, délka okna, baseline a cíle se nesmějí vymýšlet bez dat. Samotný klik či lead není úspěšný krok.

**Guardrails:** datová minimalizace, explicitní účel a dobrovolné sdílení, oddělený souhlas s marketingem, bezpečnost identity, vhodnost produktů, nestranné doporučování, odpovědnost za partnerskou zkušenost. U obchodního dopadu nevydávat korelaci za kauzalitu; kde je to možné, porovnat pilot s vhodnou kontrolní skupinou.

## 7. Rozhodovací rámec a zainteresované týmy

Koncepty se nepřeklápějí automaticky do backlogu. Nejdříve posoudit:

- **Klientskou hodnotu:** velikost a naléhavost řešeného problému, přínos pro rozhodování.
- **Business přínos:** soulad s ekosystémovou strategií, kvalita získaného signálu a relevantní návaznosti.
- **Feasibility / náklady:** identita, bezpečnost, data, partnerství, dostupnost týmů a dlouhodobá udržitelnost.
- **Riziko a etiku:** důvěra, ochrana údajů, možné nesprávné doporučení a tlak na nevhodný produkt.

Relevantní partneři pro následný refinement mohou zahrnovat produkt, CX a UX/service design, data/analytics, IT/architekturu, bezpečnost, právní/compliance a externí specialisty. **Nejde o tvrzení, že tito stakeholdeři již návrh schválili.**

## 8. Stav dodávky a otevřené otázky

**Hotovo pro prezentaci:** interaktivní pětidílný webový deck, speaker notes, pracovní syntéza potřeb, journey, tři koncepty a návrh testovacího a měřicího rámce. Web je statická prezentační aplikace, nikoli implementace klientských produktů.

**Zůstává otevřené pro reálný projekt:**

- Zda mají klienti problém v navržené podobě, včetně různých nákupních situací a archetypů.
- Který koncept a jaký krok klientské cesty generuje největší smysluplnou hodnotu.
- Který kanál a model identity/uloženého kontextu jsou vhodné a bezpečné.
- Jaké funkce, data a partnerství lze technicky a smluvně realizovat.
- Jak vymezit North Star, baseline, kohorty a úspěšnost experimentu.
- Jak navrhnout MVP, které zůstane užitečné bez povinného leadu či úvěru.

## 9. Transparentnost práce s AI

AI byla pomocným nástrojem při rešerši, inspiraci, strukturování textů, ideaci, oponentuře a přípravě webu. Autor řídil rozhodnutí, finální podobu prezentace a její úpravy. **AI nevytváří empirické poznatky tam, kde nebyl proveden skutečný výzkum.** Zadání požaduje relevantní část komunikace s AI jako přílohu; tuto povinnost nenahrazuje dokumentace v repozitáři.

**Zdroje pravdy při úpravách:** aktuální `index.html`, speaker notes u jednotlivých slidů, původní zadání a případná nová, explicitně přijatá rozhodnutí. [README.md](README.md) popisuje obsah veřejně, [AGENTS.md](AGENTS.md) stanovuje technická pravidla bezpečných změn.
