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
rainbow_reverse = rainbow.reverse();
rainbow_reverse.pop();
rainbow_reverse.splice(0, 2) && rainbow_reverse.splice(3, 2, 'Gave', 'Battle');
rainbow_reverse.unshift('Richard');
rainbow_reverse.push('In', 'Vain');

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet '];

circleArr = [];
for (i = 0; i < colors.length; i++) {
    circleArr.push(`<div class="circle" style="background-color:${colors[i]}"></div>`);
};

rainbowArr = [];
for (j = 0; j < rainbow_reverse.length; j++) {
    rainbowArr.push(`<div class="rainbow">${rainbow_reverse[j]}</div>`);
};

document.write(`
    <div class="wrapp">
        <div class="circle_container">
            ${circleArr.join(" ")}
        </div>
        <div class="rainbow_container"> 
            ${rainbowArr.join(" ")}
        </div>
    </div>
`)

