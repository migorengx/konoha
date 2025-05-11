
import React from "react";
import Layout from "@/components/Layout";
import RankingCard from "@/components/RankingCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useData } from "@/contexts/DataContext";
import { AlertTriangle, DollarSign, Users, Scale } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const CorruptionPage: React.FC = () => {
  const { corruptionRanks } = useData();

  const corruptionItems = corruptionRanks.map((rank) => ({
    id: rank.id,
    title: rank.case,
    subtitle: rank.status,
    value: rank.amount,
    change: rank.change,
    valueLabel: `${rank.involvedPoliticians} politicians`
  }));

  const corruptionStats = [
    { category: "Embezzlement", percentage: 35 },
    { category: "Bribery", percentage: 28 },
    { category: "Fraud", percentage: 18 },
    { category: "Money Laundering", percentage: 12 },
    { category: "Other", percentage: 7 }
  ];

  return (
    <Layout>
      <div className="space-y-2 mb-6">
        <h1 className="text-2xl font-bold">Corruption Cases Tracker</h1>
        <p className="text-muted-foreground">
          Monitor and track the most significant corruption cases across Indonesia
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatItem 
          title="Total Cases" 
          value="245" 
          description="Active investigations"
          icon={<AlertTriangle size={24} />}
          iconColor="text-red-500"
        />
        <StatItem 
          title="Estimated Value" 
          value="Rp 2.3T" 
          description="Total funds involved"
          icon={<DollarSign size={24} />}
          iconColor="text-yellow-500"
        />
        <StatItem 
          title="Politicians" 
          value="128" 
          description="Under investigation"
          icon={<Users size={24} />}
          iconColor="text-purple-500"
        />
        <StatItem 
          title="Convictions" 
          value="37" 
          description="Last 12 months"
          icon={<Scale size={24} />}
          iconColor="text-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RankingCard 
            title="Top Corruption Cases" 
            items={corruptionItems} 
            className="h-full"
          />
        </div>
        
        <div>
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Corruption by Type</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {corruptionStats.map((stat) => (
                  <div key={stat.category} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{stat.category}</span>
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

export default CorruptionPage;
