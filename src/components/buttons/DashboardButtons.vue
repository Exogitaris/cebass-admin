<template>
  <div class="container">
    <div class="row">
      <div class="shadow p-3 mb-2 bg-body rounded">
        <div class="dash-btn-center">
          <div>
            <button type="button" class="btn btn-primary dash-btn">Výpis</button>
            <button type="button" class="btn btn-primary dash-btn">Mapa</button>
            <button type="button" class="btn btn-primary dash-btn">Statistické údaje</button>
            <button type="button" class="btn btn-primary dash-btn">Export excel</button>
            <button type="button" class="btn btn-primary dash-btn">PDF 2x1</button>
            <button type="button" class="btn btn-primary dash-btn">PDF detail</button>
            <button type="button" class="btn btn-primary dash-btn">Zresetovat filtr</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardButtons"
}
</script>

<style scoped>
 .dash-btn {
   display: block;
   float: left;
   margin-left: 10px;
   margin-right: 10px;
 }
 .dash-btn-center {
   display: flex;
   justify-content: center;
 }
 @media (max-width: 991px) {
   .dash-btn {
     margin-bottom: 10px;
   }
 }
</style>