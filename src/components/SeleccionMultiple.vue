<template>
  <div>
    <select v-model="optSeleccionado" multiple>
      <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
    </select>
    <div>
      <h3>Elementos seleccionados:</h3>
      <ul>
        <li v-for="opt in optSeleccionado" :key="opt">{{ opt }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name:"SeleccionMultiple",
    data() {
        return {
            optSeleccionado: [],
            options: [
                { label: 'Opción 1', value: 'opcion1' },
                { label: 'Opción 2', value: 'opcion2' },
                { label: 'Opción 3', value: 'opcion3' },
                { label: 'Opción 4', value: 'opcion4' }
            ],
        };
    }
};
</script>

<style>

</style>
