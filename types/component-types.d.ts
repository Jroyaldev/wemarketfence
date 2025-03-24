// Type declarations for custom components
declare module '@/components/ui/button' {
  export const Button: React.FC<{
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
    size?: 'default' | 'sm' | 'lg' | 'icon';
    asChild?: boolean;
    className?: string;
    children?: React.ReactNode;
    [key: string]: any;
  }>;
}

declare module '@/components/horizontal-scroll' {
  export const HorizontalScroll: React.FC<{
    items: Array<{
      title: string;
      description: string;
      number: string;
    }>;
    className?: string;
    [key: string]: any;
  }>;
}

declare module '@/components/marquee-scroll' {
  export const MarqueeScroll: React.FC<{
    items: string[];
    className?: string;
    speed?: number;
    [key: string]: any;
  }>;
}

declare module '@/components/testimonial-slider' {
  export const TestimonialSlider: React.FC<{
    testimonials?: Array<{
      text: string;
      author: string;
      role?: string;
    }>;
    className?: string;
    [key: string]: any;
  }>;
}

declare module '@/components/feature-card' {
  export const FeatureCard: React.FC<{
    title: string;
    description: string;
    index: number;
    className?: string;
    [key: string]: any;
  }>;
}

declare module '@/components/scroll-progress' {
  export const ScrollProgress: React.FC<{
    className?: string;
    color?: string;
    height?: string | number;
    [key: string]: any;
  }>;
}

declare module '@/components/floating-cta' {
  export const FloatingCTA: React.FC<{
    className?: string;
    threshold?: number;
    children?: React.ReactNode;
    [key: string]: any;
  }>;
}

declare module '@/components/client-wrapper' {
  export const ClientWrapper: React.FC<{
    children: React.ReactNode;
    [key: string]: any;
  }>;
}
