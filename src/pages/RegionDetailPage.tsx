
import React from "react";
import Layout from "@/components/Layout";
import { useParams } from "react-router-dom";
import { useData } from "@/contexts/DataContext";
import RegionHeader from "@/components/regions/RegionHeader";
import RegionLeadership from "@/components/regions/RegionLeadership";
import RegionNews from "@/components/regions/RegionNews";

const RegionDetailPage: React.FC = () => {
  const { regionId } = useParams<{ regionId: string }>();
  const { regionRanks, posts, verifiedNews, regionDetails } = useData();

  const region = regionRanks.find((reg) => reg.id === regionId);
  const regionDetail = regionDetails.find((reg) => reg.id === regionId);
  
  const verifiedRegionNews = verifiedNews.filter((news) => 
    news.region === region?.name
  );
  
  const publicOpinions = posts.filter((post) => 
    post.region === region?.name && !post.isVerified
  );

  if (!region || !regionDetail) {
    return (
      <Layout>
        <div className="py-10 text-center">
          <h1 className="text-2xl font-bold mb-2">Region Not Found</h1>
          <p className="text-muted-foreground">The region you're looking for doesn't exist or has been removed.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-6">
        <RegionHeader region={region} />
        <RegionLeadership regionDetail={regionDetail} />
        <RegionNews 
          verifiedNews={verifiedRegionNews}
          publicOpinions={publicOpinions}
        />
      </div>
    </Layout>
  );
};

export default RegionDetailPage;
