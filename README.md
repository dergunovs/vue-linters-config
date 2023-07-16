# Конфиги eslint, stylelint, prettier

[npm](https://www.npmjs.com/package/vue-linters-config)

_Легко принимать свободу как должное, если никогда её не лишался. (Дик Чейни)_

Конфиги для Vue3 Composition API (script setup) + TS + SCSS + CSS Module.

Редактор кода - VS Code с установленными плагинами ESLint, Prettier и Stylelint(не забыть в настройках добавить расширения файлов .vue и .scss).

## Установка

`npm i vue-linters-config --save-dev`

Установка сторонних зависимостей:

`npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-prettier eslint-plugin-vue prettier stylelint stylelint-config-recess-order stylelint-config-recommended-scss stylelint-config-recommended-vue stylelint-prettier postcss-html --save-dev`

В package.json добавить команду в секцию script для запуска npm run lint:

`"lint": "eslint '**/*.{js,ts,vue}' && stylelint '**/*.{scss,vue}'"`

Версия для Windows без кавычек:

`"lint": "eslint **/*.{js,ts,vue} && stylelint **/*.{scss,vue}"`

## Применение правил

В корневой папке создать 3 файла: .eslintrc.cjs, prettier.config.cjs, stylelint.config.cjs.

.eslintrc.cjs:

```
const { eslint } = require("vue-linters-config");
module.exports = eslint;
```

prettier.config.cjs:

```
const { prettier } = require("vue-linters-config");
module.exports = prettier;
```

stylelint.config.cjs:

```
const { stylelint } = require("vue-linters-config");
module.exports = stylelint;
```
