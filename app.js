class GameOfLife {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.grid = this.createGrid();
  }

  createGrid() {
    const grid = new Array(this.row);
    for (let i = 0; i < this.rows; i++) {
      grid[i] = new Array(this.columns);
      for (let j = 0; j < this.columns; j++) {
        grid[i][j] = Math.random() < 0.5 ? "." : "*";
      }
    }
    return grid;
  }

  printGrid() {
    for (const row of this.grid) {
      console.log(row.join(""));
    }
  }
}
const tablero = new GameOfLife(4, 8);
tablero.printGrid();
