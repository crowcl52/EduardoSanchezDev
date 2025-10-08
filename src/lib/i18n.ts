export async function t(lang: string) {
  const dict = await import(`../i18n/${lang}.json`);
  return dict.default as Record<string, any>;
}

export function otherLang(lang: string) {
  return lang === 'es' ? 'en' : 'es';
}