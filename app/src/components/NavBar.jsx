import { Link, useLocation } from 'react-router-dom';
import Container from './Container';
import BrandLogo from './BrandLogo';

const links = [
  { to: '/', label: 'Home' },
  { to: '/koshh', label: 'Koshh' },
  { to: '/bitaxe', label: 'Bitaxe' },
];

function NavBar({ mode = 'light' }) {
  const location = useLocation();
  const isLightLogo = mode === 'dark' || mode === 'overlay';

  return (
    <header
      className={
        mode === 'overlay'
          ? 'sticky top-0 z-20 border-b border-brandIvory/10 bg-brandNight/55 backdrop-blur-xl'
          : mode === 'dark'
            ? 'sticky top-0 z-20 border-b border-brandIvory/12 bg-brandNight/92 backdrop-blur'
            : 'sticky top-0 z-20 border-b border-brandNavy/10 bg-brandCloud/88 backdrop-blur'
      }
    >
      <Container className="flex h-16 items-center justify-between">
        <BrandLogo variant={isLightLogo ? 'light' : 'dark'} />
        <nav className={isLightLogo ? 'flex items-center gap-6 text-sm text-brandIvory/80' : 'flex items-center gap-6 text-sm text-steel'}>
          {links.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={
                  active
                    ? isLightLogo
                      ? 'text-brandIvory'
                      : 'text-brandNavy'
                    : isLightLogo
                      ? 'transition-colors hover:text-brandIvory'
                      : 'transition-colors hover:text-brandNavy'
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}

export default NavBar;
