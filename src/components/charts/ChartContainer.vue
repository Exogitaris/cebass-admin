<template>
  <div class="container">
    <div class="row">
      <div class="chart-container shadow p-3 mb-5 bg-body rounded">
        <h4 class="chart-container-title">Rychlý statistický přehled správce David Maletínský - Programátor CEBASS</h4>
        <hr>
        <div class="charts-center">
          <div>
            <span style="display: inline-block"><GChart type="PieChart" :data="chartData" :options="chartOptions" /></span>
            <span style="display: inline-block"><GChart type="PieChart" :data="chartData" :options="chartOptions" /></span>
            <span style="display: inline-block"><GChart type="PieChart" :data="chartData" :options="chartOptions" /></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GChart } from "vue3-googl-chart";
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
    };
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
</style>