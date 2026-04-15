'use client';

import { useRef, useCallback, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export default function Tilt3D({ children, className = '', intensity = 10 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;

      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        el.style.transform = `perspective(900px) rotateY(${x * intensity * 2}deg) rotateX(${-y * intensity * 2}deg) scale3d(1.015,1.015,1.015)`;
      });
    },
    [intensity]
  );

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(rafRef.current);
    el.style.transition = 'transform 0.6s cubic-bezier(0.16,1,0.3,1)';
    el.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)';
    setTimeout(() => {
      if (el) el.style.transition = '';
    }, 600);
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ willChange: 'transform', transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
}
