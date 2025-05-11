
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type StatCardProps = {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description?: string;
  className?: string;
};

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  description,
  className,
}) => {
  return (
    <Card className={cn("glass-card overflow-hidden", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-2xl font-semibold mt-1">{value}</p>
            {description && (
              <p className="text-xs text-muted-foreground mt-1">{description}</p>
            )}
          </div>
          <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-accent">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
