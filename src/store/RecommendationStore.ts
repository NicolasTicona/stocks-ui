import { getStockAnalysis, getStockRecommendations } from '@/api/stocks-api';
import type { StockRecommendation } from '@/interfaces/stock-recommendation';
import { defineStore } from 'pinia';

export interface StockRecommendationState {
    stocks: StockRecommendation[];
    isLoading: boolean;
}

export const useRecommendationStore = defineStore('stockRecommendations', {
    state: () => ({
        stocks: [],
        isLoading: false,
    } as StockRecommendationState),
    actions: {
        async setRecommendationsFromApi() {
            try {
                this.isLoading = true;
                const response = await getStockRecommendations();
                this.stocks = response.stocks;
                this.isLoading = false;

            } catch (error) {
                console.error('Error fetching recommendations:', error);
                this.isLoading = false;
            }
        },
        async setStockAnalysis(ticker: string) {
            try {
                const stock = this.stocks.find(s => s.ticker === ticker);
                if (stock) {
                    const analysis = await getStockAnalysis(ticker);
                    stock.stockAnalysis = analysis;
                }
            } catch (error) {
                console.error(`Error fetching analysis for ${ticker}:`, error);
            }
        }
    },
    getters: {
        getStockAnalysis: (state) => (ticker: string) => {
            const stock = state.stocks.find(s => s.ticker === ticker);
            if (stock && stock.stockAnalysis) {
                return stock.stockAnalysis;
            } else {
                return null;
            }
        }
    }
})