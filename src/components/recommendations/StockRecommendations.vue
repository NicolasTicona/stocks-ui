<template>
    <section class="mt-10 max-w-7xl mx-auto p-4">
        <div class="flex items-center justify-between">
            <h2 class="text-2xl font-bold text-gray-900">Stocks Recommendations</h2>
        </div>
        <p class="text-xs mt-2">Top stocks from last 7 days according to Swechallenge data, you'll find
            indicators
            like
            Moving Average Crossver according to last close prices and Social Sentiment analysis from news headlines
        </p>

        <div class="mt-6 grid grid-cols-3 gap-4 justify-center" v-if="isLoading">
            <CardSkeleton mode="small" />
            <CardSkeleton mode="small" />
            <CardSkeleton mode="small" />
        </div>

        <div class="mt-6 grid grid-cols-3 gap-4 justify-center">
            <RecommendationCard v-for="stock in showableStocks" :key="stock.ticker" :stock="stock"></RecommendationCard>
        </div>

        <div class="flex items-center justify-center mt-6 gap-4">
            <div class="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 bg-white shadow hover:shadow-md transition-shadow"
                v-for="bubbleStock in bubbleStocks" :key="bubbleStock.ticker">
                <span class="text-xs font-medium text-gray-900">{{ bubbleStock.ticker }}</span>
            </div>
        </div>

        <div class="mt-6 text-center" v-show="!isLoading">
            <button @click="toggleShowAll" class="bg-white px-4 py-2 rounded border">
                {{ showAll ? 'Show less' : 'Show all' }} recommendations
            </button>
        </div>
    </section>
</template>
<script setup lang="ts">
import { useRecommendationStore } from '@/store/RecommendationStore';
import { computed, onMounted, ref } from 'vue'
import CardSkeleton from '@/components/shared/CardSkeleton.vue';
import RecommendationCard from '@/components/recommendations/RecommendationCard.vue';

const recommendationsStore = useRecommendationStore();
const isLoading = computed(() => recommendationsStore.isLoading);

onMounted(() => {
    recommendationsStore.setRecommendationsFromApi();
});

const showableStocks = computed(() => {
    return showAll.value ? recommendationsStore.stocks : [...recommendationsStore.stocks].splice(0, 3)
})
const bubbleStocks = computed(() => {
    return showAll.value ? [] : recommendationsStore.stocks.slice(3)
})

const showAll = ref(false)
const toggleShowAll = () => {
    showAll.value = !showAll.value;
}

</script>
