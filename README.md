# Groser Private Limited – Website

Single-page business website for **Groser Private Limited, Dharwad** – quality kirana items for homes, with free home delivery and ordering through WhatsApp.

- Live site: https://groser.shop
- Hosting: Netlify (`groser.netlify.app`)
- Domain: groser.shop (BigRock registrar, DNS managed on Netlify)

## Project structure

```
index.html   # the whole website (HTML, CSS, JavaScript, embedded logo and images)
README.md
.gitignore
```

## What the site includes

- Animated intro screen (greeting words, then the logo flies into the header)
- Hero section, categories, "Why trust us", journey and Chaturmas highlight, FAQ
- "Order on WhatsApp" buttons and floating WhatsApp / call buttons
- Contact details, map link, SEO tags and business details for search engines

## How to edit

Open `index.html` in any code editor. Common changes:

| Change | Where to look |
|---|---|
| WhatsApp number | `WHATSAPP_NUMBER` near the bottom `<script>` |
| Intro greetings | `var words=[...]` in the intro `<script>` at the top of `<body>` |
| Text and sections | Search for the section id: `about`, `trust`, `journey`, `faq`, `order` |
| Colours | CSS variables at the top of `<style>` (`--blue`, `--yellow`, ...) |

## Deploy

1. Commit and push changes to the `main` branch.
2. If the repository is linked to Netlify, it redeploys automatically.
3. Otherwise, upload `index.html` in Netlify under **Deploys**.

## Notes

- Browser tests of WhatsApp links should be done on the live site, not inside preview frames.
- Do not commit customer data, passwords or API keys.

## Ownership

Client project for Groser Private Limited. All rights reserved unless agreed otherwise in the project contract.
