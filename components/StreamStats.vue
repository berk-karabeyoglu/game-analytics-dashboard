<template>
  <h2
    class="text-[20px] font-poppins font-semibold pl-2 border-l-2 border-gray-200 mb-2"
  >
    Stream Stats
  </h2>
  <div class="grid grid-cols-2 gap-4">
    <!-- Hours Watched -->
    <div class="bg-bgGray rounded-2xl p-4">
      <p
        class="lg:text-[16px] text-xs text-black font-semibold mb-1 font-poppins"
      >
        Hours Watched
      </p>
      <p
        class="lg:text-5xl text-3xl font-semibold text-black font-poppins my-8"
      >
        {{ formatNumber(stream!.hoursWatched?.value) }}
      </p>
      <p
        :class="[
    'lg:text-xl text-sm font-poppins font-semibold mt-1 flex items-center',
    stream!.hoursWatched?.delta >= 0 ? 'text-textSuccess' : 'text-textError',
  ]"
      >
        <img
          :src="stream!.hoursWatched?.delta >= 0 ? '/icons/positiveDelta.svg' : '/icons/negativeDelta.svg'"
          alt="delta icon"
          class="w-6 h-6 mr-1"
          :class="stream!.hoursWatched?.delta >= 0 ? 'text-textSuccess' : 'text-textError'"
        />

        {{ formatNumber(stream!.hoursWatched?.delta) }}
        <span
          class="lg:text-xl text-sm font-poppins text-black font-semibold ml-2"
          >({{ stream?.hoursWatched?.deltaPercentage }}%)</span
        >
      </p>
    </div>

    <!-- Average Viewers -->
    <div class="bg-bgGray rounded-2xl p-4">
      <p
        class="lg:text-[16px] text-xs text-black font-semibold mb-1 font-poppins"
      >
        Average Viewers
      </p>
      <p
        class="lg:text-5xl text-3xl font-semibold text-black font-poppins my-8"
      >
        {{ formatNumber(stream!.averageViewers?.value) }}
      </p>
      <p
        :class="[
    'lg:text-xl text-sm font-poppins font-semibold mt-1 flex items-center',
    stream!.averageViewers?.delta >= 0 ? 'text-textSuccess' : 'text-textError',
  ]"
      >
        <img
          :src="stream!.averageViewers?.delta >= 0 ? '/icons/positiveDelta.svg' : '/icons/negativeDelta.svg'"
          alt="delta icon"
          class="w-6 h-6 mr-1"
          :class="stream!.averageViewers?.delta >= 0 ? 'text-textSuccess' : 'text-textError'"
        />

        {{ formatNumber(stream!.averageViewers?.delta) }}
        <span
          class="lg:text-xl text-sm font-poppins text-black font-semibold ml-2"
        >
          ({{ stream?.averageViewers?.deltaPercentage }}%)</span
        >
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GameStream } from "../types/GameStream";
import { formatNumber } from "../utils/formatNumber";

const props = defineProps<{
  stream: GameStream | undefined;
}>();
</script>
