<template>
    <section class="mt-10 max-w-7xl mx-auto p-4">
        <div class="flex">
            <h2 class="text-2xl font-bold text-gray-900">Stocks Market Overview</h2>
        </div>

        <div class="flex gap-8 mt-6">
            <input @input="handleFilterDebounce" type="text" :disabled="isLoading" placeholder="Search stocks"
                class="block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400" />
            <select class="p-2 rounded-md" v-model="sortBySelected" @change="handleSortChange" name="sort">
                <option value="time">Time</option>
                <option value="rating">Rating</option>
                <option value="target">Target</option>
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
                class="bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow">
                <StockOverviewCard :stock="stock" />
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
import CardSkeleton from '@/components/shared/CardSkeleton.vue';
import StockOverviewCard from '@/components/overview/StockOverviewCard.vue';

const filter = ref('')
const sortBySelected = ref('time');
const stocksStore = useStockStore();
const isLoading = computed(() => stocksStore.isLoading);

onMounted(() => {
    stocksStore.setStocksFromApi(0, 10, filter.value, sortBySelected.value);
});

const handleFilterDebounce = useDebounceFn((event) => {
    filter.value = event.target.value;
    stocksStore.setStocksFromApi(0, stocksStore.itemsPerPage, filter.value.toUpperCase(), sortBySelected.value);
}, 800);

const handlePageChange = () => {
    if (stocksStore.currentPage < stocksStore.totalPages) {
        stocksStore.setStocksFromApi(stocksStore.currentPage + 1, stocksStore.itemsPerPage, filter.value, sortBySelected.value);
    }
};

const handlePreviousPage = () => {
    if (stocksStore.currentPage > 0) {
        stocksStore.setStocksFromApi(stocksStore.currentPage - 1, stocksStore.itemsPerPage, filter.value, sortBySelected.value);
    }
};

const handleSortChange = () => {
    stocksStore.setStocksFromApi(0, stocksStore.itemsPerPage, filter.value, sortBySelected.value);
};

</script>