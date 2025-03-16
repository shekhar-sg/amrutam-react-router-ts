export interface ConcernsResponse {
  success: boolean;
  message: string;
  data: Concern[];
}

interface Concern {
  _id: string;
  img: string;
  name: string;
  description: string;
  active: boolean;
  deletedAt: null;
  __v: number;
  featured: boolean;
}