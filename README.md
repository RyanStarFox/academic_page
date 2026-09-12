# Yan Shao

Academic homepage of [Yan Shao](https://academic.ryanstarfox.top/), an undergraduate in Computer Science at Shanghai Jiao Tong University.

Live site: **https://academic.ryanstarfox.top/**

[简体中文](README_zh_Hans.md) · [繁體中文](README_zh_Hant.md) · [Deutsch](README_de.md)

## Edit the site

| What to change | File |
| --- | --- |
| Name, email, Scholar / GitHub / LinkedIn / blog | `_config.yml` |
| About, News, Awards | `index.md` |
| Experiences | `_includes/experiences.md` |
| Publications | `_data/publications.yml` |
| Portrait, logos, favicon | `assets/img/` |
| CV | `assets/files/curriculum_vitae.pdf` |
| Layout | `_layouts/homepage.html` |
| Colors and page styles | `_sass/custom.scss` |

The home page is `index.md`. Publications live on their own page, `publications.md`. Dark mode follows the system appearance.

## Preview locally

Ruby 3+ and [Bundler](https://bundler.io/) are required. On macOS with Homebrew Ruby:

```bash
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
bundle config set --local path 'vendor/bundle'
bundle install
bundle exec jekyll serve --livereload --host 127.0.0.1 --port 4000
```

Then open http://127.0.0.1:4000/. The publications page is http://127.0.0.1:4000/publications/.

## Deploy

The site is built by GitHub Pages from the `main` branch (repository root). The custom domain is `academic.ryanstarfox.top` (`CNAME`). Push to `main` and Pages will rebuild.

## Credit

The layout started from [yaoyao-liu/minimal-light](https://github.com/yaoyao-liu/minimal-light), which is based on [orderedlist/minimal](https://github.com/orderedlist/minimal).
