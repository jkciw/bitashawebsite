import PageLayout from '../components/PageLayout';
import Hero from '../components/Hero';
import Container from '../components/Container';
import FeatureList from '../components/FeatureList';
import Footer from '../components/Footer';
import { PrimaryButton, SecondaryButton } from '../components/Buttons';
import ProductSpotlight from '../components/ProductSpotlight';
import { usePageMeta } from '../lib/seo';
import { MARKETING_CONTENT } from '../config/marketing';

function BitaxePage() {
  const { hero, introLine, spotlight, features, featuresHeading, meta } = MARKETING_CONTENT.bitaxe;

  usePageMeta({
    title: meta.title,
    description: meta.description,
    path: '/bitaxe',
  });

  return (
    <PageLayout headerMode="overlay">
      <section className="brand-hero overflow-hidden pt-10 md:pt-14">
        <Hero
          dark
          eyebrow={hero.eyebrow}
          title={hero.headline}
          description={hero.subheadline}
          supportNote={hero.supportNote}
          titleClassName="text-brandIvory"
          containerClassName="relative z-10 pb-24 md:pb-28"
          actions={[
            <PrimaryButton
              key="bitaxe"
              href={hero.primaryCta.href}
              glow
              dark
              eventName={hero.primaryCta.eventName}
              eventPayload={hero.primaryCta.eventPayload}
            >
              {hero.primaryCta.label}
            </PrimaryButton>,
            <SecondaryButton
              key="home"
              to={hero.secondaryCta.to}
              dark
              eventName={hero.secondaryCta.eventName}
              eventPayload={hero.secondaryCta.eventPayload}
            >
              {hero.secondaryCta.label}
            </SecondaryButton>,
          ]}
        />
      </section>

      <section className="bg-brandCloud py-14 md:py-18">
        <Container className="max-w-3xl text-center">
          <p className="text-balance text-xl leading-relaxed text-brandIvory/90 md:text-2xl">{introLine}</p>
        </Container>
      </section>

      <section className="bg-brandCloud py-16 md:py-24">
        <Container>
          <ProductSpotlight
            tone="light"
            eyebrow={spotlight.eyebrow}
            headline={spotlight.headline}
            body={spotlight.body}
            imageLabel="Bitaxe product image"
            imageSrc={spotlight.imageSrc}
            imageAlt={spotlight.imageAlt}
            cta={spotlight.cta}
          />
        </Container>
      </section>

      <section className="bg-brandCloud pb-20 md:pb-24">
        <Container>
          <div className="mb-8 max-w-2xl">
            <p className="font-brand text-xs uppercase tracking-[0.18em] text-brandNavy/60">Features</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brandNight md:text-4xl">{featuresHeading}</h2>
          </div>
          <FeatureList items={features} />
        </Container>
      </section>

      <Footer />
    </PageLayout>
  );
}

export default BitaxePage;
