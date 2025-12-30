import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavDropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface NavDropdownProps {
  trigger: string;
  items: NavDropdownItem[];
  className?: string;
}

export function NavDropdown({ trigger, items, className }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={cn("relative", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="font-mono tracking-wider">{trigger}</span>
        <ChevronDown
          className={cn(
            "w-3.5 h-3.5 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={cn(
          "absolute top-full left-0 pt-2 z-50",
          "transition-all duration-200 ease-out",
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-1 pointer-events-none"
        )}
      >
        <div className="bg-card/95 backdrop-blur-xl border border-border/50 rounded-sm shadow-xl min-w-[200px]">
          <div className="py-2">
            {items.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span className="font-mono text-xs tracking-wider">{item.label}</span>
                {item.description && (
                  <span className="block text-[10px] text-muted-foreground/60 mt-0.5">
                    {item.description}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Mobile version - Accordion style
interface MobileNavDropdownProps {
  trigger: string;
  items: NavDropdownItem[];
  onItemClick?: () => void;
}

export function MobileNavDropdown({ trigger, items, onItemClick }: MobileNavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border/30 last:border-b-0">
      <button
        className="flex items-center justify-between w-full py-3 text-muted-foreground hover:text-foreground transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-mono text-sm tracking-wider">{trigger}</span>
        <ChevronDown
          className={cn(
            "w-4 h-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <div
        className={cn(
          "overflow-hidden transition-all duration-200",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="pl-4 pb-3 space-y-1">
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="block py-2 text-sm text-muted-foreground/80 hover:text-foreground transition-colors"
              onClick={() => {
                setIsOpen(false);
                onItemClick?.();
              }}
            >
              <span className="font-mono text-xs tracking-wide">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
