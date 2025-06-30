import type { StockListApiResponse, StockRecommendationApiResponse } from '@/interfaces/api';
import type { StockAnalysis } from '@/interfaces/stock-recommendation';

const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

export const getPaginatedStocks = async (page: number, itemsPerPage = 5, filter: string): Promise<StockListApiResponse> => {
    try {
        const params = new URLSearchParams({
            page: page.toString(),
            limit: itemsPerPage.toString(),
        });

        if (filter) {
            params.append('filter', filter);
        }

        const response = await fetch(`${baseUrl}/stocks?${params.toString()}`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching stocks overview:', error);
        return { stocks: [], total: 0, page: 0, limit: itemsPerPage, totalPages: 0 };
    }
}

export const getStockRecommendations = async (): Promise<StockRecommendationApiResponse> => {
    try {
        const response = await fetch(`${baseUrl}/recommendations`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching stock recommendations:', error);
        return { stocks: [] };
    }
}

export const getStockAnalysis = async (ticker: string): Promise<StockAnalysis> => {
    try {
        const response = await fetch(`${baseUrl}/analyze?stock=${ticker}`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching stock analysis:', error);
        return { symbol: ticker, headlines: [], sentiment: 0, moving_average_crossover: '' };
    }
}
