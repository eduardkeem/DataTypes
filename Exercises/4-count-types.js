'use strict';

/* Подсчет элементов различных типов в массиве.

- Создайте исходный массив, содержащий значения различных типов, в качестве
элементов, например: `[true, 'hello', 5, 12, -200, false, false, 'word']`
но желательно более длинный и разнообразный.
- Создайте объект-коллекцию (хеш) с именами типов в виде ключей и `0` в качестве
значения, например: `{ number: 0, string: 0, boolean: 0 }`
- Пройдитесь по массиву циклом `for..of` и для каждого элемента массива,
увеличивайте соответствующее значение в объекте-коллекции.
- Измените пример: удалите все ключи из начальной коллекции и добавляйте их
динамически в цикле. */

// const array = [true, 'hello', 5, 12, -200, false, false, 'word'];

// const count = { number: 0, string: 0, boolean: 0 };

// const countTypesInArray = () => {

//   for (const element of array) {
//     if (typeof element === 'string') {
//       count.string++;
//     }
//     if (typeof element === 'number') {
//       count.number++;
//     }
//     if (typeof element === 'boolean') {
//       count.boolean++;
//     }
//   }
//   return count;
// };

// console.log(countTypesInArray(array))

{

  const array = [true, 'hello', 5, 12, -200, false, false, 'word'];

  const count = {};

  const countTypesInArray = () => {

    count.string = 0;
    count.number = 0;
    count.boolean = 0;

    for (const element of array) {
      if (typeof element === 'string') {
        count.string++;
      }
      if (typeof element === 'number') {
        count.number++;
      }
      if (typeof element === 'boolean') {
        count.boolean++;
      }
    }
    return count;
  };

  console.log(countTypesInArray(array))

}


// module.exports = { countTypesInArray };
