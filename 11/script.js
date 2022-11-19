// Дано:
// hero = ['Ivan'];
// native = ['York','Of'];
// destination = ['Poltava','In'];
// Используя циклы, if/else, switch/case и методы .push(), .pop(), .unshift(), .shift(), .concat(), .splice(), .reverse() .join():

// 1. Объединить массивы destination, native, hero в общий массив rainbow.
// 2. Сделать реверс элементов полученного массива rainbow.
// 3. Изменить/добавить элементы массива rainbow так, что бы в итоге получился массив вида 
//['Richard','Of','York','Gave','Battle','In','Vain'];
// 4. Вывести элементы полученного массива в html в виде, который представлен в прикрепленном рисунке rainbow.png.

hero = ['Ivan'];
native = ['York', 'Of'];
destination = ['Poltava', 'In'];

rainbow = hero.concat(native, destination);
//console.log(rainbow);

rainbow_reverse = rainbow.reverse();
//console.log(rainbow_reverse); //['In', 'Poltava', 'Of', 'York', 'Ivan']

rainbow_reverse.pop();
//console.log(rainbow_reverse);

rainbow_reverse.splice(0, 2) && rainbow_reverse.splice(3, 2, 'Gave', 'Battle');
//console.log(rainbow_reverse);

rainbow_reverse.unshift('Richard');
//onsole.log(rainbow_reverse);

rainbow_reverse.push('In', 'Vain');
//console.log(rainbow_reverse);


colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet '];
// rainbow_reverse= ['Richard', 'Of', 'York', 'Gave', 'Battle', 'In', 'Vain']

circleArr = [];

for (i = 0; i < colors.length; i++) {
    circleArr.push(`<div class="circle" style="background-color: ${colors[i]}"></div>`);
};


newArr = [
    [circleArr.join(" ")],
    [rainbow_reverse.join(" ")]
];
console.log(newArr);



document.write(`
<div class="wrapp">
${newArr}
</div>
`)
