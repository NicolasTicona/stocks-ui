<template>
    <section class="mt-10 max-w-7xl mx-auto p-4">
        <div class="flex">
            <h2 class="text-2xl font-bold text-gray-900">Stocks Market Overview</h2>
        </div>

        <div class="flex gap-8 mt-6">
            <input @input="handleFilterDebounce" type="text" :disabled="isLoading" placeholder="Search stocks"
                class="block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400" />
            <select class="p-2 rounded-md" name="sort" id="">
                <option value="">Order by</option>
                <option value="Latest">Latest</option>
                <option value="Oldest">Oldest</option>
            </select>
        </div>

        <div v-if="isLoading" class="mt-6 grid grid-cols-2 gap-4 justify-center">
            <CardSkeleton mode="large" />
            <CardSkeleton mode="large" />
            <CardSkeleton mode="large" />
            <CardSkeleton mode="large" />
        </div>

        <div class="mt-6 grid grid-cols-2 gap-4 justify-center" v-show="stocksStore.stocks.length > 0 && !isLoading">
            <div v-for="stock in stocksStore.stocks" :key="stock.ticker"
                class="cursor-pointer bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow">
                <div class="p-4">
                    <div class="flex items-center justify-between mb-3">
                        <div>
                            <span class="text-lg font-bold text-gray-900 mr-3">{{ stock.ticker }}</span>
                            <span class="text-sm text-gray-600">{{ stock.company }}</span>
                        </div>

                    </div>
                    <div class="mb-3 text-sm text-gray-700">
                        <span class="text-xl font-bold text-gray-900 mr-1">
                            <img class="inline" width="16" alt="dollar-icon" src="@/assets/icons/currency-dollar.svg">
                            {{ stock.currentQuote.currentPrice }}
                        </span>
                        <span class="text-green-600 font-bold">
                            <img v-if="stock.currentQuote.change > 0" class="inline" width="16"
                                src="@/assets/icons/arrow-trending-up.svg" alt="arrow-icon">
                            <img v-else class="inline" width="16" alt="dollar-icon"
                                src="@/assets/icons/arrow-trending-down.svg">
                            {{ stock.currentQuote.change }} ({{ stock.currentQuote.changePercentage }})
                        </span>
                    </div>
                    <div class="flex items-center justify-start gap-4 text-xs mb-3">
                        <div>
                            <span class="font-medium text-gray-700">H </span>
                            <span class="text-gray-700">{{ stock.currentQuote.high }}</span>
                        </div>
                        <div>
                            <span class="font-medium text-gray-700">L </span>
                            <span class="text-gray-700">{{ stock.currentQuote.low }}</span>
                        </div>

                        <div>
                            <span class="font-medium text-gray-700">O </span>
                            <span class="text-gray-700">{{ stock.currentQuote.open }}</span>
                        </div>

                        <div>
                            <span class="font-medium text-gray-700">PC </span>
                            <span class="text-gray-700">{{ stock.currentQuote.previousClose }}</span>
                        </div>
                    </div>
                    <hr class="my-4">

                    <div class="flex items-start justify-between text-sm mb-3">
                        <div class="text-sm font-medium text-gray-700">
                            <img class="inline" width="12" src="@/assets/icons/calendar.svg" alt="calendar-icon">
                            {{ stock.time }}
                        </div>

                        <div class="text-sm text-gray-700 border rounded-lg p-2">
                            <span class="font-medium">Recommendation score: </span>
                            <span class="font-medium">{{ stock.rating_score + stock.target_score }}</span>
                        </div>
                    </div>
                    <div class="flex items-center justify-between text-sm mb-3">
                        <div class="flex items-center gap-2">
                            <span
                                class="px-2 py-1 text-sm font-medium text-yellow-700 bg-yellow-50 border border-yellow-200 rounded">
                                {{ stock.rating_from }}
                            </span>
                            <img width="14" src="@/assets/icons/arrow-right.svg" alt="Your Icon">
                            <span
                                class="px-2 py-1 text-sm font-medium text-green-700 bg-green-50 border border-green-200 rounded">
                                {{ stock.rating_to }}
                            </span>
                        </div>
                        <div class="text-sm text-gray-700">
                            <span class="font-medium">Target:</span>
                            <span class="text-gray-900">${{ stock.target_from }} → ${{ stock.target_to }}</span>
                        </div>
                    </div>
                    <div class="flex items-center justify-between text-sm mb-3">
                        <span class="py-1 text-sm font-medium text-green-700 ">
                            {{ stock.action }} {{ stock.brokerage }}
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Pagination -->
        <div class="mt-6 flex justify-center items-center gap-4">
            <button @click="handlePreviousPage" :disabled="stocksStore.currentPage === 0 || isLoading"
                class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50">
                Previous
            </button>
            <span class="text-sm font-medium text-gray-700">Page {{ stocksStore.currentPage + 1 }} of {{
                stocksStore.totalPages }}</span>
            <button @click="handlePageChange"
                :disabled="stocksStore.currentPage + 1 === stocksStore.totalPages || isLoading"
                class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50">
                Next
            </button>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useStockStore } from '@/store/StockStore';
import { computed, onMounted, ref } from 'vue';
import { useDebounceFn } from '@vueuse/core'
import CardSkeleton from './shared/CardSkeleton.vue';

const filter = ref('')
const stocksStore = useStockStore();
const isLoading = computed(() => stocksStore.isLoading);

onMounted(() => {
    stocksStore.setStocksFromApi(0, 10, filter.value);
});

const handleFilterDebounce = useDebounceFn((event) => {
    filter.value = event.target.value;
    stocksStore.setStocksFromApi(0, stocksStore.itemsPerPage, filter.value.toUpperCase());
}, 800);

const handlePageChange = () => {
    if (stocksStore.currentPage < stocksStore.totalPages) {
        stocksStore.setStocksFromApi(stocksStore.currentPage + 1, stocksStore.itemsPerPage, filter.value);
    }
};

const handlePreviousPage = () => {
    if (stocksStore.currentPage > 1) {
        stocksStore.setCurrentPage(stocksStore.currentPage - 1);
    }
};

</script>