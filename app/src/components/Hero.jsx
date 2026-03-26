import Container from './Container';
import BrandLogo from './BrandLogo';

function Hero({
  eyebrow,
  title,
  description,
  supportNote,
  actions,
  dark = false,
  className = '',
  containerClassName = '',
  titleClassName = '',
  align = 'center',
  showBrandLogo = false,
}) {
  const alignmentClasses = align === 'left' ? 'text-left' : 'text-center';
  const actionClasses = align === 'left' ? 'justify-start' : 'justify-center';

  return (
    <section className={`reveal-up py-20 md:py-28 ${className}`}>
      <Container className={`max-w-4xl ${alignmentClasses} ${containerClassName}`}>
        {showBrandLogo && (
          <BrandLogo
            variant={dark ? 'light' : 'dark'}
            className={align === 'left' ? 'mb-8 justify-start' : 'mb-8 justify-center'}
          />
        )}
        {eyebrow && (
          <p
            className={
              dark
                ? 'font-brand mb-6 text-xs uppercase tracking-[0.2em] text-brandIvory/75'
                : 'font-brand mb-6 text-xs uppercase tracking-[0.2em] text-brandNavy/70'
            }
          >
            {eyebrow}
          </p>
        )}
        <h1 className={`text-balance text-4xl font-semibold tracking-tightest md:text-6xl ${titleClassName}`}>{title}</h1>
        <p
          className={
            dark
              ? 'mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brandIvory/75'
              : 'mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-steel'
          }
        >
          {description}
        </p>
        {supportNote && (
          <p
            className={
              dark
                ? 'mx-auto mt-4 max-w-2xl text-sm uppercase tracking-[0.16em] text-brandIvory/70'
                : 'mx-auto mt-4 max-w-2xl text-sm uppercase tracking-[0.16em] text-brandNavy/65'
            }
          >
            {supportNote}
          </p>
        )}
        {actions && <div className={`mt-9 flex flex-wrap gap-4 ${actionClasses}`}>{actions}</div>}
      </Container>
    </section>
  );
}

export default Hero;
