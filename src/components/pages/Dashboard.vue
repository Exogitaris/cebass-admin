<template>
  <chart-container class="odsazeni"></chart-container>
  <dashboard-form></dashboard-form>
  <dashboard-buttons></dashboard-buttons>
  <result-container></result-container>
</template>

<script>
import ChartContainer from "@/components/charts/ChartContainer";
import DashboardForm from "@/components/forms/DashboardForm";
import DashboardButtons from "@/components/buttons/DashboardButtons";
import ResultContainer from "@/components/search-results/ResultContainer";
export default {
  name: "Dashboard",
  components: {
    ChartContainer,
    DashboardForm,
    DashboardButtons,
    ResultContainer
  }
}
</script>

<style scoped>
  .odsazeni {
    padding-top: 70px;
  }
</style>