import type { StockQuote } from './stock-quote';

export interface StockRecommendation {
    ticker: string;
    total_score: number;
    created_at: string;
    currentQuote: StockQuote;
    stockAnalysis?: StockAnalysis;
}

export interface StockAnalysis {
    symbol: string;
    sentiment: number;
    moving_average_crossover: string;
    headlines: string[];
}