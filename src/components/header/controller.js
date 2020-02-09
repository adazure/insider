export default {
  data() {
    return {
      grids: [5, 6, 7, 8]
    };
  },
  methods: {
    changeGrid(e) {
      this.$store.dispatch('changeGridSize', e.target.value);
    }
  }
}