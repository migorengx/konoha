
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import { RegionRank } from '@/types/data';

interface RegionHeaderProps {
  region: RegionRank;
}

const RegionHeader: React.FC<RegionHeaderProps> = ({ region }) => {
  return (
    <Card className="glass-card">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
            <MapPin size={24} className="text-accent" />
          </div>
          <div>
            <CardTitle className="text-2xl">{region.name}</CardTitle>
            <p className="text-sm text-muted-foreground">Most common issue: {region.mostCommonIssue}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-secondary/50 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">Total Issues</p>
            <p className="text-2xl font-bold">{region.issues}</p>
          </div>
          <div className="bg-secondary/50 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">Status</p>
            <p className="text-2xl font-bold">
              {region.change === 'up' ? 'Increasing' : region.change === 'down' ? 'Decreasing' : 'Stable'}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RegionHeader;
