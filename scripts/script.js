//Declerations ////////////////////////////////////
let Messages =
{
    enterNumber: 'Please enter a number',
    enterText: 'Please enter text',
    enterMoney: 'How much money did you spend at ',
    shape: "Square or Circle?",

    ok: 'OK',
    notOk: 'NOT OK',
    numNotPositive: 'NUMBER IS NOT POSITIVE',
    notNumber: 'NOT A NUMBER',
    false: 'FALSE',

    days: ['Sunday?', 'Monday?', 'Tuesday?', 'Wednesday?', 'Thursday?', 'Friday?', 'saturday?'],
    spent: "You've spent at the last days: ",

    five: 'NUMBER IS PRODUCT OF FIVE',
    even: 'NUMBER IS EVEN',
    btwn1_1000: 'NUMBER IS BETEWEEN 1 & 1000',
    btwn1001_10000: 'NUMBER IS BETWEEN 1001 & 10000',
    greater: 'NUMBER IS GREATER THEN 10000, NOT A PRODUCT OF FIVE & NOT EVEN...',

}

const Btn_Ex1 = document.getElementById("Btn_Ex1");
const Btn_Ex2 = document.getElementById("Btn_Ex2");
const Btn_Ex3 = document.getElementById("Btn_Ex3");
const Btn_Ex4 = document.getElementById("Btn_Ex4");
const Btn_Ex5 = document.getElementById("Btn_Ex5");
const Btn_Ex6 = document.getElementById("Btn_Ex6");

const Btn_Ex1_1 = document.getElementById("Btn_Ex1_1");
const Btn_Ex2_1 = document.getElementById("Btn_Ex2_1");
const Btn_Ex3_1 = document.getElementById("Btn_Ex3_1");

const Btn_Ex1_2 = document.getElementById("Btn_Ex1_2");
const Btn_Ex2_2 = document.getElementById("Btn_Ex2_2");
const Btn_Ex3_2 = document.getElementById("Btn_Ex3_2");
const Btn_Ex4_2 = document.getElementById("Btn_Ex4_2");

// Event listener adds ////////////////////////////////////
Btn_Ex1.addEventListener("click", _ => { mainFunc('Btn_Ex1', Messages.enterNumber); });
Btn_Ex2.addEventListener("click", _ => { mainFunc('Btn_Ex2', Messages.enterNumber); });
Btn_Ex3.addEventListener("click", _ => { mainFunc('Btn_Ex3', Messages.enterText); });
Btn_Ex4.addEventListener("click", _ => { mainFunc('Btn_Ex4', null); });
Btn_Ex5.addEventListener("click", _ => { mainFunc('Btn_Ex5', Messages.enterNumber); });
Btn_Ex6.addEventListener("click", _ => { mainFunc('Btn_Ex6', null); });

Btn_Ex1_1.addEventListener("click", _ => { mainFunc('Btn_Ex1_1', Messages.enterNumber); });
Btn_Ex2_1.addEventListener("click", _ => { mainFunc('Btn_Ex2_1', Messages.enterNumber); });
Btn_Ex3_1.addEventListener("click", _ => { mainFunc('Btn_Ex3_1', Messages.enterNumber); });

Btn_Ex1_2.addEventListener("click", _ => { mainFunc('Btn_Ex1_2', Messages.enterNumber); });
Btn_Ex2_2.addEventListener("click", _ => { mainFunc('Btn_Ex2_2', Messages.enterNumber); });
Btn_Ex3_2.addEventListener("click", _ => { mainFunc('Btn_Ex3_2', Messages.enterNumber); });
Btn_Ex4_2.addEventListener("click", _ => { mainFunc('Btn_Ex4_2', null); });

// Functions ////////////////////////////////////
function mainFunc(sender, MSG) {
    var userInput;

    switch (sender) {
        case 'Btn_Ex1':
            {
                userInput = prompt(MSG);
                if (userInput < 1000 && userInput > 0) {
                    alert(Messages.ok);
                    return;
                }
                break;
            };
        case 'Btn_Ex2':
        case 'Btn_Ex3':
            {
                userInput = prompt(MSG);
                if (userInput.length > 5) {
                    alert(Messages.ok);
                    return;
                }
                break;
            };
        case 'Btn_Ex4':
            {
                var sum = 0;
                for (var i = 0; i < 7; i++) {
                    Input = prompt(Messages.enterMoney + Messages.days[i]);
                    if (Input < 0) {
                        alert(Messages.numNotPositive);
                        continue;
                    }
                    sum += Number(Input);
                };
                alert(Messages.spent + Number(sum) / 7);
                return;
            };
        case 'Btn_Ex5':
            {
                userInput = prompt(MSG);
                if (userInput % 5 == 0) {
                    alert(Messages.five);
                    return;
                }
                else if (userInput % 2 == 0) {
                    alert(Messages.even);
                    return;
                }
                else if (userInput < 0) {
                    alert(Messages.numNotPositive);
                    return;
                }
                else if (userInput >= 1 && userInput <= 1000) {
                    alert(Messages.btwn1_1000);
                    return;
                }
                else if (userInput > 1000 && userInput <= 10000) {
                    alert(Messages.btwn1001_10000);
                    return;
                }
                alert(Messages.greater);
                return;
            };
        case 'Btn_Ex6':
            {
                var a = null == true;
                var b = 0 === false;
                var c = !'cat' == true

                alert('null==true // ' + Messages.false + "\n\ncheck: " + a);
                alert('0===false // ' + Messages.false + "\n\ncheck: " + b);
                alert("!'cat'==true // " + Messages.false + "\n\ncheck: " + c);

                return;
            };
        case 'Btn_Ex1_1':
            {
                var a = prompt(MSG);
                var b = prompt(MSG);;
                alert("a = " + a + " b = " + b + "\n\noutput: " + trueFalse(a, b));
                return;
            }
        case 'Btn_Ex2_1':
            {
                var number = prompt(MSG);
                var matches = matchSticks(number);

                if (matches != null) {
                    alert(matches);
                    return;
                }
                alert(Messages.numNotPositive + "\n\nor\n\n" + Messages.notNumber);
                return;
            }
        case 'Btn_Ex3_1':
            {
                var number = prompt(MSG);
                var shape = prompt(Messages.shape);

                if (number >= 0) {
                    if (shape.startsWith('c') && calcShape(number, 'c') != null) {
                        alert("radius: " + calcShape(number, 'c'));
                        return;
                    }
                    else if (shape.startsWith('s') && calcShape(number, 's') != null) {
                        alert("sides: " + calcShape(number, 's'));
                        return;
                    }
                }
                alert(Messages.numNotPositive + "\n\nor\n\n" + Messages.notNumber);
                return;
            }
        case 'Btn_Ex1_2':
            {
                var number = prompt(MSG);
                var x, y = 0;
                var STR = '';
                for (x = 1; x <= number; x++) {
                    for (y = 1; y < x; y++) {
                        STR = STR + ("$");
                    }
                    console.log(STR);
                    STR = '';
                }
                return;
            }
        case 'Btn_Ex2_2':
            {
                var number = prompt(MSG);
                var STR = "";
                for (var i = 1; i <= number; i++) {
                    for (var s = number - 1; s >= i; s--) {
                        STR += (" ");
                    }
                    for (var j = 1; j <= i; j++) {
                        STR += ("* ")
                    }
                    STR += "\n";
                }
                if (i == number + 1) {
                    for (var i = 1; i <= number - 1; i++) {
                        for (var s = 1; s <= i; s++) {
                            STR += (" ");
                        }
                        for (j = i; j <= number - 1; j++) {
                            STR += ("* ");
                        }
                        STR += "\n";
                    }
                }
                console.log(STR);
                return;
            }
        case 'Btn_Ex3_2':
            {
                var number = prompt(MSG);
                var STR = "";

                for (let sp = number; sp--;) {
                    STR += ' '.repeat(sp) + '/'.repeat(number - sp) + '\\'.repeat(number - sp) + '\n';
                }
                for (let sp = 0; sp < number; sp++) {
                    STR += ' '.repeat(sp) + '\\'.repeat(number - sp) + '/'.repeat(number - sp) + '\n';
                }
                console.log(STR);
                return;
            }
            case 'Btn_Ex4_2':
            {
                for (var i = 1; i <= 100; i++) {
                    var STR = "";
                    if (i % 3 == 0 && i % 5 == 0)
                    {
                        STR = "FizzBuzz";
                    }
                    else if (i % 3 == 0)
                    {
                        STR = "Fizz";
                    }
                    else if (i % 5 == 0)
                    {
                        STR = "Buzz";
                    }
                    else
                    {
                        STR = i;
                    }
                    console.log(STR);
                }
                return;
            }
    }
    alert(Messages.notOk);
}

function trueFalse(a, b) {
    if (a == true && b == true) {
        return true;
    }
    return false;
}

function matchSticks(number) {
    if (number >= 0 && number != '') {
        return 1 + (number * 5);
    }
    return null;
}

function calcShape(number, shape) {
    if (shape == 's') {
        return 4 * number;
    }
    else if (shape == 'c') {
        return 6.28 * number;
    }
    return null;
}