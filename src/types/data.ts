
export type Post = {
  id: string;
  content: string;
  timestamp: Date;
  likes: number;
  shares: number;
  region?: string;
  politician?: string;
  category?: string;
  isVerified?: boolean;
};

export type PoliticianRank = {
  id: string;
  name: string;
  position: string;
  corruptionScore: number;
  party: string;
  change: 'up' | 'down' | 'stable';
};

export type RegionRank = {
  id: string;
  name: string;
  issues: number;
  mostCommonIssue: string;
  change: 'up' | 'down' | 'stable';
};

export type CorruptionRank = {
  id: string;
  case: string;
  amount: string;
  involvedPoliticians: number;
  status: string;
  change: 'up' | 'down' | 'stable';
};

export type RegionDetail = {
  id: string;
  name: string;
  governor: {
    id: string;
    name: string;
    position: string;
  };
  mayor?: {
    id: string;
    name: string;
    position: string;
  };
  dpd: Array<{
    id: string;
    name: string;
    position: string;
  }>;
};

export type VerifiedNews = {
  id: string;
  title: string;
  content: string;
  timestamp: Date;
  sourceUrl: string;
  region?: string;
  politician?: string;
  isVerified: true;
};

export interface DataContextType {
  posts: Post[];
  addPost: (post: Omit<Post, "id" | "timestamp" | "likes" | "shares">) => void;
  politicianRanks: PoliticianRank[];
  regionRanks: RegionRank[];
  corruptionRanks: CorruptionRank[];
  verifiedNews: VerifiedNews[];
  regionDetails: RegionDetail[];
}
