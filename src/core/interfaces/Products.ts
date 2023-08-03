//Product database description
//Описание базы данных товаров

interface ProductData {
  id: number;
  title: string;
  category: string;
  description: string;
  price: number;
  stock: number;
  brand: string;
  images: string[];
}

interface ProductCategories {
  name: string;
  amount: number;
  stock: number;
  state: boolean;
}

interface ProductBrands {
  name: string;
  amount: number;
  stock: number;
  state: boolean;
}

interface SortState {
  name: string | null;
  value: number;
}

interface BrandCounts {
  [key: string]: number;
}

interface CategoryCounts {
  [key: string]: number;
}

export {
  ProductData,
  ProductCategories,
  ProductBrands,
  SortState,
  BrandCounts,
  CategoryCounts,
};
