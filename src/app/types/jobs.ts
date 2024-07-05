export interface Job {
    id: string;
    title: string;
    company: string;
    date: string;
    description: string;
    jobType: 'Part-time' | 'Full-time' | 'Freelance' | 'Hybrid';
    location: string;
  }
  