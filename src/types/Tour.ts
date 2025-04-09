
export interface Tour {
  title: string;
  description: string;
  image: string;
  rating: number;
  location: string;
  category: string;
  affiliateUrl: string;
  tags?: string[];
  price: number | null;
  duration: string | null;
}
