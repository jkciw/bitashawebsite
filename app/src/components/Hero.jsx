import Container from './Container';

function Hero({ eyebrow, title, description, actions, dark = false }) {
  return (
    <section className="reveal-up py-20 md:py-28">
      <Container className="max-w-4xl text-center">
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
        <h1 className="text-balance text-4xl font-semibold tracking-tightest md:text-6xl">{title}</h1>
        <p
          className={
            dark
              ? 'mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brandIvory/75'
              : 'mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-steel'
          }
        >
          {description}
        </p>
        {actions && <div className="mt-9 flex flex-wrap justify-center gap-4">{actions}</div>}
      </Container>
    </section>
  );
}

export default Hero;
