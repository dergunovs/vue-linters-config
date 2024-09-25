# Конфиги eslint flat, stylelint, prettier

[npm](https://www.npmjs.com/package/vue-linters-config)

_Легко принимать свободу как должное, если никогда её не лишался. (Дик Чейни)_

Конфиги для Vue3 Composition API (script setup) + TS + SCSS + CSS Module.

Редактор кода - VS Code с установленными плагинами ESLint, Prettier и Stylelint(не забыть в настройках добавить расширения файлов .vue и .scss).

## Установка

`npm i vue-linters-config --save-dev`

Установка сторонних зависимостей:

`npm i eslint eslint-config-prettier eslint-import-resolver-typescript postcss-html prettier stylelint stylelint-config-recess-order stylelint-config-recommended-scss stylelint-config-recommended-vue stylelint-prettier --save-dev`

В package.json добавить команду в секцию script для запуска npm run lint:

`"lint": "eslint **/*.{js,ts,vue} && stylelint **/*.{scss,vue}"`

## Применение правил

В корневой папке создать 3 файла: eslint.config.js, prettier.config.js, stylelint.config.js.

eslint.config.js:

```
import { eslint } from "vue-linters-config";
module.exports = eslint;
```

prettier.config.js:

```
import { prettier } from "vue-linters-config";
module.exports = prettier;
```

stylelint.config.js:

```
import { stylelint } from "vue-linters-config";
module.exports = stylelint;
```
