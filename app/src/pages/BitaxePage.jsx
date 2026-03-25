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
    title: 'Open-source hardware',
    text: 'Transparent stack for builders who want to inspect, modify, and improve every layer.',
  },
  {
    title: 'Compact footprint',
    text: 'Desk-friendly dimensions with a physical form that feels engineered and intentional.',
  },
  {
    title: 'Home mining ready',
    text: 'Designed for practical home setups with clean setup flow and reliable operation.',
  },
];

function BitaxePage() {
  usePageMeta({
    title: 'Bitaxe by Bitasha | Open-Source Bitcoin Home Miner',
    description:
      'Bitaxe is a compact, open-source bitcoin home miner engineered for practical ownership and deep hackability.',
    path: '/bitaxe',
  });

  return (
    <PageLayout>
      <section className="hero-mist border-b border-brandNavy/10">
        <Hero
          eyebrow="Bitaxe"
          title="Open-source bitcoin mining for your desk"
          description="A compact home miner that combines precise hardware design with deep hackability. Built for people who want bitcoin participation to be tangible."
          actions={[
            <PrimaryButton
              key="preorder"
              href={COMMERCE_URLS.preOrder}
              eventName="click_preorder"
              eventPayload={{ product: 'bitaxe', location: 'bitaxe_hero' }}
            >
              Pre-order Bitaxe
            </PrimaryButton>,
            <SecondaryButton key="home" to="/">
              Back to Home
            </SecondaryButton>,
          ]}
        />
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <ProductSpotlight
            tone="light"
            imageLabel="Bitaxe Product Image"
            imageSrc="/products/bitaxe-single.png"
            imageAlt="Close-up Bitaxe miner setup"
            title="Precise by design. Flexible by nature."
            description="Bitaxe keeps the product language clean while retaining full builder ergonomics. It feels premium in-hand, yet remains grounded in practical, open bitcoin ownership."
            cta={{
              label: 'Buy via Pre-order',
              href: COMMERCE_URLS.preOrder,
              eventName: 'click_buy',
              eventPayload: { product: 'bitaxe', location: 'bitaxe_spotlight' },
            }}
          />
        </Container>
      </section>

      <section className="pb-20 md:pb-24">
        <Container>
          <FeatureList items={features} />
        </Container>
      </section>

      <Footer />
    </PageLayout>
  );
}

export default BitaxePage;
