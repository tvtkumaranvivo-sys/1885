import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva("inline-flex shrink-0 items-center justify-center gap-2 rounded-md px-4 text-sm font-bold transition-colors disabled:pointer-events-none disabled:opacity-50", {
  variants: {
    variant: { primary: "bg-brand text-white hover:bg-brand-strong", secondary: "bg-ink text-ivory hover:bg-charcoal", outline: "border border-ink bg-transparent text-ink hover:bg-ink hover:text-ivory", ghost: "bg-transparent text-ink hover:bg-black/5", success: "bg-success text-white hover:bg-success/90" },
    size: { sm: "h-9 px-3 text-xs", md: "h-11", lg: "h-[3.25rem] px-5 text-base" },
  },
  defaultVariants: { variant: "primary", size: "md" },
});

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean; }
const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />;
});
Button.displayName = "Button";
export { Button, buttonVariants };
