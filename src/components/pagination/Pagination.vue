<template>
  <div class="d-flex justify-content-center">
    <nav aria-label="...">
      <ul class="pagination">
        <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Předchozí</a>
        </li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item" aria-current="page">
          <a class="page-link" href="#">2</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">Další</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
name: "Pagination"
}
</script>

<style scoped>

</style>