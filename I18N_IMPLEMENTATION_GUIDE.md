# I18n Implementation Guide for Octobid using next-intl

### Pattern for Client Components (use `useTranslations`):

```tsx
'use client';
import { useTranslations } from 'next-intl';

export default function ComponentName() {
  const t = useTranslations('sectionName');
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
```

### Pattern for Server Components (use `getTranslations`):

```tsx
import { getTranslations } from 'next-intl/server';

export default async function ComponentName() {
  const t = await getTranslations('sectionName');
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
```


## Translation Files Status

### Arabic (`messages/ar.json`)
✅ All translations added as of now but it needs checking for any mistakes
- Complete coverage of all components
- RTL-optimized content
- Professional Arabic translations

### English (`messages/en.json`)
✅ All translations added as of now
- Complete coverage of all components
- Native English content

## Quick Implementation Steps

1. **For each component:**
   - Add the missing keys wit their contents in both `en.json` and `ar.json` files
   - Import `useTranslations` (client) or `getTranslations` (server)
   - Replace hardcoded strings with `t('key')`
   - Test in both languages

2. **Common patterns:**
   ```tsx
   // Simple text
   {t('title')}
   
   // Nested keys
   {t('features.title')}
   
   // Array mapping
   features.map((_, i) => t(`features.items.${i}.title`))
   ```

3. **Testing:**
   - Visit `/ar` - Check Arabic (RTL)
   - Visit `/en` - Check English (LTR)
   - Use Language Switcher in header
   - Verify all text displays correctly

## Notes
- Language switcher is in the header
- RTL/LTR automatically handled by layout
- Arabic is the default language

