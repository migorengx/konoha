
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useData } from "@/contexts/DataContext";
import { useToast } from "@/hooks/use-toast";

const PostForm: React.FC = () => {
  const { addPost } = useData();
  const { toast } = useToast();
  const [content, setContent] = useState("");
  const [region, setRegion] = useState<string | undefined>(undefined);
  const [politician, setPolitician] = useState<string | undefined>(undefined);
  const [category, setCategory] = useState<string | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!content.trim()) {
      toast({
        title: "Error",
        description: "Please enter your message",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate network delay
    setTimeout(() => {
      addPost({
        content,
        region,
        politician,
        category,
      });
      
      // Reset form
      setContent("");
      setRegion(undefined);
      setPolitician(undefined);
      setCategory(undefined);
      
      toast({
        title: "Success",
        description: "Your post has been published anonymously",
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card p-4 rounded-lg space-y-4">
      <div className="space-y-2">
        <Label htmlFor="post">Share your information anonymously</Label>
        <Textarea
          id="post"
          placeholder="What's happening? Share political insights, corruption evidence, or regional issues here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="min-h-[120px] bg-background/50"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="region">Region (Optional)</Label>
          <Select value={region} onValueChange={setRegion}>
            <SelectTrigger id="region">
              <SelectValue placeholder="Select region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Jakarta">Jakarta</SelectItem>
              <SelectItem value="West Java">West Java</SelectItem>
              <SelectItem value="East Java">East Java</SelectItem>
              <SelectItem value="Central Java">Central Java</SelectItem>
              <SelectItem value="Bali">Bali</SelectItem>
              <SelectItem value="Sumatra">Sumatra</SelectItem>
              <SelectItem value="Kalimantan">Kalimantan</SelectItem>
              <SelectItem value="Sulawesi">Sulawesi</SelectItem>
              <SelectItem value="Papua">Papua</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="politician">Politician (Optional)</Label>
          <Input
            id="politician"
            placeholder="Politician name"
            value={politician || ""}
            onChange={(e) => setPolitician(e.target.value)}
            className="bg-background/50"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="category">Category (Optional)</Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger id="category">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Corruption">Corruption</SelectItem>
              <SelectItem value="Human Rights">Human Rights</SelectItem>
              <SelectItem value="Environment">Environment</SelectItem>
              <SelectItem value="Infrastructure">Infrastructure</SelectItem>
              <SelectItem value="Education">Education</SelectItem>
              <SelectItem value="Healthcare">Healthcare</SelectItem>
              <SelectItem value="Economy">Economy</SelectItem>
              <SelectItem value="Crime">Crime</SelectItem>
              <SelectItem value="Natural Disaster">Natural Disaster</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="flex justify-end">
        <Button type="submit" disabled={isSubmitting} className="bg-primary hover:bg-primary/90 text-primary-foreground">
          {isSubmitting ? "Posting..." : "Post Anonymously"}
        </Button>
      </div>
    </form>
  );
};

export default PostForm;
