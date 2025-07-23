import React from "react";
import { cn } from "@/lib/utils";

interface GenesisButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const GenesisButton = React.forwardRef<HTMLButtonElement, GenesisButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseClasses = "relative overflow-hidden font-semibold transition-all duration-300 rounded-xl border focus:outline-none focus:ring-4 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
      primary: "bg-gradient-primary text-white border-transparent shadow-purple hover:shadow-glow hover:scale-105 active:scale-95",
      secondary: "bg-card border-primary/20 text-foreground hover:bg-primary/10 hover:border-primary/40",
      ghost: "bg-transparent border-transparent text-foreground hover:bg-primary/10"
    };
    
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg"
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        {variant === "primary" && (
          <div className="absolute inset-0 bg-gradient-primary opacity-0 hover:opacity-100 transition-opacity duration-300" />
        )}
      </button>
    );
  }
);

GenesisButton.displayName = "GenesisButton";

export default GenesisButton;