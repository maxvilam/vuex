<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Codigo</th>
          <th scope="col">Nombre</th>
          <th scope="col">Stock</th>
          <th scope="col">Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="display-6"
          v-for="gamer in gamers"
          :key="gamer.codigo"
          v-bind:class="[
            gamer.color === 'red'
              ? colorred
              : gamer.color === 'green'
              ? colorgreen
              : gamer.color === 'blue'
              ? colorblue
              : coloryellow,
          ]"
        >
          <td>{{ gamer.codigo }}</td>
          <td>{{ gamer.nombre }}</td>
          <td>{{ gamer.stock }}</td>
          <td>{{ gamer.precio }}</td>
        </tr>
      </tbody>
      <h3>Cantidad de juegos: {{ cuentas }}</h3>
      <h3>Stock Total: {{ tstock }}</h3>
    </table>
  </div>
</template>

<script>
export default {
  name: "Tabla2",
  data() {
    return {
      colorred: "colorred",
      colorgreen: "colorgreen",
      colorblue: "colorblue",
      coloryellow: "coloryellow",
    };
  },
  props: {
    gamers: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    countstock() {
      let total = 0;
      this.gamers.forEach((gamer) => {
        total += gamer.stock;
      });
      return total;
    },
  },
  computed: {
    name() {
      return this.data;
    },
    cuentas() {
      return this.gamers.length;
    },
    tstock() {
      return this.countstock();
    },
  },
};
</script>
<style scoped>
.colorred {
  background-color: red;
}
.colorgreen {
  background-color: green;
}
.colorblue {
  background-color: blue;
}
.coloryellow {
  background-color: yellow;
}
</style>
