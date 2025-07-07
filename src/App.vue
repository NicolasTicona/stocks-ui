<template>
    <AppHeader></AppHeader>

    <div class="pb-20">
        <StocksHome></StocksHome>
    </div>
</template>
<script setup lang="ts">
import StocksHome from './components/StocksHome.vue';
import AppHeader from './components/shared/AppHeader.vue';
</script>
