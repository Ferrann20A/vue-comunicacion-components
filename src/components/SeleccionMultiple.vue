<template>
  <div>
    <select v-model="selectedItems" multiple>
      <option v-for="item in options" :key="item.value" :value="item.value">{{ item.label }}</option>
    </select>
    <div>
      <h3>Elementos seleccionados:</h3>
      <ul>
        <li v-for="selectedItem in selectedItems" :key="selectedItem">{{ selectedItem }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name:"SeleccionMultiple",
    data() {
        return {
            selectedItems: [],
            options: [
                { label: 'Opción 1', value: 'opcion1' },
                { label: 'Opción 2', value: 'opcion2' },
                { label: 'Opción 3', value: 'opcion3' },
                { label: 'Opción 4', value: 'opcion4' },
                // Agrega más opciones según tus necesidades
            ],
        };
    }
};
</script>

<style>

</style>
