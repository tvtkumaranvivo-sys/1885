import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> { error?: boolean; }
const Input = forwardRef<HTMLInputElement, InputProps>(({ className, error, ...props }, ref) => (
  <input ref={ref} className={cn("h-11 w-full rounded-md border bg-surface px-3 text-sm text-ink placeholder:text-muted focus:border-ink focus:outline-none disabled:cursor-not-allowed disabled:bg-black/5", error && "border-red-700 focus:border-red-700", className)} aria-invalid={error || undefined} {...props} />
));
Input.displayName = "Input";
export { Input };
