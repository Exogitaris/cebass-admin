<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="chart-container shadow p-3 mb-5 bg-body rounded">
          <h4 class="chart-container-title">Rychlý statistický přehled správce David Maletínský - Programátor CEBASS</h4>
          <hr>
          <div class="charts-center">
            <div>
              <span ref="printMe" style="display: inline-block"><GChart type="PieChart" :data="chartData" :options="chartOptions" /></span>
              <span style="display: inline-block"><GChart type="PieChart" :data="chartData" :options="chartOptions" /></span>
              <span style="display: inline-block"><GChart type="PieChart" :data="chartData" :options="chartOptions" /></span>
            </div>
          </div>
          <button @click="printImage($refs.printMe)">print</button>
        </div>
      </div>
    </div>
    <div v-if="imageIsLoading" id="snackbar">Načítání obrázku...</div>
  </section>
</template>

<script>
import { GChart } from "vue3-googl-chart";
import html2png from "@/functions/HtmlToImages/HtmlToImageFunctions";

export default {
name: "ChartContainer",
  data() {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ["Závažnost", "Počet"],
        ["Nízká", 1000],
        ["Střední", 250],
        ["Vysoká", 660],
      ],
      chartOptions: {
        backgroundColor: 'white',
        width: 360,
        height: 270,
        title: "Rozdělení deficitů dle závažnosti",
        colors: ['#99CC00', '#FF9900', '#FF3300'],
        chartArea: { width: '80%' }
      },
      imageIsLoading: false
    }
  },
  methods: {
    async printImage(selectedImage) {
      this.imageIsLoading = true
      await html2png.prepareImage(selectedImage)
      this.imageIsLoading = false
    },
  },
  components: {
    GChart
  }
}
</script>

<style scoped>
  .chart-container {
    background-color: white;
    border-radius: 5px;
  }
  .chart-container-title {
    padding-top: 10px;
    text-align: center;
  }
  .charts-center {
    display: flex;
    justify-content: center;
  }
  #snackbar {
    min-width: 250px; /* Set a default minimum width */
    margin-left: -125px; /* Divide value of min-width by 2 */
    background-color: #333; /* Black background color */
    color: #fff; /* White text color */
    text-align: center; /* Centered text */
    border-radius: 2px; /* Rounded borders */
    padding: 16px; /* Padding */
    position: fixed; /* Sit on top of the screen */
    z-index: 1; /* Add a z-index if needed */
    left: 8%; /* Center the snackbar */
    bottom: 30px; /* 30px from the bottom */
  }
</style>