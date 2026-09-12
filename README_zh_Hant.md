# 王邵言 / Yan Shao

這是 [Yan Shao](https://academic.ryanstarfox.top/) 的學術主頁源碼。上海交通大學計算機本科。

線上地址：**https://academic.ryanstarfox.top/**

[English](README.md) · [简体中文](README_zh_Hans.md) · [Deutsch](README_de.md)

## 改內容

| 想改什麼 | 改哪個檔案 |
| --- | --- |
| 姓名、信箱、Scholar / GitHub / LinkedIn / 部落格 | `_config.yml` |
| About、News、Awards | `index.md` |
| Experiences | `_includes/experiences.md` |
| 論文列表 | `_data/publications.yml` |
| 頭像、機構 logo、favicon | `assets/img/` |
| 履歷 PDF | `assets/files/curriculum_vitae.pdf` |
| 頁面結構 | `_layouts/homepage.html` |
| 配色與樣式 | `_sass/custom.scss` |

首頁是 `index.md`，論文在獨立頁面 `publications.md`。深淺色會跟隨系統外觀。

## 本機預覽

需要 Ruby 3+ 與 [Bundler](https://bundler.io/)。macOS 若使用 Homebrew 的 Ruby：

```bash
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
bundle config set --local path 'vendor/bundle'
bundle install
bundle exec jekyll serve --livereload --host 127.0.0.1 --port 4000
```

瀏覽器開啟 http://127.0.0.1:4000/。論文頁是 http://127.0.0.1:4000/publications/。

## 上線

GitHub Pages 從 `main` 分支根目錄建置。自訂網域是 `academic.ryanstarfox.top`（見 `CNAME`）。推送到 `main` 後會自動更新。

## 致謝

頁面骨架來自 [yaoyao-liu/minimal-light](https://github.com/yaoyao-liu/minimal-light)，該主題基於 [orderedlist/minimal](https://github.com/orderedlist/minimal)。
