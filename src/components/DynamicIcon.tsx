import { 
  Target, 
  Zap, 
  Moon, 
  Heart, 
  Brain, 
  Activity,
  Briefcase,
  BarChart3,
  GraduationCap,
  Wrench,
  Palette,
  Users,
  Headphones,
  Scale
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Target,
  Zap,
  Moon,
  Heart,
  Brain,
  Activity,
  Briefcase,
  BarChart3,
  GraduationCap,
  Wrench,
  Palette,
  Users,
  Headphones,
  Scale,
};

interface DynamicIconProps {
  name: string;
  className?: string;
}

export function DynamicIcon({ name, className = "w-5 h-5" }: DynamicIconProps) {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    return null;
  }
  
  return <IconComponent className={className} />;
}