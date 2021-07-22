<template>
  <multiselect :multiple="multiple" :close-on-select="true" :clear-on-select="true" :preserve-search="true" :openDirection="'bottom'" :placeholder="placeholder" :showLabels="false" label="name" track-by="name">
    <template v-slot:noResult>Nebyly nalezeny žádné odpovídající položky</template>
  </multiselect>
</template>
<script>
 export default {
   props: ['placeholder', 'multiple']
 }
</script>
<style>
.multiselect__tag {
  background: #4e4e4e !important;
}
.multiselect__tag-icon::after {
  color: white !important;
}
.multiselect__option--highlight {
  background: #4e4e4e !important;
}
</style>