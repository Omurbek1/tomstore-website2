import Shop from "./shop.model";
import Review from "./Review.model";

interface Product {
  unit?: any;
  slug: string;
  price: number;
  title: string;
  rating: number;
  discount: number;
  thumbnail: string;
  id: string;
  shop?: Shop;
  brand?: string | null;
  size?: string[] | null;
  status?: string | null;
  colors?: string[] | null;
  images?: string[] | null;
  categories: any[] | null;
  reviews?: Review[] | null;
  published?: boolean;
}

export default Product;
