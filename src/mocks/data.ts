import { Post, PoliticianRank, RegionRank, CorruptionRank, VerifiedNews, RegionDetail } from '../types/data';

export const samplePosts: Post[] = [
  {
    id: "1",
    content: "Concerns about infrastructure development delays in Jakarta's northern district",
    timestamp: new Date(2024, 3, 15),
    likes: 245,
    shares: 89,
    region: "Jakarta",
    category: "Infrastructure",
    isVerified: false
  },
  {
    id: "2",
    content: "Local residents report poor road conditions in East Jakarta",
    timestamp: new Date(2024, 3, 12),
    likes: 178,
    shares: 56,
    region: "Jakarta",
    category: "Infrastructure",
    isVerified: false
  },
  {
    id: "3",
    content: "Citizens demand better public transportation in Surabaya city center",
    timestamp: new Date(2024, 3, 10),
    likes: 189,
    shares: 45,
    region: "East Java",
    category: "Transportation",
    isVerified: false
  },
  {
    id: "4",
    content: "Environmental concerns rise in Papua's mining areas",
    timestamp: new Date(2024, 3, 8),
    likes: 312,
    shares: 167,
    region: "Papua",
    category: "Environment",
    isVerified: false
  },
  {
    id: "5",
    content: "West Java residents discuss education system improvements",
    timestamp: new Date(2024, 3, 5),
    likes: 423,
    shares: 198,
    region: "West Java",
    category: "Education",
    isVerified: false
  }
];

export const samplePoliticianRanks: PoliticianRank[] = [
  { id: "1", name: "Ahmad Suparjo", position: "Minister of Finance", corruptionScore: 85, party: "PDI-P", change: 'up' },
  { id: "2", name: "Budi Santoso", position: "Governor of Jakarta", corruptionScore: 78, party: "Gerindra", change: 'stable' },
  { id: "3", name: "Citra Dewi", position: "DPR Member", corruptionScore: 73, party: "Golkar", change: 'down' },
  { id: "4", name: "Darmawan Hidayat", position: "Minister of Health", corruptionScore: 72, party: "PKB", change: 'up' },
  { id: "5", name: "Eko Prasetyo", position: "Governor of East Java", corruptionScore: 68, party: "Demokrat", change: 'stable' }
];

export const sampleRegionRanks: RegionRank[] = [
  { id: "1", name: "Jakarta", issues: 145, mostCommonIssue: "Corruption", change: 'up' },
  { id: "2", name: "Papua", issues: 132, mostCommonIssue: "Human Rights", change: 'up' },
  { id: "3", name: "East Java", issues: 98, mostCommonIssue: "Infrastructure", change: 'down' },
  { id: "4", name: "West Java", issues: 87, mostCommonIssue: "Corruption", change: 'stable' },
  { id: "5", name: "Bali", issues: 65, mostCommonIssue: "Environment", change: 'down' }
];

export const sampleCorruptionRanks: CorruptionRank[] = [
  { id: "1", case: "Jakarta MRT Project", amount: "Rp 500 Billion", involvedPoliticians: 12, status: "Under Investigation", change: 'up' },
  { id: "2", case: "Papua Mining License", amount: "Rp 350 Billion", involvedPoliticians: 8, status: "Court Trial", change: 'up' },
  { id: "3", case: "COVID-19 Relief Funds", amount: "Rp 750 Billion", involvedPoliticians: 15, status: "Under Investigation", change: 'stable' },
  { id: "4", case: "West Java Highway Project", amount: "Rp 280 Billion", involvedPoliticians: 6, status: "Court Trial", change: 'down' },
  { id: "5", case: "National Education Budget", amount: "Rp 420 Billion", involvedPoliticians: 9, status: "Under Investigation", change: 'up' }
];

export const sampleVerifiedNews: VerifiedNews[] = [
  {
    id: "1",
    title: "Infrastructure Development in Jakarta",
    content: "Governor of Jakarta announces new infrastructure projects worth 5 trillion rupiah for 2024",
    timestamp: new Date(2024, 3, 20),
    sourceUrl: "https://example.com/news/jakarta-infrastructure",
    region: "Jakarta",
    politician: "Budi Santoso",
    isVerified: true
  },
  {
    id: "2",
    title: "Education Reform in Papua",
    content: "Papua implements new education program to improve literacy rates across the region",
    timestamp: new Date(2024, 3, 15),
    sourceUrl: "https://example.com/news/papua-education",
    region: "Papua",
    isVerified: true
  },
  {
    id: "3",
    title: "Environmental Initiative in East Java",
    content: "East Java government launches new environmental protection program",
    timestamp: new Date(2024, 3, 10),
    sourceUrl: "https://example.com/news/east-java-environment",
    region: "East Java",
    isVerified: true
  }
];

export const sampleRegionDetails: RegionDetail[] = [
  {
    id: "1",
    name: "Jakarta",
    governor: {
      id: "1",
      name: "Budi Santoso",
      position: "Governor of Jakarta"
    },
    mayor: {
      id: "2",
      name: "Ahmad Rahman",
      position: "Deputy Governor"
    },
    dpd: [
      {
        id: "3",
        name: "Siti Rahma",
        position: "DPD Member"
      },
      {
        id: "4",
        name: "Johan Putra",
        position: "DPD Member"
      }
    ]
  },
  {
    id: "2",
    name: "Papua",
    governor: {
      id: "5",
      name: "Michael Watopa",
      position: "Governor of Papua"
    },
    dpd: [
      {
        id: "6",
        name: "Diana Ayu",
        position: "DPD Member"
      }
    ]
  },
  {
    id: "3",
    name: "East Java",
    governor: {
      id: "7",
      name: "Eko Prasetyo",
      position: "Governor of East Java"
    },
    dpd: [
      {
        id: "8",
        name: "Bambang Sutejo",
        position: "DPD Member"
      },
      {
        id: "9",
        name: "Rina Kartika",
        position: "DPD Member"
      }
    ]
  }
];
