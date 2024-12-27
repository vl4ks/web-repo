//Задание 1
function pickPropArray(array, property) {
    return array
        .filter(item => item.hasOwnProperty(property))
        .map(item => item[property]);
}

console.log("Задание 1");
const students = [
    { name: 'Павел', age: 20 },
    { name: 'Иван', age: 20 },
    { name: 'Эдем', age: 20 },
    { name: 'Денис', age: 20 },
    { name: 'Виктория', age: 20 },
    { age: 40 },
]

const result = pickPropArray(students, 'name')

console.log(result)

//проверка прошла успешно - это вывод:
//['Павел', 'Иван', 'Эдем', 'Денис', 'Виктория']

//Задание 2
function createCounter() {
    let count = 0;

    return function () {
        count += 1;
        console.log(count);
        return count;
    };
}

console.log("Задание 2");
const counter1 = createCounter()
counter1()
counter1()

const counter2 = createCounter()
counter2()
counter2()

//проверка прошла успешно - это вывод:
//1
//2
//1
//2

//Задание 3
function spinWords(sentence) {
    return sentence
        .split(' ')
        .map(word => word.length >= 5 ? word.split('').reverse().join('') : word)
        .join(' ');
}

console.log("Задание 3");
const result1 = spinWords("Привет от Legacy");
console.log(result1);

const result2 = spinWords("This is a test");
console.log(result2);

//проверка прошла успешно - это вывод:
//тевирП от ycageL
//This is a test

//Задание 4
function twoSum(nums, target) {
    const map = new Map();
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            result.push([map.get(complement), i]);
        }

        map.set(nums[i], i);
    }

    return result;
}


console.log("Задание 4");
const nums = [2, 7, 11, 15];
const target = 9;

const res = twoSum(nums, target);
console.log(res);

//проверка прошла успешно - это вывод:
//[0, 1]


//Задание 5
function longestCommonPrefix(strs) {
    if (strs.length < 2) return "";

    const findCommonPrefix = (str1, str2) => {
        let i = 0;
        while (
            i < str1.length &&
            i < str2.length &&
            str1[str1.length - 1 - i] === str2[str2.length - 1 - i]
        ) {
            i++;
        }
        return str1.slice(-i);
    };

    let commonPrefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        commonPrefix = findCommonPrefix(commonPrefix, strs[i]);
        if (commonPrefix.length < 2) return "";
    }

    return commonPrefix;
}

console.log("Задание 5");
const strs1 = ["цветок", "поток", "хлопок"];
const strs2 = ["собака", "гоночная машина", "машина"];

console.log(longestCommonPrefix(strs1)); // Вывод: "ок"
console.log(longestCommonPrefix(strs2)); // Вывод: ""


//проверка прошла успешно - это вывод:
//ок
//