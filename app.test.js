const GameOfLife = require('./app');

test('Las filas deben de ser un numero', () => {
  expect(() => new GameOfLife('42', 8)).toThrow('Las filas deben ser en número.');
});

test('Las filas deben ser positivas', () => {
  expect(() => new GameOfLife(-8, 8)).toThrow('Las filas deben ser positivos.');
});

test('No debe lanzar una excepcion si las filas nos validas', () => {
  expect(() => new GameOfLife(4, 8)).not.toThrow();
});

test('Las Columbas deben de ser un numero', () => {
  expect(() => new GameOfLife(4, '8')).toThrow('Las columnas deben ser números.');
});

test('Las Columnas deben ser positivas', () => {
  expect(() => new GameOfLife(4, -8)).toThrow('Las Columnas deben de ser positivos.');
});

test('No debe lanzar una excepcion si las columnas nos validas', () => {
  expect(() => new GameOfLife(4, -8)).toThrow('Las Columnas deben ser positivos.');
});
