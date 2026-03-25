import PageLayout from '../components/PageLayout';
import Hero from '../components/Hero';
import Container from '../components/Container';
import FeatureList from '../components/FeatureList';
import Footer from '../components/Footer';
import { PrimaryButton, SecondaryButton } from '../components/Buttons';
import ProductSpotlight from '../components/ProductSpotlight';
import { usePageMeta } from '../lib/seo';
import { COMMERCE_URLS } from '../config/site';

const features = [
  {
    title: 'Solid metal body',
    text: 'Built to withstand physical stress with materials chosen for permanence and resilience.',
  },
  {
    title: 'Offline by default',
    text: 'No cloud dependencies, no moving parts, no ongoing trust in third-party systems.',
  },
  {
    title: 'Quiet confidence',
    text: 'Designed for long-term storage in a form that is understated, legible, and dependable.',
  },
];

function KoshhPage() {
  usePageMeta({
    title: 'Koshh by Bitasha | Metal Seed Backup',
    description:
      'Koshh is a durable metal seed plate for long-term bitcoin key backup with understated, trust-first design.',
    path: '/koshh',
  });

  return (
    <PageLayout dark>
      <section className="border-b border-brandIvory/12 bg-[radial-gradient(circle_at_top,rgba(217,213,203,0.18),transparent_42%)]">
        <Hero
          dark
          eyebrow="Koshh"
          title="Seed backup designed for decades, not cycles"
          description="A metal seed plate that prioritizes long-term trust. Quiet industrial design, high durability, and no unnecessary complexity."
          actions={[
            <PrimaryButton
              key="preorder"
              href={COMMERCE_URLS.preOrder}
              dark
              eventName="click_preorder"
              eventPayload={{ product: 'koshh', location: 'koshh_hero' }}
            >
              Pre-order Koshh
            </PrimaryButton>,
            <SecondaryButton key="home" to="/" dark>
              Back to Home
            </SecondaryButton>,
          ]}
        />
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <ProductSpotlight
            tone="dark"
            imageLabel="Koshh Product Image"
            title="Durable, discreet, and built to outlast devices."
            description="Koshh is built for practical self-custody. Physical permanence replaces digital fragility, helping you preserve critical seed information with clarity and confidence."
            cta={{
              label: 'Buy via Pre-order',
              href: COMMERCE_URLS.preOrder,
              eventName: 'click_buy',
              eventPayload: { product: 'koshh', location: 'koshh_spotlight' },
            }}
            reverse
          />
        </Container>
      </section>

      <section className="pb-20 md:pb-24">
        <Container>
          <FeatureList items={features} dark />
        </Container>
      </section>

      <Footer dark />
    </PageLayout>
  );
}

export default KoshhPage;
