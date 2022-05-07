<template>
  <div>
    Acá va tu contenido
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["getData"]),
  },
  created() {
    this.getData();
  },
};
</script>
