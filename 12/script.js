// Дано:
// sports = [
// 	['skier','⛷'],
// 	['snowboarder','🏂'],
// 	['apple','🍎'],
// 	['hockey','🏒'],
// 	['ice skate','⛸'],
// 	['swimmer','🏊'],
// 	['surfer','🏄‍'],
// 	['watermelon','🍉'],
// 	['lemon','🍋'],
// 	['rowboat','🚣'],
// 	['bicyclist','🚴‍']
// ];

// Задача:
// 1. С массива sports с помощью метода .slice() скопировать в новый массив summer_sports массивы, 
//которые относятся к летним видам спорта.
// 2. С массива sports с помощью метода .slice() скопировать в новый массив winter_sports массивы, 
//которые относятся к зимним видам спорта.
// 3. С полученных массивов summer_sports и winter_sports вырезать в новый массив fruits те массивы, 
//которые относятся к фруктам.
// 4. Вывести все элементы полученных массивов summer_sports, winter_sports, fruits в консоль в виде, 
//который изображен на рисунке console.png.

sports = [
    ['skier', '⛷'],
    ['snowboarder', '🏂'],
    ['apple', '🍎'],
    ['hockey', '🏒'],
    ['ice skate', '⛸'],
    ['swimmer', '🏊'],
    ['surfer', '🏄‍'],
    ['watermelon', '🍉'],
    ['lemon', '🍋'],
    ['rowboat', '🚣'],
    ['bicyclist', '🚴‍']
];

winter_sports = sports.slice([0], [5]);
summer_sports = sports.slice([5]);
//console.log(winter_sports);
//console.log(summer_sports);

fruits = [];
fruits_winter = winter_sports.splice([2], 1);
fruits_summer = summer_sports.splice([2], 2);
fruits = fruits_winter.concat(fruits_summer);

//console.log(fruits);
//console.log(fruits_winter.concat(fruits_summer));

console.log(`*** Winter sports ***`);
for (i = 0; i < winter_sports.length; i++) {
    innerWinter_sports = winter_sports.length
    for (j = 0; j < winter_sports[i].length; j++) {
        console.log(winter_sports[i].join(": "));
    }
}

console.log(`*** Summer sports ***`);
for (i = 0; i < summer_sports.length; i++) {
    innerSummer_sports = summer_sports[i].length
    for (j = 0; j < summer_sports.length; j++) {
        console.log(summer_sports[i].join(": "));
    }
}

console.log(`*** Fruits ***`);
for (i = 0; i < fruits.length; i++) {
    innerFruits = fruits[i].length
    for (j = 0; j < fruits.length; j++) {
        console.log(fruits[i].join(": "));
    }
}
