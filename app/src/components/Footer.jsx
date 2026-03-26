import Container from './Container';
import BrandLogo from './BrandLogo';
import { Link } from 'react-router-dom';

function Footer({ dark = false }) {
  return (
    <footer
      className={
        dark
          ? 'border-t border-brandIvory/12 bg-brandNight py-10 text-brandIvory/70'
          : 'border-t border-brandNavy/12 bg-brandCloud py-10 text-steel'
      }
    >
      <Container className="flex flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
        <BrandLogo variant={dark ? 'light' : 'dark'} />
        <div className="flex flex-wrap items-center gap-4">
          <Link to="/" className={dark ? 'transition-colors hover:text-brandIvory' : 'transition-colors hover:text-brandNavy'}>
            Home
          </Link>
          <Link to="/bitaxe" className={dark ? 'transition-colors hover:text-brandIvory' : 'transition-colors hover:text-brandNavy'}>
            Bitaxe
          </Link>
          <Link to="/koshh" className={dark ? 'transition-colors hover:text-brandIvory' : 'transition-colors hover:text-brandNavy'}>
            Koshh
          </Link>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
