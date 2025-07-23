<template>
  <div class="bg-white rounded-3xl shadow p-6">
    <!-- Başlık ve Tarih Seçici -->
    <div class="flex justify-between items-center mb-6 lg:p-10 p-2">
      <h2 class="text-[20px] font-poppins font-semibold">Performance</h2>
      <div class="relative inline-block w-fit">
        <select
          v-model="selectedMonth"
          class="bg-[#F5F7FB] text-xs text-midgray font-roboto font-medium px-4 py-2 pr-10 rounded-md appearance-none focus:outline-none"
        >
          <option value="may">01–07 May</option>
          <option value="june">01–07 June</option>
          <option value="july">01–07 July</option>
        </select>

        <svg
          class="w-4 h-4 text-midgray absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>

    <!-- Grafik -->
    <div class="lg:h-[450px] h-[300px] px-2 mb-10">
      <Line :data="chartData" :options="chartOptions" />
    </div>

    <!-- Açıklama -->
    <div class="space-y-2 lg:p-10 p-2">
      <h2 class="text-[20px] font-poppins font-semibold mb-8">Description</h2>
      <div
        class="bg-bgGray text-[15px] font-medium text-midgray p-8 rounded-xl"
      >
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "vue-chartjs";
import { computed, ref } from "vue";
import type { StreamPerformanceData } from "../types/GameStream";
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler
);

// Props
const props = defineProps<{
  streamData: StreamPerformanceData | undefined;
  description: string;
}>();

const selectedMonth = ref("may");

// Chart Data (computed based on props)
const chartData = computed(() => ({
  labels: props.streamData?.dates.map((d) => d.slice(8)) ?? [],
  datasets: [
    {
      label: "Watch Time",
      data: props.streamData?.watchTime ?? [],
      borderColor: "#008DE4",
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      fill: true,
      tension: 0.4,
      pointRadius: 0,
      borderWidth: 1.5,
    },
    {
      label: "Engagement",
      data: props.streamData?.engagement ?? [],
      borderColor: "#F68D41",
      backgroundColor: "rgba(249, 115, 22, 0.1)",
      fill: true,
      tension: 0.4,
      pointRadius: 0,
      borderWidth: 1.5,
    },
  ],
}));

// Chart Options
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: "#111827",
      titleFont: { size: 12 },
      bodyFont: { size: 12 },
      cornerRadius: 6,
      padding: 8,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
        drawTicks: false,
      },
      border: {
        display: false,
      },
      ticks: {
        color: "#6b7280",
        font: { size: 12 },
        padding: width.value < 768 ? 10 : 50,
      },
    },
    y: {
      grid: {
        display: false,
        drawBorder: false,
        drawTicks: false,
      },
      border: {
        display: false,
      },
      ticks: {
        color: "#6b7280",
        font: { size: 12 },
        padding: width.value < 768 ? 10 : 50,
        callback: (value: any) => `${value}h`,
      },
      min: 0,
      max: 12,
    },
  },
} as const;
</script>
