const pt = require('../locales/pt.json');
const zh = require('../locales/zh.json');

const translations = { pt, zh };

function lookup(obj, key) {
  return key.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
}

function t(key, locale = 'pt') {
  const dict = translations[locale] || translations.zh;
  const v = lookup(dict, key);
  return v !== undefined ? v : key;
}

module.exports = { t, translations };
