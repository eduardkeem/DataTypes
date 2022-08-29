'use strict';

const countTypesInArray = (arr) => {

  const counters = {};               // Создание объекта(хеш таблицы)

  for (const element of arr) {

    const type = typeof element;     // Объявление переменной для определения типа идентификатора

    const count = counters[type] || 0;
    counters[type] = count + 1;

  }
  return counters;
};

module.exports = { countTypesInArray };
