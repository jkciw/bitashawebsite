import PageLayout from '../components/PageLayout';
import Hero from '../components/Hero';
import Container from '../components/Container';
import ProductCard from '../components/ProductCard';
import { PrimaryButton, SecondaryButton } from '../components/Buttons';
import Footer from '../components/Footer';
import { usePageMeta } from '../lib/seo';
import { COMMERCE_URLS } from '../config/site';

function HomePage() {
  usePageMeta({
    title: 'Bitasha | Bitcoin Hardware Built in India',
    description:
      'Bitasha builds premium bitcoin-native hardware: Bitaxe open-source home miner and Koshh metal seed backup.',
    path: '/',
  });

  return (
    <PageLayout>
      <section className="hero-mist">
        <Hero
          title="Bitcoin hardware, made in India."
          description="Soverign tools for self-custody, mining and long-term ownership."
          actions={[
            <PrimaryButton key="preorder" href={COMMERCE_URLS.preOrder} eventName="click_preorder" eventPayload={{ location: 'home_hero' }}>
              Pre-order
            </PrimaryButton>,
            <SecondaryButton key="bitaxe" to="/bitaxe" eventName="view_product" eventPayload={{ product: 'bitaxe', location: 'home_hero' }}>
              Explore Products
            </SecondaryButton>,
          ]}
        />
      </section>

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <ProductCard
              title="Bitaxe"
              description="An open-source bitcoin home miner designed as a compact desktop object. Precise, hackable, and genuinely useful."
              tone="light"
              imageSrc="/products/bitaxe-group.png"
              imageAlt="Multiple Bitaxe miners arranged on a table"
              cta={{
                label: 'Explore Bitaxe',
                to: '/bitaxe',
                eventName: 'view_product',
                eventPayload: { product: 'bitaxe', location: 'home_grid' },
              }}
              secondaryCta={{
                label: 'Pre-order',
                href: COMMERCE_URLS.preOrder,
                eventName: 'click_preorder',
                eventPayload: { product: 'bitaxe', location: 'home_grid' },
              }}
            />
            <ProductCard
              title="Koshh"
              description="A metal seed backup plate built for durability and quiet confidence. Long-term security without complexity."
              tone="dark"
              cta={{
                label: 'Explore Koshh',
                to: '/koshh',
                eventName: 'view_product',
                eventPayload: { product: 'koshh', location: 'home_grid' },
              }}
              secondaryCta={{
                label: 'Pre-order',
                href: COMMERCE_URLS.preOrder,
                eventName: 'click_preorder',
                eventPayload: { product: 'koshh', location: 'home_grid' },
              }}
            />
          </div>
        </Container>
      </section>

      <section className="border-y border-brandNavy/10 bg-cloud py-16 md:py-20">
        <Container className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-brand text-xs uppercase tracking-[0.18em] text-brandNavy/70">Built in India</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-brandNavy">Global-grade quality, local intent</h3>
          </div>
          <p className="text-steel md:col-span-2">
            Bitasha creates bitcoin-native hardware that feels at home on a desk, not in a hype cycle. Every product is purposefully designed for clarity, longevity, and direct ownership.
          </p>
        </Container>
      </section>

      <Footer />
    </PageLayout>
  );
}

export default HomePage;
