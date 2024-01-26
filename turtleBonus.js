//****************************************************************************************
//
//
//    Filename:    turtleBonus.js
//    Date:        25 January 2024
//    Author:      Kyle McColgan
//    Description: This program provides a turtle moving around a two dimensional array.
//
//
//****************************************************************************************

//turtleBonus.js

/*
let map = [];
let turtle = `
   _____     ____
 /      \  |  o |
|        |/ ___\|
|_________/
|_|_| |_|_|`;

map[0].push(turtle);

console.log(map);
*/

//****************************************************************************************

const input = require('readline-sync');

turtleX = 1;
turtleY = 1;
let map = [
          [0,0,0],
          [0,0,0],
          [0,0,0],
                  ];

//****************************************************************************************

function displayMenu()
{
    console.log("-----MEMU------");
    console.log("A-----Move up");
    console.log("B-----Move down");
    console.log("C-----Move left");
    console.log("D-----Move right");
}

//****************************************************************************************

function getUserChoice()
{
    choice = input.question("Please enter your choice (A-D): ");

    return choice;
}

//****************************************************************************************

function processUserChoice(choice, map, turtleX, turtleY)
{
    switch(choice)
    {
        case 'A':
            moveUp(map, turtleX, turtleY);
            break;
        case 'B':
            moveDown(map, turtleX, turtleY);
            break;
        case 'C':
            moveLeft(map, turtleX, turtleY);
            break;
        case 'D':
            moveRight(map, turtleX, turtleY);
            break;
        case 'Q':
            break;
        case 'q':
            break;
        default:
            break;
    }
}

//****************************************************************************************

function printMap(map, turtleX, turtleY)
{
    console.log(map);
}

//****************************************************************************************

function moveUp(map, turtleX, turtleY)
{
    map[turtleX][turtleY] = 0;
    turtleY += 1;
    map[turtleX][turtleY] = "T";
}

//****************************************************************************************

function moveDown(map, turtleX, turtleY)
{
    map[turtleX][turtleY] = 0;
    turtleY -= 1;
    map[turtleX][turtleY] = "T";
}

//****************************************************************************************

function moveLeft(map, turtleX, turtleY)
{
    map[turtleX][turtleY] = 0;
    turtleX -= 1;
    map[turtleX][turtleY] = "T";
}

//****************************************************************************************

function moveRight(map, turtleX, turtleY)
{
    map[turtleX][turtleY] = 0;
    turtleX += 1;
    map[turtleX][turtleY] = "T";
}

//****************************************************************************************

function startGame(map, turtleX, turtleY)
{
    map[1][1] = "T";
}
//****************************************************************************************


function runProgram()
{

    let selection;

    selection = getUserChoice();

    startGame(map, turtleX, turtleY);

    printMap(map, turtleX, turtleY);

    while (selection != 'Q' && selection != 'q')
    {
        processUserChoice(selection, map, turtleX, turtleY);

        selection = getUserChoice();

        printMap(map, turtleX, turtleY);
    }

    console.log("Goodbye!");
}

//****************************************************************************************
/*
if(require.main === module)
{
  runProgram();
}
*/
//****************************************************************************************

let firstInitial = function(arr)
{
    return arr[0];
}

let names = ["Chris", "Jim", "Sally", "Blake", "Paul"];

// TODO: Write a mapping function
// and pass it to .map()
let firstInitials = names.map(firstInitial);

console.log(firstInitials);












