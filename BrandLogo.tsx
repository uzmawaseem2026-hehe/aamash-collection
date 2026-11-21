interface BrandLogoProps {
  variant?: 'primary' | 'dark-footer' | 'monogram';
  className?: string;
}

export const LOGO_V1_PRIMARY_SRC =
  '/src/assets/images/aamash_logo_v1_light_1795253696709.jpg';
export const LOGO_V2_DARK_FOOTER_SRC =
  '/src/assets/images/aamash_logo_v2_dark_1795253697022.jpg';
export const MONOGRAM_AC_GOLD_SRC =
  '/src/assets/images/aamash_monogram_ac_gold_1795253696743.jpg';

export function BrandMonogramSeal({
  size = 'md',
  className = '',
}: {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const sizeClass =
    size === 'sm'
      ? 'w-9 h-9'
      : size === 'lg'
        ? 'w-12 h-12'
        : 'w-10 h-10';

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full bg-[#0F172A] p-0.5 ring-1 ring-[#D4AF37]/60 shadow-[0_6px_18px_-6px_rgba(15,23,42,0.55)] overflow-hidden shrink-0 select-none ${sizeClass} ${className}`}
    >
      <img
        src={MONOGRAM_AC_GOLD_SRC}
        alt="Aamash Collection A-C Monogram"
        referrerPolicy="no-referrer"
        className="w-full h-full rounded-full object-cover object-center"
      />
    </span>
  );
}

export function BrandHeaderLockup({
  theme = 'light',
  className = '',
}: {
  theme?: 'light' | 'dark';
  className?: string;
}) {
  const isDark = theme === 'dark';

  return (
    <span
      className={`inline-flex items-center shrink-0 select-none ${
        isDark ? 'gap-2.5' : 'gap-1.5 min-[390px]:gap-2 sm:gap-2.5 lg:gap-3'
      } ${className}`}
    >
      <BrandMonogramSeal
        size="sm"
        className={
          isDark
            ? '!w-9 !h-9'
            : '!w-7 !h-7 min-[390px]:!w-8 min-[390px]:!h-8 sm:!w-9 sm:!h-9 lg:!w-10 lg:!h-10'
        }
      />
      <span
        className={`font-semibold uppercase leading-none whitespace-nowrap ${
          isDark
            ? 'text-[13px] tracking-[0.1em] text-[#FAF8F5]'
            : 'text-[10.5px] min-[390px]:text-[11.5px] sm:text-[13.5px] lg:text-[14.5px] xl:text-[16px] tracking-[0.04em] min-[390px]:tracking-[0.06em] sm:tracking-[0.1em] xl:tracking-[0.12em] text-[#0F172A]'
        }`}
      >
        AAMASH COLLECTION
      </span>
    </span>
  );
}

export function BrandLogo({
  variant = 'primary',
  className = '',
}: BrandLogoProps) {
  if (variant === 'monogram') {
    return <BrandMonogramSeal size="md" className={className} />;
  }

  if (variant === 'dark-footer') {
    return (
      <span className={`inline-flex items-center justify-center select-none ${className}`}>
        <img
          src={LOGO_V2_DARK_FOOTER_SRC}
          alt="Aamash Collection"
          referrerPolicy="no-referrer"
          className="h-16 sm:h-20 lg:h-24 w-auto max-w-full object-contain mix-blend-screen"
        />
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center shrink-0 select-none ${className}`}>
      <img
        src={LOGO_V1_PRIMARY_SRC}
        alt="Aamash Collection"
        referrerPolicy="no-referrer"
        className="h-9 sm:h-10 lg:h-11 w-auto object-contain mix-blend-multiply"
      />
    </span>
  );
}
