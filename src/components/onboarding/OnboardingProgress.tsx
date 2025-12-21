import { Check } from "lucide-react";
import { ONBOARDING_STEPS } from "@/lib/onboarding-data";
import { cn } from "@/lib/utils";

interface OnboardingProgressProps {
  currentStep: number;
}

export function OnboardingProgress({ currentStep }: OnboardingProgressProps) {
  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between">
        {ONBOARDING_STEPS.map((step, index) => {
          const isCompleted = currentStep > step.id;
          const isCurrent = currentStep === step.id;
          
          return (
            <div key={step.id} className="flex flex-col items-center flex-1">
              <div className="flex items-center w-full">
                {index > 0 && (
                  <div 
                    className={cn(
                      "flex-1 h-1 transition-colors duration-300",
                      isCompleted || isCurrent ? "bg-primary" : "bg-border"
                    )}
                  />
                )}
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 shrink-0",
                    isCompleted 
                      ? "bg-primary text-primary-foreground" 
                      : isCurrent 
                        ? "bg-primary text-primary-foreground ring-4 ring-primary/30"
                        : "bg-muted text-muted-foreground"
                  )}
                >
                  {isCompleted ? <Check size={18} /> : step.id}
                </div>
                {index < ONBOARDING_STEPS.length - 1 && (
                  <div 
                    className={cn(
                      "flex-1 h-1 transition-colors duration-300",
                      isCompleted ? "bg-primary" : "bg-border"
                    )}
                  />
                )}
              </div>
              <div className="mt-2 text-center">
                <div className={cn(
                  "text-xs font-medium transition-colors",
                  isCurrent ? "text-primary" : "text-muted-foreground"
                )}>
                  {step.title}
                </div>
                <div className="text-[10px] text-muted-foreground/70 hidden sm:block">
                  {step.subtitle}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
