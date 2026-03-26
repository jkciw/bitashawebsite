import { COMMERCE_URLS } from './site';

export const MARKETING_CONTENT = {
  footerText: '\u00a9 2024 Bitasha. Bitcoin hardware.',
  home: {
    meta: {
      title: 'Bitasha | Bitcoin hardware. Done right.',
      description:
        'Simple, reliable Bitcoin hardware designed in India and used around the world.',
    },
    hero: {
      headline: 'Bitcoin hardware. Done right.',
      subheadline: 'Simple, reliable tools to help you use it with confidence.',
      supportNote: 'Designed in India. Used around the world.',
      primaryCta: {
        label: 'Get Koshh',
        href: COMMERCE_URLS.koshhPrimary,
        eventName: 'click_koshh_primary_cta',
        eventPayload: { location: 'home_hero' },
      },
      secondaryCta: {
        label: 'Explore Bitaxe',
        to: '/bitaxe',
        eventName: 'click_bitaxe_explore_cta',
        eventPayload: { location: 'home_hero' },
      },
    },
    context: {
      headline: 'Until now, it\u2019s been built elsewhere.',
      body: 'Most Bitcoin hardware has come from the US and Europe.',
      highlight: 'BitAsha brings it closer to home.',
    },
    products: {
      koshh: {
        eyebrow: 'Koshh',
        headline: 'Start with your backup.',
        subheadline: 'A steel plate for your recovery phrase.',
        body: [
          'If you lose access, you lose everything.',
          'Protected against fire, water, and time.',
        ],
        imageSrc: '/brand/icons/dark-blue-icon.svg',
        imageAlt: 'Bitasha flame icon representing Koshh',
        imageFit: 'contain',
        cta: {
          label: 'Get Koshh \u2014 \u20b92,500',
          href: COMMERCE_URLS.koshhPrimary,
          eventName: 'click_koshh_primary_cta',
          eventPayload: { location: 'home_koshh' },
        },
      },
      bitaxe: {
        eyebrow: 'Bitaxe',
        headline: 'Home mining, made accessible.',
        subheadline: 'A compact Bitcoin miner you can run from your desk.',
        body: [
          'It runs quietly in the background, with a small chance of mining a block.',
        ],
        imageSrc: '/products/bitaxe-group.png',
        imageAlt: 'Multiple Bitaxe miners arranged together',
        cta: {
          label: 'Explore Bitaxe \u2014 \u20b918,000',
          to: '/bitaxe',
          eventName: 'click_bitaxe_explore_cta',
          eventPayload: { location: 'home_bitaxe' },
        },
      },
    },
  },
  bitaxe: {
    meta: {
      title: 'Bitaxe Gamma | Home Bitcoin mining by Bitasha',
      description:
        'A compact Bitcoin miner for home mining that feels simple to start, quiet to run, and open to learn from.',
    },
    hero: {
      eyebrow: 'Bitaxe Gamma',
      headline: 'Bitaxe Gamma',
      subheadline: 'Open-source Bitcoin mining for the home.',
      supportNote:
        'A compact Bitcoin miner for people who want to do more than just watch the network.',
      primaryCta: {
        label: 'Explore Bitaxe Gamma',
        href: COMMERCE_URLS.bitaxePrimary,
        eventName: 'click_bitaxe_primary_cta',
        eventPayload: { location: 'bitaxe_hero' },
      },
      secondaryCta: {
        label: 'Back to Home',
        to: '/',
        eventName: 'click_home_return',
        eventPayload: { location: 'bitaxe_hero' },
      },
    },
    introLine:
      'Bitaxe Gamma is a compact open-source Bitcoin ASIC miner built for home mining.',
    spotlight: {
      eyebrow: 'Intro',
      headline: 'Bitcoin mining, brought back within reach.',
      body: [
        'Mining began as something individuals could do themselves. Over time, specialized hardware and industrial scale pushed that activity into the hands of large operators.',
        'Bitaxe points in the other direction: open hardware, open firmware, low power draw, and a form factor that fits into everyday life.',
      ],
      imageSrc: '/products/bitaxe-single.png',
      imageAlt: 'Close-up of a Bitaxe Gamma home miner',
      cta: {
        label: 'Get Bitaxe Gamma \u2014 \u20b918,000',
        href: COMMERCE_URLS.bitaxePrimary,
        eventName: 'click_bitaxe_primary_cta',
        eventPayload: { location: 'bitaxe_intro' },
      },
    },
    featuresHeading: 'Built to be simple. Designed to be open.',
    features: [
      {
        title: 'Open-source by design',
        text: 'Hardware and firmware are publicly available, so Bitaxe is not a black box.',
      },
      {
        title: 'Compact and standalone',
        text: 'A small desktop miner that does not demand an industrial setup.',
      },
      {
        title: 'Low-power operation',
        text: 'The Gamma runs at power levels closer to a small household device than a warehouse miner.',
      },
      {
        title: 'Wi-Fi setup',
        text: 'It connects over Wi-Fi and is managed through AxeOS in the browser.',
      },
      {
        title: 'Made for learning and tinkering',
        text: 'Bitaxe Gamma is as much an educational object and a statement of participation as it is a machine.',
      },
    ],
  },
  koshh: {
    meta: {
      title: 'Koshh | Metal Bitcoin backup by Bitasha',
      description:
        'A compact metal backup for the words that matter, built to keep a Bitcoin recovery phrase offline, durable, and readable over time.',
    },
    hero: {
      eyebrow: 'Koshh',
      headline: 'Koshh',
      subheadline: 'A metal backup for the words that matter.',
      supportNote:
        'A compact seed plate for people who want their Bitcoin backup offline, durable, and built to outlast paper.',
      primaryCta: {
        label: 'Explore Koshh',
        href: COMMERCE_URLS.koshhPrimary,
        eventName: 'click_koshh_primary_cta',
        eventPayload: { location: 'koshh_hero' },
      },
      secondaryCta: {
        label: 'Back to Home',
        to: '/',
        eventName: 'click_home_return',
        eventPayload: { location: 'koshh_hero' },
      },
    },
    introLine:
      'Self-custody deserves a backup that matches it.',
    spotlight: {
      eyebrow: 'Intro',
      headline: 'Self-custody deserves a backup that matches it.',
      body: [
        'A wallet can fail. A phone can die. Paper can burn, fade, tear, or get wet.',
        'A seed backup exists for the moment when everything else does not.',
      ],
      imageSrc: '/brand/icons/dark-blue-icon.svg',
      imageAlt: 'Bitasha flame icon representing Koshh',
      imageFit: 'contain',
      cta: {
        label: 'Get Koshh \u2014 \u20b92,500',
        href: COMMERCE_URLS.koshhPrimary,
        eventName: 'click_koshh_primary_cta',
        eventPayload: { location: 'koshh_intro' },
      },
    },
    featuresHeading: 'Simple to understand. Serious enough to trust.',
    features: [
      {
        title: 'Offline by nature',
        text: 'No battery, no firmware, no app, no cloud.',
      },
      {
        title: 'Built for physical resilience',
        text: 'Metal seed backups exist because paper is vulnerable to fire, water, and general degradation over time.',
      },
      {
        title: 'Compact and discreet',
        text: 'A numeric layout is easier to keep small and less revealing to an outsider than a plate that openly displays wallet words or crypto branding.',
      },
      {
        title: 'Made for long-term storage',
        text: 'The point is not daily interaction. The point is to remain readable when you need it years later.',
      },
    ],
  },
};
