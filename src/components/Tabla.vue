<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Codigo</th>
          <th scope="col">Nombre</th>
          <th scope="col">Stock</th>
          <th scope="col">Precio</th>
          <th scope="col">Color</th>
          <th scope="col">Destacado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="gamer in gamers" :key="gamer.codigo">
          <td>{{ gamer.codigo }}</td>
          <td>{{ gamer.nombre }}</td>
          <td>{{ gamer.stock }}</td>
          <td>{{ gamer.precio }}</td>
          <td>{{ gamer.color }}</td>
          <td>{{ gamer.destacado }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Tabla",
  props: {
    gamers: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
