import { cn } from '@/lib/utils';
import { useRef, useEffect, useState, useCallback } from 'react';

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  className,
}: InfiniteSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [animDuration, setAnimDuration] = useState(duration);

  return (
    <div
      className={cn('overflow-hidden', className)}
      onMouseEnter={durationOnHover ? () => setAnimDuration(durationOnHover) : undefined}
      onMouseLeave={durationOnHover ? () => setAnimDuration(duration) : undefined}
    >
      <div
        ref={scrollRef}
        className="flex w-max"
        style={{
          gap: `${gap}px`,
          animation: `infinite-scroll ${animDuration}s linear infinite`,
        }}
      >
        <div className="flex shrink-0" style={{ gap: `${gap}px` }}>{children}</div>
        <div className="flex shrink-0" style={{ gap: `${gap}px` }}>{children}</div>
      </div>
    </div>
  );
}
