'use strict';

/* Подготовьте реализацию функции `inc`:

C сигнатурой `inc(n: number): number`,
пример вызова: `const a = 5; const b = inc(a); console.dir({ a, b });` */

const inc = (n) => ++n;
const a = 5;
const b = inc(a);
console.dir({ a, b });

module.exports = { inc };
