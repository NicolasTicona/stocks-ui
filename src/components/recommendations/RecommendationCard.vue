<template>
    <div class="bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow">
        <div class="p-4 w-full flex flex-col h-full">
            <div class="flex items-start justify-between mb-3">
                <div class="text-lg font-bold text-gray-900">{{ props.stock.ticker }}</div>
                <span class="px-2 py-1 text-sm font-medium border rounded-lg">
                    Recommendation Score: {{ props.stock.total_score }}
                </span>
            </div>
            <div class="mb-3 text-sm text-gray-700 flex gap-1 items-baseline">
                <span class="text-xl font-bold text-gray-900">{{ props.stock.currentQuote?.currentPrice }}</span>
                <span class="text-green-600">
                    <img class="inline" width="16" src="@/assets/icons/arrow-trending-up.svg" alt="arrow-icon">

                    {{ props.stock.currentQuote?.change }} ({{ props.stock.currentQuote?.changePercentage }})</span>
            </div>

            <LineSkeleton v-if="props.stock && isAnalysisLoading"></LineSkeleton>

            <div v-else>
                <div class="flex items-center justify-center gap-5 text-sm mb-3">
                    <div class="flex gap-2 items-center">
                        <span class="font-medium text-gray-700">Algorithm Suggestion:</span>
                        <span class="px-2 py-1 text-sm font-medium text-white bg-green-600 rounded">{{
                            props.stock.stockAnalysis?.moving_average_crossover }}</span>
                    </div>
                    <div class="flex gap-2 items-center">
                        <span class="font-medium text-gray-700">Sentiment:</span>
                        <span class="text-green-600 font-bold">{{ props.stock.stockAnalysis?.sentiment }} / 100</span>
                    </div>
                </div>

                <div class="text-xs space-y-2 mt-3 text-gray-700">
                    <span class="font-medium">News:</span>
                    <ul class="list-disc pl-5">
                        <li v-for="headline in getHeadlines(stock.stockAnalysis?.headlines)" :key="headline">{{
                            headline }}</li>
                    </ul>
                </div>
            </div>

            <!-- <div class="text-center mt-4">
                <a href="#" class="text-blue-600 text-sm font-medium hover:underline">
                    View Details
                </a>
            </div> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, defineProps, onMounted } from 'vue';
import type { StockRecommendation } from '@/interfaces/stock-recommendation';
import LineSkeleton from '@/components/shared/LineSkeleton.vue';
import { useRecommendationStore } from '@/store/RecommendationStore';

const props = defineProps<{
    stock: StockRecommendation
}>();

const isAnalysisLoading = computed(() => {
    return !props.stock.stockAnalysis
});

onMounted(() => {
    const recommendationsStore = useRecommendationStore();
    const stockAnalysis = recommendationsStore.getStockAnalysis(props.stock.ticker);

    if (!stockAnalysis) {
        recommendationsStore.setStockAnalysis(props.stock.ticker);
    }
})

const getHeadlines = (headlines: string[] | undefined) => {

    if (!headlines) {
        return [];
    }

    return headlines.length > 3 ? headlines.slice(0, 3) : headlines;
}

</script>