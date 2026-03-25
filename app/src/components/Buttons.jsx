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
          ? 'rounded-full bg-brandIvory px-6 py-3 text-sm font-medium text-brandNavy transition hover:bg-[#ece8de]'
          : 'rounded-full bg-brandNavy px-6 py-3 text-sm font-medium text-brandIvory transition hover:bg-[#253651]'
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
          ? 'rounded-full border border-brandIvory/40 px-6 py-3 text-sm font-medium text-brandIvory transition hover:border-brandIvory/80'
          : 'rounded-full border border-brandNavy/25 px-6 py-3 text-sm font-medium text-brandNavy transition hover:border-brandNavy/55'
      }
    >
      {children}
    </BaseButton>
  );
}
