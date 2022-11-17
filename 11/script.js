// image = ["cat", "dog", "mouse"];

// animal = prompt("Enter some animal?");

// switch (animal) {
//     case "cat":
//         document.write(`<img src="images/cat.jpg" width="100">`);
//     case "dog":
//         document.write(`<img src="images/dog.jpg" width="100">`);
// }

// for(i = 0; i < image.length; i++) {
//     document.write(`<img src="images/${animal}.jpg" width="100">`)
// }



// Example 1
// colors = ['red','yellow','green', 'blue', 'pink'];

// for(i = 0; i < colors.length; i++) {
//     document.write(`
//         <div class="wrapp">
//             <div class="circle" style="background-color: ${colors[i]}"></div>
//         </div>
//     `)
// };

'❓'


// Example 2
// animalsTypes = ['dog', 'cat', 'mouse', 'fox', 'bear','tiger', 'dolphin', 'whale'];
// animalsIcons = ['🐶','🐱','🐭', '🦊','🐻','🐯','🐬','🐳'];

// biggestArr = animalsTypes.length > animalsIcons.length ? animalsTypes : animalsIcons;

// if(animalsTypes.length > animalsIcons.length) {
//     for(i = 0; i < animalsTypes.length; i++) {
//         if (animalsIcons[i] === undefined) {
//             console.log(`${animalsTypes[i]} - ❓`);
    
//         } else if (animalsTypes[i] === undefined) {
//             console.log(`❓ - ${animalsIcons[i]}`);
//         } else {
//             console.log(`${animalsTypes[i]} - ${animalsIcons[i]}`);
//         }
//     }
// } else {
//     for(i = 0; i < animalsIcons.length; i++) {
//         if (animalsIcons[i] === undefined) {
//             console.log(`${animalsTypes[i]} - ❓`);
    
//         } else if (animalsTypes[i] === undefined) {
//             console.log(`❓ - ${animalsIcons[i]}`);
//         } else {
//             console.log(`${animalsTypes[i]} - ${animalsIcons[i]}`);
//         }
//     } 
// }

// for(i = 0; i < biggestArr.length; i++) {
//     if (animalsIcons[i] === undefined) {
//         console.log(`${animalsTypes[i]} - ❓`);

//     } else if (animalsTypes[i] === undefined) {
//         console.log(`❓ - ${animalsIcons[i]}`);
//     } else {
//         console.log(`${animalsTypes[i]} - ${animalsIcons[i]}`);
//     }
// }

// firstName = "Sasha";

// anotherFirstName = firstName;

// anotherFirstName = "Masha";
// console.log(firstName);


// colors = ['red', 'blue', 'white', 'yellow'];

// anotherColors = colors;

// anotherColors[1] = 'blueviolet';

// console.log(colors);
// console.log(anotherColors);


// colors = ['red', 'blue', 'white', 'yellow'];

// rightRainbow = colors.slice();

// rightRainbow.push('green', 'violet', 'orange');

// document.write(`
//     <p>You write ${colors}</p>
//     <p>But need ${rightRainbow}</p>
// `)


// Example 3
// indexOf

// debugger;
// arr_1 = [10,4,2,9,7];
// arr_2 = [8,2,1,6,4,10,6];
// arr_3 = []; // 9, 7, 8, 1, 6

// for(i = 0; i < arr_1.length; i++) {
//     if(arr_2.indexOf(arr_1[i]) === -1) {
//         arr_3.push(arr_1[i]);
//     }
// }

// for(i = 0; i < arr_2.length; i++) {
//     if(arr_1.indexOf(arr_2[i]) === -1 && arr_3.indexOf(arr_2[i]) === -1) {
//         arr_3.push(arr_2[i]);
//     }
// }
// console.log(arr_3);




// вложенные массивы
// Array.isArray

// users = [
//     ["Vanya", "Petya", "Dima", "Zhenia"],
//     ["Anna", "Elza", "Arielle", "Belle"],
//     ["Eva", "Jhon", "Nellia", "Javellina"],
//     10,
//     20,
// ];

// // newUsers = users.slice();
// newUsers = [];
// for(i = 0; i < users.length; i++) {
//     if(Array.isArray(users[i])) {
//         newUsers.push(users[i].slice());
//     } else {
//         newUsers.push(users[i]);
//     }
// }

// console.log(newUsers);




// Example (only number)

// arr_1 = [10,20,30,'hello',false, 0, -10, true, '10'];
// numberArr = [];

// for(i = 0; i < arr_1.length; i++) {
//     if(typeof arr_1[i] === "number") numberArr.push(arr_1[i]);
// }

// console.log(numberArr);




// concat
// join
// split

// arr_1 = ["Pasah", "Liza"];
// arr_2 = ["Sasha", "Illia"];

// arr_3 = arr_1.concat(arr_2);
// arr_3 = [];

// for(i = 0; i < arr_1.length; i++) {
//     arr_3.push(arr_1[i])
// }

// for(i = 0; i < arr_2.length; i++) {
//     arr_3.push(arr_2[i])
// }
// console.log(arr_3);

// animalsTypes = ['dog', 'cat', 'mouse', 'fox', 'bear','tiger', 'dolphin', 'whale'];

// strAnimal = animalsTypes.join("💋");
// console.log(strAnimal);
// document.write(animalsTypes);

// string = "Anna!Simonova!26!green";

// arr = string.split("!");
// console.log(arr);


colors = ['red','yellow','green', 'blue', 'pink'];

circleArr = [];

for(i = 0; i < colors.length; i++) {
    circleArr.push(`<div class="circle" style="background-color: ${colors[i]}"></div>`);
};

document.write(`
    <div class="wrapp">
        ${circleArr.join("")}
    </div>
`);