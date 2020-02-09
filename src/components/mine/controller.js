/**
 * Gerekli View Nesneleri dahil ediliyor
 */
import MineItem from '@/components/mine-item/view';


/**
 * Mine Wrapper Controller
 * @use <Mines />
 * İçerisinde MineItem nesnelerini listeleyen ana view nesnemiz
 */

export default {
  components: {
    MineItem
  },
  data() {
    return {
      gridData: []
    };
  },
  methods: {
    getNewMatrixGrid() {
      let list = [];
      for (let i = 0; i < this.$store.state.grid; i++) {
        let value = Array.from({ length: this.$store.state.grid }, (a, b) => b = { status: false, isMine: false, mineCount: 0 });
        list.push(value);
      }
      return list;
    },
    findMineAndCalc(data, rowIndex, newRowIndex, colIndex, newColIndex) {
      let row = data[rowIndex + (newRowIndex)];
      let col = row && row[colIndex + (newColIndex)];
      row && col && (data[rowIndex][colIndex].mineCount += (row[colIndex + (newColIndex)].isMine ? 1 : 0));
    },
    findMines(data) {
      for (let i = 0; i < this.$store.state.grid; i++) {
        for (let n = 0; n < this.$store.state.grid; n++) {
          if (!data[i][n].isMine) {
            //Sol Üst Çarpraz
            this.findMineAndCalc(data, i, -1, n, -1);
            //Sol Üst
            this.findMineAndCalc(data, i, -1, n, 0);
            //Sağ Üst Çapraz
            this.findMineAndCalc(data, i, i - 1, 1);
            // Sol 
            this.findMineAndCalc(data, i, 0, n, -1);
            // Sağ 
            this.findMineAndCalc(data, i, 0, n, 1);
            // Sol Alt Çapraz
            this.findMineAndCalc(data, i, 1, n, -1);
            // Alt 
            this.findMineAndCalc(data, i, 1, n, 0);
            // Sağ Alt Çapraz
            this.findMineAndCalc(data, i, 1, n, 1);
          }
        }
      }
      return data;
    },
    getRandomMine(tempGridData) {
      let count = this.$store.state.grid;
      while (count > 0) {
        let row = Math.round(Math.random() * (this.$store.state.grid - 1));
        let col = Math.round(Math.random() * (this.$store.state.grid - 1));
        if (!tempGridData[row][col].isMine) {
          count--;
          tempGridData[row][col].isMine = true
        }
      }
      return tempGridData;
    },
    matrixSize() {
      return Math.pow(this.$store.state.grid, 2);
    },
    getData() {
      let _gridData = this.getNewMatrixGrid(this.$store.state.grid);
      _gridData = this.getRandomMine(_gridData);
      _gridData = this.findMines(_gridData);
      _gridData = [].concat.apply([], _gridData);
      console.log(this.$store.state.grid);
      this.$store.dispatch('changeGridData', _gridData);
    },
  },
  created() {
    this.$store.dispatch('setUpdateAction', this.getData);
    this.getData();
  }
}