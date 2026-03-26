import PageLayout from '../components/PageLayout';
import Hero from '../components/Hero';
import Container from '../components/Container';
import { PrimaryButton, SecondaryButton } from '../components/Buttons';
import Footer from '../components/Footer';
import { usePageMeta } from '../lib/seo';
import ProductSpotlight from '../components/ProductSpotlight';
import { MARKETING_CONTENT } from '../config/marketing';

function HomePage() {
  const { hero, context, products, meta } = MARKETING_CONTENT.home;

  usePageMeta({
    title: meta.title,
    description: meta.description,
    path: '/',
  });

  return (
    <PageLayout headerMode="overlay">
      <section className="brand-hero overflow-hidden pt-10 md:pt-14">
        <Hero
          dark
          showBrandLogo
          title={hero.headline}
          description={hero.subheadline}
          supportNote={hero.supportNote}
          titleClassName="mx-auto max-w-5xl text-brandIvory md:text-7xl"
          containerClassName="relative z-10 pb-28 md:pb-36"
          actions={[
            <PrimaryButton
              key="koshh"
              href={hero.primaryCta.href}
              glow
              dark
              eventName={hero.primaryCta.eventName}
              eventPayload={hero.primaryCta.eventPayload}
            >
              {hero.primaryCta.label}
            </PrimaryButton>,
            <SecondaryButton
              key="bitaxe"
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

      <section className="section-transition -mt-20 bg-brandCloud py-16 md:-mt-24 md:py-24">
        <Container className="max-w-5xl">
          <p className="font-brand text-xs uppercase tracking-[0.18em] text-brandIvory/75">Context</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-brandIvory md:text-4xl">
            {context.headline}
          </h2>
          <div className="mt-8 max-w-3xl text-lg leading-relaxed text-brandIvory/90">
            <p>{context.body}</p>
            <p className="mt-4 font-semibold text-brandIvory">{context.highlight}</p>
          </div>
        </Container>
      </section>

      <section className="bg-brandCloud py-16 md:py-20">
        <Container>
          <ProductSpotlight
            tone="light"
            eyebrow={products.koshh.eyebrow}
            headline={products.koshh.headline}
            subheadline={products.koshh.subheadline}
            body={products.koshh.body}
            imageLabel="Koshh icon"
            imageSrc={products.koshh.imageSrc}
            imageAlt={products.koshh.imageAlt}
            imageFit={products.koshh.imageFit}
            cta={products.koshh.cta}
          />
        </Container>
      </section>

      <section className="bg-brandCloud pb-20 md:pb-24">
        <Container>
          <ProductSpotlight
            tone="dark"
            eyebrow={products.bitaxe.eyebrow}
            headline={products.bitaxe.headline}
            subheadline={products.bitaxe.subheadline}
            body={products.bitaxe.body}
            imageLabel="Bitaxe group image"
            imageSrc={products.bitaxe.imageSrc}
            imageAlt={products.bitaxe.imageAlt}
            cta={products.bitaxe.cta}
            reverse
          />
        </Container>
      </section>

      <Footer />
    </PageLayout>
  );
}

export default HomePage;
