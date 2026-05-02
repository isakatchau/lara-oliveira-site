import type { ReactNode, HTMLAttributes } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  delay?: number;
};

export default function Reveal({ children, delay = 0, style, className, ...rest }: Props) {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      data-reveal
      className={className}
      style={{ ...style, transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </div>
  );
}
