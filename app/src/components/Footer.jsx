import Container from './Container';
import { COMMERCE_URLS } from '../config/site';
import { trackEvent } from '../lib/analytics';
import BrandLogo from './BrandLogo';

function Footer({ dark = false }) {
  return (
    <footer
      className={
        dark
          ? 'border-t border-brandIvory/12 py-10 text-brandIvory/65'
          : 'border-t border-brandNavy/12 py-10 text-steel'
      }
    >
      <Container className="flex flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
        <BrandLogo dark={dark} />
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={COMMERCE_URLS.preOrder}
            className={dark ? 'transition-colors hover:text-brandIvory' : 'transition-colors hover:text-brandNavy'}
            onClick={() => trackEvent('click_preorder', { location: 'footer' })}
          >
            Pre-order
          </a>
          <a
            href={COMMERCE_URLS.checkout}
            className={dark ? 'transition-colors hover:text-brandIvory' : 'transition-colors hover:text-brandNavy'}
            onClick={() => trackEvent('click_buy', { location: 'footer' })}
          >
            Checkout
          </a>
          <a
            href={COMMERCE_URLS.account}
            className={dark ? 'transition-colors hover:text-brandIvory' : 'transition-colors hover:text-brandNavy'}
          >
            My Account
          </a>
        </div>
        <p>Built in India for bitcoin sovereignty and practical ownership.</p>
      </Container>
    </footer>
  );
}

export default Footer;
