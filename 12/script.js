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
        ['skier','⛷'],
    	['snowboarder','🏂'],
        ['apple','🍎'],
        ['hockey','🏒'],
        ['ice skate','⛸'],
        ['swimmer','🏊'],
        ['surfer','🏄‍'],
        ['watermelon','🍉'],
        ['lemon','🍋'],
        ['rowboat','🚣'],
        ['bicyclist','🚴‍']
    ];
    console.log(sports);

    winter_sports = sports.slice([0], [5]);
    console.log(winter_sports);

    summer_sports = sports.slice([5]);

    console.log(summer_sports);

    fruits = [];
    fruits_winter = winter_sports.splice([2], 1);
    fruits_summer = summer_sports.splice([2],2);
    console.log(fruits_winter.concat(fruits_summer));



    