import ImagePlaceholder from './ImagePlaceholder';
import { PrimaryButton } from './Buttons';

function ProductSpotlight({
  tone = 'light',
  eyebrow = 'Product Focus',
  title,
  description,
  imageLabel,
  imageSrc,
  imageAlt,
  cta,
  reverse = false,
}) {
  const dark = tone === 'dark';

  return (
    <div className={`grid items-center gap-10 md:grid-cols-2 ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>
      <ImagePlaceholder
        label={imageLabel}
        tone={tone}
        src={imageSrc}
        alt={imageAlt || imageLabel}
      />
      <div>
        <p
          className={
            dark
              ? 'font-brand text-xs uppercase tracking-[0.16em] text-brandIvory/70'
              : 'font-brand text-xs uppercase tracking-[0.16em] text-brandNavy/70'
          }
        >
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
        <p className={dark ? 'mt-4 leading-relaxed text-brandIvory/75' : 'mt-4 leading-relaxed text-steel'}>
          {description}
        </p>
        {cta && (
          <div className="mt-7">
            <PrimaryButton
              to={cta.to}
              href={cta.href}
              dark={dark}
              eventName={cta.eventName}
              eventPayload={cta.eventPayload}
            >
              {cta.label}
            </PrimaryButton>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductSpotlight;
