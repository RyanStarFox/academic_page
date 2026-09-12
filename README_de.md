# Yan Shao

Quellcode der akademischen Homepage von [Yan Shao](https://academic.ryanstarfox.top/), Bachelorstudent der Informatik an der Shanghai Jiao Tong University.

Live: **https://academic.ryanstarfox.top/**

[English](README.md) · [简体中文](README_zh_Hans.md) · [繁體中文](README_zh_Hant.md)

## Inhalte ändern

| Änderung | Datei |
| --- | --- |
| Name, E-Mail, Scholar / GitHub / LinkedIn / Blog | `_config.yml` |
| About, News, Awards | `index.md` |
| Experiences | `_includes/experiences.md` |
| Publikationen | `_data/publications.yml` |
| Portrait, Logos, Favicon | `assets/img/` |
| Lebenslauf | `assets/files/curriculum_vitae.pdf` |
| Layout | `_layouts/homepage.html` |
| Farben und Styles | `_sass/custom.scss` |

Die Startseite ist `index.md`. Publikationen liegen auf `publications.md`. Hell- und Dunkelmodus folgen der Systemeinstellung.

## Lokal ansehen

Ruby 3+ und [Bundler](https://bundler.io/) werden benötigt. Mit Homebrew-Ruby unter macOS:

```bash
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
bundle config set --local path 'vendor/bundle'
bundle install
bundle exec jekyll serve --livereload --host 127.0.0.1 --port 4000
```

Danach http://127.0.0.1:4000/ öffnen. Die Publikationsseite ist http://127.0.0.1:4000/publications/.

## Deployment

GitHub Pages baut die Seite aus dem Wurzelverzeichnis von `main`. Die Domain ist `academic.ryanstarfox.top` (siehe `CNAME`). Ein Push auf `main` löst den Rebuild aus.

## Danksagung

Das Layout basiert auf [yaoyao-liu/minimal-light](https://github.com/yaoyao-liu/minimal-light) und damit auf [orderedlist/minimal](https://github.com/orderedlist/minimal).
