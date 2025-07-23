<template>
  <div class="flex min-h-screen">
    <Sidebar />

    <MobileSidebar :isOpen="isSidebarOpen" @close="isSidebarOpen = false" />

    <div :class="['transition-all p-6 min-h-screen bg-bgLayout', 'lg:ml-72']">
      <Topbar @toggle-sidebar="isSidebarOpen = true" />
      <h1 class="text-[40px] font-semibold mb-4 font-poppins">
        {{ overview?.name }}
      </h1>

      <!-- StatCards + PerformanceChart + Sağ blok -->
      <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <!-- Sol taraf: StatCards + PerformanceChart -->
        <div class="flex flex-col space-y-6 xl:col-span-2">
          <StatCards
            :downloads="overview?.downloads || 0"
            :revenue="overview?.revenue || 0"
            :price="overview?.price || 0"
          />
          <PerformanceChart
            :streamData="performanceData"
            :description="overview?.description || ''"
          />
        </div>

        <!-- Sağ taraf: GameDescription + StreamPerformance -->
        <div class="bg-white rounded-3xl shadow p-6 flex flex-col space-y-6">
          <GameDescription :shortDescription="overview?.description || ''" />
          <StreamPerformance :stream="stream" />
          <StreamStats :stream="stream" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "../components/Sidebar.vue";
import MobileSidebar from "../components/MobileSideBar.vue";
import Topbar from "../components/Topbar.vue";
import StatCards from "../components/StatCards.vue";
import PerformanceChart from "../components/PerformanceChart.vue";
import GameDescription from "../components/GameDescription.vue";
import StreamPerformance from "../components/StreamPerformance.vue";
import StreamStats from "../components/StreamStats.vue";
import { useGameOverview } from "../composables/useGameOverview";
import { useGameStream } from "..//composables/useGameStream";
import { useStreamPerformance } from "../composables/useStreamPerformance";

import { ref } from "vue";
const isSidebarOpen = ref(false);

const { overview, error } = useGameOverview("578080");
const { stream } = useGameStream("578080");
const { performanceData } = await useStreamPerformance("578080");

if (error.value) {
  console.error("API HATASI:", error.value);
}
</script>

<style>
html,
body {
  background-color: #f3f4f6;
}
</style>
