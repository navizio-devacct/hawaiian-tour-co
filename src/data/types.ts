
export interface Tour {
  title: string;
  description: string;
  price: number | null;
  duration: string | null;
  image: string;
  rating: number | null;
  location: string;
  category: string;
  affiliateUrl: string;
  tags?: string[];
}
