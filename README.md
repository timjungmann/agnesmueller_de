# Agnes Mueller Artist Website

- Simple One Pager based on a barebone [eleventy](https://www.11ty.dev/) and [webpack](https://webpack.js.org/) template.

## What you have

- A simple static site generator with [Eleventy](https://11ty.io)
- Structured content using [Sanity.io](https://www.sanity.io)
- Monorepo managed with [Lerna](https://lerna.js.org/)

## Deployment

- Deployed to Cloudflare Pages with every push to main
- Live-Domain: https://www.exexex.berlin

## Features

- :fire: Barebone [11ty](https://www.11ty.dev/) (literally :scream:)
- :zap: Fast build with per env configs ([babel-env](https://babeljs.io/docs/en/babel-preset-env), [postcss-preset-env](https://github.com/csstools/postcss-preset-env), [webpack](https://webpack.js.org/configuration/#use-different-configuration-file)...)
- `.js` (ES6, Babel, Polyfills)
- `.css` (Sass, PostCSS, Autoprefixer)
- :white_check_mark: Optimized for production (source maps, headers, minified code...)
- :camera_flash: Responsive images and cached remote images ([@11ty/eleventy-img](https://github.com/11ty/eleventy-img))
- :package: SVG icon sprite generation
- :robot: SEO metadata and Open Graph tags
- :link: Safe external links (`noopener` and `noreferrer`)
- :memo: Useful shortcodes and filters (date, markdown, sprite icons, responsive images...)
- :shipit: Neat error overlay ([eleventy-plugin-error-overlay](https://github.com/stevenpetryk/eleventy-plugin-error-overlay))

## Usage

Uses Node version ^16.13.0

1. Install the dependencies:

```sh
npm install
```

2. Install Sanity CLI globally

```sh
npm install -g @sanity/cli

Then you can:

| Command               | Description                                   |
| --------------------- | --------------------------------------------- |
| **`npm run start`**   | Run your website on http://localhost:8080     |
| **`npm run build`**   | Build your production website inside `/_site` |
| **`npm run format`**  | Run prettier on all filles except `/_site`    |
| **`npm run analyze`** | Output info on your bundle size               |

Make sure you use the correct node.js version:

```sh
# with bash nvm
nvm use `cat .nvmrc`
# with windows nvm
nvm use $(cat .nvmrc)
# or just install the version specified inside `.nvmrc`
```
