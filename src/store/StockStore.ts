import { getPaginatedStocks } from '@/api/stocks-api';
import type { StockItem } from '@/interfaces/stock-item';
import { defineStore } from 'pinia';

interface StockState {
    stocks: StockItem[];
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
    isLoading: boolean;
}

export const useStockStore = defineStore('stock', {
    state: () => ({
        stocks: [],
        currentPage: 0,
        itemsPerPage: 10,
        totalItems: 100,
        totalPages: 10,
        isLoading: false,
    } as StockState),
    actions: {
        async setStocksFromApi(page: number, limit: number, search: string) {
            try {
                this.isLoading = true;
                const response = await getPaginatedStocks(page, limit, search);
                this.isLoading = false;
                this.stocks = response.stocks;
                this.totalItems = response.total;
                this.totalPages = response.totalPages;
                this.currentPage = response.page;
                this.itemsPerPage = response.limit;
            } catch (err) {
                console.error('Error fetching stocks:', err);
                this.isLoading = false;
            }
        },
        setCurrentPage(page: number) {
            this.currentPage = page;
        },
        setItemsPerPage(count: number) {
            this.itemsPerPage = count;
        },
        setTotalItems(total: number) {
            this.totalItems = total;
        },
    }
})