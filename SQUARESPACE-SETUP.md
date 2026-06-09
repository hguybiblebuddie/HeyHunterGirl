# HeyHunterGirl — Squarespace Developer Mode Setup

## Prerequisites
- Squarespace **Business plan or higher** (required for Developer Mode)
- [Squarespace CLI](https://developers.squarespace.com/developer-tools) installed: `npm install -g @squarespace/squarespace-toolbelt`
- Node.js 14+

## One-Time Setup

### 1. Enable Developer Mode on your Squarespace site
1. Log in to squarespace.com → Your Site → Settings → Advanced → Developer Mode → **Enable**
2. Note your site URL: `heyhuntergirl.squarespace.com`

### 2. Connect this repo to Squarespace
```bash
# From the project root:
squarespace login
squarespace clone --siteUrl heyhuntergirl.squarespace.com
```

### 3. Push the template
```bash
squarespace server   # local preview at localhost:9000
# or to push to live:
squarespace push
```

---

## Pages to Create in Squarespace CMS

After deploying the template, create these pages in **Pages → Not Linked**:

| Page Title | URL Slug | Template to Assign |
|------------|----------|--------------------|
| Home       | `/`      | Homepage           |
| Speaking   | `/speaking` | Speaking        |
| Podcast    | `/podcast` | Podcast          |
| Apply      | `/apply` | Apply              |
| About      | `/about` | Default            |

---

## Navigation Setup
Go to **Design → Navigation**:
- **Main Navigation**: Add Home, About, Speaking, Podcast, Apply links
- **Footer Navigation**: Same links

---

## Forms Setup
On each page that has a `<!-- Editor Note: Add Form Block here -->` comment:
1. Enter Edit mode on that page
2. Click **+** to add a block → **Form**
3. Add the fields listed in the comment
4. Under Form Settings → Storage → set your email notification address
5. Customize the submit button label and thank-you message

---

## Accomplishments Section (Homepage)
In the Accomplishments section on the homepage, add:
- **Code Block** with stat cards (copy the `.stat-card` HTML pattern from site.less)
- **Text Blocks** for awards list — use the `.award-badge` class via custom CSS
- Or simply use **Text Blocks** — the styles will apply automatically

---

## Social Links — Update These
In each `.region` file, replace the `#` placeholders with real URLs:
- `https://instagram.com/heyhuntergirl` → update if username differs
- `https://linkedin.com/in/heyhuntergirl` → update with real LinkedIn URL
- `https://youtube.com/@heyhuntergirl` → update with real channel
- `https://tiktok.com/@heyhuntergirl` → update with real TikTok handle

---

## Testimonials
Replace the placeholder testimonial cards in `homepage.region` with real quotes.
Each card follows this pattern:
```html
<div class="testimonial-card">
  <p class="testimonial-quote">Their quote here.</p>
  <div class="testimonial-author">
    <span class="author-name">— Person Name</span>
    <span class="author-title">Their Title / Organization</span>
  </div>
</div>
```

---

## Podcast Notify Form
The email capture form on `/podcast` should be connected to your email provider.
Options:
- Replace with a **Squarespace Form Block** (simplest)
- Embed a **Mailchimp** signup form for list building (recommended for podcast launch)

---

## Colors & Branding
All colors are CSS variables in `styles/site.less`:
```
--deep:       #1C1B3A   (primary dark — backgrounds, headings)
--gold:       #C9983A   (primary accent — CTAs, highlights)
--coral:      #C9623A   (secondary accent — Apply page, alternate CTAs)
--cream:      #FAF6F0   (light background)
```
To update the color scheme, change these values in the `:root` block at the top of `site.less`.
