import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function trackEvent(name, params = {}) {
  if (!name || typeof window === 'undefined') {
    return;
  }

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: name, ...params });
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', name, params);
  }

  if (typeof window.plausible === 'function') {
    window.plausible(name, { props: params });
  }
}

export function usePageView() {
  const location = useLocation();

  useEffect(() => {
    trackEvent('view_page_route', {
      path: location.pathname,
      search: location.search,
    });
  }, [location.pathname, location.search]);
}
