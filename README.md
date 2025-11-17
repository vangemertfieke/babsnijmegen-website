# Bij Babs - HTML/CSS/JavaScript Versie

Deze folder bevat een pure HTML, CSS en JavaScript versie van de Bij Babs website, geconverteerd vanuit de React/TypeScript versie.

## Structuur

```
html-version/
├── index.html          # Homepage
├── about.html          # Over Bij Babs pagina
├── menu.html           # Menu pagina met tabs
├── reviews.html        # Reviews pagina
├── contact.html        # Contact pagina
├── styles.css          # Alle styling (geconverteerd van Tailwind)
├── script.js           # JavaScript voor interactiviteit
└── README.md           # Deze file
```

## Gebruik

### Lokaal openen

Je kunt de website lokaal openen door simpelweg `index.html` te openen in je browser:

1. Navigeer naar de `html-version` folder
2. Dubbelklik op `index.html` of
3. Open met je browser via "Bestand > Openen"

### Met een lokale server (aanbevolen)

Voor de beste ervaring, gebruik een lokale webserver:

**Optie 1: Python**
```bash
# Python 3
cd html-version
python3 -m http.server 8000

# Dan open http://localhost:8000 in je browser
```

**Optie 2: VS Code Live Server**
1. Installeer de "Live Server" extensie in VS Code
2. Rechtsklik op `index.html`
3. Selecteer "Open with Live Server"

**Optie 3: Node.js (met npx)**
```bash
cd html-version
npx serve
```

## Afbeeldingen

De HTML bestanden verwijzen naar afbeeldingen in `../src/assets/`. Zorg ervoor dat:
- De afbeeldingen op de juiste locatie staan, of
- Pas de image paden aan in de HTML bestanden naar je eigen afbeeldingen

Benodigde afbeeldingen:
- `logo-new.jpg` - Logo (gebruikt in header en footer)
- `interior.png` - Hero afbeelding homepage
- `garden.jpg` - About pagina afbeelding
- `team-new.jpg` - Team afbeelding

## Features

### Navigatie
- Sticky header met desktop en mobiele navigatie
- Actieve pagina wordt gemarkeerd in de navigatie
- Mobiel menu met toggle functionaliteit

### Menu Pagina
- Tab systeem voor verschillende menu categorieën
- URL parameters ondersteuning (bijv. `menu.html?tab=lunch`)
- Responsive grid layout voor menu items

### Interactiviteit
- Mobiele menu toggle
- Menu tab switching
- Smooth scroll voor anker links
- Fade-in animaties bij scrollen

### Responsive Design
- Mobile-first design
- Breakpoints op 640px, 768px
- Volledig responsive grid layouts

## Aanpassingen

### Kleuren
Alle kleuren zijn gedefinieerd als CSS variabelen in `styles.css`:
```css
:root {
    --background: hsl(40, 25%, 97%);
    --foreground: hsl(15, 35%, 20%);
    --primary: hsl(12, 45%, 30%);
    /* etc. */
}
```

### Fonts
De website gebruikt:
- **Sans-serif**: Systeem fonts (Arial, Helvetica, etc.)
- **Serif**: Georgia voor headings

Om custom fonts toe te voegen, voeg deze toe aan het `<head>` gedeelte van je HTML:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

## Browser Ondersteuning

Deze website werkt in alle moderne browsers:
- Chrome/Edge (laatste 2 versies)
- Firefox (laatste 2 versies)
- Safari (laatste 2 versies)

## Deployment

### GitHub Pages
1. Upload de `html-version` folder naar je GitHub repository
2. Ga naar Settings > Pages
3. Selecteer de branch en folder
4. Je website is nu live!

### Netlify / Vercel
1. Drag & drop de `html-version` folder
2. Of connect je GitHub repository
3. Deploy!

### Traditionele hosting
Upload alle bestanden via FTP naar je webserver in de `public_html` of `www` folder.

## Onderhoud

### Menu items updaten
Bewerk `menu.html` en zoek naar de relevante `menu-tab-content` sectie. Menu items hebben deze structuur:

```html
<div class="menu-item">
    <div class="menu-item-info">
        <h3>Item Naam</h3>
        <p>Beschrijving</p>
    </div>
    <div class="menu-item-price">€ 12.50</div>
</div>
```

### Contact informatie
Contact informatie staat in:
- Footer (op elke pagina)
- Contact pagina (`contact.html`)

## Licentie

© 2025 Bij Babs Nijmegen. Alle rechten voorbehouden.
