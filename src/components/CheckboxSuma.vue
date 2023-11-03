<template>
  <div>
    <button @click="generarCheckboxes">Generar Checkboxs</button>
    <div>
      <h3 style="color:blue">La suma seleccionada es {{ sumaSeleccionados }}</h3>
    </div>
    <div v-for="(checkbox, index) in checkboxes" :key="index">
      <input type="checkbox" v-model="checkboxes[index].seleccionado" @change="actualizarSuma(index)">
      <label>{{ checkboxes[index].numero }}</label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkboxes: [],
      sumaSeleccionados: 0,
    };
  },
  methods: {
    generarCheckboxes() {
        this.checkboxes = [];
        for (let i = 1; i <= 8; i++) {
            this.checkboxes.push({
                numero: Math.floor(Math.random() * 100) + 1,
                seleccionado: false
            })
        }
      this.actualizarSumaTotal();
    },
    actualizarSuma(index) {
        if(this.checkboxes[index].seleccionado === true){
            this.sumaSeleccionados += this.checkboxes[index].numero;
        }else{
            this.sumaSeleccionados -= this.checkboxes[index].numero;
        }
    },
    actualizarSumaTotal() {
      this.sumaSeleccionados = this.checkboxes.reduce((total, checkbox) => {
        if (checkbox.seleccionado) {
          return total + checkbox.numero;
        }
        return total;
      }, 0);
    },
  },
  mounted(){
    this.generarCheckboxes();
  }
};
</script>
