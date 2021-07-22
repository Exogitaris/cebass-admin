<script>
import { Pie } from 'vue3-chart-v2'
export default {
name: "SingleChart",
  extends: Pie,
  mounted() {
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Test',
          backgroundColor: '#f87979',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
          options: {
            pieceLabel: {
              mode: 'percentage'
            },
          }
        }
      ]
    })
  }
}
</script>