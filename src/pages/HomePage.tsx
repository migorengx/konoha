import React, { useState } from "react";
import Layout from "@/components/Layout";
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import RankingCard from "@/components/RankingCard";
import StatCard from "@/components/StatCard";
import { useData } from "@/contexts/DataContext";
import { AlertTriangle, BarChart2, Users, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Demo simple Konoha auth context
const konohaNames = [
  "Naruto Uzumaki", "Sakura Haruno", "Sasuke Uchiha",
  "Shikamaru Nara", "Choji Akimichi", "Ino Yamanaka",
  "Rock Lee", "Neji Hyuga", "Hinata Hyuga", "Kiba Inuzuka",
  "Shino Aburame", "Kakashi Hatake", "Asuma Sarutobi",
  "Kurenai Yuhi", "Might Guy", "Tenten",
  "Sai", "Yamato", "Konohamaru", "Iruka Umino",
  "Tsunade", "Jiraiya", "Orochimaru"
];

function getRandomKonohaName() {
  return konohaNames[Math.floor(Math.random() * konohaNames.length)];
}

const storageKey = "konoha_user";

function getCurrentUser() {
  return localStorage.getItem(storageKey);
}

function setCurrentUser(name: string) {
  localStorage.setItem(storageKey, name);
}

const HomePage: React.FC = () => {
  const { corruptionRanks, politicianRanks, regionRanks } = useData();
  const [hasCheckedUser, setHasCheckedUser] = useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    // Minimal demo: require login for home
    if (!getCurrentUser()) {
      navigate("/login");
    } else {
      setHasCheckedUser(true);
    }
  }, [navigate]);

  if (!hasCheckedUser) {
    // Prevents flash of home before redirect
    return null;
  }

  const corruptionItems = corruptionRanks.slice(0, 3).map((rank) => ({
    id: rank.id,
    title: rank.case,
    subtitle: rank.status,
    value: rank.amount,
    change: rank.change,
    valueLabel: `${rank.involvedPoliticians} politicians`
  }));

  const politicianItems = politicianRanks.slice(0, 3).map((rank) => ({
    title: rank.name,
    subtitle: `${rank.position} (${rank.party})`,
    value: rank.corruptionScore,
    change: rank.change,
  }));

  const regionItems = regionRanks.slice(0, 3).map((rank) => ({
    title: rank.name,
    subtitle: `Most common: ${rank.mostCommonIssue}`,
    value: rank.issues,
    change: rank.change,
    valueLabel: 'reported issues'
  }));

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatCard
          title="Total Corruption Cases"
          value="245"
          icon={<AlertTriangle size={24} />}
          description="Last 30 days"
        />
        <StatCard
          title="Tracked Politicians"
          value="128"
          icon={<Users size={24} />}
          description="Across all parties"
        />
        <StatCard
          title="Active Regions"
          value="34"
          icon={<MapPin size={24} />}
          description="Throughout Indonesia"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <PostForm />
          <PostList />
        </div>
        
        <div className="space-y-6">
          <RankingCard 
            title="Top Corruption Cases" 
            items={corruptionItems} 
          />
          <RankingCard 
            title="Top Watched Politicians" 
            items={politicianItems} 
          />
          <RankingCard 
            title="Most Active Regions" 
            items={regionItems} 
          />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
