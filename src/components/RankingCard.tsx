import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

type RankingItemProps = {
  title: string;
  subtitle: string;
  value: string | number;
  change: "up" | "down" | "stable";
  valueLabel?: string;
  id?: string;
  type?: "politician" | "corruption" | "region"; // Added type property
};

const RankingItem: React.FC<{ item: RankingItemProps; rank: number }> = ({
  item,
  rank,
}) => {
  const { title, subtitle, value, change, valueLabel, id, type = "corruption" } = item;
  
  const getDetailUrl = () => {
    switch (type) {
      case "politician":
        return `/politicians/${id}`;
      case "corruption":
        return `/corruption/case/${id}`;
      case "region":
        return `/regions/${id}`;
      default:
        return `/corruption/case/${id}`;
    }
  };
  
  const content = (
    <div className="flex items-center gap-3 py-3 border-b border-white/5 last:border-none">
      <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center text-sm">
        {rank}
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-sm">{title}</h3>
        <p className="text-xs text-muted-foreground">{subtitle}</p>
      </div>
      <div className="text-right">
        <div className="flex items-center gap-1">
          {change === "up" && <TrendingUp size={14} className="text-red-500" />}
          {change === "down" && <TrendingDown size={14} className="text-green-500" />}
          {change === "stable" && <Minus size={14} className="text-muted-foreground" />}
          <span
            className={cn(
              "font-medium",
              change === "up" && "text-red-500",
              change === "down" && "text-green-500"
            )}
          >
            {value}
          </span>
        </div>
        {valueLabel && <span className="text-xs text-muted-foreground">{valueLabel}</span>}
      </div>
    </div>
  );
  
  // If item has id, make link to appropriate detail page
  if (id) {
    return (
      <Link to={getDetailUrl()} className="block hover:bg-accent/5 transition rounded-md">
        {content}
      </Link>
    );
  }
  return content;
};

type RankingCardProps = {
  title: string;
  items: RankingItemProps[];
  className?: string;
};

const RankingCard: React.FC<RankingCardProps> = ({ title, items, className }) => {
  return (
    <Card className={cn("glass-card", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        {items.map((item, index) => (
          <RankingItem key={index} rank={index + 1} item={item} />
        ))}
      </CardContent>
    </Card>
  );
};

export default RankingCard;
