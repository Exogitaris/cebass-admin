<template>
  <div class="modal fade" tabindex="-1" id="exampleModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Stav řešení</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Vloženo: 2017-12-11 12:36:57</p>
          <p>Vložil: Zbyněk Alinče (Odd. správy dálnic ČECHY)</p>
          <p>Verze: 1</p>
          <p>Štítek: Nepřiřazen</p>
          <hr>
          <select class="form-select" aria-label="Default select example">
            <option selected>Přiřaďte nový štítek</option>
            <option value="1">[ZKR]</option>
          </select>
          <select class="form-select" aria-label="Default select example">
            <option value="1" selected>V řešení</option>
            <option value="1">Odstraněno</option>
            <option value="1">Riziko neakceptováno</option>
          </select>
          <br>
          <div class="mb-3">
            <label for="formFile" class="form-label">Vyberte obrázek</label>
            <input class="form-control" type="file" id="formFile">
          </div>
          <div class="mb-3">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Podán podnět k odstranění na MD."></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Zavřít</button>
          <button type="button" class="btn btn-primary">Uložit</button>
          <button type="button" class="btn btn-primary">Detail</button>
          <button type="button" class="btn btn-primary">Tisk</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultItemModal"
}
</script>

<style scoped>

</style>