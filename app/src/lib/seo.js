import { useEffect } from 'react';
import { SITE } from '../config/site';

function upsertMeta(attr, key, content) {
  if (!content) {
    return;
  }

  let meta = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attr, key);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
}

function upsertCanonical(href) {
  if (!href) {
    return;
  }

  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

export function usePageMeta({
  title = SITE.defaultTitle,
  description = SITE.defaultDescription,
  path = '/',
}) {
  useEffect(() => {
    const canonical = new URL(path, SITE.url).toString();
    document.title = title;
    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:site_name', SITE.name);
    upsertCanonical(canonical);
  }, [description, path, title]);
}
