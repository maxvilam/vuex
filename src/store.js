import Vue from 'vue';
import Vuex from 'vuex';
/* import axios from 'axios'; para archivo externo de datos
 */


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      tienda: [],
      filtertext:"000",
  },
  getters: {
    filtraData(state){
      return state.tienda.filter(filtro => filtro.codigo.includes(state.filtertext));
    }
  },
  mutations: {
    SETDATA(state, data ) {
        state.tienda = data;
    },
    SETFILTERTEXT(state, data){
      state.filtertext=data;
    },
  },
  actions: {
      getData({ commit }){

          const data=[
            {
              "codigo": "00001",
              "nombre": "sekiro",
              "stock": 100,
              "precio": 30000,
              "color": "red",
              "destacado": true
            },
            {
              "codigo": "00002",
              "nombre": "Fifa 21",
              "stock": 100,
              "precio": 25000,
              "color": "blue",
              "destacado": false
            },
            {
              "codigo": "00003",
              "nombre": "Gear of war 4",
              "stock": 100,
              "precio": 15000,
              "color": "green",
              "destacado": true
            },
            {
              "codigo": "00004",
              "nombre": "Mario Tenis aces",
              "stock": 100,
              "precio": 35000,
              "color": "yellow",
              "destacado": false
            },
            {
              "codigo": "00005",
              "nombre": "Bloodborne",
              "stock": 100,
              "precio": 10000,
              "color": "blue",
              "destacado": false
            },
            {
              "codigo": "00006",
              "nombre": "Forza Horizon 4",
              "stock": 100,
              "precio": 20000,
              "color": "red",
              "destacado": true
            }
          ]
          commit("SETDATA", data);
      }
  }
});
