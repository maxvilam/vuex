<template>
  <div id="app">
    <h1>32bits</h1>
    <h2>Juegos de PC y consolas</h2>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="/"><router-link to="/">Inicio</router-link></a>
            <a class="nav-link" href="#">
              <router-link to="/busqueda">Búsqueda</router-link>
            </a>
            <a class="nav-link" href="#">Ventas</a>
            <a class="nav-link" href="#">Total</a>
          </div>
        </div>
      </div>
    </nav>

    <transition name="vista">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  created() {
    this.getData();
  },
  methods: {
    ...mapActions(["getData"]),
  },
};
</script>

<style scoped>
.vista-enter-active,
.vista-leave-active {
  transition: opacity 0.1s;
}
.vista-enter,
.vista-leave-to {
  opacity: 0;
}
</style>
