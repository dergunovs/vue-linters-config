# Конфиги eslint, stylelint, prettier

[npm](https://www.npmjs.com/package/vue-linters-config)

_Легко принимать свободу как должное, если никогда её не лишался. (Дик Чейни)_

Конфиги для Vue3 Composition API (script setup) + TS + SCSS + CSS Module.

Редактор кода - VS Code с установленными плагинами ESLint, Prettier и Stylelint(не забыть в настройках добавить расширения файлов .vue и .scss).

## Установка

`npm i vue-linters-config --save-dev`

Установка сторонних зависимостей:

`npm i eslint @eslint/js typescript-eslint eslint-plugin-vue vue-eslint-parser eslint-plugin-import-x eslint-plugin-prettier eslint-plugin-sonarjs eslint-plugin-unicorn globals eslint-config-prettier eslint-import-resolver-typescript postcss-html prettier stylelint stylelint-config-recess-order stylelint-config-recommended-scss stylelint-config-recommended-vue stylelint-prettier --save-dev`

В package.json добавить команду в секцию script для запуска npm run lint:

`"lint": "eslint **/*.{js,ts,vue} && stylelint **/*.{scss,vue}"`

## Применение правил

В корневой папке создать 3 файла: eslint.config.js, prettier.config.js, stylelint.config.js.

eslint.config.js:

```
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import pluginImportX from 'eslint-plugin-import-x';
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginSonar from 'eslint-plugin-sonarjs';
import pluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import { parser, options, ignores, settings, rules } from 'vue-linters-config';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/strongly-recommended'],
  pluginImportX.flatConfigs.recommended,
  pluginSonar.configs.recommended,
  pluginUnicorn.configs.recommended,
  pluginImportX.flatConfigs.typescript,

  ignores,

  parser(vueParser, tseslint.parser, dirname),

  { ...options(globals), ...settings, ...rules },

  pluginPrettierRecommended
);


```

prettier.config.js:

```
export { prettier as default } from 'vue-linters-config';

```

stylelint.config.js:

```
export { stylelint as default } from 'vue-linters-config';

```
