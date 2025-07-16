# Grupul Varodimex - Website 2025

Un website modern, responsive și optimizat SEO pentru Grupul Varodimex, construit cu HTML5, Tailwind CSS și JavaScript.

## 📁 Structura Proiectului

```
Varodimex/
├── index.html                 # Fișierul principal HTML
├── assets/
│   ├── css/
│   │   └── styles.css        # Stiluri CSS personalizate
│   ├── js/
│   │   └── main.js           # JavaScript principal
│   └── images/               # Directorul pentru imagini
│       ├── .gitkeep          # Ghid pentru imagini necesare
│       ├── gallery/          # Imagini pentru galeria Casa cu Pâine
│       ├── stores/           # Imagini pentru magazinele Atlantis
│       ├── about/            # Imagini pentru secțiunea Despre noi
│       └── transport/        # Imagini pentru TransQuatro
└── README.md                 # Acest fișier
```

## 🚀 Pornire Rapidă

1. **Clonează sau descarcă** proiectul
2. **Adaugă imaginile tale** în directorul `assets/images/` (vezi ghidul de mai jos)
3. **Personalizează conținutul** în `index.html`
4. **Deschide** `index.html` în browser sau servește cu un server local

### Server Local (Recomandat)

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (cu live-server)
npx live-server

# PHP
php -S localhost:8000
```

Apoi accesează `http://localhost:8000`

## 🖼️ Adăugarea Imaginilor Tale

### Imagini Obligatorii

Înlocuiește aceste imagini cu cele ale companiei tale:

#### 1. Logo și Favicon
```
assets/images/
├── logo.png              (512x512px) - Logo principal
├── logo-white.png        (512x512px) - Logo alb pentru fundal întunecat
├── favicon.ico           (32x32px)   - Iconița browser
└── apple-touch-icon.png  (180x180px) - Iconița iOS
```

#### 2. Imaginea Hero (Principală)
```
assets/images/
└── hero-bg.jpg           (1920x1080px) - Imaginea de fundal principală
```

#### 3. Galeria Casa cu Pâine
```
assets/images/gallery/
├── bakery-1.jpg          (800x800px) - Pâine artizanală
├── bakery-2.jpg          (800x800px) - Produse de patiserie
├── bakery-3.jpg          (800x800px) - Interiorul brutăriei
└── bakery-4.jpg          (800x800px) - Ingrediente naturale
```

#### 4. Magazine Atlantis
```
assets/images/stores/
├── atlantis-centru.jpg    (600x400px) - Magazin Centru
├── atlantis-viisoara.jpg  (600x400px) - Magazin Viișoara
├── atlantis-unirea.jpg    (600x400px) - Magazin Unirea
└── store-placeholder.jpg  (600x400px) - Imagine generică magazin
```

#### 5. Imagini Opționale
```
assets/images/about/
├── group-photo.jpg       (1200x800px) - Fotografie de grup
└── facility.jpg          (1200x800px) - Facilitățile companiei

assets/images/transport/
├── truck.jpg             (800x600px) - Vehicule de transport
└── warehouse.jpg         (800x600px) - Depozit/facilitate logistică
```

### Format și Calitate Recomandate

- **Format**: JPG pentru fotografii, PNG pentru logo-uri cu transparență
- **Calitate**: 80-90% compresie pentru web
- **Optimizare**: Folosește tool-uri ca TinyPNG sau ImageOptim
- **WebP**: Opțional, pentru performanță maximă

## ✏️ Personalizarea Conținutului

### 1. Informații de Contact

În `index.html`, caută secțiunea `#contact` și actualizează:

```html
<!-- Adresa -->
<p class="text-gray-600">
    Cartier Viișoara, nr 62U<br>
    Bistrița, Bistrița-Năsăud<br>
    România
</p>

<!-- Telefon -->
<a href="tel:+40XXX-XXX-XXX" class="hover:text-emerald-600 transition-colors">+40 XXX-XXX-XXX</a>

<!-- Email -->
<a href="mailto:contact@varodimex.ro" class="hover:text-emerald-600 transition-colors">contact@varodimex.ro</a>

<!-- Program -->
<p class="text-gray-600">
    Luni - Vineri: 08:00 - 17:00<br>
    Sâmbătă: 08:00 - 14:00<br>
    Duminică: Închis
</p>
```

### 2. Meta Tags SEO

Actualizează meta tag-urile din `<head>`:

```html
<title>Titlul Tău Personalizat | Grupul Varodimex</title>
<meta name="description" content="Descrierea ta personalizată...">
<meta name="keywords" content="cuvintele-cheie, specifice, companiei-tale">
```

### 3. Structured Data

În secțiunea `<script type="application/ld+json">`, actualizează informațiile companiei:

```json
{
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Grupul Varodimex",
    "description": "Descrierea ta...",
    "url": "https://varodimex.ro",
    "telephone": "+40-XXX-XXX-XXX",
    "email": "contact@varodimex.ro"
}
```

### 4. Locațiile Magazinelor Atlantis

Pentru a adăuga magazine noi sau actualiza informațiile existente, caută secțiunea `#atlantis` și duplică structura acestor carduri:

```html
<div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300" data-aos="fade-up" data-aos-delay="100">
    <div class="h-48 bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
        <div class="text-center text-white">
            <svg class="w-12 h-12 mx-auto mb-3"><!-- SVG icon --></svg>
            <h3 class="text-xl font-bold">Nume Magazin</h3>
        </div>
    </div>
    <div class="p-6">
        <p class="text-gray-600 mb-4">Descrierea magazinului...</p>
        <div class="flex items-center text-sm text-gray-500">
            <svg class="w-4 h-4 mr-2"><!-- Location icon --></svg>
            Adresa magazinului
        </div>
    </div>
</div>
```

## 🎨 Personalizarea Culorilor

Culorile principală și secundară pot fi modificate în `assets/css/styles.css`:

```css
:root {
    /* Culoarea principală (verde) */
    --primary-600: #059669;
    --primary-700: #047857;
    
    /* Culoarea secundară (galben/portocaliu) */
    --secondary-500: #f59e0b;
    --secondary-600: #d97706;
}
```

Sau în configurația Tailwind din `index.html`:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: {
                    600: '#TAU_CULOARE_PRIMARA',
                    700: '#TAU_CULOARE_PRIMARA_INCHISA'
                },
                secondary: {
                    500: '#TAU_CULOARE_SECUNDARA',
                    600: '#TAU_CULOARE_SECUNDARA_INCHISA'
                }
            }
        }
    }
}
```

## 📝 Personalizarea Textelor

### Headline Principal (Hero)
Caută în `index.html` secțiunea hero și modifică:
```html
<h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
    Ecosistem local integrat<br>
    <span class="gradient-text">în comerțul alimentar și logistică</span>
</h1>
```

### Descrierile Serviciilor
Actualizează descrierile pentru fiecare serviciu în secțiunile respective:
- Magazine Atlantis (#atlantis)
- Casa cu Pâine (#casa-cu-paine)  
- TransQuatro (#transquatro)

## 🌐 Optimizare SEO

### 1. Sitemap
Creează un fișier `sitemap.xml` în rădăcina proiectului:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://varodimex.ro/</loc>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
</urlset>
```

### 2. Robots.txt
Creează un fișier `robots.txt`:

```
User-agent: *
Allow: /
Sitemap: https://varodimex.ro/sitemap.xml
```

### 3. Google Analytics
Adaugă codul de tracking în `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📧 Configurarea Formularului de Contact

Formularul are nevoie de un backend pentru a funcționa. Opțiuni:

### 1. Formspree (Recomandat - Gratuit)
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### 2. Netlify Forms
```html
<form name="contact" method="POST" data-netlify="true">
```

### 3. EmailJS
```javascript
// În assets/js/main.js, înlocuiește funcția submitContactForm
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data)
    .then(() => {
        showFormMessage('Mulțumim pentru mesaj!', 'success');
    });
```

## 🚀 Deployment

### GitHub Pages
1. Urcă proiectul pe GitHub
2. Mergi la Settings > Pages
3. Selectează branch-ul `main`
4. Website-ul va fi disponibil la `https://username.github.io/repository-name`

### Netlify
1. Conectează repository-ul GitHub
2. Deploy automat la fiecare commit
3. Domeniu gratuit .netlify.app

### Vercel
1. Importă proiectul din GitHub
2. Deploy instant
3. Domeniu gratuit .vercel.app

### Hosting tradițional
Urcă toate fișierele în directorul public_html al hosting-ului tău.

## 🔧 Funcționalități Incluse

- ✅ **Responsive Design** - Funcționează pe toate dispozitivele
- ✅ **SEO Optimizat** - Meta tags, structured data, Open Graph
- ✅ **Animații AOS** - Animații smooth la scroll
- ✅ **Lazy Loading** - Încărcare optimizată a imaginilor
- ✅ **Formulare Interactive** - Validare în timp real
- ✅ **Navigare Smooth** - Scroll lin între secțiuni
- ✅ **Accessibility** - ARIA labels, contrast, keyboard navigation
- ✅ **Performance** - Optimizat pentru încărcare rapidă

## 📞 Suport

Pentru întrebări sau probleme:

1. **Documentația** - Citește din nou acest README
2. **Validare HTML** - Folosește W3C Validator
3. **Teste Mobile** - Google Mobile-Friendly Test
4. **Performance** - Google PageSpeed Insights

## 📝 Licență

Acest proiect este creat special pentru Grupul Varodimex. Toate drepturile rezervate.

---

**Versiunea:** 1.0  
**Ultima actualizare:** Ianuarie 2025  
**Compatibilitate:** Toate browserele moderne (IE11+) 