# 王邵言 / Yan Shao

这是 [Yan Shao](https://academic.ryanstarfox.top/) 的学术主页源码。交大计算机本科。

线上地址：**https://academic.ryanstarfox.top/**

[English](README.md) · [繁體中文](README_zh_Hant.md) · [Deutsch](README_de.md)

## 改内容

| 想改什么 | 改哪个文件 |
| --- | --- |
| 姓名、邮箱、Scholar / GitHub / LinkedIn / 博客 | `_config.yml` |
| About、News、Awards | `index.md` |
| Experiences | `_includes/experiences.md` |
| 论文列表 | `_data/publications.yml` |
| 头像、机构 logo、favicon | `assets/img/` |
| 简历 PDF | `assets/files/curriculum_vitae.pdf` |
| 页面结构 | `_layouts/homepage.html` |
| 配色和样式 | `_sass/custom.scss` |

主页是 `index.md`，论文在独立页面 `publications.md`。深浅色跟随系统外观。

## 本地预览

需要 Ruby 3+ 和 [Bundler](https://bundler.io/)。macOS 若用 Homebrew 的 Ruby：

```bash
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
bundle config set --local path 'vendor/bundle'
bundle install
bundle exec jekyll serve --livereload --host 127.0.0.1 --port 4000
```

浏览器打开 http://127.0.0.1:4000/。论文页是 http://127.0.0.1:4000/publications/。

## 上线

GitHub Pages 从 `main` 分支根目录构建。自定义域名是 `academic.ryanstarfox.top`（见 `CNAME`）。推送到 `main` 后会自动更新。

## 致谢

页面骨架来自 [yaoyao-liu/minimal-light](https://github.com/yaoyao-liu/minimal-light)，该主题基于 [orderedlist/minimal](https://github.com/orderedlist/minimal)。
