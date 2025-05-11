
import React from "react";
import Layout from "@/components/Layout";
import RankingCard from "@/components/RankingCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useData } from "@/contexts/DataContext";
import { Users, UserCheck, UserX, UserPlus } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const PoliticiansPage: React.FC = () => {
  const { politicianRanks } = useData();

  const politicianItems = politicianRanks.map((rank) => ({
    title: rank.name,
    subtitle: `${rank.position} (${rank.party})`,
    value: rank.corruptionScore,
    change: rank.change,
    id: rank.id,
    type: "politician" as const
  }));

  const partyStats = [
    { party: "PDI-P", percentage: 32 },
    { party: "Gerindra", percentage: 24 },
    { party: "Golkar", percentage: 18 },
    { party: "PKB", percentage: 12 },
    { party: "Demokrat", percentage: 8 },
    { party: "Others", percentage: 6 }
  ];

  return (
    <Layout>
      <div className="space-y-2 mb-6">
        <h1 className="text-2xl font-bold">Politician Transparency Index</h1>
        <p className="text-muted-foreground">
          Track politicians with the highest corruption allegations and investigations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatItem 
          title="Total Politicians" 
          value="575" 
          description="Nationally tracked"
          icon={<Users size={24} />}
          iconColor="text-blue-500"
        />
        <StatItem 
          title="Under Investigation" 
          value="128" 
          description="Active cases"
          icon={<UserX size={24} />}
          iconColor="text-red-500"
        />
        <StatItem 
          title="Clean Record" 
          value="216" 
          description="No allegations"
          icon={<UserCheck size={24} />}
          iconColor="text-green-500"
        />
        <StatItem 
          title="Newly Added" 
          value="34" 
          description="Last 30 days"
          icon={<UserPlus size={24} />}
          iconColor="text-purple-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RankingCard 
            title="Top Watched Politicians" 
            items={politicianItems} 
            className="h-full"
          />
        </div>
        
        <div>
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Corruption by Party</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {partyStats.map((stat) => (
                  <div key={stat.party} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{stat.party}</span>
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

export default PoliticiansPage;
