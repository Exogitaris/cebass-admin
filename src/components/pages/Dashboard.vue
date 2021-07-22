<template>
  <chart-container class="odsazeni"></chart-container>
  <dashboard-form></dashboard-form>
  <dashboard-buttons></dashboard-buttons>
</template>

<script>
import ChartContainer from "@/components/charts/ChartContainer";
import DashboardForm from "@/components/forms/DashboardForm";
import DashboardButtons from "@/components/buttons/DashboardButtons";
export default {
  name: "Dashboard",
  components: {
    ChartContainer,
    DashboardForm,
    DashboardButtons
  }
}
</script>

<style scoped>
  .odsazeni {
    padding-top: 70px;
  }
</style>