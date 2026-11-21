import { useEffect, useState } from 'react';
import { Watch } from 'lucide-react';

interface StudioImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  loading?: 'eager' | 'lazy';
}

export function StudioImage({
  src,
  alt,
  className = '',
  fallbackTitle,
  loading = 'lazy',
}: StudioImageProps) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#F4EFE7] via-[#EFE9DF] to-[#E6DDD0] text-[#7D6B57] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Watch className="w-7 h-7 stroke-[1.4] mb-2 opacity-70" />
        <span className="text-xs font-medium tracking-wide uppercase">
          {fallbackTitle || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
