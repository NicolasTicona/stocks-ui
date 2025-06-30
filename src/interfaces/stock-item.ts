import type { StockQuote } from './stock-quote';

export interface StockItem {
    id: number;
    ticker: string;
    target_from: number;
    target_to: number;
    company: string;
    action: string;
    brokerage: string;
    rating_from: string;
    rating_to: string;
    time: string;
    rating_score: number;
    target_score: number;
    currentQuote: StockQuote;
}

