/* JavaScript */
function maxNumber() {
    max_val = - Infinity;
    for (el of arguments) {
        if (typeof el == 'number')
            max_val = Math.max(max_val, el);
        else
            console.log("Given argument" + " " + el.toString() + " is not a number");

    }
    return max_val
}

/**
 * Test functions
 */
console.log(maxNumber("a", 12, 15, 17));

console.log(maxNumber(
    "Ala ma kota",
    ["a", "b", "c"],
    15,
    12,
    {
        name: "Olga",
        surname: "Belaya"
    },
    5
));
