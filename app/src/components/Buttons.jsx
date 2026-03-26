import { Link } from 'react-router-dom';
import { trackEvent } from '../lib/analytics';

function BaseButton({
  to,
  href,
  children,
  className,
  eventName,
  eventPayload,
  target,
  rel,
}) {
  const handleClick = () => {
    trackEvent(eventName, eventPayload);
  };

  if (href) {
    return (
      <a href={href} className={className} onClick={handleClick} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}

export function PrimaryButton({
  to,
  href,
  children,
  dark = false,
  glow = false,
  eventName,
  eventPayload,
  target,
  rel,
}) {
  return (
    <BaseButton
      to={to}
      href={href}
      eventName={eventName}
      eventPayload={eventPayload}
      target={target}
      rel={rel}
      className={
        dark
          ? `rounded-full px-6 py-3 text-sm font-medium transition ${
              glow
                ? 'bg-brandAmber text-brandNight shadow-[0_12px_34px_rgba(243,169,93,0.28)] hover:bg-[#ffba73]'
                : 'bg-brandIvory text-brandNight hover:bg-[#f7f0e2]'
            }`
          : `rounded-full px-6 py-3 text-sm font-medium transition ${
              glow
                ? 'bg-brandAmber text-brandNight shadow-[0_12px_30px_rgba(243,169,93,0.22)] hover:bg-[#ffba73]'
                : 'bg-brandNavy text-brandIvory hover:bg-[#26384e]'
            }`
      }
    >
      {children}
    </BaseButton>
  );
}

export function SecondaryButton({
  to,
  href,
  children,
  dark = false,
  eventName,
  eventPayload,
  target,
  rel,
}) {
  return (
    <BaseButton
      to={to}
      href={href}
      eventName={eventName}
      eventPayload={eventPayload}
      target={target}
      rel={rel}
      className={
        dark
          ? 'rounded-full border border-brandIvory/35 bg-brandIvory/5 px-6 py-3 text-sm font-medium text-brandIvory transition hover:border-brandIvory/70 hover:bg-brandIvory/10'
          : 'rounded-full border border-brandNavy/20 bg-white/70 px-6 py-3 text-sm font-medium text-brandNavy transition hover:border-brandNavy/45 hover:bg-white'
      }
    >
      {children}
    </BaseButton>
  );
}
