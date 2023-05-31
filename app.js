class GameOfLife {
  constructor(rows, columns) {
    this.validateRows(rows);
    this.validateColumns(columns);

    this.rows = rows;
    this.columns = columns;
    this.grid = this.createGrid();
    this.generation = 1;
  }

  createGrid() {
    const grid = new Array(this.rows);
    for (let i = 0; i < this.rows; i++) {
      grid[i] = new Array(this.columns);
      for (let j = 0; j < this.columns; j++) {
        grid[i][j] = Math.random() < 0.5 ? "." : "*";
      }
    }
    return grid;
  }

  validateRows(rows) {
    if (typeof rows !== 'number' || rows <= 0 || isNaN(rows)) {
      throw new Error("Las Filas deben de ser un numero valido y mayor que 0");
    }
  }

  validateColumns(columns) {
    if (typeof columns !== 'number' || columns <= 0 || isNaN(columns)) {
      throw new Error("Las Columnas deben de ser un numero valido y mayor que 0");
    }
  }

  createCopy() {
    const copy = new Array(this.rows);
    for (let i = 0; i < this.rows; i++) {
      copy[i] = new Array(this.columns);
      for (let j = 0; j < this.columns; j++) {
        copy[i][j] = this.grid[i][j];
      }
    }
    return copy;
  }

  nextGeneration() {
    const copia = this.createCopy();
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.cellsAround(i, j, copia);
      }
    }
    this.generation++;
  }


  cellsAround(fila, columna, copia) {
    let cellsAlive = 0;
    for (let i = fila - 1; i <= fila + 1; i++) {
      for (let j = columna - 1; j <= columna + 1; j++) {
        // Verificar que la posición esté dentro de los límites de la matriz y no sea la posición original
        if (i >= 0 && i < this.rows && j >= 0 && j < this.columns && (i !== fila || j !== columna)) {
          if (copia[i][j] === "*") {
            cellsAlive++;
          }
        }
      }
    }

    if (this.grid[fila][columna] === "*") {
      if (cellsAlive <= 1) {
        this.grid[fila][columna] = "."
      }
      if (cellsAlive > 3) {
        this.grid[fila][columna] = "."
      }
    } else {
      if (cellsAlive == 3) {
        this.grid[fila][columna] = "*"
      }
    }
  }

  printGrid() {
    console.log("Generation ", this.generation);
    for (const row of this.grid) {
      console.log(row.join(""));
    }
  }
}
const tablero = new GameOfLife(4, 8);
tablero.nextGeneration();
