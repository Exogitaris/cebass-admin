<template>
  <div class="container">
    <div class="row">
      <div class="form-container shadow p-3 mb-2 bg-body rounded">
        <div class="filter-section">
          <label><b>Pozemní komunikace</b></label>
          <multiselect-input v-model="komunikaceOption.komunikace" @select="pridatKomunikaci" @remove="smazatKomunikaci" :options="komunikaceOption.roletaKomunikace" :placeholder="'Vyberte komunikaci'" :multiple="true"></multiselect-input>
          <br>
          <label><b>Správce</b></label>
          <multiselect-input v-model="value" :options="options" :placeholder="'Vyberte správce'" :multiple="true"></multiselect-input>
          <br>
          <label><b>Charakter záznamu</b></label>
          <multiselect-input v-model="value" :options="options" :placeholder="'Vyberte charakter záznamu'" :multiple="true"></multiselect-input>
          <br>
          <label><b>Bezpečnostní deficit</b></label>
          <multiselect-input v-model="value" :options="options" :placeholder="'Vyberte bezpečnostní deficit'" :multiple="true"></multiselect-input>
          <br>
          <label><b>Kategorie</b></label>
          <multiselect-input v-model="value" :options="options" :placeholder="'Vyberte kategorii'" :multiple="true"></multiselect-input>
          <br>
        </div>
        <div class="filter-section">
          <label><b>Závažnost rizika</b></label>
          <multiselect-input v-model="value" :options="options" :placeholder="'Vyberte závažnost rizika'" :multiple="true"></multiselect-input>
          <br>
          <label><b>Náročnost realizace</b></label>
          <multiselect-input v-model="value" :options="options" :placeholder="'Vyberte stav'" :multiple="true"></multiselect-input>
          <br>
          <label><b>Stav řečení</b></label>
          <multiselect-input v-model="value" :options="options" :placeholder="'Vyberte stav'" :multiple="true"></multiselect-input>
          <br>
          <label><b>Naléhavost odstranění deficitů</b></label>
          <multiselect-input v-model="value" :options="options" :placeholder="'Vyberte naléhavost'" :multiple="true"></multiselect-input>
          <br>
          <label for="priorityFilter"><b>Vyhledávání dle ID <span class="badge bg-danger">prioritní filtr</span></b></label>
          <br>
          <input id="priorityFilter" class="form-control" type="number" placeholder="např. 11232 nebo 11232,11234" v-model="value">
          <br>
        </div>
        <div class="filter-section">
          <label><b>Závady dopravního značení a zařízení</b></label>
          <multiselect-input v-model="value" :options="options" :placeholder="'Vyberte filtr'" :multiple="true"></multiselect-input>
          <br>
          <label><b>Vyhledávání dle štítků</b></label>
          <multiselect-input v-model="value" :options="options" :placeholder="'Žádné definované štítky'" :multiple="true"></multiselect-input>
          <br>
          <label><b>Směr staničení</b></label>
          <multiselect-input v-model="value" :options="options" :placeholder="'Vyberte směr staničení'" :multiple="false"></multiselect-input>
          <br>
          <label><b>Staničení</b></label>
          <br>
          <div class="input-group">
            <span class="input-group-text">Od: </span>
            <input type="text" class="form-control souradnice">
            <span class="input-group-text">Do: </span>
            <input type="text" class="form-control souradnice">
          </div>
          <br>
          <label><b>Fixní omezení</b></label>
          <multiselect-input v-model="value" :options="options" :placeholder="'Vyberte fixní omezení'" :multiple="false"></multiselect-input>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MultiselectInput from '@/components/forms/MultiselectInput'
import komunikace from '/src/rolety/komunikace.json'
import DashboardFormFunctions from "@/functions/DashboardFormFunctions";

export default {
name: "DashboardForm",
  data () {
    return {
      value: [],
      komunikaceOption: {
        komunikace: [],
        vybranaKomunikace: [],
        roletaKomunikace: komunikace,
      },
      options: [
        { name: 'Vue.js', language: 'JavaScript' },
      ],
    }
  },
  methods: {
    pridatKomunikaci(komunikace) {
      DashboardFormFunctions.vybratData(komunikace, 'GET_DATA_BY_KOMUNIKACE', this.komunikaceOption.vybranaKomunikace)
    },
    smazatKomunikaci(komunikace) {
      DashboardFormFunctions.smazatData(komunikace, this.komunikaceOption.vybranaKomunikace)
    },
  },
  components: {
    MultiselectInput
  }
}
</script>

<style>
 .form-container {
   background-color: white;
   border-radius: 5px;
 }
 .filter-section {
   float: left;
   width: 30%;
   margin: 1.5%;
 }
 @media (max-width: 768px) {
   .filter-section {
     float: none;
     width: 100%;
   }
 }
 .souradnice {
   width: 20%;
 }
 .input-group-text {
   background-color: white;
 }
 .badge {
   position: absolute;
   margin-left: 3px;
 }
</style>