/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

function sum(x, y) {
    if (x == y) {
        return 3 * (x + y);
    } else {
        return (x + y);
    }
}
console.log(sum(10, 20));


/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

function checknum(a, b) {
    if (a || b == 50) {
        return true;
    }
    if (a + b == 50) {
        return true;

    } else {
        return false;
    }

}
console.log(checknum(40, 20));
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

/*

4)
 Create a function to find the largest of three given integers.
*/
function max_num(a, b, c) {
    if (a > b && a > b) {
        return "a is the largest"
    }
    if (b > a && b > c) {
        return "b is the largest"
    }
    if (c > a && c > b) {
        return "c is the largest"
    }

}

console.log(max_num(40, 20, 6));
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
function check_range(a, b, ) {
    if ((a >= 40 && a <= 60 && b >= 40 && b <= 60) || (a >= 70 && a <= 100 && b >= 70 && b <= 100)) {
        return true;
    } else {
        return false;
    }
}
console.log(check_range(40, 20));
/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/
function copies(str, x) {
    if (x < 0)
        return false;
    else
        return str.repeat(x);
}
console.log(copies("mery", 8));
/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
function city_name(str) {
    if (str.length >= 3 && ((str.substring(0, 3) == 'Los') ||
            (str.substring(0, 3) == 'New'))) {
        return str;


    } else {

        return '';
    }
}
console.log(city_name("los angeles"));
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
function sum(x) {
    return x[0] + x[1] + x[2];
}

console.log(sum([11, 32, 20]));
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
function contains(nums) {

    if (nums.indexOf(1) != -1 || nums.indexOf(3) != -1) {
        return true
    } else {
        return false
    }
}
console.log(contains([7, 5]));
/*

10)Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
function test(x)

*/

function test(x) {

    if (x.indexOf(1) < 0 || x.indexOf(3) < 0) {
        return true
    } else {
        return false
    }
}

console.log(test([1, 3]));
/*
11)

Create a function to find the longest string from a given array of strings.*/


function longestString(str) {
    var longer = str[0];
    for (i = 0; i < str.length; i++) {
        if (str[i].length > longer.length) {
            longer = str[i];
        }
    }
    return longer;
}


console.log(longestString(["man", "home", "car", "length"]));
/*
12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.*/
function find_angle_type(angle) {
    if (angle < 90) {
        return "Acute angle.";
    }
    if (angle === 90) {
        return "Right angle.";
    }
    if (angle < 180) {
        return "Obtuse angle.";
    }
    return "Straight angle.";
}

console.log(find_angle_Type(90))
    /*
    13)

    Create a function to find the index of the greatest element of a given array of integers
    */


/*
14)

Create a function to get the largest even number from an array of integers.*/


/*
16)

Create a function to check from two given integers, whether one is positive and another one is negative.*/
function check(a, b) {
    if (a >= 0) {
        return "a is postive";
    }
    if (a < 0) {
        return "a is negative";
    }
    if (b >= 0) {
        return "b is postive";
    }

    if (b < 0) {
        return "b is negative";
    }
}
console.log(check(3, -4));
/*
    17)

Create a

function to create new string with first 3 characters are in lower
case and the others in upper
case .If the string length is less than 3 convert all the characters in upper
case .*/
function creat_string(str) {
    if (str.length < 3) {
        return str.toUpperCase();
    }
    if (str.length > 3) {
        return str(0, 1, 2).tolowerCase() &&

    }
    for (str(0, 1, 2)) {
        return str.tolowerCase();
    }
}

console.log(creat_string([1, 3, 4, 5, 6]);
        /*
        18)

        Create a

        function to calculate the sum of the two given integers, If the sum is in the range 50. .80
        return 65 other wise
        return 80.
        */


        function sum_num(a, b) {
            const sum = a + b;
            if ((sum >= 50 && sum <= 80)) {
                return 65;
            } else {
                return 80;
            }
        }
        console.log(sum_num(40, 20));
        /*
        19)

        Create a

        function to convert a number to a string, the contents of which depend on the number 's factors. Follow next example:

        If the number has 3 as a factor, output 'Diego'.
        If the number has 5 as a factor, output 'Riccardo'.
        If the number has 7 as a factor, output 'Stefano'.
        If the number does not have 3, 5, or 7 as a factor, just pass the number 's digits straight through.
        Examples
        28 's factors are 1, 2, 4, 7, 14, 28.
        this would be a simple "Stefano".
        30 's factors are 1, 2, 3, 5, 6, 10, 15, 30.
        this would be a "DiegoRiccardo".
        34 has four factors:
            1, 2, 17, and 34.
            this would be "34".*/
        function factors(num) {

            if (num % 3 == 0) {
                console.log(Diego);
            }
            if (num % 5 == 0) {
                console.log(RICCARDO);
            }
            if (num % 7 == 0) {
                console.log(Stefano);
            } else {
                console.log(num)
            }
        }
        factors(20)
        /*
Create a

function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

    *
    /