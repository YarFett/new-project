// Для решения задачи проверки строки на палиндром:
// Игнорирование пробелов, знаков препинания и регистра символов и сравнение строки с её обратной версией
function isPalindrome(myString) {
    // Проверяем, что входной аргумент является строкой
    if (typeof myString !== 'string') {
      throw new Error('Входной аргумент должен быть строкой');
    }
    // Приводим к нижнему регистру
    myString = myString.toLowerCase();
    // Удаляем все небуквенные символы с помощью регулярки
    myString = myString.replace(/[^a-zа-яё]/g, '');
    // Проверяем, что не пустая после удаления лишних символов
    if (myString.length === 0) {
      throw new Error('Строка не содержит буквенных символов');
    }
    // Сравниваем с её обратной версией и возвращаем
    return myString === myString.split('').reverse().join('');
  }

  const testCases = [
    "А роза упала на лапу Азора",
    "Привет",
    "",
    123,
    "Madam, I'm Adam",
    "12321",
    "   ", 
  ];
  
  testCases.forEach((testCase) => {
    try {
      console.log(`Результат для "${testCase}":`, isPalindrome(testCase));
    } catch (error) {
      console.error(`Ошибка для "${testCase}":`, error.message);
    }
  });

function fizzBuzz() {
// Проходим по числам от 1 до 100
    for (let numeric = 1; numeric <= 100; numeric++) {
        // Проверяем, кратно ли число и 3, и 5
        if (numeric % 3 === 0 && numeric % 5 === 0) {
            console.log("FizzBuzz");
        }
        // Проверяем, кратно ли число только 3
        else if (numeric % 3 === 0) {
            console.log("Fizz");
        }
        // Проверяем, кратно ли число только 5
        else if (numeric % 5 === 0) {
            console.log("Buzz");
        }
        // Если число не кратно ни 3, ни 5, выводим само число
        else {
            console.log(numeric);
        }
    }
}

// Вызов функции
fizzBuzz();

// Первый вариант решения
    function chunkArray1(array, size) {
    // Проверка, что первый аргумент является массивом
        if (!Array.isArray(array)) {
            throw new Error('Первый аргумент должен быть массивом.');
        }
        // Проверка, что size является положительным числом
        if (typeof size !== 'number' || size <= 0 || !Number.isInteger(size)) {
            throw new Error('Размер части (size) должен быть положительным целым числом.');
        }
        // Создаём пустой массив для результата
        const result = [];
        // Проходим по массиву с шагом, равным size
        for (let i = 0; i < array.length; i += size) {
        // Используем метод slice для создания подмассива
            const chunk = array.slice(i, i + size);
        // Добавляем подмассив в результат
            result.push(chunk);
        }
        return result;
    }
  
  // Примеры использования:
  try {
    console.log(chunkArray1([1, 2, 3, 4, 5, 6, 7, 8], 2)); // [[1, 2], [3, 4], [5, 6], [7, 8]]
    console.log(chunkArray1([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [[1, 2, 3], [4, 5, 6], [7, 8]]
    console.log(chunkArray1([1, 2, 3, 4, 5], 1)); // [[1], [2], [3], [4], [5]]
    console.log(chunkArray1([], 2)); // [] 
    console.log(chunkArray1([1, 2, 3], 5)); // [[1, 2, 3]] (размер больше длины массива)
    console.log(chunkArray1("не массив", 2)); // Ошибка: Первый аргумент должен быть массивом.
    console.log(chunkArray1([1, 2, 3], -1)); // Ошибка: Размер части (size) должен быть положительным целым числом.
  } catch (error) {
    console.error(error.message);
  }

// Второе решение с reduce
    function chunkArray2(array, size) {
        if (!Array.isArray(array)) {
            throw new Error('Первый аргумент должен быть массивом.');
        }
        if (typeof size !== 'number' || size <= 0 || !Number.isInteger(size)) {
            throw new Error('Размер части (size) должен быть положительным целым числом.');
        }
        return array.reduce((result, item, index) => {
            const chunkIndex = Math.floor(index / size);
            if (!result[chunkIndex]) {
                result[chunkIndex] = []; // Создаём новый подмассив, если его ещё нет
            }
                result[chunkIndex].push(item); // Добавляем элемент в текущий подмассив
                return result;
            }, []);
    }

    try {
        console.log(chunkArray2([1, 2, 3, 4, 5, 6, 7, 8], 2)); // [[1, 2], [3, 4], [5, 6], [7, 8]]
        console.log(chunkArray2([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [[1, 2, 3], [4, 5, 6], [7, 8]]
        console.log(chunkArray2([1, 2, 3, 4, 5], 1)); // [[1], [2], [3], [4], [5]]
        console.log(chunkArray2([], 2)); // [] 
        console.log(chunkArray2([1, 2, 3], 5)); // [[1, 2, 3]] (размер больше длины массива)
        console.log(chunkArray2("не массив", 2)); // Ошибка: Первый аргумент должен быть массивом.
        console.log(chunkArray2([1, 2, 3], -1)); // Ошибка: Размер части (size) должен быть положительным целым числом.
    } catch (error) {
        console.error(error.message);
    }