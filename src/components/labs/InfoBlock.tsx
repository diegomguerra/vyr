import { cn } from "@/lib/utils";

interface InfoBlockProps {
  title: string;
  text?: string;
  list?: string[];
  note?: string;
  className?: string;
}

export function InfoBlock({ title, text, list, note, className }: InfoBlockProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <h3 className="text-lg sm:text-xl font-medium text-foreground tracking-wide">
        {title}
      </h3>
      
      {text && (
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl">
          {text}
        </p>
      )}
      
      {list && list.length > 0 && (
        <ul className="space-y-2">
          {list.map((item, index) => (
            <li 
              key={index} 
              className="flex items-start gap-3 text-muted-foreground text-sm sm:text-base"
            >
              <span className="w-1 h-1 rounded-full bg-muted-foreground/50 mt-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      
      {note && (
        <p className="text-muted-foreground/70 text-xs sm:text-sm font-mono italic">
          {note}
        </p>
      )}
    </div>
  );
}
