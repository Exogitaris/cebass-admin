<template>
  <div class="container">
    <div class="row">
      <loading-cube v-if="dataIsLoading"></loading-cube>
      <div class="shadow p-3 mb-5 bg-body rounded">
        <pagination></pagination>
        <result-item></result-item>
        <result-item></result-item>
        <result-item-modal></result-item-modal>
      </div>
    </div>
  </div>
</template>

<script>
import ResultItem from "@/components/search-results/ResultItem";
import LoadingCube from "@/components/animations/loading/LoadingCube";
import Pagination from "@/components/pagination/Pagination";
import ResultItemModal from "@/components/modals/ResultItemModal";
export default {
  name: "ResultContainer",
  data() {
    return {
      dataIsLoading: false
    }
  },
  components: {
    ResultItem,
    LoadingCube,
    Pagination,
    ResultItemModal
  }
}
</script>

<style scoped>

</style>