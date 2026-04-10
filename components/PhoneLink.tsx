import {
  WORKSHOP_PHONE_DISPLAY,
  WORKSHOP_PHONE_TEL_HREF,
} from "@/lib/site-address";

type Props = {
  className?: string;
  /** Visually hidden prefix for screen readers, e.g. "Обади се" */
  ariaLabel?: string;
};

export function PhoneLink({ className, ariaLabel }: Props) {
  return (
    <a
      href={WORKSHOP_PHONE_TEL_HREF}
      className={className}
      aria-label={ariaLabel}
    >
      {WORKSHOP_PHONE_DISPLAY}
    </a>
  );
}
