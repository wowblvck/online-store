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

export default ProductData;
