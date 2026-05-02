import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

type Props = {
  className?: string;
  size?: number;
};

export default function ThemeToggle({ className = '', size = 16 }: Props) {
  const { theme, toggle } = useTheme();
  const isLight = theme === 'light';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? 'Mudar para modo escuro' : 'Mudar para modo claro'}
      title={isLight ? 'Modo escuro' : 'Modo claro'}
      className={`inline-flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200 ${className}`}
      style={{
        border: '1px solid var(--line-strong)',
        color: 'var(--gold)',
        background: 'transparent',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--gold)';
        e.currentTarget.style.color = 'var(--text-on-gold)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.color = 'var(--gold)';
      }}
    >
      {isLight ? <Moon size={size} aria-hidden="true" /> : <Sun size={size} aria-hidden="true" />}
    </button>
  );
}
