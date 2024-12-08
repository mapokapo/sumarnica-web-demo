import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const logoVariants = cva("", {
  variants: {
    size: {
      default: "w-16 h-16",
      lg: "w-24 h-24",
      icon: "w-8 h-8",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface LogoProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    VariantProps<typeof logoVariants> {}

const Logo: React.FC<LogoProps> = ({ className, size, ...props }) => {
  return (
    <img
      className={cn(logoVariants({ size, className }))}
      {...props}
      src="/logo.svg"
      alt="Logo"
    />
  );
};

export default Logo;
