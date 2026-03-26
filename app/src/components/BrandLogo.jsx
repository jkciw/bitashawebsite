import { Link } from 'react-router-dom';

function BrandLogo({ variant = 'light', className = '' }) {
  const src = variant === 'light' ? '/brand/logos/beige-logo.svg' : '/brand/logos/dark-blue-logo.svg';

  return (
    <Link to="/" className={`flex items-center ${className}`} aria-label="Bitasha Home">
      <img src={src} alt="Bitasha" className="h-5 w-auto md:h-6" />
    </Link>
  );
}

export default BrandLogo;
