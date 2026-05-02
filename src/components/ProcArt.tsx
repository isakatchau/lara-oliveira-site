import type { CSSProperties } from 'react';

type ArtProps = { className?: string; style?: CSSProperties };

const COMMON: CSSProperties = { color: 'var(--gold)' };

export function BotoxArt({ className, style }: ArtProps) {
  return (
    <svg
      viewBox="0 0 600 400"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      style={{ ...COMMON, ...style }}
      aria-hidden="true"
    >
      <g stroke="currentColor" fill="none" strokeWidth="1.6" strokeLinecap="round">
        <path d="M 100 170 Q 200 110 300 170 T 500 170" opacity="0.85" />
        <path d="M 100 215 Q 200 155 300 215 T 500 215" opacity="0.55" />
        <path d="M 100 260 Q 200 200 300 260 T 500 260" opacity="0.28" />
      </g>
    </svg>
  );
}

export function PreenchimentoArt({ className, style }: ArtProps) {
  return (
    <svg
      viewBox="0 0 600 400"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      style={{ ...COMMON, ...style }}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="dropG" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.55" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="210" cy="200" r="80" fill="url(#dropG)" />
      <circle cx="370" cy="220" r="60" fill="url(#dropG)" />
      <circle cx="440" cy="160" r="40" fill="url(#dropG)" />
      <g stroke="currentColor" fill="none" strokeWidth="1.4">
        <circle cx="210" cy="200" r="80" opacity="0.85" />
        <circle cx="370" cy="220" r="60" opacity="0.85" />
        <circle cx="440" cy="160" r="40" opacity="0.85" />
      </g>
    </svg>
  );
}

export function HarmonizacaoArt({ className, style }: ArtProps) {
  return (
    <svg
      viewBox="0 0 600 400"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      style={{ ...COMMON, ...style }}
      aria-hidden="true"
    >
      <g stroke="currentColor" fill="none" strokeWidth="1.5">
        <ellipse cx="300" cy="220" rx="92" ry="122" opacity="0.85" />
        <line x1="208" y1="180" x2="392" y2="180" opacity="0.55" />
        <line x1="208" y1="220" x2="392" y2="220" opacity="0.55" />
        <line x1="208" y1="260" x2="392" y2="260" opacity="0.55" />
        <line x1="300" y1="98" x2="300" y2="342" opacity="0.4" strokeDasharray="3 5" />
      </g>
    </svg>
  );
}

export function ComplementaresArt({ className, style }: ArtProps) {
  return (
    <svg
      viewBox="0 0 600 400"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      style={{ ...COMMON, ...style }}
      aria-hidden="true"
    >
      <g stroke="currentColor" fill="none" strokeWidth="1.4">
        <circle cx="180" cy="200" r="52" opacity="0.6" />
        <circle cx="180" cy="200" r="34" opacity="0.78" />
        <circle cx="180" cy="200" r="18" opacity="0.95" />
        <circle cx="320" cy="200" r="52" opacity="0.6" />
        <circle cx="320" cy="200" r="34" opacity="0.78" />
        <circle cx="320" cy="200" r="18" opacity="0.95" />
        <circle cx="460" cy="200" r="52" opacity="0.6" />
        <circle cx="460" cy="200" r="34" opacity="0.78" />
        <circle cx="460" cy="200" r="18" opacity="0.95" />
      </g>
    </svg>
  );
}
