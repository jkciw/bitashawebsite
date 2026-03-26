import ImagePlaceholder from './ImagePlaceholder';
import { PrimaryButton, SecondaryButton } from './Buttons';

function ProductCard({
  title,
  description,
  tone = 'light',
  cta,
  secondaryCta,
  imageSrc,
  imageAlt,
}) {
  const dark = tone === 'dark';

  return (
    <article
      className={
        dark
          ? 'surface-card-dark reveal-up rounded-3xl p-6 text-brandIvory'
          : 'surface-card reveal-up rounded-3xl p-6 text-brandNight'
      }
    >
      <ImagePlaceholder
        label={`${title} Render`}
        tone={tone}
        src={imageSrc}
        alt={imageAlt || `${title} product image`}
      />
      <h3 className="mt-6 text-2xl font-semibold tracking-tight">{title}</h3>
      <p className={dark ? 'mt-3 text-sm leading-relaxed text-brandIvory/75' : 'mt-3 text-sm leading-relaxed text-steel'}>
        {description}
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <PrimaryButton
          to={cta?.to}
          href={cta?.href}
          dark={dark}
          eventName={cta?.eventName}
          eventPayload={cta?.eventPayload}
        >
          {cta?.label || `Explore ${title}`}
        </PrimaryButton>
        {secondaryCta && (
          <SecondaryButton
            to={secondaryCta.to}
            href={secondaryCta.href}
            dark={dark}
            eventName={secondaryCta.eventName}
            eventPayload={secondaryCta.eventPayload}
          >
            {secondaryCta.label}
          </SecondaryButton>
        )}
      </div>
    </article>
  );
}

export default ProductCard;
