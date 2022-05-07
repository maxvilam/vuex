<template>
  <div>
    <div class="container">
      <div class="row">
        <div>
          <p>
            Buscar<input
              type="number"
              class="form-control"
              v-model="filtergame"
            />
          </p>
        </div>
        <div class="col-12">
          <Tabla2 :gamers="filtraData" />
          <Tabla :gamers="tienda" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tabla from "@/components/Tabla.vue";
import Tabla2 from "@/components/Tabla2.vue";
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      buscar: "",
    };
  },
  name: "Inicio",
  components: {
    Tabla,
    Tabla2,
  },
  computed: {
    ...mapState(["tienda"]),
    ...mapGetters(["filtraData"]),
    ...mapState(["filtertext"]),
    filtergame: {
      get() {
        return this.filtertext
      },
      set(val) {
        this.SETFILTERTEXT(val);
      },
    },
  },
  methods: {
    ...mapMutations(["SETFILTERTEXT"]),
  },
};
</script>

<style></style>