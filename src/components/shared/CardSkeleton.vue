<template>
    <div :class="'border shadow rounded-lg p-4 w-full mx-auto' + (props.mode === 'large' ? 'py-10' : '')">
        <div class="animate-pulse flex space-x-4">
            <div class="rounded-full bg-slate-400 h-10 w-10"></div>
            <div class="flex-1 space-y-6 py-1">
                <div class="h-2 bg-slate-400 rounded"></div>
                <div class="space-y-3">
                    <div class="grid grid-cols-3 gap-4">
                        <div class="h-2 bg-slate-400 rounded col-span-2"></div>
                        <div class="h-2 bg-slate-400 rounded col-span-1"></div>
                    </div>
                    <div class="h-2 bg-slate-400 rounded"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps<{
    mode: 'small' | 'large';
}>();

</script>