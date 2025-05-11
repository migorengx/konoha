
import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams } from "react-router-dom";
import { useData } from "@/contexts/DataContext";
import { User, Calendar, FileText, AlertTriangle, Globe } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PoliticianDetailPage: React.FC = () => {
  const { politicianId } = useParams<{ politicianId: string }>();
  const { politicianRanks, posts } = useData();

  const politician = politicianRanks.find((pol) => pol.id === politicianId);
  
  // Filter posts related to this politician, handling the optional properties
  const verifiedPosts = posts.filter((post) => 
    post.politician === politician?.name && (post as any).isVerified === true
  );
  
  const publicOpinions = posts.filter((post) => 
    post.politician === politician?.name && ((post as any).isVerified === false || (post as any).isVerified === undefined)
  );

  if (!politician) {
    return (
      <Layout>
        <div className="py-10 text-center">
          <h1 className="text-2xl font-bold mb-2">Politician Not Found</h1>
          <p className="text-muted-foreground">The politician you're looking for doesn't exist or has been removed.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <Card className="glass-card w-full md:w-1/3">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Politician Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-accent">
                  <User size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold">{politician.name}</h2>
                  <p className="text-muted-foreground">{politician.position}</p>
                </div>
              </div>
              
              <div className="pt-2">
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Corruption Index</span>
                  <span className="text-sm font-medium">{politician.corruptionScore}/100</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2.5">
                  <div 
                    className="bg-red-500 h-2.5 rounded-full" 
                    style={{ width: `${politician.corruptionScore}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 pt-2">
                <div className="bg-secondary/50 p-3 rounded-md">
                  <p className="text-xs text-muted-foreground">Party</p>
                  <p className="font-medium">{politician.party}</p>
                </div>
                <div className="bg-secondary/50 p-3 rounded-md">
                  <p className="text-xs text-muted-foreground">Status</p>
                  <p className="font-medium">
                    {politician.corruptionScore > 70 ? "Under Watch" : "Active"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card w-full md:w-2/3">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Corruption Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  This politician has a corruption index of <strong>{politician.corruptionScore}</strong>,
                  which is {politician.corruptionScore > 70 ? "significantly higher" : "comparable"} to the national average.
                </p>
                
                <div className="bg-secondary/30 p-4 rounded-md flex items-start gap-3">
                  <AlertTriangle className="text-yellow-500" size={20} />
                  <div>
                    <h3 className="font-medium mb-1">Important Notice</h3>
                    <p className="text-sm text-muted-foreground">
                      This information is based on public reports and allegations. All individuals 
                      are presumed innocent until proven guilty in a court of law.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="verified" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="verified">Verified News</TabsTrigger>
            <TabsTrigger value="public">Public Opinions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="verified" className="space-y-4">
            {verifiedPosts.length > 0 ? (
              verifiedPosts.map((post) => (
                <Card key={post.id} className="glass-card">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Globe size={14} className="text-blue-500" />
                      <span className="text-xs text-muted-foreground">
                        {post.timestamp.toLocaleDateString()}
                      </span>
                      {(post as any).sourceUrl && (
                        <a 
                          href={(post as any).sourceUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs text-blue-500 hover:underline ml-auto"
                        >
                          Source Link →
                        </a>
                      )}
                    </div>
                    <p className="text-sm">{post.content}</p>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-10">
                <FileText className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                <p>No verified news available</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="public" className="space-y-4">
            {publicOpinions.length > 0 ? (
              publicOpinions.map((post) => (
                <Card key={post.id} className="glass-card">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar size={14} className="text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">
                        {post.timestamp.toLocaleDateString()}
                      </span>
                      <span className="text-xs bg-secondary py-0.5 px-2 rounded-full ml-auto">
                        Anonymous
                      </span>
                    </div>
                    <p className="text-sm">{post.content}</p>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-10">
                <FileText className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                <p>No public opinions yet</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default PoliticianDetailPage;
