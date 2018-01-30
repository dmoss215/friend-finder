var friendsArray = [{
    "name": "Ahmed",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]
},
{
    "name": "Ahmed2",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [
        2,
        2,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]
}];
// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;

// function arrayLoop() {
//     for (let i = 0; i < friendsArray.length; i++) {
//         let scoreArray = friendsArray[i].scores;
//         console.log(scoreArray);
//         for (let j = 0; j < scoreArray.length; j++) {

//         }
//     }
// }

// arrayLoop();
// console.log(friendsArray[0].scores);

