import { LucideLoader2 } from "lucide-react";
import "./Loader.css";

export const Loader = ({ size = 24, className = "" }) => {
  return (
    <div className={`loader-container ${className}`}>
        <LucideLoader2 className="animate-spin" size={size} />
    </div>
  );
};
