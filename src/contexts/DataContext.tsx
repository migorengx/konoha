
import React, { createContext, useContext, useState, ReactNode } from "react";
import { DataContextType, Post } from '../types/data';
import {
  samplePosts,
  samplePoliticianRanks,
  sampleRegionRanks,
  sampleCorruptionRanks,
  sampleVerifiedNews,
  sampleRegionDetails
} from '../mocks/data';

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>(samplePosts);
  const [politicianRanks] = useState(samplePoliticianRanks);
  const [regionRanks] = useState(sampleRegionRanks);
  const [corruptionRanks] = useState(sampleCorruptionRanks);
  const [verifiedNews] = useState(sampleVerifiedNews);
  const [regionDetails] = useState(sampleRegionDetails);

  const addPost = (newPost: Omit<Post, "id" | "timestamp" | "likes" | "shares">) => {
    const post: Post = {
      ...newPost,
      id: Date.now().toString(),
      timestamp: new Date(),
      likes: 0,
      shares: 0,
    };
    setPosts((prevPosts) => [post, ...prevPosts]);
  };

  return (
    <DataContext.Provider
      value={{
        posts,
        addPost,
        politicianRanks,
        regionRanks,
        corruptionRanks,
        verifiedNews,
        regionDetails,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
