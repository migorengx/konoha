
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Users } from 'lucide-react';
import { RegionDetail } from '@/types/data';

interface RegionLeadershipProps {
  regionDetail: RegionDetail;
}

const RegionLeadership: React.FC<RegionLeadershipProps> = ({ regionDetail }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <Card className="glass-card col-span-2">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Regional Leadership</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                <User className="h-5 w-5 text-accent" />
              </div>
              <div>
                <Link 
                  to={`/politicians/${regionDetail.governor.id}`}
                  className="text-lg font-semibold hover:underline"
                >
                  {regionDetail.governor.name}
                </Link>
                <p className="text-sm text-muted-foreground">{regionDetail.governor.position}</p>
              </div>
            </div>

            {regionDetail.mayor && (
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                  <User className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <Link 
                    to={`/politicians/${regionDetail.mayor.id}`}
                    className="text-lg font-semibold hover:underline"
                  >
                    {regionDetail.mayor.name}
                  </Link>
                  <p className="text-sm text-muted-foreground">{regionDetail.mayor.position}</p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="glass-card">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            <CardTitle className="text-lg font-semibold">DPD Members</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {regionDetail.dpd.map((member) => (
              <div key={member.id} className="flex items-center gap-2">
                <Link 
                  to={`/politicians/${member.id}`}
                  className="text-sm hover:underline"
                >
                  {member.name}
                </Link>
                <span className="text-xs text-muted-foreground">
                  {member.position}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegionLeadership;
