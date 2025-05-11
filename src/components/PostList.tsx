
import React from "react";
import { formatDistanceToNow } from "date-fns";
import { MessageCircle, Share2, MapPin, User } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useData } from "@/contexts/DataContext";
import { Post } from "@/types/data";
import { Badge } from "@/components/ui/badge";

const PostList: React.FC = () => {
  const { posts } = useData();

  if (posts.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-muted-foreground">No posts yet. Be the first to share information.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <Card className="glass-card overflow-hidden">
      <CardContent className="pt-6">
        <p className="mb-4">{post.content}</p>
        <div className="flex flex-wrap gap-2">
          {post.region && (
            <Badge variant="outline" className="flex items-center gap-1 text-xs">
              <MapPin size={12} />
              {post.region}
            </Badge>
          )}
          {post.politician && (
            <Badge variant="outline" className="flex items-center gap-1 text-xs">
              <User size={12} />
              {post.politician}
            </Badge>
          )}
          {post.category && (
            <Badge variant="secondary" className="text-xs">
              {post.category}
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="border-t border-white/5 py-3 px-6 flex justify-between">
        <span className="text-xs text-muted-foreground">
          Posted {formatDistanceToNow(post.timestamp)} ago
        </span>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-xs flex items-center gap-1 text-muted-foreground hover:text-foreground">
            <MessageCircle size={14} />
            {post.likes}
          </Button>
          <Button variant="ghost" size="sm" className="text-xs flex items-center gap-1 text-muted-foreground hover:text-foreground">
            <Share2 size={14} />
            {post.shares}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostList;
