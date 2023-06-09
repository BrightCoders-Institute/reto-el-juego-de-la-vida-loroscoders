/**
  * Clase del juego de la vida
  * @param {number} this.rows - el número de filas en el tablero.
  * @param {number} this.columns - el número de columnas en el tablero.
  * @param {Array<Array<string>>} this.grid - tablero del juego.
  * @param {number} this.generation - el numero de generacion.
 */
class GameOfLife {
  /**
   * crea una instancia del juego de la vida.
   *
   * @param {function} this.validateColumns - Funcion para validar las columnas.
   * @param {function} this.validateRows - Funcion para validar las filas.
   * @param {number} rows - el número de filas en el tablero.
   * @param {number} columns - el número de columnas en el tablero.
   */
  constructor(rows, columns) {
    this.validateRows(rows);
    this.validateColumns(columns);

    this.rows = rows;
    this.columns = columns;
    this.grid = this.createGrid();
    this.generation = 1;
  }


  /**
   * Funcion para crear el tablero
   *
   * @param {Array<Array<string>>} this.grid - tablero del juego.
   * @param {number} rows - el número de filas en el tablero.
   * @param {number} columns - el número de columnas en el tablero.
   * @return {Array<Array<string>>} - la copia del tablero.
   */
  createGrid() {
    const grid = new Array(this.rows);
    for (let i = 0; i < this.rows; i++) {
      grid[i] = new Array(this.columns);
      for (let j = 0; j < this.columns; j++) {
        grid[i][j] = Math.random() < 0.5 ? '.' : '*';
      }
    }
    return grid;
  }

  /**
   * Funcion para validar las filas.
   *
   * @param {number} rows - las filas del tablero.
   * @throws {Error} - error si no es una entrada valida.
   */
  validateRows(rows) {
    if (typeof rows !== 'number') {
      throw new Error('Las filas deben ser en número.');
    }
    if (rows <= 0) {
      throw new Error('Las filas deben ser positivos.');
    }
  }

  /**
   * Funcion para validar las columnas.
   *
   * @param {number} columns - las Columnas del tablero.
   * @throws {Error} - error si no es una entrada valida.
   */
  validateColumns(columns) {
    if (typeof columns !== 'number') {
      throw new Error('Las columnas deben de ser en número.');
    }
    if (columns <= 0 ) {
      throw new Error('Las Columnas deben de ser positivos.');
    }
  }

  /**
   * Funcion para generar una copia del tablero.
   * @return {Array<Array<string>>} la copia del tablero.
   */
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

  /**
   * Funcion recorrer el tablero del juego de la vida.
   * @param {Array<Array<string>>} copia - copia del tablero del juego.
   */
  nextGeneration() {
    const copy = this.createCopy();
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.cellsAround(i, j, copy);
      }
    }
    this.generation++;
  }

  /**
   * Verifica las celdas vecinas de una posición dada.
   * @param {number} rows - La fila de la posición.
   * @param {number} columns - La columna de la posición.
   * @param {Array<Array<string>>} copy - La fila de la posición.
   */
  cellsAround(rows, columns, copy) {
    let cellsAlive = 0;
    for (let i = rows - 1; i <= rows + 1; i++) {
      for (let j = columns - 1; j <= columns + 1; j++) {
        if (i >= 0 && i < this.rows && j >= 0 &&
          j < this.columns && (i !== rows || j !== columns)) {
          if (copy[i][j] === '*') {
            cellsAlive++;
          }
        }
      }
    }

    if (this.grid[rows][columns] === '*') {
      if (cellsAlive <= 1) {
        this.grid[rows][columns]  = '.';
      }
      if (cellsAlive > 3) {
        this.grid[rows][columns]  = '.';
        this.grid[rows][columns] = '.';
      }
      if (cellsAlive > 3) {
        this.grid[rows][columns] = '.';
      }
    } else {
      if (cellsAlive === 3) {
        this.grid[rows][columns] = '*';
      }
    }
  }

  /**
   * Funcion para imprimir el tablero del juego de la vida.
   */
  printGrid() {
    console.log('Generation ', this.generation);
    for (const row of this.grid) {
      console.log(row.join(''));
    }
  }
}

module.exports = GameOfLife;

const tablero = new GameOfLife(4, 8);
tablero.printGrid();
tablero.nextGeneration();
tablero.printGrid();
