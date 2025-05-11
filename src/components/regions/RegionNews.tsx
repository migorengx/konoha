
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Globe, Calendar } from 'lucide-react';
import { Post, VerifiedNews } from '@/types/data';

interface RegionNewsProps {
  verifiedNews: VerifiedNews[];
  publicOpinions: Post[];
}

const RegionNews: React.FC<RegionNewsProps> = ({ verifiedNews, publicOpinions }) => {
  return (
    <Tabs defaultValue="verified" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="verified">Verified News</TabsTrigger>
        <TabsTrigger value="public">Public Opinions ({publicOpinions.length})</TabsTrigger>
      </TabsList>
      
      <TabsContent value="verified" className="space-y-4">
        {verifiedNews.length > 0 ? (
          verifiedNews.map((news) => (
            <Card key={news.id} className="glass-card">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Globe size={14} className="text-blue-500" />
                  <span className="text-xs text-muted-foreground">
                    {news.timestamp.toLocaleDateString()}
                  </span>
                  {news.sourceUrl && (
                    <a 
                      href={news.sourceUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-blue-500 hover:underline ml-auto"
                    >
                      Source Link →
                    </a>
                  )}
                </div>
                <h3 className="font-medium mb-2">{news.title}</h3>
                <p className="text-sm">{news.content}</p>
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
                    {post.category}
                  </span>
                </div>
                <p className="text-sm">{post.content}</p>
                <div className="flex items-center gap-4 mt-4 text-muted-foreground">
                  <span className="text-xs">👍 {post.likes}</span>
                  <span className="text-xs">🔄 {post.shares}</span>
                </div>
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
  );
};

export default RegionNews;
