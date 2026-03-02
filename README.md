
# Dinakaran Solid Blocks – Themed Static React Site (Unified)

## Run locally
npm install && npm run dev

## Build
npm run build

## Deploy to Hostinger
Upload the **contents** of `dist/` to `public_html` and keep the SPA `.htaccess` below in `public_html`.

.htaccess
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-l
RewriteRule . /index.html [L]
</IfModule>
