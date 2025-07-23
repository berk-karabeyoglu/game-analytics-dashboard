<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <div
      v-for="card in stats"
      :key="card.label"
      class="flex items-center bg-white rounded-2xl shadow p-4"
    >
      <div
        class="w-20 h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center"
        :class="card.bgColor"
      >
        <img :src="card.icon" alt="icon" class="w-14 h-14 md:w-16 md:h-16" />
      </div>

      <div class="ml-4 flex flex-col justify-between h-full">
        <p
          class="text-[28px] md:text-[32px] font-semibold font-poppins leading-tight text-sidebarActiveHeader"
        >
          {{ card.value }}
        </p>
        <p class="text-[15px] text-black font-medium font-roboto">
          {{ card.label }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { formatNumber } from "../utils/formatNumber";

const props = defineProps<{
  price: number;
  downloads: number;
  revenue: number;
}>();

const stats = computed(() => [
  {
    icon: "/icons/price-icon.svg",
    value: formatNumber(props.price) + " $",
    label: "Price",
    bgColor: "bg-[#73B0FF66]",
  },
  {
    icon: "/icons/downloads-icon.svg",
    value: formatNumber(props.downloads),
    label: "Downloads",
    bgColor: "bg-[#FF73E166]",
  },
  {
    icon: "/icons/revenue-icon.svg",
    value: formatNumber(props.revenue),
    label: "Revenue",
    bgColor: "bg-[#FF737666]",
  },
]);
</script>
