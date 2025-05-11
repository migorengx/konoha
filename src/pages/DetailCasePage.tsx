
import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useData } from "@/contexts/DataContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, FileText } from "lucide-react";

type CaseNews = {
  id: string;
  caseId: string;
  date: string; // ISO format
  title: string;
  summary: string;
  url?: string;
};

const newsByCase: CaseNews[] = [
  {
    id: "news-1",
    caseId: "1",
    date: "2023-06-01",
    title: "Jakarta MRT Project Scandal Surfaces",
    summary:
      "Initial reports emerge regarding misappropriation of funds in the Jakarta MRT Project. Several officials are suspected.",
    url: "https://news.example.com/mrt/june01",
  },
  {
    id: "news-2",
    caseId: "1",
    date: "2023-07-15",
    title: "Investigation Deepens: 12 Politicians Named",
    summary:
      "Corruption Eradication Commission officially names 12 politicians as suspects in the ongoing MRT corruption investigation.",
    url: "https://news.example.com/mrt/july15",
  },
  {
    id: "news-3",
    caseId: "1",
    date: "2023-10-20",
    title: "Court Sets Hearing Date for MRT Case",
    summary:
      "The Jakarta Metro Court schedules a public trial date amidst widespread media coverage and public protests.",
    url: "https://news.example.com/mrt/oct20",
  },
  {
    id: "news-4",
    caseId: "2",
    date: "2023-02-09",
    title: "Papua Mining License Controversy Unfolds",
    summary:
      "Whistleblowers reveal major bribery in the Papua Mining License process, implicating several high-ranking officials.",
  },
  {
    id: "news-5",
    caseId: "2",
    date: "2023-04-22",
    title: "Investigators Raid Multiple Offices",
    summary:
      "Authorities conduct coordinated raids on offices suspected to be involved in the mining license bribery.",
  },
  // Add more demo news for other cases as needed
];

const DetailCasePage: React.FC = () => {
  const { caseId } = useParams();
  const { corruptionRanks } = useData();

  // Find the corruption case
  const corruptionCase = corruptionRanks.find((c) => c.id === caseId);

  // Filter & sort news chronologically
  const caseNews = newsByCase
    .filter((n) => n.caseId === caseId)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  if (!corruptionCase) {
    return (
      <Layout>
        <div className="text-center text-muted-foreground py-24">
          <p className="text-lg font-bold mb-4">Case not found.</p>
          <Link to="/corruption" className="text-primary underline text-base">
            Back to Corruption Rankings
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Link to="/corruption" className="mb-4 inline-block text-muted-foreground hover:text-accent text-sm underline">
        &larr; Back to Corruption Cases
      </Link>
      <Card className="glass-card mb-5">
        <CardHeader>
          <CardTitle className="text-xl mb-2">{corruptionCase.case}</CardTitle>
          <div className="flex flex-wrap gap-3 items-center text-sm">
            <Badge variant="secondary">{corruptionCase.status}</Badge>
            <span className="text-muted-foreground">
              Estimated Value: <span className="font-bold">{corruptionCase.amount}</span>
            </span>
            <span className="text-muted-foreground">
              Politicians: <span className="font-bold">{corruptionCase.involvedPoliticians}</span>
            </span>
          </div>
        </CardHeader>
      </Card>

      <div className="mb-8">
        <h2 className="text-base font-semibold mb-3 flex items-center gap-2">
          <FileText className="text-accent" size={20} /> Case News Timeline
        </h2>
        {caseNews.length === 0 ? (
          <div className="text-muted-foreground">No news found for this case yet.</div>
        ) : (
          <ol className="relative border-l border-accent/20 pl-5 space-y-7">
            {caseNews.map((news, idx) => (
              <li key={news.id} className="ml-2">
                <div className="absolute -left-3.5 mt-1 bg-accent w-2 h-2 rounded-full shadow-lg" />
                <div className="flex gap-2 items-center mb-1 text-xs text-muted-foreground">
                  <Calendar size={14} /> {new Date(news.date).toLocaleDateString("en-GB")}
                </div>
                <div className="bg-background glass-card rounded-lg px-4 py-3 shadow border border-accent/10">
                  <div className="font-semibold mb-1">{news.title}</div>
                  <div className="text-sm text-muted-foreground">{news.summary}</div>
                  {news.url && (
                    <a
                      href={news.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent text-xs underline mt-1 block"
                    >
                      Read more
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </Layout>
  );
};

export default DetailCasePage;
