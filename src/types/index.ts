export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  inStock: boolean;
}

export interface HealthResponse {
  ok: boolean;
  message: string;
  timestamp: string;
  version: string;
}
