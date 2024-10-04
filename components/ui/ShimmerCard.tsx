import React, { CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface ShimmerCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const ShimmerCard: React.FC<ShimmerCardProps> = ({ children, className, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative overflow-hidden bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-lg cursor-pointer",
        "group",
        className
      )}
      style={{
        "--shimmer-color": "rgba(255, 255, 255, 0.1)",
      } as CSSProperties}
    >
      <div className="relative z-10">{children}</div>
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-[var(--shimmer-color)] to-transparent"></div>
    </div>
  );
};

export default ShimmerCard;