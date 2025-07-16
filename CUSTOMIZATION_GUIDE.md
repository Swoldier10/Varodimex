# Ghid Rapid de Personalizare

## 🚀 Pași Esențiali pentru Lansare

### 1. Imagini Obligatorii (Adaugă în `assets/images/`)
- [ ] `hero-bg.jpg` - Imaginea principală de fundal
- [ ] `logo.png` - Logo-ul companiei
- [ ] `favicon.ico` - Iconița browser

### 2. Informații de Contact (Editează în `index.html`)
- [ ] Numărul de telefon (caută `+40 XXX-XXX-XXX`)
- [ ] Adresa email (caută `contact@varodimex.ro`)
- [ ] Adresa fizică (caută `Cartier Viișoara`)
- [ ] Programul de lucru

### 3. Conținut Personalizat
- [ ] Titlul principal (secțiunea `#hero`)
- [ ] Descrierea companiei (secțiunea `#overview`)
- [ ] Informații despre servicii

### 4. SEO și Meta Tags
- [ ] `<title>` - Titlul paginii
- [ ] `<meta name="description">` - Descrierea site-ului
- [ ] `<meta name="keywords">` - Cuvinte cheie
- [ ] Structured data în `<script type="application/ld+json">`

## 📸 Dimensiuni Imagini

| Tip Imagine | Dimensiune | Format | Folosire |
|-------------|------------|--------|----------|
| Hero Background | 1920x1080px | JPG | Fundal principal |
| Logo Principal | 512x512px | PNG | Navigation, footer |
| Gallery Images | 800x800px | JPG | Casa cu Pâine |
| Store Images | 600x400px | JPG | Magazine Atlantis |
| Favicon | 32x32px | ICO | Browser icon |

## 🎨 Modificare Culori Rapide

În `assets/css/styles.css`, modifică variabilele CSS:

```css
:root {
    --primary-600: #TAU_CULOARE_PRIMARA;     /* Verde Varodimex */
    --secondary-500: #TAU_CULOARE_SECUNDARA; /* Galben/Portocaliu */
}
```

## 📧 Configurare Formular Contact

### Opțiunea 1: Formspree (Recomandat)
1. Mergi la [formspree.io](https://formspree.io)
2. Creează cont gratuit
3. Înlocuiește în `index.html`:
```html
<form action="https://formspree.io/f/TAU_FORM_ID" method="POST">
```

### Opțiunea 2: EmailJS
1. Creează cont la [emailjs.com](https://emailjs.com)
2. Configurează serviciul email
3. Înlocuiește funcția în `assets/js/main.js`

## ✅ Checklist Finalizare

- [ ] Toate imaginile încărcate și optimizate
- [ ] Informații de contact actualizate
- [ ] Formularul de contact funcțional
- [ ] Testare pe mobile și desktop
- [ ] Verificare SEO cu Google PageSpeed Insights
- [ ] Backup complet al fișierelor

## 🚀 Deploy Rapid

### GitHub Pages (Gratuit)
1. Urcă pe GitHub
2. Settings > Pages > Deploy from branch `main`

### Netlify (Recomandat)
1. Drag & drop folder pe [netlify.com](https://netlify.com)
2. Domeniu gratuit instant

## 🆘 Probleme Comune

**Imaginile nu se încarcă:** Verifică calea către `assets/images/`  
**Formularul nu funcționează:** Configurează backend-ul (Formspree/EmailJS)  
**Culorile nu se schimbă:** Șterge cache-ul browserului  
**Mobile nu arată bine:** Testează cu Chrome DevTools  

---

**💡 Tip:** Păstrează o copie de siguranță înainte de modificări! 