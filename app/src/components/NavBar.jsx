import { Link, useLocation } from 'react-router-dom';
import Container from './Container';
import { COMMERCE_URLS } from '../config/site';
import { trackEvent } from '../lib/analytics';
import BrandLogo from './BrandLogo';

const links = [
  { to: '/', label: 'Home' },
  { to: '/bitaxe', label: 'Bitaxe' },
  { to: '/koshh', label: 'Koshh' },
];

function NavBar({ dark = false }) {
  const location = useLocation();

  return (
    <header
      className={
        dark
          ? 'sticky top-0 z-20 border-b border-brandIvory/20 bg-brandNavy/90 backdrop-blur'
          : 'sticky top-0 z-20 border-b border-brandNavy/10 bg-white/90 backdrop-blur'
      }
    >
      <Container className="flex h-16 items-center justify-between">
        <BrandLogo dark={dark} />
        <nav className={dark ? 'flex items-center gap-6 text-sm text-brandIvory/80' : 'flex items-center gap-6 text-sm text-steel'}>
          {links.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={
                  active
                    ? dark
                      ? 'text-brandIvory'
                      : 'text-brandNavy'
                    : dark
                      ? 'transition-colors hover:text-brandIvory'
                      : 'transition-colors hover:text-brandNavy'
                }
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={COMMERCE_URLS.preOrder}
            className={
              dark
                ? 'rounded-full border border-brandIvory/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-brandIvory transition hover:border-brandIvory/80'
                : 'rounded-full border border-brandNavy/25 px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-brandNavy transition hover:border-brandNavy/60'
            }
            onClick={() => {
              trackEvent('click_preorder', { location: 'header' });
            }}
          >
            Pre-order
          </a>
        </nav>
      </Container>
    </header>
  );
}

export default NavBar;
