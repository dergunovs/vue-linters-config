# Конфиги eslint, stylelint, prettier

[npm](https://www.npmjs.com/package/vue-linters-config)

_Легко принимать свободу как должное, если никогда её не лишался. (Дик Чейни)_

Конфиги для Vue3 Composition API (script setup) + TS + SCSS + CSS Module.

Редактор кода - VS Code с установленными плагинами ESLint, Prettier и Stylelint(не забыть в настройках добавить расширения файлов .vue и .scss).

## Установка

`npm i vue-linters-config --save-dev`

Установка сторонних зависимостей:

`npm i eslint @eslint/js typescript-eslint eslint-plugin-vue vue-eslint-parser eslint-plugin-import-x eslint-plugin-prettier globals eslint-config-prettier eslint-import-resolver-typescript postcss-html prettier stylelint stylelint-config-recess-order stylelint-config-recommended-scss stylelint-config-recommended-vue stylelint-prettier --save-dev`

В package.json добавить команду в секцию script для запуска npm run lint:

`"lint": "eslint **/*.{js,ts,vue} && stylelint **/*.{scss,vue}"`

## Применение правил

В корневой папке создать 3 файла: eslint.config.js, prettier.config.js, stylelint.config.js.

eslint.config.js:

```
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import eslintPluginImportX from 'eslint-plugin-import-x';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import { parser, options, ignores, settings, rules } from 'vue-linters-config';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/strongly-recommended'],
  eslintPluginImportX.flatConfigs.recommended,
  eslintPluginImportX.flatConfigs.typescript,

  ignores,
  parser(vueParser, tseslint.parser),
  { ...options(globals), ...settings, ...rules },

  eslintPluginPrettierRecommended
);

```

prettier.config.js:

```
import { prettier } from 'vue-linters-config';

export default prettier;

```

stylelint.config.js:

```
import { stylelint } from 'vue-linters-config';

export default stylelint;

```
