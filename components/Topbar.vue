<template>
  <div class="flex justify-between items-center mb-6">
    <button
      class="block lg:hidden text-midgray"
      @click="$emit('toggle-sidebar')"
    >
      <Menu class="w-6 h-6" />
    </button>
    <!-- Sol: Arama inputu -->
    <div class="lg:flex hidden relative w-full max-w-2xl">
      <span class="absolute inset-y-0 left-3 flex items-center text-midgray">
        <Search class="w-5 h-5 text-midgray" />
      </span>
      <input
        type="text"
        placeholder="Search..."
        class="w-full pl-10 pr-4 py-4 rounded-xl bg-white text-[15px] placeholder-placeholderGray focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <!-- Sağ: Butonlar -->
    <div class="flex items-center space-x-4 ml-auto">
      <!-- Message Icon -->
      <button
        class="w-12 h-12 flex items-center justify-center rounded-xl bg-white shadow hover:bg-gray-100"
      >
        <Mail class="w-5 h-5 text-midgray" />
      </button>

      <!-- Notification Icon  -->
      <div class="relative">
        <button
          class="bg-white rounded-xl shadow h-12 w-12 flex items-center justify-center hover:bg-gray-100"
        >
          <div class="relative w-5 h-5">
            <Bell class="w-5 h-5 text-midgray" />
            <span
              class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"
            ></span>
          </div>
        </button>
      </div>

      <div class="border border-midgray h-8 opacity-40"></div>

      <!-- Profile Image -->
      <div class="w-12 h-12 rounded-2xl overflow-hidden bg-white shadow">
        <img
          src="https://i.pravatar.cc/100"
          alt="Profile"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Username -->
      <span class="text-2xl font-medium font-roboto text-sidebarActiveHeader"
        >Russell</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search, Mail, Bell, Menu } from "lucide-vue-next";
</script>
