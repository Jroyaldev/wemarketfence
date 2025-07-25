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