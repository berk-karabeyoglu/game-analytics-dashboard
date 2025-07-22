<template>
  <h2
    class="text-[20px] font-poppins font-semibold pl-2 border-l-2 border-gray-200 mb-2"
  >
    Stream Performance
  </h2>
  <div class="bg-gray-100 rounded-2xl shadow p-6 h-[450px]">
    <div class="h-full py-10">
      <Bar :data="barData" :options="barOptions" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Bar } from "vue-chartjs";
import type { GameStream } from "../types/GameStream";
import type { DailyStreamCounts } from "../types/GameStream";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

const props = defineProps<{
  stream: GameStream | undefined;
}>();

type Weekday = keyof DailyStreamCounts;

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const labels: Weekday[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];
const shortLabels = ["Mon", "Tue", "Wed", "Thu", "Fri"];

const barData = {
  labels: shortLabels,
  datasets: [
    {
      label: "Stream Hours",
      data: labels.map((day) => props.stream?.dailyStreamCounts[day] ?? 0),
      backgroundColor: "#008DE4",
      borderRadius: 12,
    },
  ],
};

const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: (value: any) => `${value}h`,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
} as const;
</script>
