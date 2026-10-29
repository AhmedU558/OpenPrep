import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const config = [
  ...nextVitals,
  ...nextTs,
  { ignores: ['.next/**', 'src/generated/**', 'legacy/**', 'node_modules/**', 'playwright-report/**', 'test-results/**', 'next-env.d.ts'] },
  {
    rules: {
      // question text is sanitized server-side (src/lib/markdown.ts); images come from vetted content URLs
      '@next/next/no-img-element': 'off',
    },
  },
];

export default config;
