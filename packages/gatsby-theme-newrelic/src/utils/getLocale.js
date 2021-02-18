import { withDefaults, defaultLocale } from './defaultOptions';

const getLocale = (themeOptions, location) => {
  const { i18n } = withDefaults(themeOptions);
  const [, base] = location.pathname.split('/');
  const locale =
    (i18n.additionalLocales || []).find(({ locale }) => locale === base) ||
    defaultLocale;
  return locale.locale;
};

export default getLocale;
