// prettier.config.js, .prettierrc.js, prettier.config.cjs, or .prettierrc.cjs

/** @type {import("prettier").Config} */
const config = {
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  singleAttributePerLine: false,
  bracketSameLine: false,
  jsxSingleQuote: true,
  printWidth: 80,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
  embeddedLanguageFormatting: 'auto',
  vueIndentScriptAndStyle: false,
  singleQuote: true,
  importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    'prettier-plugin-tailwindcss',
    '@trivago/prettier-plugin-sort-imports',
  ],
  tailwindConfig: './tailwind.config.ts',
};

export default config;
