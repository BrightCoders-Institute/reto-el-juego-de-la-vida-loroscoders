class GameOfLife {
  constructor(rows, columns) {
    this.valideInputs(rows,columns);
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
  validateRows(rows){
		if(typeof rows !== 'number'|| rows <=0 || isNaN(rows)){
            throw new Error("Las Filas deben de ser un numero valido y mayor que 0");
        }
	}

	validateColumns(columns){
		if(typeof columns !== 'number' || columns <=0 || isNaN(columns)){
      throw new Error("Las Columnas deben de ser un numero valido y mayor que 0");
    }
	}
//pendiente agregar funcion de verificacion de estado de las celulas. y conteo de vecinos.
  printGrid() {
    for (const row of this.grid) {
      console.log(row.join(""));
    }
  }
}
const tablero = new GameOfLife(4, 8);
tablero.printGrid();
