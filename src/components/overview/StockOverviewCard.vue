<template>
    <div class="p-4 border-b-2 border-gray-500">
        <div class="flex items-center justify-between mb-3">
            <div>
                <span class="text-lg font-bold text-gray-900 mr-3">{{ stock.ticker }}</span>
                <span class="text-sm text-gray-600">{{ stock.company }}</span>
            </div>

        </div>
        <div class="mb-3 text-sm text-gray-900">
            <span class="text-xl font-bold mr-1"
                :class="{ 'text-green-600': isChangePositive, 'text-red-600': !isChangePositive }">
                <currency-dollar class="w-5 inline-block"></currency-dollar>
                {{ stock.currentQuote.currentPrice }}
            </span>
            <span class="font-medium"
                :class="{ 'text-green-600': isChangePositive, 'text-red-600': !isChangePositive }">
                <arrow-trending-up class="w-5 inline-block" v-if="stock.currentQuote.change > 0"></arrow-trending-up>
                <arrow-trending-down class="w-5 inline-block" v-else></arrow-trending-down>
                {{ stock.currentQuote.change }} ({{ stock.currentQuote.changePercentage }})
            </span>
        </div>
        <div class="flex items-center justify-start gap-4 text-xs mb-3">
            <p>Today: </p>
            <div>
                <span class="font-medium text-gray-900">H </span>
                <span class="text-gray-900">{{ stock.currentQuote.high }}</span>
            </div>
            <div>
                <span class="font-medium text-gray-900">L </span>
                <span class="text-gray-900">{{ stock.currentQuote.low }}</span>
            </div>

            <div>
                <span class="font-medium text-gray-900">O </span>
                <span class="text-gray-900">{{ stock.currentQuote.open }}</span>
            </div>

            <div>
                <span class="font-medium text-gray-700">PC </span>
                <span class="text-gray-700">{{ stock.currentQuote.previousClose }}</span>
            </div>
        </div>
    </div>
    <div class="p-4">

        <div class="flex items-start justify-between text-sm mb-3">
            <div class="flex items-center text-sm font-medium text-gray-900">
                <calendar-round class="w-5 mr-2"></calendar-round>
                Action performed {{ formatDate() }}
            </div>

            <div class="flex items-center text-sm font-medium text-gray-900">
                <star-score class="w-5 mr-2"></star-score>
                Score {{ stock.rating_score + stock.target_score }}
            </div>
        </div>
        <div class="flex items-center justify-between text-sm mb-3">
            <div class="flex items-center gap-2">
                <span class="px-2 py-1 text-sm font-medium rounded">
                    {{ stock.rating_from }}
                </span>
                <arrow-right></arrow-right>
                <span class="px-2 py-1 text-sm font-medium rounded">
                    {{ stock.rating_to }}
                </span>
            </div>
            <div class="text-sm text-gray-900">
                <span class="font-medium">Target: </span>
                <span class="text-gray-900">${{ stock.target_from }} → ${{ stock.target_to }}</span>
            </div>
        </div>
        <div class="flex items-center justify-between text-sm mb-3">
            <span class="py-1 text-sm font-medium text-gray-900 ">
                {{ stock.action }} {{ stock.brokerage }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">

import type { StockItem } from '@/interfaces/stock-item';
import { defineProps, } from 'vue';
import CurrencyDollar from '@/assets/icons/currency-dollar.vue';
import ArrowTrendingUp from '@/assets/icons/arrow-trending-up.vue';
import ArrowTrendingDown from '@/assets/icons/arrow-trending-down.vue';
import ArrowRight from '@/assets/icons/arrow-right.vue';
import CalendarRound from '@/assets/icons/calendar-round.vue';
import StarScore from '@/assets/icons/star-score.vue';

const props = defineProps<{
    stock: StockItem
}>();


const isChangePositive = props.stock.currentQuote.change > 0;

const formatDate = () => {
    const now = new Date();
    const actionDate = new Date(props.stock.time);
    const diffInMs = now.getTime() - actionDate.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) {
        return 'Today';
    } else if (diffInDays === 1) {
        return '1 day ago';
    } else {
        return `${diffInDays} days ago`;
    }
};


</script>