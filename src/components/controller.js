import Mines from '@/components/mine/view';
import Header from '@/components/header/view';

export default {
  components: {
    Mines,
    Header
  },
  data() {
    return {
      gridMatrixSize: 5,
    }
  },
  methods: {
    changeGridMatrix(e){
      this.gridMatrixSize = e;
    }
  }
}