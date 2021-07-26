<template>
  <div class="card mb-3">
    <div class="card-main-title">
      <div class="d-flex">
        <h3 class="me-auto ms-auto">D5 - P | km 30 - 31 | ID 19452</h3>
      </div>
    </div>
    <div class="row g-0">
      <div class="col-md-7">
        <img src="../../assets/images/testobrazek.png" onclick="window.open(this.src, '_blank');" class="img-fluid image-preview rounded-start" alt="...">
      </div>
      <div class="col-md-5">
        <div class="card-body">
          <div class="upravit-kartu">
            <button class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">Upravit <fai icon="cog" size="1x"></fai></button>
          </div>
          <div style="display: inline-block">
            <h5 class="card-title text-uppercase">Bezpečnostní deficit</h5>
            <p class="card-text">Reklamní zařízení</p>
          </div>
          <hr>
          <h5 class="card-title text-uppercase">Kategorie</h5>
          <p class="card-text">Reklamní zařízení (rušivý efekt na účastníky silničního provozu)</p>
          <p class="card-text"><b>Poznámka:</b></p>
          <hr>
          <h5 class="card-title text-uppercase">Závažnost rizika <span class="badge bg-success">Nízká</span></h5>
          <hr>
          <h5 class="card-title text-uppercase">Lokalizace</h5>
          <p class="card-text lokalizace-text"><b>GPS: </b>49.891091666667N 13.93405E</p>
          <p class="card-text lokalizace-text"><b>Staničení: </b>km 30 - 31</p>
          <p class="card-text lokalizace-text"><b>Lokalita: </b>Extravilán</p>
          <p class="card-text lokalizace-text"><b>Odpovědná správce: </b>SSÚD 9 Svojkovice</p>
          <p class="card-text lokalizace-text"><b>Nejvyšší dovolená rychlost: </b>	130 km/h</p>
        </div>
      </div>
      <div class="row g-0">
        <div class="col-md-10">
          <div class="card-body">
            <h6 class="card-title"><b>Návrh opatření: </b>Odstranění</h6>
            <h6 class="card-title"><b>Poznámka opatření: </b></h6>
            <h6 class="card-title"><b>Náročnost realizace: </b><span class="badge bg-warning dark-badge">Administrativní řešení</span></h6>
          </div>
        </div>
        <div class="col-md-2">
          <div class="card-body">
            <h2><span class="badge bg-warning dark-badge stav-reseni">V řešení</span></h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultItem"
}
</script>

<style>
  .image-preview {
    width: 725px;
    height: 475px;
    padding-top: 1rem;
    cursor: zoom-in;
  }
  .card-main-title {
    background-color: #f8f8f8;
    color: #1f1f1f;
    border-radius: 2px 2px 0 0;
  }
  .lokalizace-text {
    margin-bottom: 2px !important;
  }
  .dark-badge {
    color: black;
  }
  .stav-reseni {
    margin-top: 15px;
    float: right;
  }
  .badge {
    position: relative !important;
  }
  .upravit-kartu {
    display: inline-block;
    float: right;
  }
  @media (max-width: 500px) {
    .image-preview {
      height: 250px;
    }
  }
  @media (max-width: 380px) {
    .upravit-kartu {
      float: left;
      margin-bottom: 10px;
    }
  }
  @media (max-width: 767px) {
    .stav-reseni {
      margin-top: 0;
      float: none;
    }
  }
</style>