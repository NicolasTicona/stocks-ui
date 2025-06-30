import type { StockItem } from './stock-item';
import type { StockRecommendation } from './stock-recommendation';

export interface StockListApiResponse {
    stocks: StockItem[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

export interface StockRecommendationApiResponse {
    stocks: StockRecommendation[];
}