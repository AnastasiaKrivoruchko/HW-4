/* Створити скрипт який має визначити середнє арифметичне трьох чисел з насутпними умовами:

отримати від користувача через три prompt три числа
показати через alert середнє арифметичне цих чисел */

firstNumber = parseInt(prompt("Введіть перше число"));
secondNumber = parseInt(prompt("Введіть друге число"));
thirdNumber = parseInt(prompt("Введіть третє число"));

mean = (firstNumber + secondNumber + thirdNumber) / 3;

alert(`Середнє арифметичне ${Math.round(mean)}`);