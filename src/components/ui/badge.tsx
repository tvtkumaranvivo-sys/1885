import { cva, type VariantProps } from "class-variance-authority";
import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva("inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold", {
  variants: {
    variant: {
      neutral: "bg-black/5 text-ink",
      verified: "bg-success/15 text-success",
      pending: "bg-brand/10 text-brand",
      dark: "bg-ink text-ivory",
    },
  },
  defaultVariants: { variant: "neutral" },
});

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}
export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
export { badgeVariants };
