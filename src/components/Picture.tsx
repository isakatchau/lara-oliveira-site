import { asset } from '../lib/asset';

type Props = {
  base: string;
  /** Available rendered widths matching files like {base}-{w}.avif/.webp. */
  widths?: number[];
  alt: string;
  sizes?: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
};

const DEFAULT_WIDTHS = [800, 1200, 1600];

export default function Picture({
  base,
  widths = DEFAULT_WIDTHS,
  alt,
  sizes = '(max-width: 1024px) 100vw, 50vw',
  className,
  style,
  loading = 'lazy',
  fetchPriority,
}: Props) {
  const srcSetFor = (ext: 'avif' | 'webp') =>
    widths.map((w) => `${asset(`images/${base}-${w}.${ext}`)} ${w}w`).join(', ');

  const fallback = asset(`images/${base}-${widths[widths.length - 1]}.webp`);

  return (
    <picture>
      <source type="image/avif" srcSet={srcSetFor('avif')} sizes={sizes} />
      <source type="image/webp" srcSet={srcSetFor('webp')} sizes={sizes} />
      <img
        src={fallback}
        alt={alt}
        className={className}
        style={style}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
      />
    </picture>
  );
}
