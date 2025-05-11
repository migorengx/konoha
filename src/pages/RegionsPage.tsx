
import React from "react";
import Layout from "@/components/Layout";
import RankingCard from "@/components/RankingCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useData } from "@/contexts/DataContext";
import { MapPin, AlertTriangle, FileText, ShieldAlert } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const RegionsPage: React.FC = () => {
  const { regionRanks } = useData();

  const regionItems = regionRanks.map((rank) => ({
    title: rank.name,
    subtitle: `Most common: ${rank.mostCommonIssue}`,
    value: rank.issues,
    change: rank.change,
    valueLabel: 'reported issues',
    id: rank.id,
    type: "region" as const
  }));

  const issueStats = [
    { issue: "Corruption", percentage: 35 },
    { issue: "Infrastructure", percentage: 28 },
    { issue: "Education", percentage: 15 },
    { issue: "Healthcare", percentage: 12 },
    { issue: "Environment", percentage: 10 }
  ];

  return (
    <Layout>
      <div className="space-y-2 mb-6">
        <h1 className="text-2xl font-bold">Regional Issues Monitor</h1>
        <p className="text-muted-foreground">
          Track and analyze political and social issues by region
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatItem 
          title="Active Regions" 
          value="34" 
          description="With reported issues"
          icon={<MapPin size={24} />}
          iconColor="text-teal-500"
        />
        <StatItem 
          title="Critical Areas" 
          value="7" 
          description="Severe issues"
          icon={<AlertTriangle size={24} />}
          iconColor="text-red-500"
        />
        <StatItem 
          title="Total Reports" 
          value="2,847" 
          description="Verified submissions"
          icon={<FileText size={24} />}
          iconColor="text-blue-500"
        />
        <StatItem 
          title="Human Rights" 
          value="314" 
          description="Violation reports"
          icon={<ShieldAlert size={24} />}
          iconColor="text-yellow-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RankingCard 
            title="Regions by Issue Count" 
            items={regionItems} 
            className="h-full"
          />
        </div>
        
        <div>
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Issues by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {issueStats.map((stat) => (
                  <div key={stat.issue} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{stat.issue}</span>
                      <span className="font-medium">{stat.percentage}%</span>
                    </div>
                    <Progress value={stat.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

const StatItem: React.FC<{
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  iconColor: string;
}> = ({ title, value, description, icon, iconColor }) => (
  <Card className="glass-card">
    <CardContent className="p-4">
      <div className="flex items-center gap-4">
        <div className={`h-10 w-10 rounded-full bg-secondary flex items-center justify-center ${iconColor}`}>
          {icon}
        </div>
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-xl font-semibold">{value}</p>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default RegionsPage;
