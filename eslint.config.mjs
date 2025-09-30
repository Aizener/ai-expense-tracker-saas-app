import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
    // 自定义插件
    plugins: ['simple-import-sort'],
    // 自定义规则
    rules: {
      'semi': ['warn', 'always'],
      'quotes': ['error', 'single'],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error'
    }
  }),
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'src/components/ui/**'
    ],
  },
];

export default eslintConfig;
